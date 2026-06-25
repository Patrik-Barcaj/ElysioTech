import Navigation from '@/components/Navigation'; // import Navigation component
import Hero from '@/components/Hero'; // import Hero component
import Services from '@/components/Services'; // import Services component
import Process from '@/components/Process'; // import Process component
import Portfolio from '@/components/Portfolio'; // import Portfolio component
import Testimonials from '@/components/Testimonials'; // import Testimonials component
import FAQ from '@/components/FAQ'; // import FAQ component
import Contact from '@/components/Contact'; // import Contact component
import Footer from '@/components/Footer'; // import Footer component
import Marquee from '@/components/ui/Marquee'; // import Marquee component

export default function Home() { // export default Home component function
  return ( // return JSX layout
    <main className="min-h-screen text-white relative"> {/* main container wrapper */}
      <Navigation /> {/* render navigation header */}
      <Hero /> {/* render asymmetric minimalist hero */}
      <Marquee items={['Next.js', 'React', 'Tailwind CSS', '4K Letecké Video', 'Branding', 'Webové Aplikácie na Mieru', 'Drony', 'SaaS Model']} /> {/* render infinite marquee */}
      <Services /> {/* render services bento grid */}
      <Process /> {/* render process section */}
      <Portfolio /> {/* render portfolio section */}
      <Testimonials /> {/* render testimonials section */}
      <FAQ /> {/* render faq section */}
      <Contact /> {/* render contact section */}
      <Footer /> {/* render footer section */}
    </main> // end main container
  ); // end return statement
} // end home component function
