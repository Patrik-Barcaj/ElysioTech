import type { Metadata } from "next"; // import the metadata type
import { Plus_Jakarta_Sans } from "next/font/google"; // import Plus Jakarta Sans font
import "./globals.css"; // import global css
import AnimatedBackground from '@/components/ui/AnimatedBackground'; // import animated background component
import { ThemeProvider } from "@/components/ThemeProvider"; // import theme provider
import { FEATURES } from "@/config/features";

const plusJakartaSans = Plus_Jakarta_Sans({ // start plus jakarta sans font config
  variable: "--font-sans", // set css var name
  subsets: ["latin"], // set latin subset
}); // end plus jakarta sans font config

export const metadata: Metadata = { // export metadata object
  title: FEATURES.ENABLE_DRONE_SERVICES
    ? "ELYSIO TECH | Dronové zábery pozemkov, technická grafika a softvér na mieru (Západné Slovensko)"
    : "ELYSIO TECH | Firemná automatizácia, technická grafika a webové aplikácie",
  description: FEATURES.ENABLE_DRONE_SERVICES
    ? "Prezentácia nehnuteľností, stavebných projektov a firiem. Letecké snímky dronom, vektorové zakreslenie inžinierskych sietí, technická grafika pre výrobu, bleskový webový vývoj. Bez agentúrnych prirážok."
    : "Optimalizácia procesov pre malé firmy, moderný softvér na mieru a presná vektorová príprava pre výrobu. Spolupráca priamo s technikom bez agentúrnych prirážok a s garanciou dodania do 48 hodín.",
}; // close metadata object

export default function RootLayout({ // export root layout component
  children, // destructure children prop
}: Readonly<{ // use generic readonly constraint
  children: React.ReactNode; // define typed children node
}>) { // open function body
  return ( /* start component return */
    <html lang="sk" suppressHydrationWarning className={`${plusJakartaSans.variable} dark h-full antialiased`} /* open html tag with language, styles, and font variables */ >
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
