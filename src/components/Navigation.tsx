"use client"; // use client directive
import { useState } from "react"; // import useState hook
import Link from "next/link"; // import Link component

export default function Navigation() { // export default Navigation block
    const [isOpen, setIsOpen] = useState(false); // set state for mobile menu

    return ( // start return block
        <header className="fixed top-0 w-full z-50 bg-aurora-dark/80 backdrop-blur-md border-b border-white/10 transition-all duration-300"> {/* header element */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* container grid */}
                <div className="flex items-center justify-between h-20"> {/* flex alignment row */}
                    <div className="flex-shrink-0"> {/* logo flex item */}
                        <Link href="/" className="flex items-center gap-2 group"> {/* logo link */}
                            <svg className="h-8 w-auto text-white group-hover:scale-105 transition-transform duration-300" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10L5 30H15L25 10H15Z" fill="white" fillOpacity="0.1"/>
                                <path d="M20 10L10 30H20L30 10H20Z" fill="white"/>
                                <text x="40" y="28" fill="white" className="font-display font-bold text-2xl tracking-[0.2em]">ELYSIO</text>
                            </svg>
                        </Link> {/* end link */}
                    </div> {/* end logo */}
                    <div className="hidden md:block"> {/* desktop menu wrapping */}
                        <div className="ml-10 flex items-baseline space-x-8 font-display"> {/* nav items row */}
                            <Link href="/#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"> {/* link item service with home anchor */}
                                Služby {/* item text */}
                            </Link> {/* end link service */}
                            <Link href="/cennik" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"> {/* link item pricing page */}
                                Cenník {/* item text */}
                            </Link> {/* end link pricing page */}
                            <Link href="/#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"> {/* link item contact with home anchor */}
                                Kontakt {/* item text */}
                            </Link> {/* end link contact */}
                        </div> {/* nav row */}
                    </div> {/* desktop nav */}
                    <div className="-mr-2 flex md:hidden"> {/* mobile hamburger wrapping */}
                        <button // toggle button start
                            onClick={() => setIsOpen(!isOpen)} // toggle state click event
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none" // toggle styles
                        >
                            <span className="sr-only">Otvoriť menu</span> {/* hide span text correctly */}
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* closed svg icon */}
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> {/* closed svg path */}
                            </svg> {/* close icon */}
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* opened svg icon */}
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> {/* opened svg path */}
                            </svg> {/* open icon */}
                        </button>
                    </div> {/* mob */}
                </div> {/* flex */}
            </div> {/* container */}

            {isOpen && ( // open conditional for mobile drop
                <div className="md:hidden bg-aurora-dark/95 border-b border-white/10"> {/* wrapper for mobile panel */}
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-display text-center"> {/* inside mobile container */}
                        <Link href="/#services" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium"> {/* service mobile with absolute path */}
                            Služby {/* service title */}
                        </Link> {/* l */}
                        <Link href="/cennik" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium"> {/* pricing page mobile */}
                            Cenník {/* pricing page title */}
                        </Link> {/* l */}
                        <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium"> {/* contact mobile with absolute path */}
                            Kontakt {/* contact title */}
                        </Link> {/* l */}
                    </div> {/* in */}
                </div> // wrap
            )} {/* end conditional check */}
        </header> // end main header
    ); // end return line
} // end function block
