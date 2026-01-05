-- Create a simple Key-Value store for settings
create table public.shop_settings (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.shop_settings enable row level security;

-- Policies (Permissive for dev, as requested)
create policy "Allow public read settings"
  on public.shop_settings for select
  using (true);

create policy "Allow all operations for everyone (Dev)"
  on public.shop_settings for all
  using (true)
  with check (true);

-- Seed Default (Tuesday = 2)
insert into public.shop_settings (key, value)
values ('closed_day', '2')
on conflict (key) do nothing;
