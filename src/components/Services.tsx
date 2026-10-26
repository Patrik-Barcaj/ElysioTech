import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Cpu, Globe, Zap } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-24 min-h-[100dvh] flex items-center relative border-t border-neutral-800 bg-[#080808]">
            <div id="sluzby" className="absolute -top-20 pointer-events-none"></div>
            <div id="cennik" className="absolute -top-12 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-3 uppercase">
                        [ 01 // SERVICES ] • TECHNICKÉ SLUŽBY NA KĽÚČ
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
                        3-úrovňový cenník <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFD066] to-[#00D26A]">realizácie na kľúč</span>
                    </h2>
                    <p className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                        Žiadne skryté poplatky ani nafúknutá agentúrna réžia. Od bleskových opráv až po automatizáciu procesov a moderné webové aplikácie.
                    </p>
                </div>

                {/* 3-Tier Pricing Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto items-stretch max-w-7xl">
                    
                    {/* Karta 1: [ 01 // QUICK_FIX ] */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Coordinate cross accents */}
                            <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                            
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono text-xs font-semibold text-[#FFB800] tracking-wider">
                                        [ 01 // QUICK_FIX ]
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] font-semibold">
                                        Vyriešené do 24 hodín
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#FFB800]/10 rounded-xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <Zap className="w-5 h-5 text-[#FFB800]" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                        Bleskový zásah &amp; DTP
                                    </h3>
                                </div>

                                {/* Prominent Price Tag */}
                                <div className="mb-4 pb-4 border-b border-neutral-800/80">
                                    <span className="text-xs text-zinc-400 block uppercase tracking-wider font-mono mb-1">Cena realizácie</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">od 25 €</span>
                                        <span className="text-xs text-zinc-500 font-mono">/ zásah (alebo 25 € / h)</span>
                                    </div>
                                </div>

                                <p className="text-zinc-300 text-sm mb-5 leading-relaxed">
                                    Pošlite rozbité logo, nefungujúci formulár alebo chybu. Sadnem k tomu a obratom vám pošlem opravené dáta.
                                </p>

                                {/* Bullets */}
                                <ul className="text-zinc-300 text-sm leading-relaxed space-y-2.5 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Vektorizácia loga do ostrých kriviek pre CNC, laser a ploter</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Rýchla oprava chýb na existujúcom webe bez migrácie hostingu</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Predtlačová DTP kontrola a vyčistenie dát pre tlačiarne</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Nastavenie domény, DNS záznamov a firemných emailov</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Bottom Data Formats Strip */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono mb-2">Výstupné dáta</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['[.SVG]', '[.DXF]', '[.PDF]', '[.PATCH]'].map((fmt) => (
                                        <span key={fmt} className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-neutral-900 border border-neutral-800 text-zinc-400 group-hover:border-neutral-700 transition-colors">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Karta 2: [ 02 // AUTO_FLOW ] (Highlighted Middle Card) */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-[#121214] border-2 border-[#00D26A]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,210,106,0.15)] hover:shadow-[0_0_40px_rgba(0,210,106,0.25)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Coordinate cross accents */}
                            <span className="absolute top-3 left-3 text-[#00D26A] font-mono text-xs select-none pointer-events-none leading-none opacity-80">+</span>
                            <span className="absolute top-3 right-3 text-[#00D26A] font-mono text-xs select-none pointer-events-none leading-none opacity-80">+</span>
                            <span className="absolute bottom-3 left-3 text-[#00D26A] font-mono text-xs select-none pointer-events-none leading-none opacity-80">+</span>
                            <span className="absolute bottom-3 right-3 text-[#00D26A] font-mono text-xs select-none pointer-events-none leading-none opacity-80">+</span>

                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D26A]/10 rounded-full blur-3xl group-hover:bg-[#00D26A]/15 transition-colors"></div>
                            
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono text-xs font-semibold text-[#00D26A] tracking-wider">
                                        [ 02 // AUTO_FLOW ]
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#00D26A]/20 border border-[#00D26A]/40 text-[#00D26A] font-extrabold uppercase tracking-wider">
                                        NAJŽIADANEJŠIE PRE FIRMY
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#00D26A]/10 rounded-xl flex items-center justify-center border border-[#00D26A]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <Cpu className="w-5 h-5 text-[#00D26A]" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00D26A] transition-colors">
                                        Automatizácia na kľúč
                                    </h3>
                                </div>

                                {/* Prominent Price Tag */}
                                <div className="mb-4 pb-4 border-b border-neutral-800/80">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-zinc-400 block uppercase tracking-wider font-mono mb-1">Cena riešenia</span>
                                        <span className="text-[10px] font-mono text-[#00D26A]">Úspora desiatok hodín mesačne</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#00D26A] tracking-tight">od 120 €</span>
                                        <span className="text-xs text-zinc-500 font-mono">/ riešenie</span>
                                    </div>
                                </div>

                                <p className="text-zinc-300 text-sm mb-5 leading-relaxed">
                                    Ukážte mi, kde manuálne prepisujete tabuľky alebo strácate čas. Postavím skript, ktorý to spraví za vás.
                                </p>

                                {/* Bullets */}
                                <ul className="text-zinc-300 text-sm leading-relaxed space-y-2.5 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Prepojenie objednávok, formulárov a tabuliek (Google Sheets / Notion)</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Skripty na generovanie PDF ponúk a párovanie faktúr</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Okamžité notifikácie bez nutnosti manuálnej kontroly dát</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Kompletné nasadenie a otestovanie z mojej strany</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Bottom Data Formats Strip */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono mb-2">Výstupné dáta</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['[.AUTOMATION]', '[.API]', '[.SHEETS]', '[.NOTION]'].map((fmt) => (
                                        <span key={fmt} className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-neutral-900 border border-[#00D26A]/30 text-[#00D26A] transition-colors">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Karta 3: [ 03 // FULL_DEV ] */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Coordinate cross accents */}
                            <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                            
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono text-xs font-semibold text-[#FFB800] tracking-wider">
                                        [ 03 // FULL_DEV ]
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-zinc-400 font-semibold">
                                        Bez agentúrnej réžie
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#FFB800]/10 rounded-xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <Globe className="w-5 h-5 text-[#FFB800]" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                        Webová aplikácia na mieru
                                    </h3>
                                </div>

                                {/* Prominent Price Tag */}
                                <div className="mb-4 pb-4 border-b border-neutral-800/80">
                                    <span className="text-xs text-zinc-400 block uppercase tracking-wider font-mono mb-1">Cena projektu</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">od 350 €</span>
                                        <span className="text-xs text-zinc-500 font-mono">/ projekt</span>
                                    </div>
                                </div>

                                <p className="text-zinc-300 text-sm mb-5 leading-relaxed">
                                    Nemusíte písať technickú špecifikáciu. Povedzte mi, čo robíte, a ja vám postavím moderný a funkčný web.
                                </p>

                                {/* Bullets */}
                                <ul className="text-zinc-300 text-sm leading-relaxed space-y-2.5 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Bleskový One-Page web alebo klientska zóna v Next.js</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Vlastný dizajn, formuláre a priame napojenie na WhatsApp / e-mail</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>Blesková rýchlosť do 0.5s a optimalizované SEO</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none mt-0.5">•</span>
                                        <span>100% vlastníctvo zdrojového kódu bez mesačných CMS poplatkov</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Bottom Data Formats Strip */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono mb-2">Výstupné dáta</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['[.TSX]', '[.NEXT]', '[.TAILWIND]', '[.GIT]'].map((fmt) => (
                                        <span key={fmt} className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-neutral-900 border border-neutral-800 text-zinc-400 group-hover:border-neutral-700 transition-colors">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}

