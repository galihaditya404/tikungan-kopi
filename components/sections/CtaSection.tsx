import { Smartphone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 bg-fore-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Coffee at Your Fingertips
        </h2>
        <p className="text-fore-accent text-lg mb-10 max-w-2xl mx-auto">
          Skip the queue. Pre-order your favorite drinks and earn loyalty points with every purchase on the Tikungan App.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-fore-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
            <Smartphone className="w-5 h-5" /> Download on App Store
          </button>
          <button className="px-8 py-3 bg-fore-secondary text-white font-bold rounded-full shadow-lg hover:bg-[#2d6a3e] transition-all">
            Get it on Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
