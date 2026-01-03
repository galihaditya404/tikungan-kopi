import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';

const MOCK_MENU: MenuItem[] = [
  // Coffee Based
  {
    id: '1',
    name: 'Aren Latte',
    description: 'Signature palm sugar latte with a creamy finish.',
    price: 28000,
    category: 'coffee-based',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2237'
  },
  {
    id: '2',
    name: 'Americano',
    description: 'Double shot espresso with hot/ice water.',
    price: 22000,
    category: 'coffee-based',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071'
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam.',
    price: 28000,
    category: 'coffee-based',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2335'
  },

  // Non-Coffee Based
  {
    id: '4',
    name: 'Green Tea Latte',
    description: 'Premium matcha whisked with steamed milk.',
    price: 32000,
    category: 'non-coffee-based',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2342'
  },
  {
    id: '5',
    name: 'Red Velvet',
    description: 'Rich red velvet cake flavor in a creamy drink.',
    price: 30000,
    category: 'non-coffee-based',
    image: 'https://images.unsplash.com/photo-1616486338812-3aeee077039c?q=80&w=2340'
  },

  // Mocktail
  {
    id: '6',
    name: 'Lychee Tea',
    description: 'Refreshing black tea with sweet lychee fruit.',
    price: 25000,
    category: 'mocktail',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1964'
  },
  {
    id: '7',
    name: 'Lemon Breeze',
    description: 'Zesty lemon soda with mint and lime.',
    price: 26000,
    category: 'mocktail',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974'
  },

  // Traditional
  {
    id: '8',
    name: 'Kopi Tubruk',
    description: 'Authentic Indonesian unfiltered crushed coffee.',
    price: 18000,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1595928607842-46c6374daee0?q=80&w=2163'
  },
  {
    id: '9',
    name: 'Teh Tarik',
    description: 'Classic pulled tea with sweetened condensed milk.',
    price: 20000,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=2070'
  },

  // Milk Based
  {
    id: '10',
    name: 'Caramel Macchiato',
    description: 'Vanilla syrup, steamed milk, espresso, and caramel drizzle.',
    price: 35000,
    category: 'milk-based',
    image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c8606af?q=80&w=2147'
  },
  {
    id: '11',
    name: 'Hazelnut Latte',
    description: 'Espresso with steamed milk and roasted hazelnut syrup.',
    price: 32000,
    category: 'milk-based',
    image: 'https://images.unsplash.com/photo-1632054922119-c70e0600d8f0?q=80&w=2219'
  }
];

export function useMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const loadData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setItems(MOCK_MENU);
      setLoading(false);
    };

    loadData();
  }, []);

  return { items, loading };
}
