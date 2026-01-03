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
}

export const CATEGORIES: { slug: MenuCategorySlug; label: string }[] = [
  { slug: 'coffee-based', label: 'Coffee Based' },
  { slug: 'non-coffee-based', label: 'Non-Coffee' },
  { slug: 'mocktail', label: 'Mocktail' },
  { slug: 'traditional', label: 'Traditional' },
  { slug: 'milk-based', label: 'Milk Based' },
];
