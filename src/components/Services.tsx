import React from 'react'; // import react
import Image from 'next/image'; // import next/image
import ScrollReveal from './ui/ScrollReveal'; // import ScrollReveal

export default function Services() { // export Services component
    return ( // start return block
        <section id="services" className="py-24 min-h-[100dvh] flex items-center relative border-t border-black/5 dark:border-white/5"> {/* main services section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* container */}
                <div className="text-center mb-16"> {/* header wrapper */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Špecializované B2B Služby
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight">
                        Kompletné riešenia <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400">bez agentúrnej réžie</span>
                    </h2> {/* main section title */}
                    <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                        Priame technologické a výrobné služby dodané jedným špecialistom od zberu dát až po montáž tabule.
                    </p>
                </div> {/* header end */}

                {/* 4 Modular B2B Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch"> {/* 2x2 grid container */}
                    
                    {/* Card 1: Letecké zábery & Grafika pozemkov */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shrink-0">
                                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                                Letecké zábery & Grafika pozemkov
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 mb-5">
                                    Digitálne podklady pre realitné kancelárie, developerov a inzerciu.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Ortofotomapa kolmo dole (90°)</strong> + šikmé zábery z viacerých svetových strán.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Vektorové zakreslenie parcelných hraníc</strong>, výmer a inžinierskych sietí (voda, elektrina, plyn).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Podklady v plnom tlačovom rozlíšení</strong> + optimalizované verzie pre inzertné portály.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a termín</span>
                                    <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">od 150 €</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                    Dodanie do 48 hodín
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 2: Priama veľkoformátová tlač & Pútače */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shrink-0">
                                            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                                Priama veľkoformátová tlač & Pútače
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-5">
                                    Odolné fyzické označenie priamo na stavbu alebo parcelu.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>PVC Bannery s kovovými očkami:</strong> Pripravené na rýchlu montáž na pletivo a ploty stavieb.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Pevné tabule (Komatex / Dibond):</strong> Priama UV potlač odolná voči vode a UV žiareniu.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Kompletná predtlačová príprava:</strong> Nulové starosti so spadávkami, formátmi a profilmi.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a termín</span>
                                    <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">od 50 €</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                    Výroba do 3 prac. dní
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 3: Bleskový One-Page Web */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shrink-0">
                                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                                Bleskový One-Page Web
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 mb-5">
                                    Rýchla a vysoko reprezentatívna vizitka projektu alebo prevádzky.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Čistý kód v modernom stacku (Next.js / Tailwind):</strong> Bleskové načítanie do 0,5 sekundy.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Galéria fotografií z dronu</strong>, interaktívna mapa a priame volanie na jeden klik.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>100 % responzivita</strong> pre všetky smartfóny a mobilné zariadenia.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a termín</span>
                                    <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">od 290 €</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                    Spustenie do 3 dní
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 4: Zákazkový softvér & Interaktívne GIS mapy */}
                    <ScrollReveal delay={0.4} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shrink-0">
                                            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                                Zákazkový softvér & GIS mapy
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-5">
                                    Webové aplikácie, interné systémy a interaktívne katalógy nehnuteľností.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Interaktívne mapy zón a pozemkov</strong> s farebným rozlíšením stavu (voľný / rezervovaný / predaný).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Zákaznícke portály, cenové kalkulačky</strong> a vlastná bezpečná administrácia obsahu.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Moderná architektúra</strong>, databázové riešenia a priame API prepojenia.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a rozsah</span>
                                    <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">od 490 €</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                    Individuálny rozsah
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                </div> {/* bento grid container end */}
            </div> {/* container end */}
        </section>
    );
}
