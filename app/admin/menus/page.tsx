"use client";
import React from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import MenuTable from '@/components/admin/MenuTable';
import { useAdminMenu } from '@/hooks/useAdminMenu';

export default function AdminMenusPage() {
  const { items, deleteMenu, toggleAvailability } = useAdminMenu();

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
           <h1 className="text-3xl font-heading font-bold text-gray-900">Menu Management</h1>
           <p className="text-gray-500 mt-1">Manage your coffee shop products and prices.</p>
        </div>
        <Link 
          href="/admin/menus/create" 
          className="bg-fore-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-fore-secondary shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add New Menu
        </Link>
      </div>

      <div className="bg-white p-1 rounded-2xl border border-gray-200">
        <MenuTable 
          items={items} 
          onDelete={deleteMenu} 
          onToggleStatus={toggleAvailability} 
        />
      </div>
    </div>
  );
}
