export type MenuCategorySlug =
  | 'coffee-based'
  | 'non-coffee-based'
  | 'mocktail'
  | 'traditional'
  | 'milk-based';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: MenuCategorySlug;

  // Admin Fields
  is_available?: boolean;
  is_promo?: boolean;
  promo_price?: number;
  promo_start?: string; // ISO Date
  promo_end?: string;   // ISO Date
  created_at?: string;
  updated_at?: string;
}

export const CATEGORIES: { slug: MenuCategorySlug; label: string }[] = [
  { slug: 'coffee-based', label: 'Coffee Based' },
  { slug: 'non-coffee-based', label: 'Non-Coffee' },
  { slug: 'mocktail', label: 'Mocktail' },
  { slug: 'traditional', label: 'Traditional' },
  { slug: 'milk-based', label: 'Milk Based' },
];
