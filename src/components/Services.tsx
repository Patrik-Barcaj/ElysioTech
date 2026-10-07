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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#FFB800]/40 bg-zinc-900/90 text-[#FFB800] text-xs font-mono tracking-widest mb-3 uppercase shadow-inner">
                        [ 01 // SERVICES ] • TECHNICKÉ SLUŽBY
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
                    
                    {/* Pillar 1: Vývoj webov & Aplikácií */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-2xl hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Winamp / Hi-Fi Rack Titlebar */}
                            <div className="h-[22px] bg-zinc-900 border-b border-zinc-800 px-3 flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none shrink-0">
                                <span>[ CORE_DEV.EXE ]</span>
                                <span className="tracking-widest opacity-60">_ □ ×</span>
                            </div>

                            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 relative">
                                {/* Coordinate cross accents */}
                                <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                                <div>
                                    <div className="font-mono text-xs font-semibold text-[#FFB800] tracking-wider mb-3">
                                        [ 01 // DEV ]
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-[#FFB800]/10 rounded-xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                            <svg className="w-6 h-6 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                            Vývoj webov & Aplikácií
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-5 leading-relaxed">
                                        Vývoj moderných webov a aplikácií v Next.js / TypeScript. Od interaktívnych rozhraní po kompletné klientske systémy bez zbytočného balastu.
                                    </p>
                                    <ul className="text-zinc-300 text-sm leading-relaxed space-y-3 mb-6">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Moderný stack:</strong> Vývoj na mieru v Next.js, React a TypeScript s dôrazom na rýchlosť a čistú architektúru.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">GIS & Mapové aplikácie:</strong> Interaktívne zobrazenia a parcelné vrstvy (MapLibre / MapTiler).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Firemné systémy:</strong> Klientske zóny, interné nástroje a prezentačné weby s načítaním do 0,5s.</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono mb-1.5">Cena a rozsah</span>
                                        <div className="inline-block bg-black/80 px-2.5 py-1 rounded-sm border border-zinc-800 shadow-inner">
                                            <span className="text-lg sm:text-xl font-mono tracking-wider font-bold text-amber-400">od 350 €</span>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-sm text-[11px] font-mono font-semibold bg-zinc-900 text-[#FFB800] border border-[#FFB800]/30 tracking-wider uppercase shadow-inner">
                                        Next.js & React
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 2: Letecký monitoring & Vizuálne audity (Green Accent) */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 border-t-2 border-t-[#00D26A] rounded-2xl hover:border-[#00D26A]/50 hover:shadow-[0_0_30px_rgba(0,210,106,0.15)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Winamp / Hi-Fi Rack Titlebar */}
                            <div className="h-[22px] bg-zinc-900 border-b border-zinc-800 px-3 flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none shrink-0">
                                <span>[ AIR_SCAN.SYS ]</span>
                                <span className="tracking-widest opacity-60">_ □ ×</span>
                            </div>

                            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 relative">
                                {/* Coordinate cross accents */}
                                <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D26A]/5 rounded-full blur-3xl group-hover:bg-[#00D26A]/10 transition-colors"></div>
                                <div>
                                    <div className="font-mono text-xs font-semibold text-[#00D26A] tracking-wider mb-3">
                                        [ 02 // AIR ]
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-[#00D26A]/10 rounded-xl flex items-center justify-center border border-[#00D26A]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                                            <svg className="w-6 h-6 text-[#00D26A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00D26A] transition-colors">
                                            Letecký monitoring & Vizuálne audity
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-5 leading-relaxed">
                                        Operatívna fotodokumentácia stavieb, časozberný dohľad a vizuálna kontrola striech bez nutnosti montáže plošín. Dodanie dát do 48 hodín.
                                    </p>
                                    <ul className="text-zinc-300 text-sm leading-relaxed space-y-3 mb-6">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Ortofotomapy:</strong> Kolmé (90°) a šikmé zábery vo vysokom rozlíšení <strong className="text-[#00D26A]">4K UHD</strong>.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Vektorové zakreslenie:</strong> Presné zobrazenie parcelných hraníc, výmer a inžinierskych sietí do fotografií.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Legislatívny súlad:</strong> Certifikovaná prevádzka podľa predpisov <strong className="text-[#00D26A]">EASA A1/A3</strong>.</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono mb-1.5">Cena a rozsah</span>
                                        <div className="inline-block bg-black/80 px-2.5 py-1 rounded-sm border border-zinc-800 shadow-inner">
                                            <span className="text-lg sm:text-xl font-mono tracking-wider font-bold text-emerald-400">od 80 €</span>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-sm text-[11px] font-mono font-semibold bg-zinc-900 text-[#00D26A] border border-[#00D26A]/30 tracking-wider uppercase shadow-inner">
                                        Licencia EASA A1/A3
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 3: Technická grafika */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-2xl hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Winamp / Hi-Fi Rack Titlebar */}
                            <div className="h-[22px] bg-zinc-900 border-b border-zinc-800 px-3 flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none shrink-0">
                                <span>[ DTP_VECTOR.DAT ]</span>
                                <span className="tracking-widest opacity-60">_ □ ×</span>
                            </div>

                            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 relative">
                                {/* Coordinate cross accents */}
                                <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                                <div>
                                    <div className="font-mono text-xs font-semibold text-[#FFB800] tracking-wider mb-3">
                                        [ 03 // CAD ]
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-[#FFB800]/10 rounded-xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                            <PenTool className="w-6 h-6 text-[#FFB800]" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                            Technická grafika
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-5 leading-relaxed">
                                        Príprava a vektorizácia podkladov pre CNC, laserové delenie materiálov a technickú veľkoformátovú tlač. Formáty DXF, SVG, PDF.
                                    </p>
                                    <ul className="text-zinc-300 text-sm leading-relaxed space-y-3 mb-6">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Zákresy do máp & fotiek:</strong> Kótovanie hraníc parciel, inžinierskych sietí a prístupových ciest pre realitný predaj.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">Vektorizácia podkladov:</strong> Prevod skenov a technických náčrtov do formátov pre CNC, laser a rezacie plotre (SVG, DXF, PDF).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                            <span><strong className="text-white">DTP & Prepress audit:</strong> Generovanie validných tlačových dát (PDF/X, spadávky, CMYK profily) bez výrobných chýb.</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono mb-1.5">Cena a rozsah</span>
                                        <div className="inline-block bg-black/80 px-2.5 py-1 rounded-sm border border-zinc-800 shadow-inner">
                                            <span className="text-lg sm:text-xl font-mono tracking-wider font-bold text-amber-400">od 20 € / hod.</span>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-sm text-[11px] font-mono font-semibold bg-zinc-900 text-[#FFB800] border border-[#FFB800]/30 tracking-wider uppercase shadow-inner">
                                        Projektová kalkulácia
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div> {/* 3 pillars container end */}
            </div> {/* container end */}
        </section>
    );
}
