import React from 'react'; // import react
import Image from 'next/image'; // import next/image
import ScrollReveal from './ui/ScrollReveal'; // import ScrollReveal

export default function Services() { // export Services component
    return ( // start return block
        <section id="services" className="py-24 min-h-[100dvh] flex items-center relative border-t border-black/5 dark:border-white/5"> {/* main services section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* container */}
                <div className="text-center mb-16"> {/* header wrapper */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Technické služby
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight">
                        Tri hlavné smery <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400">technickej realizácie</span>
                    </h2> {/* main section title */}
                    <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                        Prepojenie moderného softvérového vývoja, leteckého zberu dát a priamej priemyselnej výroby.
                    </p>
                </div> {/* header end */}

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    
                    {/* Pillar 1: Vývoj softvéru & Webové aplikácie */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shrink-0">
                                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                        Vývoj softvéru & Webové aplikácie
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 mb-5 leading-relaxed">
                                    Zákazkový full-stack vývoj moderných systémov, interaktívnych máp a prezentačných webov.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Moderný stack:</strong> Vývoj na mieru v Next.js, React a TypeScript s dôrazom na rýchlosť a čistú architektúru.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>GIS & Mapové aplikácie:</strong> Interaktívne zobrazenia a parcelné vrstvy (MapLibre / MapTiler).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Firemné systémy:</strong> Klientske zóny, interné nástroje a prezentačné weby s načítaním do 0,5s.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a rozsah</span>
                                    <span className="text-xl font-display font-bold text-gray-900 dark:text-white">od 290 € / na mieru</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                    Next.js & React
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 2: Letecká vizualizácia & Zber dát */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shrink-0">
                                        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                        Letecká vizualizácia & Zber dát
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-5 leading-relaxed">
                                    Technické snímkovanie a grafické spracovanie dát z výšky pre stavebníctvo, reality a pozemky.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Ortofotomapy:</strong> Kolmé (90°) a šikmé zábery vo vysokom rozlíšení pre prezentáciu a plánovanie.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Vektorové zakreslenie:</strong> Presné zobrazenie parcelných hraníc, výmer a inžinierskych sietí do fotografií.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong>Legislatívny súlad:</strong> Certifikovaná prevádzka podľa predpisov EASA (kategória Open A1/A3).</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a rozsah</span>
                                    <span className="text-xl font-display font-bold text-gray-900 dark:text-white">od 150 €</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                    Licencia EASA
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 3: Priemyselná veľkoformátová tlač */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shrink-0">
                                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                        Priemyselná veľkoformátová tlač
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 mb-5 leading-relaxed">
                                    Výroba exteriérových a interiérových prezentačných médií s priamou UV technológiou.
                                </p>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Dibond panely:</strong> Kompozitné hliníkové dosky s vysokou tvarovou stálosťou a dlhodobou odolnosťou v exteriéri.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>Komatex dosky:</strong> Ľahké PVC panely s priamou UV potlačou pre pevnú montáž.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong>PVC Bannery:</strong> Spevnené bannery s kovovými očkami pre upevnenie na ploty a nosné konštrukcie.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase tracking-wider">Cena a rozsah</span>
                                    <span className="text-xl font-display font-bold text-gray-900 dark:text-white">Podľa formátu</span>
                                </div>
                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                    Priama UV tlač
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                </div> {/* 3 pillars container end */}
            </div> {/* container end */}
        </section>
    );
}
