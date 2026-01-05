"use client";
import React from 'react';
import MenuForm from '@/components/admin/MenuForm';
import { useAdminMenu } from '@/hooks/useAdminMenu';
import { useRouter } from 'next/navigation';

export default function CreateMenuPage() {
  const { addMenu } = useAdminMenu();
  const router = useRouter();

  const handleCreate = async (data: any) => {
    await addMenu(data);
    // In a real app we would wait for success
    router.push('/admin/menus');
  };

  return (
    <div>
       <MenuForm 
         title="Create New Menu" 
         onSubmit={handleCreate} 
       />
    </div>
  );
}
