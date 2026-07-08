"use client"; // define as client component
import { ThemeProvider as NextThemesProvider } from "next-themes"; // import next-themes
import * as React from "react"; // import react

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) { // export provider
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>; // return provider
} // end function
