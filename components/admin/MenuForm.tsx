"use client";
import { useState } from 'react';
import { MenuItem, MenuCategorySlug, CATEGORIES } from '@/types/menu';
import { useRouter } from 'next/navigation';

interface MenuFormProps {
  initialData?: Partial<MenuItem>;
  onSubmit: (data: any) => void;
  title: string;
}

export default function MenuForm({ initialData, onSubmit, title }: MenuFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price || '',
    category: initialData?.category || 'coffee-based',
    image: initialData?.image || 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2237',
    is_available: initialData?.is_available ?? true,
    is_promo: initialData?.is_promo ?? false,
    promo_price: initialData?.promo_price || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),
      promo_price: formData.promo_price ? Number(formData.promo_price) : undefined
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Menu Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-fore-primary focus:border-transparent outline-none transition-all"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-fore-primary outline-none"
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value as MenuCategorySlug})}
          >
            {CATEGORIES.map(cat => (
              <option key={cat.slug} value={cat.slug}>{cat.label}</option>
            ))}
          </select>
        </div>

        {/* Price Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (IDR)</label>
            <input
              required
              type="number"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-fore-primary outline-none"
              value={formData.price}
              onChange={e => setFormData({...formData, price: e.target.value})}
            />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
             <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-fore-primary outline-none"
              value={formData.image}
              onChange={e => setFormData({...formData, image: e.target.value})}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-fore-primary outline-none"
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
          />
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-8 py-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={formData.is_available}
              onChange={e => setFormData({...formData, is_available: e.target.checked})}
              className="w-4 h-4 text-fore-primary rounded focus:ring-fore-primary" 
            />
            <span className="text-sm font-medium text-gray-700">Available</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
             <input 
              type="checkbox" 
              checked={formData.is_promo}
              onChange={e => setFormData({...formData, is_promo: e.target.checked})}
              className="w-4 h-4 text-fore-primary rounded focus:ring-fore-primary" 
            />
            <span className="text-sm font-medium text-gray-700">Is Promo?</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 rounded-xl text-gray-500 font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-fore-primary text-white font-bold hover:bg-fore-secondary shadow-lg hover:shadow-xl transition-all"
          >
            Save Menu
          </button>
        </div>
      </div>
    </form>
  );
}
