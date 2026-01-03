"use client";
import React from 'react';
import { useMenu } from '@/hooks/useMenu';
import { CATEGORIES } from '@/types/menu';
import MenuTabs from '@/components/menu/MenuTabs';
import MenuSection from '@/components/menu/MenuSection';
import { Loader2 } from 'lucide-react';

export default function MenuPage() {
  const { items, loading } = useMenu();

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Page Header */}
      <div className="bg-fore-surface pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
          Our <span className="text-fore-primary">Menu</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
          Explore our wide range of premium coffee, refreshing mocktails, and traditional favorites. Crafted with passion, served with pride.
        </p>
      </div>

      {/* Navigation Tabs */}
      <MenuTabs />

      {/* Menu Content */}
      <div className="container mx-auto px-6 pt-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-fore-primary" />
            <p className="text-sm font-medium">Brewing the menu...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {CATEGORIES.map((cat) => {
              // Filter items for this category
              const categoryItems = items.filter(
                (item) => item.category === cat.slug
              );

              return (
                <MenuSection
                  key={cat.slug}
                  title={cat.label}
                  slug={cat.slug}
                  items={categoryItems}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
