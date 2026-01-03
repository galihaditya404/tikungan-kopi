import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MenuSection from '@/components/sections/MenuSection';
import LocationSection from '@/components/sections/LocationSection';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <LocationSection />
      <CtaSection />
    </div>
  );
}
