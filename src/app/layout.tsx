import type { Metadata } from "next"; // import the metadata type
import { Orbitron, Inter } from "next/font/google"; // import google fonts
import "./globals.css"; // import global css
import AnimatedBackground from '@/components/ui/AnimatedBackground'; // import animated background component
import { ThemeProvider } from "@/components/ThemeProvider"; // import theme provider

const orbitron = Orbitron({ // start orbitron font config
  variable: "--font-orbitron", // set css var name
  subsets: ["latin"], // set latin subset
}); // end orbitron font config

const inter = Inter({ // start inter font config
  variable: "--font-inter", // set css var name
  subsets: ["latin"], // set latin subset
}); // end inter font config

export const metadata: Metadata = { // export metadata object
  title: "ELYSIO TECH | Dronové zábery pozemkov, veľkoformátová tlač a softvér na mieru (Západné Slovensko)", // set page title
  description: "Prezentácia nehnuteľností, stavebných projektov a firiem. Letecké snímky dronom, vektorové zakreslenie inžinierskych sietí, výroba reklamných bannerov a tabúľ, bleskový webový vývoj. Bez agentúrnych prirážok.", // set description
}; // close metadata object

export default function RootLayout({ // export root layout component
  children, // destructure children prop
}: Readonly<{ // use generic readonly constraint
  children: React.ReactNode; // define typed children node
}>) { // open function body
  return ( /* start component return */
    <html lang="sk" suppressHydrationWarning className={`${orbitron.variable} ${inter.variable} dark h-full antialiased`} /* open html tag with language, styles, and font variables */ >
      <body className="min-h-full flex flex-col font-sans selection:bg-amber-500 selection:text-black bg-[#0B0F17] text-[#f8fafc] relative transition-colors duration-300" /* open body tag with styling */ >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}> {/* wrap in theme provider locked to dark */}
        <AnimatedBackground /> {/* render animated background globally */}
        <div className="relative z-10 flex-grow flex flex-col"> {/* layout wrapper to keep content above background */}
          {children} {/* render layout children */}
        </div> {/* end layout wrapper */}
        </ThemeProvider> {/* close theme provider */}
      </body>
    </html /* close html tag */>
  ); /* close return statement */
} // close roots layout component
