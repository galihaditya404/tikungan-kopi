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
    <article className={`group bg-white rounded-3xl shadow-sm transition-all duration-300 overflow-hidden flex flex-col h-full border border-transparent 
      ${item.is_available
        ? 'hover:shadow-xl hover:-translate-y-1 hover:border-fore-surface cursor-pointer'
        : 'opacity-75 cursor-not-allowed grayscale-[0.5]'
      }`}>
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-700 ${item.is_available ? 'group-hover:scale-110' : ''}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Out of Stock Overlay */}
        {!item.is_available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
              Habis
            </span>
          </div>
        )}
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

        <button
          disabled={!item.is_available}
          className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn
          ${item.is_available
              ? 'bg-gray-50 text-gray-900 hover:bg-fore-primary hover:text-white'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
        >
          {item.is_available ? (
            <>
              <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
              Add to Order
            </>
          ) : (
            'Habis'
          )}
        </button>
      </div>
    </article>
  );
}
