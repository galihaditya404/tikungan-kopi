-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Insert the user into auth.users using WHERE NOT EXISTS
-- This avoids the "ON CONFLICT" error by manually checking if the email exists.

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'admin@tikungankopi.com') THEN
        INSERT INTO auth.users (
            instance_id,
            id,
            aud,
            role,
            email,
            encrypted_password,
            email_confirmed_at,
            recovery_sent_at,
            last_sign_in_at,
            raw_app_meta_data,
            raw_user_meta_data,
            created_at,
            updated_at,
            confirmation_token,
            email_change,
            email_change_token_new,
            recovery_token
        ) VALUES (
            '00000000-0000-0000-0000-000000000000',
            gen_random_uuid(),
            'authenticated',
            'authenticated',
            'admin@tikungankopi.com',
            crypt('tikungan123', gen_salt('bf')), -- Password: tikungan123
            now(),
            now(),
            now(),
            '{"provider":"email","providers":["email"]}',
            '{"role":"admin"}', -- CRITICAL: This grants access via middleware
            now(),
            now(),
            '',
            '',
            '',
            ''
        );
    END IF;
END $$;

-- Output success message
SELECT 'Admin user created (or already exists): admin@tikungankopi.com' as status;
