import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#2A1810] to-[#0F0A06] text-[#E5E5CB] pt-20 pb-10 rounded-t-[3rem] mt-auto relative z-10 shadow-2xl shadow-black/50">
      <div className="container mx-auto px-6">

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-white/10 p-3 rounded-2xl mb-6 backdrop-blur-sm">
            <Image
              src="/icon.png"
              alt="Tikungan Kopi Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#E5E5CB] mb-2 tracking-tight">
            Tikungan<span className="text-[#D4B996]">Kopi</span>
          </h2>
          <p className="text-[#D4B996]/80 text-sm tracking-widest uppercase font-medium">Brewing Moments Since 2024</p>
        </div>

        {/* Golden Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4B996]/30 to-transparent mb-16"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

          {/* Column 1: Explore */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-xl text-[#D4B996] mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Our Menu', 'About Us', 'Locations', 'Franchise'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#E5E5CB]/70 hover:text-[#D4B996] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Visit Us (Centered focus) */}
          <div className="flex flex-col items-center">
            <h3 className="font-heading font-bold text-xl text-[#D4B996] mb-6">Visit Us</h3>
            <div className="bg-[#D4B996]/10 p-6 rounded-2xl border border-[#D4B996]/20 backdrop-blur-sm w-full max-w-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4B996] flex items-center justify-center text-[#2A1810]">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-center text-sm leading-relaxed text-[#E5E5CB]/90">
                  Jl. Makam, Cebolek Kidul,<br />
                  Kec. Margoyoso, Pati,<br />
                  Jawa Tengah 59154
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Makam,+Cebolek+Kidul,+Kec.+Margoyoso,+Pati,+Jawa+Tengah,+Indonesia+59154"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#D4B996] uppercase tracking-wider hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Hours */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-heading font-bold text-xl text-[#D4B996] mb-6">Opening Hours</h3>
            <div className="flex flex-col gap-4 text-center md:text-right">
              <div>
                <p className="text-[#D4B996] font-bold mb-1">Daily</p>
                <p className="text-[#E5E5CB]/80 text-sm">17:00 - 23:00</p>
              </div>
              <div className="w-12 h-px bg-[#D4B996]/20 mx-auto md:ml-auto md:mr-0"></div>
              <div>
                <p className="text-[#D4B996] font-bold mb-1">Tuesday</p>
                <p className="text-red-300/80 text-sm">Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#D4B996]/10">
          <p className="text-xs text-[#E5E5CB]/40 font-mono">
            &copy; {currentYear} Tikungan Kopi. Made with ☕️ in Pati.
          </p>
          <div className="flex gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#D4B996]/20 flex items-center justify-center text-[#D4B996] hover:bg-[#D4B996] hover:text-[#2A1810] transition-all duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
