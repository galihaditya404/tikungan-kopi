import { MenuItem, MenuCategorySlug } from '@/types/menu';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  title: string;
  slug: MenuCategorySlug;
  items: MenuItem[];
}

export default function MenuSection({ title, slug, items }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <section id={slug} className="py-12 scroll-mt-28">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-sm font-medium text-gray-400">
          {items.length} Items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
