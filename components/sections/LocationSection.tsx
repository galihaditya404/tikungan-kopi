import { MapPin, ArrowUpRight } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading font-bold mb-12 text-gray-900">Temukan Kami</h2>

        <div className="bg-white p-4 rounded-[2rem] shadow-xl max-w-5xl mx-auto">
          <div className="rounded-[1.5rem] overflow-hidden h-[400px] relative">
            {/* Map Placeholder */}
            <iframe
              src="https://maps.google.com/maps?q=Jl.+Makam,+Cebolek+Kidul,+Kec.+Margoyoso,+Pati,+Jawa+Tengah,+Indonesia+59154&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>

            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white p-6 rounded-2xl shadow-lg text-left">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Tikungan Kopi</h3>
                  <p className="text-sm text-gray-500">Pati</p>
                </div>
                <div className="bg-fore-surface p-2 rounded-full text-fore-primary">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4">Jl. Makam, Cebolek Kidul, Kec. Margoyoso, Pati, Jawa Tengah, Indonesia 59154</p>
              <button className="w-full py-2.5 bg-fore-primary text-white text-sm font-bold rounded-xl hover:bg-fore-secondary transition-colors flex items-center justify-center gap-2">
                Get Directions <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
