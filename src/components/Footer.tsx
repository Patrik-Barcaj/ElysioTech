import Link from 'next/link'; // import Link component

export default function Footer() { // export Footer component function
    return ( // render return block
        <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-12"> {/* footer element */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* wrapper container */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"> {/* layout grid */}
                    <div className="col-span-1 md:col-span-2"> {/* main details column */}
                        <Link href="/" className="inline-block group mb-4"> {/* home link */}
                            <svg className="h-8 w-auto text-zinc-50 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10L5 30H15L25 10H15Z" fill="#10B981" fillOpacity="0.2" />
                                <path d="M20 10L10 30H20L30 10H20Z" fill="#10B981" />
                                <text x="40" y="28" fill="currentColor" className="font-display font-bold text-2xl tracking-[0.2em]">ELYSIO</text>
                            </svg>
                        </Link> {/* home link end */}
                        <p className="text-zinc-400 max-w-md text-sm leading-relaxed mb-4">
                            Letecká fotogrametria a zábery pozemkov, vektorové zakreslenie inžinierskych sietí, priama priemyselná UV tlač bannerov a zákazkový softvérový vývoj.
                        </p>
                        <p className="text-xs text-zinc-500">
                            <strong>Lokalita pôsobenia:</strong> Oblasť západného Slovenska.
                        </p>
                    </div> {/* main details column end */}
                    
                    <div> {/* navigation list column */}
                        <h4 className="text-zinc-200 font-bold font-display text-sm uppercase tracking-wider mb-4">Navigácia</h4> {/* header */}
                        <ul className="space-y-2 text-sm"> {/* list element */}
                            <li><Link href="/#services" className="text-zinc-400 hover:text-emerald-400 transition-colors">Služby</Link></li>
                            <li><Link href="/#why-elysio" className="text-zinc-400 hover:text-emerald-400 transition-colors">Prečo Elysio</Link></li>
                            <li><Link href="/#portfolio" className="text-zinc-400 hover:text-emerald-400 transition-colors">Naše projekty</Link></li>
                            <li><Link href="/cennik" className="text-zinc-400 hover:text-emerald-400 transition-colors">Cenník</Link></li>
                            <li><Link href="/#faq" className="text-zinc-400 hover:text-emerald-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/#contact" className="text-zinc-400 hover:text-emerald-400 transition-colors">Kontakt</Link></li>
                        </ul> {/* list element end */}
                    </div> {/* navigation column end */}
                    
                    <div> {/* legal & trust column */}
                        <h4 className="text-zinc-200 font-bold font-display text-sm uppercase tracking-wider mb-4">Fakturačné údaje</h4> {/* header */}
                        <div className="text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                            <p className="font-semibold text-zinc-200">Patrik Barcaj - Elysio</p>
                            <p>Bratislava, Slovenská republika</p>
                            <p>IČO: 56 802 544</p>
                        </div>
                    </div> {/* legal column end */}
                </div> {/* layout grid end */}

                {/* Trust Badges Bar */}
                <div className="py-4 px-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-semibold text-zinc-300">
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Certifikácia EASA A1/A3
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> In-house UV tlač
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Full-Stack Development
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Lokalita: Oblasť západného Slovenska
                    </span>
                </div>

                <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500"> {/* copyright row */}
                    <p>&copy; {new Date().getFullYear()} ELYSIO TECH. Všetky práva vyhradené.</p> {/* copyright text */}
                    <p className="mt-2 sm:mt-0">Digitálne a technické štúdio • Bratislavský kraj</p> {/* credit text */}
                </div> {/* copyright row end */}
            </div> {/* wrapper container end */}
        </footer> // footer element end
    ); // render return end
} // component function end
