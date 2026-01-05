"use client";
import OpeningHoursSection from './OpeningHoursSection';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';
import { useOpeningStatus } from '@/hooks/useOpeningStatus';

export default function HeroSection() {
  const { status } = useOpeningStatus();
  const isOpen = status?.status === 'OPEN';
  const glowColor = isOpen ? '#006041' : '#EF4444';
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-fore-surface to-white overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fore-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fore-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-block px-4 py-1.5 bg-fore-accent/50 text-fore-primary font-bold text-sm rounded-full mb-6 relative overflow-hidden group">
            <span className="relative z-10">Menu Spesial: Kopi ✨</span>
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-fit relative group cursor-pointer rounded-2xl overflow-hidden p-[1.5px]"
          >
            {/* Border Beam Effect: Spinning gradient with transparent tail */}
            <div
              className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
              style={{
                background: `conic-gradient(from 90deg at 50% 50%, #00000000 50%, ${glowColor} 100%)`
              }}
            />

            {/* Inner Content */}
            <div className="relative bg-white rounded-2xl h-full w-full">
              <OpeningHoursSection />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 leading-tight mb-6">
            Budayakan <span className="text-fore-primary">Malas Ngopi Di Rumah.</span> <br />
          </h1>

          <p className="text-lg text-gray-500 mb-8 max-w-md leading-relaxed font-body">
            Experience the perfect blend of technology and tradition. Freshly brewed, sustainably sourced, delivered to you.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-fore-primary text-white font-bold rounded-full shadow-xl shadow-fore-primary/30 hover:bg-fore-secondary hover:shadow-2xl hover:shadow-fore-primary/40 transition-all flex items-center gap-2 group">
              Order Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 bg-white text-fore-primary border border-fore-accent font-bold rounded-full hover:bg-fore-surface transition-colors">
              View Menu
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-gray-900">10k+ Happy Customers</p>
              <p className="text-xs text-gray-500">4.9/5 Average Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Content - Floating Cup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2237"
              alt="Fore Style Coffee"
              className="w-[400px] h-[500px] object-cover rounded-[3rem] shadow-2xl shadow-fore-primary/20 rotate-[-3deg] mx-auto hover:rotate-0 transition-transform duration-700"
            />
            {/* Floating Card Element */}
            <div className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="bg-fore-accent p-2 rounded-full text-fore-primary">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Premium Beans</p>
                  <p className="text-xs text-fore-primary font-bold">100% Arabica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-fore-primary/10 rounded-full z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-fore-primary/5 rounded-full z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
