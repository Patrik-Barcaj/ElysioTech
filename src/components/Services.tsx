import React from 'react'; // import react
import Image from 'next/image'; // import next image
import ScrollReveal from './ui/ScrollReveal'; // import ScrollReveal
import { PenTool } from 'lucide-react'; // import PenTool icon

export default function Services() { // export Services component
    return ( // start return block
        <section id="services" className="py-24 min-h-[100dvh] flex items-center relative border-t border-neutral-800 bg-[#080808]"> {/* main services section */}
            <div id="sluzby" className="absolute -top-20 pointer-events-none"></div>
            <div id="cennik" className="absolute -top-12 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* container */}
                <div className="text-center mb-16"> {/* header wrapper */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-3 uppercase">
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
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Coordinate cross accents */}
                            <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                            
                            <div>
                                {/* 16:9 Banner */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 mb-6 bg-[#09090b] shadow-inner">
                                    <Image
                                        src="https://placehold.co/600x338/121214/10b981?text=APP+%2F%2F+One-Page+Next.js"
                                        alt="DEV // One-Page Next.js"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                </div>

                                <div className="font-mono text-xs font-semibold text-[#FFB800] tracking-wider mb-2">
                                    [ 01 // DEV ]
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#FFB800]/10 rounded-xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <svg className="w-5 h-5 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                        Vývoj webov & aplikácií
                                    </h3>
                                </div>

                                {/* Prominent Price Tag */}
                                <div className="mb-5 pb-4 border-b border-neutral-800/80">
                                    <span className="text-xs text-zinc-400 block uppercase tracking-wider font-mono mb-1">Cena realizácie</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">od 350 €</span>
                                        <span className="text-xs text-zinc-500 font-mono">/ projekt</span>
                                    </div>
                                </div>

                                {/* Max 3 bullets (≤4 words) */}
                                <ul className="text-zinc-300 text-sm leading-relaxed space-y-2.5 mb-6">
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Next.js & React stack</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Klientske zóny na mieru</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Plné odovzdanie zdrojového kódu</span>
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

                    {/* Pillar 2: Letecký monitoring & Vizuálne audity */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 border-t-2 border-t-[#00D26A] rounded-3xl p-6 sm:p-8 hover:border-[#00D26A]/50 hover:shadow-[0_0_30px_rgba(0,210,106,0.15)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Coordinate cross accents */}
                            <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D26A]/5 rounded-full blur-3xl group-hover:bg-[#00D26A]/10 transition-colors"></div>
                            
                            <div>
                                {/* 16:9 Banner */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 mb-6 bg-[#09090b] shadow-inner">
                                    <Image
                                        src="https://placehold.co/600x338/121214/eab308?text=AIR+%2F%2F+Letecky+Audit+%2B+Kataster"
                                        alt="AIR // Letecky Audit + Kataster"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                </div>

                                <div className="font-mono text-xs font-semibold text-[#00D26A] tracking-wider mb-2">
                                    [ 02 // AIR ]
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#00D26A]/10 rounded-xl flex items-center justify-center border border-[#00D26A]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <svg className="w-5 h-5 text-[#00D26A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00D26A] transition-colors">
                                        Letecké dáta & Audity
                                    </h3>
                                </div>

                                {/* Prominent Price Tag */}
                                <div className="mb-5 pb-4 border-b border-neutral-800/80">
                                    <span className="text-xs text-zinc-400 block uppercase tracking-wider font-mono mb-1">Cena výjazdu</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#00D26A] tracking-tight">od 60 €</span>
                                        <span className="text-xs text-zinc-500 font-mono">/ zásah</span>
                                    </div>
                                </div>

                                {/* Max 3 bullets (≤4 words) */}
                                <ul className="text-zinc-300 text-sm leading-relaxed space-y-2.5 mb-6">
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Ortomapa a katastrálny zákres</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Audit stavieb a striech</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#00D26A] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Expresné dodanie do 48h</span>
                                    </li>
                                </ul>

                                {/* Informačný riadok o dostupnosti */}
                                <div className="mb-4 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-[#00D26A] flex items-center gap-2">
                                    <span>⏱</span>
                                    <span>Výjazdy v týždni už od 14:30 alebo cez víkendy</span>
                                </div>
                            </div>
                            
                            {/* Bottom Data Formats Strip */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono mb-2">Výstupné dáta</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['[.RAW]', '[.TIFF]', '[.DXF]', '[.PDF]'].map((fmt) => (
                                        <span key={fmt} className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-neutral-900 border border-neutral-800 text-zinc-400 group-hover:border-[#00D26A]/40 transition-colors">
                                            {fmt}
                                        </span>
                                    ))}
                                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-neutral-900 border border-neutral-800 text-[#FFB800]">[.GLB / .OBJ]</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pillar 3: Technická grafika */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                            {/* Coordinate cross accents */}
                            <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                            <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors"></div>
                            
                            <div>
                                {/* 16:9 Banner */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 mb-6 bg-[#09090b] shadow-inner">
                                    <Image
                                        src="https://placehold.co/600x338/121214/3b82f6?text=DTP+%2F%2F+Vektorove+Krivky"
                                        alt="DTP // Vektorove Krivky"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                </div>

                                <div className="font-mono text-xs font-semibold text-[#FFB800] tracking-wider mb-2">
                                    [ 03 // DTP ]
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#FFB800]/10 rounded-xl flex items-center justify-center border border-[#FFB800]/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <PenTool className="w-5 h-5 text-[#FFB800]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFB800] transition-colors">
                                        Technická grafika & CAD
                                    </h3>
                                </div>

                                {/* Prominent Price Tag */}
                                <div className="mb-5 pb-4 border-b border-neutral-800/80">
                                    <span className="text-xs text-zinc-400 block uppercase tracking-wider font-mono mb-1">Hodinová sadzba</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">od 25 €</span>
                                        <span className="text-xs text-zinc-500 font-mono">/ hod.</span>
                                    </div>
                                </div>

                                {/* Max 3 bullets (≤4 words) */}
                                <ul className="text-zinc-300 text-sm leading-relaxed space-y-2.5 mb-6">
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Vektorizácia pre CNC stroje</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">DTP príprava na tlač</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span className="text-[#FFB800] font-bold text-base leading-none">•</span>
                                        <span className="font-medium">Optimalizácia kriviek bez chýb</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Bottom Data Formats Strip */}
                            <div className="pt-4 border-t border-neutral-800 mt-auto">
                                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono mb-2">Výstupné dáta</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['[.DXF]', '[.DWG]', '[.SVG]', '[.PDF]'].map((fmt) => (
                                        <span key={fmt} className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-neutral-900 border border-neutral-800 text-zinc-400 group-hover:border-neutral-700 transition-colors">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div> {/* 3 pillars container end */}
            </div> {/* container end */}
        </section>
    );
}
