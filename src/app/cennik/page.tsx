import React from 'react'; // import react
import Navigation from '@/components/Navigation'; // import navigation
import Footer from '@/components/Footer'; // import footer
import Link from 'next/link'; // import link
import ScrollReveal from '@/components/ui/ScrollReveal'; // import scroll reveal

export default function PricingPage() { // export pricing page component
    return ( // return jsx layout
        <main className="bg-gray-50 dark:bg-[#0B0F17] min-h-[100dvh] text-gray-900 dark:text-white relative"> {/* main container */}
            <Navigation /> {/* render navigation header */}

            <section className="pt-32 pb-24 relative overflow-hidden"> {/* hero section */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max width container */}
                    <div className="text-center mb-16"> {/* header block */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-4 uppercase">
                            Transparentné ceny bez agentúrnych prirážok
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display mb-4 tracking-tight">
                            Cenník a balíky <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400">služieb</span>
                        </h1> {/* main title */}
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                            Jasné jednorazové ceny za reálne dodanú prácu. Žiadne skryté poplatky, viazanosti ani zbytočná agentúrna réžia.
                        </p> {/* description */}
                    </div> {/* header block end */}

                    {/* 4 Core B2B Pricing Packages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
                        
                        {/* Package 1: Letecké zábery */}
                        <ScrollReveal delay={0.1} className="h-full">
                            <div className="h-full bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-[0_10px_35px_rgba(245,158,11,0.15)] transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                            Letecké zábery & Grafika
                                        </h2>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                            Do 48 hodín
                                        </span>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-black/5 dark:border-white/10">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white">od 150 €</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">/ projekt</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Ortofotomapa kolmo dole (90°) a šikmé panorámy.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Vektorové zakreslenie parcelných hraníc, výmer a sietí.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Podklady v plnom tlačovom aj webovom rozlíšení.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Licencovaný pilot EASA (A1/A3) v cene.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20leteckych%20zaberov%20a%20grafiky"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-600 dark:text-amber-400 hover:text-black font-bold font-display text-sm transition-all"
                                >
                                    Objednať zábery cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Package 2: Veľkoformátová tlač */}
                        <ScrollReveal delay={0.2} className="h-full">
                            <div className="h-full bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 hover:shadow-[0_10px_35px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                            Priama UV tlač & Pútače
                                        </h2>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                            Do 3 dní
                                        </span>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-black/5 dark:border-white/10">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white">od 50 €</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">/ kus</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Odolné PVC bannery s kovovými očkami na ploty.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Pevné tabule Komatex a prémiový hliníkový Dibond.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Priama priemyselná UV potlač odolná voči slnku a vode.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Kompletná predtlačová grafická príprava bez starostí.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20velkoformatovej%20tlace"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white font-bold font-display text-sm transition-all"
                                >
                                    Naceniť tlač cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Package 3: One-Page Web */}
                        <ScrollReveal delay={0.3} className="h-full">
                            <div className="h-full bg-white dark:bg-[#151C2C] border-2 border-amber-500/40 rounded-3xl p-8 shadow-[0_0_35px_rgba(245,158,11,0.12)] flex flex-col justify-between group relative overflow-hidden">
                                <div className="absolute top-0 right-0 px-4 py-1 bg-amber-500 text-black text-xs font-bold font-display uppercase tracking-wider rounded-bl-2xl">
                                    Najžiadanejšie
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-4 mt-2">
                                        <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                                            Bleskový One-Page Web
                                        </h2>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-black/5 dark:border-white/10">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white">od 290 €</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">/ jednorazovo</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Čistý Next.js / Tailwind kód s načítaním pod 0,5s.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Galéria záberov z dronu, interaktívna mapa a priame volanie.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>100 % mobilná responzivita a optimalizácia pre Google.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>Spustenie do 3 pracovných dní od dodania textov.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20one-page%20webu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold font-display text-sm transition-all shadow-md"
                                >
                                    Spustiť web cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Package 4: Zákazkový softvér & GIS */}
                        <ScrollReveal delay={0.4} className="h-full">
                            <div className="h-full bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 hover:shadow-[0_10px_35px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                            Zákazkový softvér & GIS
                                        </h2>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                            Na mieru
                                        </span>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-black/5 dark:border-white/10">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white">od 490 €</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">/ projekt</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Interaktívne parcelné mapy (voľný / rezervovaný / predaný).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Zákaznícke portály, cenové kalkulačky a administrácia.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Integrácie databáz, API prepojenia a CRM systémy.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">•</span>
                                            <span>Odovzdanie kompletného zdrojového kódu bez závislostí.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20zakazkoveho%20softveru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white font-bold font-display text-sm transition-all"
                                >
                                    Konzultovať systém cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                    </div>

                    {/* Direct Contact CTA Banner */}
                    <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border border-amber-500/30 text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white mb-3">
                            Potrebujete individuálnu kombináciu služieb?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
                            Napríklad nálet dronom + grafické zakreslenie + tlač 2 tabúľ na plot + one-page web. Pripravíme vám zvýhodnený balík na mieru do 2 hodín.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20kombinovaneho%20balika"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold font-display tracking-wide shadow-md flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                Rýchly dopyt na WhatsApp
                            </a>
                            <Link
                                href="/#contact"
                                className="px-8 py-4 bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 hover:border-amber-500/50 text-gray-900 dark:text-white rounded-xl font-bold font-display transition-all flex items-center justify-center"
                            >
                                Kontaktný formulár
                            </Link>
                        </div>
                    </div>

                </div> {/* max width container end */}
            </section> {/* pricing section end */}

            <Footer /> {/* render footer */}
        </main> // end main container
    ); // end return block
} // end component function
