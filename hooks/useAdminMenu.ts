import { useState, useEffect, useCallback } from 'react';
import { MenuItem } from '@/types/menu';
import { createClient } from '@/lib/supabase/client';

export function useAdminMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchMenus = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('menus')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching admin menus:', error);
    } else if (data) {
      const normalizedItems: MenuItem[] = data.map((item: any) => ({
        ...item,
        image: item.image || item.image_url,
      }));
      setItems(normalizedItems);
    }
    setLoading(false);
  }, [supabase]);

  // Initial Load
  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  const addMenu = async (data: Omit<MenuItem, 'id'>) => {
    const { data: newItem, error } = await supabase
      .from('menus')
      .insert([{
        ...data,
        image: data.image
      }])
      .select()
      .single();

    if (error) {
      console.error('Error adding menu:', error);
      throw error;
    }

    await fetchMenus(); // Refresh list
    return newItem;
  };

  const updateMenu = async (id: string, data: Partial<MenuItem>) => {
    const { error } = await supabase
      .from('menus')
      .update({
        ...data,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating menu:', error);
      throw error;
    }
    await fetchMenus();
  };

  const deleteMenu = async (id: string) => {
    const { error } = await supabase
      .from('menus')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting menu:', error);
      throw error;
    }
    await fetchMenus();
  };

  const toggleAvailability = async (id: string) => {
    const item = items.find(i => i.id === id);
    if (!item) return;

    const { error } = await supabase
      .from('menus')
      .update({ is_available: !item.is_available })
      .eq('id', id);

    if (error) {
      console.error('Error toggling status:', error);
    } else {
      await fetchMenus();
    }
  };

  return {
    items,
    loading,
    addMenu,
    updateMenu,
    deleteMenu,
    toggleAvailability
  };
}
