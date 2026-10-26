import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  return (
    <section id="why-elysio" className="py-24 bg-[#080808] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-[#121214] text-zinc-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
            <span>Prečo spolupracovať so mnou</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Priama inžinierska práca <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00D26A]">
              bez agentúrneho šumu.
            </span>
          </h2>
          <p className="text-zinc-400 mt-4 text-base sm:text-lg leading-relaxed">
            Spojenie algoritmického vzdelania s reálnou výrobnou praxou. Žiadni sprostredkovatelia ani byrokracia.
          </p>
        </div>

        {/* 3 Visual Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch mb-10">
          
          {/* Card 1: Inžiniersky základ (VUT FIT) */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="bg-[#121214] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-full group shadow-lg">
              <div>
                {/* Visual Header: Software Architecture & Code Blueprint */}
                <div className="w-full h-44 rounded-2xl bg-[#080808] border border-neutral-800/80 p-3.5 mb-6 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80 text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                      <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                      <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                      <span className="ml-1 text-zinc-400 font-mono text-[10px]">vut_fit_core.ts</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#00D26A]/10 text-[#00D26A] text-[10px] font-semibold">
                      0ms overhead
                    </span>
                  </div>

                  <div className="font-mono text-[11px] leading-relaxed text-zinc-400 my-auto space-y-1">
                    <p className="text-zinc-500">{`// FIT VUT Brno • Softvérové inžinierstvo`}</p>
                    <p><span className="text-[#00D26A]">const</span> stack = &#123;</p>
                    <p className="pl-3 text-zinc-300">speed: <span className="text-amber-400">&apos;&lt; 0.5s&apos;</span>,</p>
                    <p className="pl-3 text-zinc-300">architecture: <span className="text-[#00D26A]">&apos;Clean Code&apos;</span>,</p>
                    <p className="pl-3 text-zinc-300">cmsBloat: <span className="text-red-400">false</span></p>
                    <p>&#125;;</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 text-[10px] text-zinc-500">
                    <span>Typovo bezpečný vývoj</span>
                    <span className="text-zinc-300 font-medium">Algoritmická efektivita</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-bold text-[#00D26A]">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    Inžiniersky základ (VUT FIT)
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Pevné algoritmické a softvérové základy bez amatérskych riešení. Čistý moderný kód bez zbytočných CMS závislostí a pomalých pluginov.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    VUT FIT Brno
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    Čistý kód
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Polygrafická prax */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="bg-[#121214] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-full group shadow-lg">
              <div>
                {/* Visual Header: Technical Blueprint & Vector Calipers */}
                <div className="w-full h-44 rounded-2xl bg-[#080808] border border-neutral-800/80 p-3.5 mb-6 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80 text-[11px] text-zinc-400">
                    <span className="text-[10px] text-zinc-400 font-mono">cad_prepress_cut.dxf</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[#FFB800] text-[10px] font-semibold">
                      Presnosť ±0.1mm
                    </span>
                  </div>

                  {/* Vector Drawing Schema */}
                  <div className="my-auto py-1 relative">
                    <div className="flex items-center justify-center gap-4">
                      {/* Technical Dimension Box */}
                      <div className="relative border border-dashed border-[#FFB800]/50 rounded-lg p-3 bg-neutral-900/60 text-center">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-[#080808] text-[9px] font-mono text-[#FFB800]">
                          100.00 mm
                        </div>
                        <svg className="w-20 h-10 mx-auto text-[#FFB800]" viewBox="0 0 80 40" fill="none">
                          <path d="M5 35 Q40 5 75 35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                          <circle cx="5" cy="35" r="2.5" fill="#FFB800" />
                          <circle cx="40" cy="20" r="2.5" fill="#00D26A" />
                          <circle cx="75" cy="35" r="2.5" fill="#FFB800" />
                        </svg>
                        <div className="text-[9px] text-zinc-400 font-mono mt-1">Bézier curves &amp; CNC</div>
                      </div>

                      <div className="space-y-1.5 text-left text-[10px] text-zinc-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]"></span>
                          <span>CMYK 300 DPI</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></span>
                          <span>Spadávka 3 mm</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          <span>Plotrový rez</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 text-[10px] text-zinc-500">
                    <span>Reálna výroba &amp; tlač</span>
                    <span className="text-zinc-300 font-medium">Bez chýb v merke</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-bold text-[#FFB800]">
                    02
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    Polygrafická prax
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Reálne skúsenosti z fyzickej výroby a tlače. Vektorové dáta a rezacie krivky pre CNC, laser a plotre sedia na desatinu milimetra.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    DTP &amp; Prepress
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    Rezacie plotre
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    Presnosť 0.1mm
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Done-For-You záruka */}
          <ScrollReveal delay={0.3} className="h-full">
            <div className="bg-[#121214] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-full group shadow-lg">
              <div>
                {/* Visual Header: Direct 1:1 Timeline Tracker */}
                <div className="w-full h-44 rounded-2xl bg-[#080808] border border-emerald-500/20 p-3.5 mb-6 relative overflow-hidden flex flex-col justify-between bg-emerald-500/[0.01]">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80 text-[11px] text-zinc-400">
                    <span className="text-[10px] text-zinc-400">1:1 priama spolupráca</span>
                    <span className="px-2 py-0.5 rounded bg-[#00D26A] text-black text-[10px] font-bold">
                      ✓ 100% na kľúč
                    </span>
                  </div>

                  {/* 3 Step Timeline */}
                  <div className="my-auto space-y-2 py-1">
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px]">
                      <span className="text-zinc-400">1. Hrubé podklady (audio / foto)</span>
                      <span className="text-[#00D26A] font-semibold">Klient</span>
                    </div>
                    <div className="flex justify-center -my-1 text-zinc-600 text-[10px]">↓</div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[10px]">
                      <span className="text-white font-medium">2. Kompletná realizácia &amp; kód</span>
                      <span className="text-[#00D26A] font-bold">Patrik Barcaj</span>
                    </div>
                    <div className="flex justify-center -my-1 text-zinc-600 text-[10px]">↓</div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px]">
                      <span className="text-zinc-400">3. Hotový výstup do 48 hodín</span>
                      <span className="text-white font-semibold">Hotovo ✓</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 text-[10px] text-zinc-500">
                    <span>Nulový agentúrny žargón</span>
                    <span className="text-[#00D26A] font-medium">Dodanie do 48 hodín</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-[#00D26A]">
                    03
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D26A] transition-colors">
                    Done-For-You záruka
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Žiadna byrokracia, nafúknuté agentúrne marže ani technické pojmy. Komunikujete priamo so mnou a hotový výsledok dostanete na kľúč do 48 hodín.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    Priama spolupráca
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    Garancia 48h
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-[#080808] border border-neutral-800 text-zinc-300">
                    Bez agentúr
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Horizontal Trust Bar */}
        <ScrollReveal delay={0.4} className="max-w-6xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#121214] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D26A]"></span>
              <span>Patrik Barcaj • Samostatný inžinier a vývojár (Bratislava &amp; Západné Slovensko)</span>
            </div>
            <div className="inline-flex items-center gap-2 text-white font-medium">
              <span className="text-[#00D26A]">✓</span>
              <span>Garancia dodania do 48 hodín &amp; 100% odovzdanie zdrojových kódov</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
