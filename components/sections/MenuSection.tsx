"use client";
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItem } from '@/types/menu';

export default function MenuSection() {
  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Aren Latte',
      category: 'coffee-based',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2237'
    },
    {
      id: '2',
      name: 'Butterscotch Sea Salt',
      category: 'milk-based',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c8606af?q=80&w=2147'
    },
    {
      id: '3',
      name: 'Manuka Americano',
      category: 'coffee-based',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071'
    }
  ];

  const sentence = "Tikungan Kopi Favourite";
  const words = sentence.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section id="menu" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-fore-primary font-bold tracking-widest uppercase text-sm mb-3 block">Our Collection</span>

          {/* Animated Typing Header */}
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 justify-center gap-[0.2rem]"
            style={{ display: "inline-block", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3">
                {Array.from(word).map((letter, letterIndex) => (
                  <motion.span variants={child} key={letterIndex} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-[300px] overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 font-bold px-3 py-1 rounded-full text-xs shadow-sm capitalize">
                  {item.category.replace('-', ' ')}
                </div>
              </div>

              <div className="flex justify-between items-center mb-3 px-2">
                <h3 className="text-xl font-heading font-bold text-gray-900">{item.name}</h3>
                <span className="text-fore-primary font-bold bg-fore-surface px-3 py-1 rounded-full">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
                </span>
              </div>

              <button className="w-full py-3 mt-2 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-fore-primary hover:text-white transition-colors flex items-center justify-center gap-2 group/btn">
                <Plus className="w-4 h-4" /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/menu" className="px-8 py-3 border-2 border-gray-200 text-gray-500 font-bold rounded-full hover:border-fore-primary hover:text-fore-primary transition-all inline-block">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
