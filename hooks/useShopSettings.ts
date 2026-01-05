import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

export function useShopSettings() {
  const [closedDay, setClosedDay] = useState<string>('2'); // Default Tuesday
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('shop_settings')
      .select('value')
      .eq('key', 'closed_day')
      .single();

    if (error) {
       console.error('Error fetching settings:', error);
    } else if (data) {
       setClosedDay(data.value);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const updateClosedDay = async (dayIndex: string) => {
    const { error } = await supabase
      .from('shop_settings')
      .upsert({ key: 'closed_day', value: dayIndex });

    if (error) {
      console.error('Error updating closed day:', error);
      throw error;
    }
    
    await fetchSettings();
  };

  return {
    closedDay,
    loading,
    updateClosedDay
  };
}
