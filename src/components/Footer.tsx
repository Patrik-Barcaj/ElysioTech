import Link from 'next/link'; // import Link component

export default function Footer() { // export Footer component function
    return ( // render return block
        <footer className="bg-aurora-dark border-t border-white/10 pt-16 pb-8"> {/* footer element */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* wrapper container */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> {/* layout grid */}
                    <div className="col-span-1 md:col-span-2"> {/* main details column */}
                        <Link href="/" className="inline-block group mb-4"> {/* home link */}
                            <svg className="h-8 w-auto text-white group-hover:scale-105 transition-transform duration-300" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10L5 30H15L25 10H15Z" fill="white" fillOpacity="0.1" />
                                <path d="M20 10L10 30H20L30 10H20Z" fill="white" />
                                <text x="40" y="28" fill="white" className="font-display font-bold text-2xl tracking-[0.2em]">ELYSIO</text>
                            </svg>
                        </Link> {/* home link end */}
                        <p className="text-gray-400 max-w-sm mt-4">Kompletné digitálne služby: weby, grafika, tlač <br></br>a letecké zábery. <br></br>Bez vstupných nákladov a viazanosti.</p> {/* description copy */}
                    </div> {/* main details column end */}
                    <div> {/* navigation list column */}
                        <h4 className="text-white font-bold font-display mb-4">Odkazy</h4> {/* header */}
                        <ul className="space-y-2"> {/* list element */}
                            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Služby</Link></li> {/* link services with home path */}
                            <li><Link href="/cennik" className="text-gray-400 hover:text-white transition-colors">Cenník</Link></li> {/* link pricing */}
                            <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</Link></li> {/* link contact with home path */}
                        </ul> {/* list element end */}
                    </div> {/* navigation column end */}
                    <div> {/* legal column */}
                        <h4 className="text-white font-bold font-display mb-4">Právne info</h4> {/* header */}
                        <ul className="space-y-2"> {/* list element */}
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Ochrana osobných údajov</Link></li> {/* privacy policy link */}
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Obchodné podmienky</Link></li> {/* terms link */}
                        </ul> {/* list element end */}
                    </div> {/* legal column end */}
                </div> {/* layout grid end */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"> {/* copyright row */}
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} ELYSIO. Všetky práva vyhradené.</p> {/* copyright text */}
                    <p className="text-gray-600 text-sm mt-4 md:mt-0">Design & Code by ELYSIO</p> {/* credit text */}
                </div> {/* copyright row end */}
            </div> {/* wrapper container end */}
        </footer> // footer element end
    ); // render return end
} // component function end
