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
        { name: 'Ako pracujeme', href: '/#process', id: 'process' }, // item
        { name: 'Prečo Elysio', href: '/#why-elysio', id: 'why-elysio' }, // item
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
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0B0F17]/85 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-all duration-300"> {/* header element */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* container grid */}
                <div className="flex items-center justify-between h-20"> {/* flex alignment row */}
                    <div className="flex-shrink-0"> {/* logo flex item */}
                        <Link href="/" className="flex items-center gap-2 group"> {/* logo link */}
                            <svg className="h-8 w-auto text-gray-900 dark:text-white group-hover:scale-105 transition-transform duration-300" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10L5 30H15L25 10H15Z" fill="#F59E0B" fillOpacity="0.2"/>
                                <path d="M20 10L10 30H20L30 10H20Z" fill="#F59E0B"/>
                                <text x="40" y="28" fill="currentColor" className="font-display font-bold text-2xl tracking-[0.2em]">ELYSIO</text>
                            </svg>
                        </Link> {/* end link */}
                    </div> {/* end logo */}
                    <div className="hidden lg:flex items-center"> {/* desktop menu wrapping */}
                        <div className="ml-6 flex items-baseline space-x-5 font-display"> {/* nav items row */}
                            {navLinks.map((link) => { // map nav links
                                const isActive = checkActive(link); // check if active
                                return ( // return link
                                    <Link key={link.name} href={link.href} className={`px-2 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${isActive ? 'text-amber-500 dark:text-amber-400 font-semibold' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}> {/* link item */}
                                        {link.name} {/* item text */}
                                        {isActive && <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>} {/* active indicator */}
                                    </Link> // end link
                                ); // end return
                            })} {/* end map */}
                        </div> {/* nav row */}
                        <div className="ml-4 pl-4 border-l border-gray-200 dark:border-white/10 flex items-center gap-3"> {/* Action CTA wrapper */}
                            <a
                                href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20vizualu/tlace/webu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_0_15px_rgba(37,211,102,0.35)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all transform hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                Zavolať / WhatsApp
                            </a>
                        </div> {/* end Action CTA wrapper */}
                    </div> {/* desktop nav */}
                    <div className="-mr-2 flex items-center gap-2 lg:hidden"> {/* mobile hamburger wrapping */}
                        <a
                            href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20vizualu/tlace/webu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#25D366] text-white"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                        </a>
                        <button // toggle button start
                            onClick={() => setIsOpen(!isOpen)} // toggle state click event
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-black/10 dark:bg-white/10 focus:outline-none" // toggle styles
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
                <div className="lg:hidden bg-slate-100/95 dark:bg-[#0B0F17]/95 border-b border-gray-200 dark:border-white/10"> {/* wrapper for mobile panel */}
                    <div className="px-3 pt-2 pb-4 space-y-2 font-display text-center"> {/* inside mobile container */}
                        {navLinks.map((link) => { // map mobile links
                            const isActive = checkActive(link); // check active
                            return ( // return link
                                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block px-3 py-3 text-base font-medium rounded-xl transition-colors ${isActive ? 'text-amber-500 dark:text-amber-400 bg-amber-500/10 font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}> {/* link item */}
                                    {link.name} {/* item text */}
                                </Link> // end link
                            ); // end return
                        })} {/* end map */}
                        <div className="pt-2">
                            <a
                                href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20vizualu/tlace/webu"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold font-display uppercase tracking-wider bg-[#25D366] text-white shadow-md"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                Zavolať / WhatsApp
                            </a>
                        </div>
                    </div> {/* in */}
                </div> // wrap
            )} {/* end conditional check */}
        </header> // end main header
    ); // end return line
} // end function block
