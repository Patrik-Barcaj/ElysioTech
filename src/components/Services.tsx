import React from 'react'; // import react
import ScrollReveal from './ui/ScrollReveal'; // import ScrollReveal
import { PenTool } from 'lucide-react'; // import PenTool icon

export default function Services() { // export Services component
    return ( // start return block
        <section id="services" className="py-24 min-h-[100dvh] flex items-center relative border-t border-neutral-800 bg-[#080808]"> {/* main services section */}
            <div id="sluzby" className="absolute -top-20 pointer-events-none"></div>
            <div id="cennik" className="absolute -top-12 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* container */}
                <div className="text-center mb-16"> {/* header wrapper */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-semibold font-display tracking-widest mb-3 uppercase">
                        Technické služby
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
                        Tri hlavné smery <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFD066] to-[#00D26A]">technickej realizácie</span>
                    </h2> {/* main section title */}
                    <p className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                        Prepojenie moderného softvérového vývoja, leteckého zberu dát a priamej priemyselnej výroby.
                    </p>
                </div> {/* header end */}

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    
                    {/* Pillar 1: Vývoj webov & aplikácií */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#FFB800]/10 rounded-2xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <svg className="w-6 h-6 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                        Vývoj webov & aplikácií
                                    </h3>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                    Moderné webové aplikácie a prezentačné weby s dôrazom na rýchlosť a čistý kód.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Next.js
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Interaktívne rozhrania
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Na mieru
                                    </span>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between gap-3 mt-auto">
                                <div>
                                    <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono">Cena</span>
                                    <span className="text-xl font-display font-bold text-white">od 350 €</span>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20mam%20zaujem%20o%20vyvoj%20webu%20alebo%20aplikacie..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#FFB800]/10 hover:bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30 transition-all font-display tracking-wide flex items-center gap-1.5"
                                >
                                    <span>Rýchly dopyt</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 2: Letecký monitoring & Audity (Green Accent) */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 border-t-2 border-t-[#00D26A] rounded-3xl p-8 hover:border-[#00D26A]/50 hover:shadow-[0_0_30px_rgba(0,210,106,0.15)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D26A]/5 rounded-full blur-3xl group-hover:bg-[#00D26A]/10 transition-colors"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#00D26A]/10 rounded-2xl flex items-center justify-center border border-[#00D26A]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <svg className="w-6 h-6 text-[#00D26A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00D26A] transition-colors">
                                        Letecký monitoring & Audity
                                    </h3>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                    Rýchla vizuálna kontrola striech, stavieb a areálov bez nutnosti plošín a lezcov.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Stavby & Dozor
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Inšpekcie striech
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Dodanie do 48h
                                    </span>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between gap-3 mt-auto">
                                <div>
                                    <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono">Cena</span>
                                    <span className="text-xl font-display font-bold text-white">od 80 € / zákazka</span>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20mam%20zaujem%20o%20letecky%20monitoring%20alebo%20audit..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#00D26A] hover:bg-[#00B85C] text-black transition-all font-display tracking-wide font-extrabold flex items-center gap-1.5 shadow-md shadow-[#00D26A]/20"
                                >
                                    <span>Rýchly dopyt</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 3: Technická grafika & Vektorizácia */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#FFB800]/10 rounded-2xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <PenTool className="w-6 h-6 text-[#FFB800]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                        Technická grafika & Vektorizácia
                                    </h3>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                    Príprava a úprava presných dát pre CNC, laserové rezanie a veľkoformátovú tlač.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        DXF / DWG / SVG
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        DTP príprava
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Optimalizácia výroby
                                    </span>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between gap-3 mt-auto">
                                <div>
                                    <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono">Cena</span>
                                    <span className="text-xl font-display font-bold text-white">od 20 € / hod.</span>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20mam%20zaujem%20o%20technicku%20grafiku%20alebo%20vektorizaciu..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#FFB800]/10 hover:bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30 transition-all font-display tracking-wide flex items-center gap-1.5"
                                >
                                    <span>Rýchly dopyt</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                </div> {/* 3 pillars container end */}
            </div> {/* container end */}
        </section>
    );
}
