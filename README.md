# Tikungan Kopi ☕️

A modern, premium coffee shop web application built with **Next.js 16**, **Supabase**, and **Tailwind CSS**. It features a beautiful public-facing landing page and a secure, comprehensive admin dashboard for managing menus and settings.

## ✨ Features

### 🌍 Public Interface
- **Premium UI Design**: "Fore Coffee" inspired aesthetic with nature/coffee warm tones.
- **Dynamic Menu**: Real-time menu fetching from Supabase.
- **Opening Status Logic**: Automatically updates based on time (17:00 - 23:00) and day (Closed Tuesdays).
- **Responsive Navigation**: Mobile-friendly with `framer-motion` animations.
- **Location & Maps**: Integrated Google Maps section.

### 🛡️ Admin Dashboard (`/admin`)
- **Secure Authentication**: Protected routes via Middleware + Supabase Auth.
- **Menu Management**: CRUD operations (Create, Read, Update, Delete) for menu items.
- **Stock Control**: Quick toggle for "Availability" (displays "Habis" badge public-side).
- **Dashboard Widgets**: Calendar and Recent Activity tracking.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Font**: Outfit & DM Sans (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A Supabase Project (Database + Auth + Storage)

### 1. Clone & Install
```bash
git clone https://github.com/galihaditya404/tikungan-kopi.git
cd tikungan-kopi
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🗄️ Database Setup

Run the SQL scripts located in `supabase/` to set up your project:
1.  **Schema**: `supabase/schema.sql` (Creates tables and policies)
2.  **Storage**: `supabase/storage_setup.sql` (Creates 'menu-images' bucket)
3.  **Admin User**: `supabase/create_admin_user.sql` (Creates admin credentials)

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add Environment Variables (`NEXT_PUBLIC_SUPABASE_URL`, etc).
4.  Deploy.

See `deployment_guide.md` (if available) for detailed steps.

---
Built with ❤️ for **Tikungan Kopi**.
