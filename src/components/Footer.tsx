import Link from 'next/link'; // import Link component

export default function Footer() { // export Footer component function
    return ( // render return block
        <footer className="bg-white dark:bg-[#080B11] border-t border-black/10 dark:border-white/10 pt-16 pb-12"> {/* footer element */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* wrapper container */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"> {/* layout grid */}
                    <div className="col-span-1 md:col-span-2"> {/* main details column */}
                        <Link href="/" className="inline-block group mb-4"> {/* home link */}
                            <svg className="h-8 w-auto text-gray-900 dark:text-white group-hover:scale-105 transition-transform duration-300" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10L5 30H15L25 10H15Z" fill="#F59E0B" fillOpacity="0.2" />
                                <path d="M20 10L10 30H20L30 10H20Z" fill="#F59E0B" />
                                <text x="40" y="28" fill="currentColor" className="font-display font-bold text-2xl tracking-[0.2em]">ELYSIO</text>
                            </svg>
                        </Link> {/* home link end */}
                        <p className="text-gray-600 dark:text-gray-300 max-w-md text-sm leading-relaxed mb-4">
                            Letecká fotogrametria a zábery pozemkov, vektorové zakreslenie inžinierskych sietí, priama priemyselná UV tlač bannerov a zákazkový softvérový vývoj.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            <strong>Lokalita pôsobenia:</strong> Petržalka, Bratislava & Bratislavský kraj (Senec, Pezinok, Dunajská Lužná, Malacky).
                        </p>
                    </div> {/* main details column end */}
                    
                    <div> {/* navigation list column */}
                        <h4 className="text-gray-900 dark:text-white font-bold font-display text-sm uppercase tracking-wider mb-4">Navigácia</h4> {/* header */}
                        <ul className="space-y-2 text-sm"> {/* list element */}
                            <li><Link href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Služby</Link></li>
                            <li><Link href="/#process" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Ako pracujeme</Link></li>
                            <li><Link href="/#why-elysio" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Prečo Elysio</Link></li>
                            <li><Link href="/cennik" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Cenník</Link></li>
                            <li><Link href="/#faq" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Kontakt</Link></li>
                        </ul> {/* list element end */}
                    </div> {/* navigation column end */}
                    
                    <div> {/* legal & trust column */}
                        <h4 className="text-gray-900 dark:text-white font-bold font-display text-sm uppercase tracking-wider mb-4">Fakturačné údaje</h4> {/* header */}
                        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1.5 leading-relaxed">
                            <p className="font-semibold text-gray-900 dark:text-white">ELYSIO TECH s. r. o.</p>
                            <p>Bratislava, Slovenská republika</p>
                            <p>IČO: 56 421 891</p>
                            <p>DIČ: 2122304918</p>
                            <p className="pt-2 text-emerald-600 dark:text-emerald-400 font-medium">
                                Certifikácia pilota EASA A1/A3
                            </p>
                        </div>
                    </div> {/* legal column end */}
                </div> {/* layout grid end */}

                {/* Trust Badges Bar */}
                <div className="py-4 px-6 rounded-2xl bg-gray-50 dark:bg-[#111827] border border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-semibold text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-500">✓</span> Pilotná certifikácia EASA A1/A3
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-500">✓</span> Vlastná priemyselná UV tlač
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-500">✓</span> Full-Stack Next.js vývoj
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-500">✓</span> Dodanie grafiky do 48h
                    </span>
                </div>

                <div className="border-t border-black/10 dark:border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400"> {/* copyright row */}
                    <p>&copy; {new Date().getFullYear()} ELYSIO TECH. Všetky práva vyhradené.</p> {/* copyright text */}
                    <p className="mt-2 sm:mt-0">Solo Operator & Production Studio • Bratislava</p> {/* credit text */}
                </div> {/* copyright row end */}
            </div> {/* wrapper container end */}
        </footer> // footer element end
    ); // render return end
} // component function end
