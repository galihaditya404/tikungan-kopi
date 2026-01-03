import { Coffee, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2a1810] text-[#D7CCC8] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl uppercase text-[#FFF8E1]">
            <Coffee className="w-6 h-6" />
            <span>Tikungan Kopi</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">Come for the coffee, stay for the warmth.</p>
            <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Tikungan Kopi. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4">
             {/* Social placeholders */}
             <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
             <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
