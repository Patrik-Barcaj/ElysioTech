import Navigation from '@/components/Navigation'; // import Navigation component
import Hero from '@/components/Hero'; // import Hero component
import BeforeAfterSlider from '@/components/BeforeAfterSlider'; // import BeforeAfterSlider component
import Services from '@/components/Services'; // import Services component
import WhyElysio from '@/components/WhyElysio'; // import WhyElysio component
import Portfolio from '@/components/Portfolio'; // import Portfolio component
import Testimonials from '@/components/Testimonials'; // import Testimonials component
import FAQ from '@/components/FAQ'; // import FAQ component
import Contact from '@/components/Contact'; // import Contact component
import Footer from '@/components/Footer'; // import Footer component
import Marquee from '@/components/ui/Marquee'; // import Marquee component
import { FEATURES } from '@/config/features';

export default function Home() { // export default Home component function
  const marqueeItems = FEATURES.ENABLE_DRONE_SERVICES ? [
    'Letecké Ortofotomapy',
    'Vektorové GIS Siete',
    'Interaktívne 3D Modely (Mesh)',
    'Technická Grafika & Vektorizácia',
    'DTP & Prepress Príprava',
    'Next.js & TypeScript Vývoj',
    'MapLibre GIS Integrácia',
    'Certifikácia EASA A1/A3',
    'Expresná Realizácia'
  ] : [
    'Next.js & TypeScript',
    'Automatizácia firemných procesov',
    'DTP & Prepress',
    'Dátové skripty',
    'CAD Vektorizácia',
    'Expresná realizácia do 48h'
  ];

  return ( // return JSX layout
    <main className="min-h-[100dvh] bg-[#080808] text-zinc-300 relative"> {/* main container wrapper */}
      <Navigation /> {/* render navigation header */}
      <Hero /> {/* render asymmetric minimalist hero */}
      {FEATURES.ENABLE_DRONE_SERVICES && <BeforeAfterSlider />} {/* render interactive comparison slider conditionally */}
      <Marquee items={marqueeItems} /> {/* render infinite marquee */}
      <Services /> {/* render services bento grid */}
      <WhyElysio /> {/* render solo operator advantage section */}
      <Portfolio /> {/* render portfolio section */}
      {FEATURES.ENABLE_DRONE_SERVICES && <Testimonials />} {/* render inspection protocol conditionally */}
      <FAQ /> {/* render faq section */}
      <Contact /> {/* render contact section */}
      <Footer /> {/* render footer section */}
    </main> // end main container
  ); // end return statement
} // end home component function
