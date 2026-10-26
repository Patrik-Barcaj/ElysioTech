import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function Services() {
    return (
        <section id="services" className="py-24 relative border-t border-neutral-800 bg-[#080808]">
            <div id="sluzby" className="absolute -top-20 pointer-events-none"></div>
            <div id="cennik" className="absolute -top-12 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-[#121214] text-zinc-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                        <span>Služby &amp; Cenník</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Prehľadný cenník <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00D26A]">realizácie na kľúč</span>
                    </h2>
                    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Žiadne skryté poplatky ani agentúrna réžia. Od bleskových opráv až po automatizáciu procesov a moderné webové aplikácie.
                    </p>
                </div>

                {/* 3-Tier Visual Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                    
                    {/* Karta 1: Bleskový zásah & DTP */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-7 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                            <div>
                                {/* Visual 1: Blurry JPG vs Sharp Vector Comparison */}
                                <div className="w-full h-40 rounded-2xl bg-[#080808] border border-neutral-800/80 p-4 mb-6 relative overflow-hidden flex items-center justify-between">
                                    {/* Left: Pixelated raster representation */}
                                    <div className="flex-1 text-center pr-2">
                                        <div className="w-14 h-14 mx-auto mb-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                                            {/* Pixelated grid effect */}
                                            <div className="grid grid-cols-4 gap-1 p-2 opacity-50">
                                                <div className="w-2 h-2 bg-amber-500/80"></div>
                                                <div className="w-2 h-2 bg-amber-500/40"></div>
                                                <div className="w-2 h-2 bg-amber-500/60"></div>
                                                <div className="w-2 h-2 bg-amber-500/20"></div>
                                                <div className="w-2 h-2 bg-amber-500/50"></div>
                                                <div className="w-2 h-2 bg-amber-500"></div>
                                                <div className="w-2 h-2 bg-amber-500/30"></div>
                                                <div className="w-2 h-2 bg-amber-500/70"></div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-zinc-500 block">Rozmazané JPG</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="text-zinc-600 font-bold px-1 text-sm">→</div>

                                    {/* Right: Sharp Bezier Vector curves */}
                                    <div className="flex-1 text-center pl-2">
                                        <div className="w-14 h-14 mx-auto mb-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center relative">
                                            <svg className="w-8 h-8 text-[#00D26A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="12" cy="12" r="2" fill="#00D26A" />
                                            </svg>
                                        </div>
                                        <span className="text-[11px] text-[#00D26A] font-semibold block">Ostré CNC krivky</span>
                                    </div>
                                </div>

                                {/* Title & Price */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                                        Bleskový zásah &amp; DTP
                                    </h3>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Do 24h
                                    </span>
                                </div>

                                <div className="mb-4 pb-4 border-b border-neutral-800/80">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-extrabold text-white">od 25 €</span>
                                        <span className="text-xs text-zinc-500">/ zásah (alebo 25 € / h)</span>
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    Rýchla oprava chýb na webe, nastavenie domény alebo prekreslenie loga do vektorov pre tlač a laser.
                                </p>
                            </div>

                            {/* 3 Clean Pill Tags & Button */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                                        Vektorizácia
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                                        Opravy webu
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                                        Do 24 hodín
                                    </span>
                                </div>
                                <a
                                    href="#contact"
                                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs tracking-wide transition-all border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-center"
                                >
                                    Objednať bleskový zásah
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Karta 2: Firemná automatizácia (Highlighted Middle Card) */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-[#121214] border-2 border-[#00D26A]/50 rounded-3xl p-6 sm:p-7 shadow-[0_0_35px_rgba(0,210,106,0.12)] hover:shadow-[0_0_45px_rgba(0,210,106,0.2)] transition-all duration-300 flex flex-col justify-between group relative">
                            <div>
                                {/* Visual 2: Data Flow Pipeline Scheme */}
                                <div className="w-full h-40 rounded-2xl bg-[#080808] border border-[#00D26A]/20 p-3.5 mb-6 relative overflow-hidden flex flex-col justify-between">
                                    <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-neutral-800/80">
                                        <span>Schéma toku dát</span>
                                        <span className="text-[#00D26A] font-semibold">100% automatizované</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-1 my-auto">
                                        <div className="text-center p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex-1">
                                            <div className="text-base mb-1">🛒</div>
                                            <div className="text-[10px] text-white font-semibold leading-tight">Nová objednávka</div>
                                        </div>
                                        <div className="text-[#00D26A] font-bold text-xs">→</div>
                                        <div className="text-center p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex-1">
                                            <div className="text-base mb-1">📊</div>
                                            <div className="text-[10px] text-[#00D26A] font-semibold leading-tight">Sheets / Notion</div>
                                        </div>
                                        <div className="text-[#00D26A] font-bold text-xs">→</div>
                                        <div className="text-center p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex-1">
                                            <div className="text-base mb-1">📄</div>
                                            <div className="text-[10px] text-white font-semibold leading-tight">PDF doklad</div>
                                        </div>
                                    </div>
                                    <div className="text-center text-[10px] text-zinc-500 pt-1">
                                        Okamžité párovanie a nulová ručná práca
                                    </div>
                                </div>

                                {/* Title & Price */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D26A] transition-colors">
                                        Firemná automatizácia
                                    </h3>
                                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#00D26A]/20 border border-[#00D26A]/40 text-[#00D26A]">
                                        Najobľúbenejšie
                                    </span>
                                </div>

                                <div className="mb-4 pb-4 border-b border-neutral-800/80">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-extrabold text-[#00D26A]">od 120 €</span>
                                        <span className="text-xs text-zinc-400">/ riešenie</span>
                                    </div>
                                </div>

                                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                    Dátové skripty a prepojenia systémov. Ušetria vám desiatky hodín otravného manuálneho prepisovania.
                                </p>
                            </div>

                            {/* 3 Clean Pill Tags & Button */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-[#00D26A]/30 text-[#00D26A] font-medium">
                                        Prepojenie tabuliek
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-[#00D26A]/30 text-[#00D26A] font-medium">
                                        Automatické faktúry
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-[#00D26A]/30 text-[#00D26A] font-medium">
                                        Bez chýb
                                    </span>
                                </div>
                                <a
                                    href="#contact"
                                    className="w-full py-3 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#00D26A]/20 flex items-center justify-center text-center"
                                >
                                    Automatizovať procesy
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Karta 3: Webové aplikácie */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-7 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                            <div>
                                {/* Visual 3: Responsive Desktop + Mobile Mockup */}
                                <div className="w-full h-40 rounded-2xl bg-[#080808] border border-neutral-800/80 p-3 mb-6 relative overflow-hidden flex items-end justify-center gap-3">
                                    {/* Desktop Frame */}
                                    <div className="w-36 h-28 rounded-t-lg bg-neutral-900 border-t border-x border-neutral-700/80 p-2 flex flex-col shadow-md">
                                        <div className="flex items-center gap-1 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                                        </div>
                                        <div className="w-full h-3 rounded bg-zinc-800 mb-1.5"></div>
                                        <div className="w-3/4 h-2 rounded bg-zinc-800 mb-2"></div>
                                        <div className="w-12 h-3 rounded bg-[#00D26A]/80 mt-auto"></div>
                                    </div>

                                    {/* Smartphone Frame */}
                                    <div className="w-16 h-24 rounded-t-lg bg-neutral-900 border-t border-x border-neutral-700/80 p-1.5 flex flex-col shadow-md">
                                        <div className="w-6 h-1 rounded-full bg-neutral-700 mx-auto mb-1.5"></div>
                                        <div className="w-full h-2 rounded bg-zinc-800 mb-1"></div>
                                        <div className="w-full h-8 rounded bg-gradient-to-br from-emerald-500/20 to-amber-500/20 mt-auto"></div>
                                    </div>
                                </div>

                                {/* Title & Price */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                                        Webové aplikácie
                                    </h3>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-300">
                                        Next.js
                                    </span>
                                </div>

                                <div className="mb-4 pb-4 border-b border-neutral-800/80">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-extrabold text-white">od 350 €</span>
                                        <span className="text-xs text-zinc-500">/ projekt</span>
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    Rýchly a reprezentatívny web na Next.js so 100% odovzdaním kódu a bez viazanosti na CMS.
                                </p>
                            </div>

                            {/* 3 Clean Pill Tags & Button */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                                        Rýchlosť do 0.5s
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                                        Vlastný dizajn
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                                        Bez CMS poplatkov
                                    </span>
                                </div>
                                <a
                                    href="#contact"
                                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs tracking-wide transition-all border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-center"
                                >
                                    Konzultovať web na mieru
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
