-- Create the Menus table
create table public.menus (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  price numeric not null,
  category text not null,
  image text not null,
  is_available boolean default true,
  is_promo boolean default false,
  promo_price numeric,
  promo_start timestamptz,
  promo_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.menus enable row level security;

-- Create Policies
-- 1. Public can view available items
create policy "Public items are viewable by everyone"
  on public.menus for select
  using ( is_available = true );

-- 2. Admins can do everything (In a real app, check auth.uid() or role)
-- For now, we allowed full public access for demo continuity if auth isn't fully set,
-- BUT strictly we should limit. Assuming authenticated user:
create policy "Authenticated users can do everything"
  on public.menus for all
  using ( auth.role() = 'authenticated' );

-- Optional: Seed Data (Run this if you want to populate initial data)
insert into public.menus (name, description, price, category, image, is_available)
values
  ('Aren Latte', 'Signature palm sugar latte with a creamy finish.', 28000, 'coffee-based', 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2237', true),
  ('Americano', 'Double shot espresso with hot/ice water.', 22000, 'coffee-based', 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071', true),
  ('Cappuccino', 'Equal parts espresso, steamed milk, and milk foam.', 28000, 'coffee-based', 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2335', true),
  ('Green Tea Latte', 'Premium matcha whisked with steamed milk.', 32000, 'non-coffee-based', 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2342', true),
  ('Red Velvet', 'Rich red velvet cake flavor in a creamy drink.', 30000, 'non-coffee-based', 'https://images.unsplash.com/photo-1616486338812-3aeee077039c?q=80&w=2340', true);
