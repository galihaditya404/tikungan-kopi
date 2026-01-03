"use client";
import React, { useEffect, useState } from 'react';
import { CATEGORIES } from '@/types/menu';

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].slug);

  // Handle active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = 150; // Offset for sticky header
      
      // Find the current section
      for (const cat of CATEGORIES) {
        const element = document.getElementById(cat.slug);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveTab(cat.slug);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 100; // Adjust for fixed navbar + tabs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(slug as any);
    }
  };

  return (
    <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => scrollToCategory(cat.slug)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat.slug
                  ? "bg-fore-primary text-white shadow-lg shadow-fore-primary/25"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
