"use client"; // define as client component
import { useTheme } from "next-themes"; // import hook
import { useEffect, useState } from "react"; // import hooks
import { Sun, Moon } from "lucide-react"; // import icons

export function ThemeToggle() { // export component
  const [mounted, setMounted] = useState(false); // mount state
  const { theme, setTheme } = useTheme(); // get theme properties

  useEffect(() => { // hydration fix
    setMounted(true); // component mounted
  }, []); // deps

  if (!mounted) return null; // avoid hydration mismatch

  return ( // start return
    <button // button element
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // toggle action
      className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all text-gray-800 dark:text-gray-200" // button styles
      aria-label="Prepnúť tému" // accessibility label
    > {/* open button */}
      {theme === "dark" ? ( // check theme
        <Sun className="w-5 h-5" /> // show sun
      ) : ( // else
        <Moon className="w-5 h-5" /> // show moon
      )} {/* end check */}
    </button> // close button
  ); // end return
} // end function
