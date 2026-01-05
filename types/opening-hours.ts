export interface ShopClosure {
  id: string;
  start_date: string; // ISO Date string (YYYY-MM-DD)
  end_date?: string;  // ISO Date string
  reason?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export type OpeningStatus = 'OPEN' | 'CLOSED';

export interface OpeningStatusResult {
  status: OpeningStatus;
  message: string;
  detail?: string;
}
