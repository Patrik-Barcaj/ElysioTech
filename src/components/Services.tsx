import React from 'react'; // import react
import ScrollReveal from './ui/ScrollReveal'; // import ScrollReveal

export default function Services() { // export Services component
    return ( // start return block
        <section id="services" className="py-20 min-h-screen flex items-center relative"> {/* main services section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* container */}
                <div className="text-center mb-10"> {/* header wrapper */}
                    <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3 font-display">Naše Zameranie</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">Služby <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-green">ELYSIO</span></h3> {/* main section title */}
                </div> {/* header end */}

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"> {/* bento grid container */}
                    
                    {/* Big cell: Web Development */}
                    <ScrollReveal delay={0.1} className="md:col-span-2 md:row-span-1 h-full"> {/* bento item 1 wrapper */}
                        <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] hover:border-aurora-purple/40 hover:shadow-[0_0_30px_rgba(191,90,242,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col md:flex-row items-center gap-6"> {/* bento item card */}
                            <div className="flex-1 z-10"> {/* text content */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-aurora-purple/50 group-hover:bg-aurora-purple/20 transition-all duration-500 shrink-0"> {/* icon wrapper */}
                                        <svg className="w-5 h-5 text-white group-hover:text-aurora-purple transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> {/* web icon */}
                                    </div> {/* icon wrapper end */}
                                    <h4 className="text-xl font-display font-bold text-white group-hover:text-aurora-purple transition-colors duration-500">Tvorba webov & Aplikácií</h4> {/* title */}
                                </div>
                                <ul className="text-gray-400 text-base leading-relaxed space-y-2"> {/* desc list */}
                                    <li><span className="text-aurora-purple mr-2">•</span><strong>Dostupnosť:</strong> Mesačné predplatné ALEBO jednorazový projekt.</li> {/* item 1 */}
                                    <li><span className="text-aurora-purple mr-2">•</span><strong>Čistý kód:</strong> Bez pomalých pluginov a šablón.</li> {/* item 2 */}
                                    <li><span className="text-aurora-purple mr-2">•</span><strong>Rýchlosť:</strong> Extrémne rýchle načítanie.</li> {/* item 3 */}
                                    <li><span className="text-aurora-purple mr-2">•</span><strong>Rozsah:</strong> Od Landing Page až po zložité interné aplikácie.</li> {/* item 4 */}
                                </ul> {/* desc list end */}
                            </div> {/* text content end */}
                            <div className="w-full md:w-1/2 h-40 rounded-xl overflow-hidden relative border border-white/5 group-hover:border-white/10 transition-colors duration-500 shrink-0"> {/* image content */}
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" alt="Web Development" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /> {/* img */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> {/* overlay gradient */}
                            </div> {/* image content end */}
                        </div> {/* bento item card end */}
                    </ScrollReveal> {/* bento item 1 wrapper end */}

                    {/* Small cell: Air Drones */}
                    <ScrollReveal delay={0.2} className="md:col-span-1 md:row-span-1 h-full"> {/* bento item 2 wrapper */}
                        <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] hover:border-aurora-green/40 hover:shadow-[0_0_30px_rgba(161,255,206,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-center"> {/* bento item card */}
                            <div className="z-10 relative"> {/* content */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-aurora-green/50 group-hover:bg-aurora-green/20 transition-all duration-500 shrink-0"> {/* icon wrapper */}
                                        <svg className="w-5 h-5 text-white group-hover:text-aurora-green transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> {/* drone icon */}
                                    </div> {/* icon wrapper end */}
                                    <h4 className="text-lg font-display font-bold text-white group-hover:text-aurora-green transition-colors duration-500">Letecké zábery</h4> {/* title */}
                                </div>
                                <ul className="text-gray-400 text-base leading-relaxed space-y-2"> {/* desc list */}
                                    <li><span className="text-aurora-green mr-2">•</span><strong>4K kvalita:</strong> Profesionálne video a fotografie z výšky.</li> {/* item 1 */}
                                    <li><span className="text-aurora-green mr-2">•</span><strong>Individuálne:</strong> Lety možné aj doobeda po dohode.</li> {/* item 2 */}
                                    <li><span className="text-aurora-green mr-2">•</span><strong>Zameranie:</strong> Ideálne pre nehnuteľnosti a pozemky.</li> {/* item 3 */}
                                </ul> {/* desc list end */}
                            </div> {/* content end */}
                        </div> {/* bento item card end */}
                    </ScrollReveal> {/* bento item 2 wrapper end */}

                    {/* Small cell: Graphic Design */}
                    <ScrollReveal delay={0.3} className="md:col-span-1 md:row-span-1 h-full"> {/* bento item 3 wrapper */}
                        <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-center"> {/* bento item card */}
                            <div className="z-10 relative"> {/* content */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-pink-500/50 group-hover:bg-pink-500/20 transition-all duration-500 shrink-0"> {/* icon wrapper */}
                                        <svg className="w-5 h-5 text-white group-hover:text-pink-500 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> {/* pen icon */}
                                    </div> {/* icon wrapper end */}
                                    <h4 className="text-lg font-display font-bold text-white group-hover:text-pink-500 transition-colors duration-500">Grafický dizajn</h4> {/* title */}
                                </div>
                                <ul className="text-gray-400 text-base leading-relaxed space-y-2"> {/* desc list */}
                                    <li><span className="text-pink-500 mr-2">•</span><strong>Dostupnosť:</strong> Mesačné predplatné ALEBO jednorazový projekt.</li> {/* item 1 */}
                                    <li><span className="text-pink-500 mr-2">•</span><strong>Logá:</strong> Minimalistický dizajn v krivkách.</li> {/* item 2 */}
                                    <li><span className="text-pink-500 mr-2">•</span><strong>Tlačoviny:</strong> Návrhy vizitiek a letákov.</li> {/* item 3 */}
                                    <li><span className="text-pink-500 mr-2">•</span><strong>Digitál:</strong> Assety pre branding.</li> {/* item 4 */}
                                </ul> {/* desc list end */}
                            </div> {/* content end */}
                        </div> {/* bento item card end */}
                    </ScrollReveal> {/* bento item 3 wrapper end */}

                    {/* Medium cell: Print Production */}
                    <ScrollReveal delay={0.4} className="md:col-span-2 md:row-span-1 h-full"> {/* bento item 4 wrapper */}
                        <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col md:flex-row items-center gap-6"> {/* bento item card */}
                            <div className="w-full md:w-5/12 h-36 rounded-xl overflow-hidden relative border border-white/5 group-hover:border-blue-400/30 transition-colors duration-500 shrink-0 order-2 md:order-1"> {/* image content */}
                                <img src="/print-production.png" alt="Print Mediation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" /> {/* img */}
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent group-hover:from-blue-900/40 transition-colors duration-500"></div> {/* overlay gradient */}
                            </div> {/* image content end */}
                            <div className="flex-1 z-10 order-1 md:order-2"> {/* text content */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:bg-blue-400/20 transition-all duration-500 shrink-0"> {/* icon wrapper */}
                                        <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg> {/* printer icon */}
                                    </div> {/* icon wrapper end */}
                                    <h4 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors duration-500">Sprostredkovanie tlače</h4> {/* title */}
                                </div>
                                <ul className="text-gray-400 text-base leading-relaxed space-y-2"> {/* desc list */}
                                    <li><span className="text-blue-400 mr-2">•</span><strong>Dostupnosť:</strong> Mesačné predplatné ALEBO jednorazový projekt.</li> {/* item 1 */}
                                    <li><span className="text-blue-400 mr-2">•</span><strong>Bez starostí:</strong> Neriešite farby ani spadávky.</li> {/* item 2 */}
                                    <li><span className="text-blue-400 mr-2">•</span><strong>Príprava:</strong> Kompletná predtlačová kontrola.</li> {/* item 3 */}
                                    <li><span className="text-blue-400 mr-2">•</span><strong>Doručenie:</strong> Hotový produkt priamo k vám.</li> {/* item 4 */}
                                </ul> {/* desc list end */}
                            </div> {/* text content end */}
                        </div> {/* bento item card end */}
                    </ScrollReveal> {/* bento item 4 wrapper end */}

                </div> {/* bento grid container end */}
            </div> {/* container end */}
        </section> // main services section end
    ); // end return block
} // end Services component
