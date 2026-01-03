"use client";
import { motion } from 'framer-motion';
import { Leaf, Award, Zap } from 'lucide-react';

export default function AboutSection() {
  const features = [
    { icon: Leaf, title: "Sustainably Sourced", desc: "Direct trade with local farmers." },
    { icon: Award, title: "Premium Quality", desc: "Selected 100% Arabica beans." },
    { icon: Zap, title: "Tech Enabled", desc: "Order ahead via our app." }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2"
           >
             <div className="relative">
                <div className="absolute inset-0 bg-fore-primary rounded-[3rem] rotate-3 opacity-10"></div>
                <img 
                 src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974" 
                 alt="Pouring Coffee" 
                 className="w-full rounded-[3rem] shadow-2xl relative z-10" 
               />
               <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-xs hidden md:block">
                 <p className="text-fore-primary font-heading font-bold text-lg mb-1">Our Promise</p>
                 <p className="text-gray-500 text-sm">Every cup is crafted with precision to deliver joy in every sip.</p>
               </div>
             </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2"
           >
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 leading-tight">
               Refining Coffee Culture for <span className="text-fore-primary">Tomorrow</span>.
             </h2>
             
             <p className="text-lg text-gray-500 leading-relaxed mb-10 font-body">
               We believe coffee is more than a drink; it&apos;s a daily ritual of energy and inspiration. By combining modern technology with artisanal craft, we bring you a coffee experience that is consistent, convenient, and uncompromisingly delicious.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((f, i) => (
                 <div key={i} className="text-center md:text-left">
                   <div className="bg-fore-surface w-12 h-12 rounded-full flex items-center justify-center text-fore-primary mb-4 mx-auto md:mx-0">
                     <f.icon className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                   <p className="text-xs text-gray-500">{f.desc}</p>
                 </div>
               ))}
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
