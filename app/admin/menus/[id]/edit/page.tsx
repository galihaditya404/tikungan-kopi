"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import MenuForm from '@/components/admin/MenuForm';
import { useAdminMenu } from '@/hooks/useAdminMenu';
import { MenuItem } from '@/types/menu';

export default function EditMenuPage() {
  const { id } = useParams();
  const router = useRouter();
  const { items, updateMenu } = useAdminMenu();
  const [targetItem, setTargetItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    if (items.length > 0 && id) {
      const found = items.find(i => i.id === id);
      if (found) setTargetItem(found);
    }
  }, [items, id]);

  const handleUpdate = async (data: any) => {
    if (typeof id === 'string') {
      await updateMenu(id, data);
      router.push('/admin/menus');
    }
  };

  if (!targetItem) return <div>Loading...</div>;

  return (
    <div>
       <MenuForm 
         title="Edit Menu" 
         initialData={targetItem} 
         onSubmit={handleUpdate} 
       />
    </div>
  );
}
