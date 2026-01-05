import { useState, useEffect } from 'react';
import { ShopClosure, OpeningStatusResult } from '@/types/opening-hours';
import { createClient } from '@/lib/supabase/client';

// Mock Data for Closures (Keep for now or replace with DB if schema allows)
const MOCK_CLOSURES: ShopClosure[] = [
  {
    id: '1',
    start_date: '2026-02-14',
    end_date: '2026-02-14',
    reason: 'Maintenance',
    is_active: true,
  }
];

export function useOpeningStatus() {
  const [status, setStatus] = useState<OpeningStatusResult | null>(null);
  const [closures, setClosures] = useState<ShopClosure[]>(MOCK_CLOSURES);
  const supabase = createClient();

  useEffect(() => {
    const calculateStatus = async () => {
      const now = new Date();
      const todayStr = now.toISOString().split('T')[0];

      // 1. Check Temporary Closures first (Override)
      const activeClosure = closures.find(closure => {
        if (!closure.is_active) return false;
        const start = closure.start_date;
        const end = closure.end_date || closure.start_date;
        return todayStr >= start && todayStr <= end;
      });

      if (activeClosure) {
        setStatus({
          status: 'CLOSED',
          message: 'Temporarily Closed',
          detail: activeClosure.reason
        });
        return;
      }

      // 2. Fetch Weekly Rule from DB
      let closedDayIndex = 2; // Default Tuesday

      const { data } = await supabase
        .from('shop_settings')
        .select('value')
        .eq('key', 'closed_day')
        .single();

      if (data && data.value) {
        closedDayIndex = parseInt(data.value);
      }

      // 3. Check Weekly Rule
      const day = now.getDay();

      if (day === closedDayIndex) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        setStatus({
          status: 'CLOSED',
          message: 'Closed Today',
          detail: `We take a break every ${days[closedDayIndex]}.`
        });
      } else {
        setStatus({
          status: 'OPEN',
          message: 'Open Today',
          detail: 'Come visit us! We are brewing.'
        });
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);

  }, [closures, supabase]);

  return { status };
}
