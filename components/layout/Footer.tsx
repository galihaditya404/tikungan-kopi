import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#20120C] to-[#0F0A06] text-[#E5E5CB] py-8 rounded-t-2xl mt-auto relative shadow-2xl">
      <div className="container mx-auto px-6">

        {/* Main Content: Highly Compact Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">

          {/* Left: Brand Identity (Micro) */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm">
                <Image
                  src="/icon.png"
                  alt="Tikungan Kopi Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg tracking-tight text-[#E5E5CB] leading-none">
                  Tikungan<span className="text-[#D4B996]">Kopi</span>
                </h2>
                <p className="text-[9px] text-[#D4B996] tracking-widest uppercase">Budayakan Malas Ngopi di Rumah</p>
              </div>
            </div>

            <p className="text-s text-[#E5E5CB]/60 leading-tight">
              Enjoy the Coffe.
            </p>

            <div className="flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4B996] hover:bg-[#D4B996] hover:text-[#2A1810] transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Info Grid (Micro) */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-s text-[#D4B996] mb-2 uppercase tracking-wider">Explore</h3>
              <ul className="flex flex-col gap-1 text-s">
                {['Home', 'Menu', 'Location'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#E5E5CB]/70 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit */}
            <div>
              <h3 className="font-heading font-bold text-s text-[#D4B996] mb-2 uppercase tracking-wider">Visit</h3>
              <div className="flex flex-col gap-2 text-s text-[#E5E5CB]/70">
                <div className="flex gap-2 items-start">
                  <MapPin className="w-3.5 h-3.5 text-[#D4B996] shrink-0 mt-0.5" />
                  <span>Jl. Makam, Cebolek Kidul,<br />Pati 59154</span>
                </div>
                <div className="flex gap-2 items-start">
                  <Clock className="w-3.5 h-3.5 text-[#D4B996] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#E5E5CB]">17:00 - 23:00</span>
                    <span className="text-red-300/80 text-[12px]">Tue: Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Compact Footer Bottom */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-[#E5E5CB]/40 font-mono">
          <p>&copy; {currentYear} Tikungan Kopi</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#D4B996]">Privacy</Link>
            <Link href="#" className="hover:text-[#D4B996]">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
