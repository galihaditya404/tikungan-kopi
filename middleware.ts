import { type NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value);
                    });
                    response = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) => {
                        response.cookies.set(name, value, options);
                    });
                },
            },
        }
    );

    // 1. Verify User Session
    // Using getUser() instead of getSession() for security (validates with Supabase Auth Server)
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // 2. Admin Route Protection Logic
    if (request.nextUrl.pathname.startsWith('/admin')) {

        // Case A: Not Authenticated -> Redirect to Login
        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        // Case B: Authenticated but NOT Admin -> Redirect to 404 (Stealth)
        // Checking 'role' in user_metadata. You can also check app_metadata.
        const userRole = user.user_metadata?.role || user.app_metadata?.role;

        // NOTE: Ensure your users have this metadata set!
        if (userRole !== 'admin') {
            // Stealth Mode: Rewrite to 404 so they don't know the route exists
            const url = request.nextUrl.clone();
            url.pathname = '/404';
            return NextResponse.rewrite(url);
        }

        // Case C: Authenticated AND Admin -> Proceed
        return response;
    }

    // Allow all other routes (public)
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - auth/ (auth routes if any)
         * - login (public login page)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|login|auth|api/public).*)',
    ],
};
