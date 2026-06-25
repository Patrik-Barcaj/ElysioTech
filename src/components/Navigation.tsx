"use client"; // use client directive
import { useState, useEffect } from "react"; // import hooks
import Link from "next/link"; // import Link component
import { usePathname } from "next/navigation"; // import usePathname

export default function Navigation() { // export default Navigation block
    const [isOpen, setIsOpen] = useState(false); // set state for mobile menu
    const [activeSection, setActiveSection] = useState(""); // state for active section
    const pathname = usePathname(); // get current pathname

    useEffect(() => { // scrollspy effect
        if (pathname !== "/") return; // only track on homepage
        
        const sections = document.querySelectorAll("section[id]"); // get all sections
        
        const observer = new IntersectionObserver((entries) => { // create observer
            entries.forEach((entry) => { // loop entries
                if (entry.isIntersecting) { // if intersecting
                    setActiveSection(entry.target.id); // set active id
                } // end if
            }); // end loop
        }, { // options
            rootMargin: "-40% 0px -60% 0px" // trigger when element is in upper half
        }); // end observer

        sections.forEach((section) => { // loop sections
            observer.observe(section); // observe
        }); // end loop

        return () => { // cleanup
            sections.forEach((section) => observer.unobserve(section)); // unobserve
        }; // end cleanup
    }, [pathname]); // dependencies

    const navLinks = [ // array of navigation links
        { name: 'Služby', href: '/#services', id: 'services' }, // item
        { name: 'Postup', href: '/#process', id: 'process' }, // item
        { name: 'Portfólio', href: '/#portfolio', id: 'portfolio' }, // item
        { name: 'Cenník', href: '/cennik', id: '' }, // item
        { name: 'FAQ', href: '/#faq', id: 'faq' }, // item
        { name: 'Kontakt', href: '/#contact', id: 'contact' }, // item
    ]; // end array

    const checkActive = (link: { href: string, id: string }) => { // helper function to check active state
        if (link.href.startsWith('/#')) { // if hash link
            return pathname === '/' && activeSection === link.id; // true if home and section matches
        } // end if
        return pathname === link.href; // true if pathname matches exact href
    }; // end helper function

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
                            {navLinks.map((link) => { // map nav links
                                const isActive = checkActive(link); // check if active
                                return ( // return link
                                    <Link key={link.name} href={link.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}> {/* link item */}
                                        {link.name} {/* item text */}
                                        {isActive && <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-aurora-purple rounded-full shadow-[0_0_8px_rgba(191,90,242,0.6)]"></span>} {/* active indicator */}
                                    </Link> // end link
                                ); // end return
                            })} {/* end map */}
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
                        {navLinks.map((link) => { // map mobile links
                            const isActive = checkActive(link); // check active
                            return ( // return link
                                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block px-3 py-4 text-base font-medium transition-colors ${isActive ? 'text-white bg-white/5 border-l-4 border-aurora-purple' : 'text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent'}`}> {/* link item */}
                                    {link.name} {/* item text */}
                                </Link> // end link
                            ); // end return
                        })} {/* end map */}
                    </div> {/* in */}
                </div> // wrap
            )} {/* end conditional check */}
        </header> // end main header
    ); // end return line
} // end function block
