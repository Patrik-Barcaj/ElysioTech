import Navigation from '@/components/Navigation'; // import Navigation component
import Hero from '@/components/Hero'; // import Hero component
import Services from '@/components/Services'; // import Services component
import WhyElysio from '@/components/WhyElysio'; // import WhyElysio component
import Portfolio from '@/components/Portfolio'; // import Portfolio component
import Testimonials from '@/components/Testimonials'; // import Testimonials component
import FAQ from '@/components/FAQ'; // import FAQ component
import Contact from '@/components/Contact'; // import Contact component
import Footer from '@/components/Footer'; // import Footer component
import Marquee from '@/components/ui/Marquee'; // import Marquee component

export default function Home() { // export default Home component function
  return ( // return JSX layout
    <main className="min-h-[100dvh] text-gray-900 dark:text-white relative"> {/* main container wrapper */}
      <Navigation /> {/* render navigation header */}
      <Hero /> {/* render asymmetric minimalist hero */}
      <Marquee items={['Letecké Ortofotomapy', 'Vektorové GIS Siete', 'Priama UV Tlač Dibond & Komatex', 'Veľkoformátové Bannery', 'Next.js & TypeScript Vývoj', 'MapLibre GIS Integrácia', 'Certifikácia EASA A1/A3', 'Expresná Realizácia']} /> {/* render infinite marquee */}
      <Services /> {/* render services bento grid */}
      <WhyElysio /> {/* render solo operator advantage section */}
      <Portfolio /> {/* render portfolio section */}
      <Testimonials /> {/* render testimonials section */}
      <FAQ /> {/* render faq section */}
      <Contact /> {/* render contact section */}
      <Footer /> {/* render footer section */}
    </main> // end main container
  ); // end return statement
} // end home component function
