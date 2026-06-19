import Link from 'next/link'; // import Link component

export default function Footer() { // export Footer component function
    return ( // render return block
        <footer className="bg-aurora-dark border-t border-white/10 pt-16 pb-8"> {/* footer element */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* wrapper container */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> {/* layout grid */}
                    <div className="col-span-1 md:col-span-2"> {/* main details column */}
                        <Link href="/" className="text-3xl font-display font-bold text-white tracking-widest mb-4 inline-block"> {/* home link */}
                            ELYS<span className="text-aurora-green">I</span>OTECH {/* company logo name */}
                        </Link> {/* home link end */}
                        <p className="text-gray-400 max-w-sm mt-4">Tvorba webových stránok, aplikácií na mieru, grafických návrhov s možnosťou tlače a letecké zábery z výšky.</p> {/* description copy */}
                    </div> {/* main details column end */}
                    <div> {/* navigation list column */}
                        <h4 className="text-white font-bold font-display mb-4">Odkazy</h4> {/* header */}
                        <ul className="space-y-2"> {/* list element */}
                            <li><Link href="/#about" className="text-gray-400 hover:text-aurora-green transition-colors">O Nás</Link></li> {/* link about with home path */}
                            <li><Link href="/#services" className="text-gray-400 hover:text-aurora-green transition-colors">Služby</Link></li> {/* link services with home path */}
                            <li><Link href="/#portfolio" className="text-gray-400 hover:text-aurora-green transition-colors">Portfólio</Link></li> {/* link portfolio with home path */}
                            <li><Link href="/#contact" className="text-gray-400 hover:text-aurora-green transition-colors">Kontakt</Link></li> {/* link contact with home path */}
                        </ul> {/* list element end */}
                    </div> {/* navigation column end */}
                    <div> {/* legal column */}
                        <h4 className="text-white font-bold font-display mb-4">Právne info</h4> {/* header */}
                        <ul className="space-y-2"> {/* list element */}
                            <li><Link href="#" className="text-gray-400 hover:text-aurora-indigo transition-colors">Ochrana osobných údajov</Link></li> {/* privacy policy link */}
                            <li><Link href="#" className="text-gray-400 hover:text-aurora-indigo transition-colors">Obchodné podmienky</Link></li> {/* terms link */}
                        </ul> {/* list element end */}
                    </div> {/* legal column end */}
                </div> {/* layout grid end */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"> {/* copyright row */}
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} ElysioTech. Všetky práva vyhradené.</p> {/* copyright text */}
                    <p className="text-gray-600 text-sm mt-4 md:mt-0">Website made by ElysioTech</p> {/* credit text */}
                </div> {/* copyright row end */}
            </div> {/* wrapper container end */}
        </footer> // footer element end
    ); // render return end
} // component function end
