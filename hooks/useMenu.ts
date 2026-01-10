import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';
import { createClient } from '@/lib/supabase/client';

export function useMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('menus')
        .select('*')
        .order('category', { ascending: true }) // Optional: Better sorting? Or keep created_at
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching menu:', error);
      } else if (data) {
        // Normalize DB fields to application type
        const normalizedItems: MenuItem[] = data.map((item: any) => ({
          ...item,
          image: item.image || item.image_url, // Handle potential naming diffs
        }));
        setItems(normalizedItems);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  return { items, loading };
}
