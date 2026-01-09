import { MenuItem } from '@/types/menu';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PromoBadge from './PromoBadge';

interface MenuTableProps {
  items: MenuItem[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export default function MenuTable({ items, onDelete, onToggleStatus }: MenuTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0 relative rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:scale-105 transition-transform">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-gray-900 font-heading">{item.name}</div>
                      <PromoBadge isPromo={item.is_promo} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="capitalize px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                    {item.category.replace('-', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => onToggleStatus(item.id)}
                    className={`pl-2 pr-3 py-1 inline-flex items-center gap-1.5 text-xs leading-5 font-bold rounded-full cursor-pointer transition-all ${item.is_available
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                      }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.is_available ? 'bg-green-500' : 'bg-red-500'}`} />
                    {item.is_available ? 'Tersedia' : 'Habis'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/admin/menus/${item.id}/edit`}
                      className="text-gray-400 hover:text-fore-primary p-2 hover:bg-fore-50 rounded-lg transition-colors"
                      title="Edit Item"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="text-gray-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
