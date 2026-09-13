import type { Metadata } from "next"; // import the metadata type
import { Geist, Geist_Mono } from "next/font/google"; // import google fonts
import "./globals.css"; // import global css
import AnimatedBackground from '@/components/ui/AnimatedBackground'; // import animated background component
import { ThemeProvider } from "@/components/ThemeProvider"; // import theme provider

const geistSans = Geist({ // start geist sans font config
  variable: "--font-geist-sans", // set css var name
  subsets: ["latin"], // set latin subset
}); // end geist sans font config

const geistMono = Geist_Mono({ // start geist mono font config
  variable: "--font-geist-mono", // set css var name
  subsets: ["latin"], // set latin subset
}); // end geist mono font config

export const metadata: Metadata = { // export metadata object
  title: "ELYSIO TECH | Dronové zábery pozemkov, technická grafika a softvér na mieru (Západné Slovensko)", // set page title
  description: "Prezentácia nehnuteľností, stavebných projektov a firiem. Letecké snímky dronom, vektorové zakreslenie inžinierskych sietí, technická grafika pre výrobu, bleskový webový vývoj. Bez agentúrnych prirážok.", // set description
}; // close metadata object

export default function RootLayout({ // export root layout component
  children, // destructure children prop
}: Readonly<{ // use generic readonly constraint
  children: React.ReactNode; // define typed children node
}>) { // open function body
  return ( /* start component return */
    <html lang="sk" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`} /* open html tag with language, styles, and font variables */ >
      <body className="min-h-full flex flex-col font-sans selection:bg-[#00D26A] selection:text-black bg-[#080808] text-[#f4f4f5] relative transition-colors duration-300" /* open body tag with styling */ >
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
