import Image from 'next/image';
import { Plus } from 'lucide-react';
import { MenuItem } from '@/types/menu';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  // Format price to IDR
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <article className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer border border-transparent hover:border-fore-surface">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay for better text visibility if needed, or simple clean look */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-fore-primary transition-colors line-clamp-2">
            {item.name}
          </h3>
          <span className="shrink-0 text-sm font-bold text-fore-primary bg-fore-surface px-2.5 py-1 rounded-full">
            {formattedPrice}
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed flex-grow">
          {item.description}
        </p>

        <button className="w-full py-2.5 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-fore-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
          <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
          Add to Order
        </button>
      </div>
    </article>
  );
}
