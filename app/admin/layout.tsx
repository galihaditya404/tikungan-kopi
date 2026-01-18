"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Coffee, LogOut, Settings, Menu, X } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace('/'); // Using replace to prevent back-button access
    router.refresh(); // Ensure server state (middleware) is re-evaluated
  };

  const menu = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Menu Management', icon: Coffee, href: '/admin/menus' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">

      {/* Mobile Header */}
      <div className="md:hidden bg-fore-primary text-white p-4 flex items-center justify-between sticky top-0 z-20 shadow-md">
        <h1 className="font-heading font-bold text-xl tracking-tight flex items-center gap-2">
          <Coffee className="w-6 h-6 text-fore-accent" />
          Tikungan<span className="text-fore-accent">Admin</span>
        </h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-fore-primary text-white flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:flex shadow-2xl md:shadow-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-6 border-b border-white/10 hidden md:block">
          <h1 className="font-heading font-bold text-2xl tracking-tight text-white flex items-center gap-2">
            <Coffee className="w-8 h-8 text-fore-accent" />
            Tikungan<span className="text-fore-accent">Admin</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {menu.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)} // Close on mobile click
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${isActive
                  ? 'bg-white text-fore-primary shadow-lg translate-x-1'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white hover:translate-x-1'
                  }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-fore-primary' : 'text-gray-400 group-hover:text-white'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-10 h-10 rounded-full bg-fore-secondary flex items-center justify-center text-white font-bold">
              AD
            </div>
            <div>
              <p className="text-sm font-bold text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@tikungan.com</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-200 hover:bg-red-500/20 hover:text-red-100 rounded-xl font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
