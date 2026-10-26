import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  return (
    <section id="why-elysio" className="py-24 bg-[#080808] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-4 uppercase">
            [ 02 // WHY_ELYSIO ] • ŠTANDARD SPOLUPRÁCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Inžiniersky prístup, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFD066] to-[#00D26A]">
              priame dodanie.
            </span>
          </h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg leading-relaxed">
            Žiadne medzičlánky, zbytočná réžia ani nafúknuté termíny.
          </p>
        </div>

        {/* Osobný inžiniersky blok: Kto za tým stojí */}
        <ScrollReveal delay={0.05} className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-[#121214] border border-neutral-800 rounded-2xl p-6 sm:p-9 overflow-hidden group hover:border-[#00D26A]/40 transition-all shadow-xl">
            {/* Coordinate cross accents */}
            <span className="absolute top-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
            <span className="absolute top-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
            <span className="absolute bottom-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
            <span className="absolute bottom-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00D26A] bg-[#00D26A]/10 border border-[#00D26A]/30 px-3 py-1.5 rounded tracking-wider uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
                [ 00 // KTO ZA TÝM STOJÍ ] • OD KÓDU PO VÝROBU
              </div>
              
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Nezačínal som včera a nevypadol som z rýchlokurzu programovania. Pevný inžiniersky základ som postavil počas štúdia informatiky na <strong className="text-white">VUT v Brne (FIT)</strong>, kde som pričuchol k poctivému softvérovému vývoju. Odtiaľ viedla moja cesta cez grafiku až priamo do polygrafickej a výrobnej praxe.
                </p>
                <p>
                  Práve spojenie algoritmického myslenia s každodennou realitou výroby ma naučilo dve zásadné veci: <strong className="text-white">softvér musí fungovať spoľahlivo</strong> a <strong className="text-white">dáta do výroby musia sedieť na desatinu milimetra</strong>. Keď mi pošlete zadanie, nepozerám sa naň ako teoretik. Viem, ako ho naprogramovať, ako ho zautomatizovať a ako ho pripraviť tak, aby v praxi nevznikla ani jedna chyba.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <span className="text-[#FFB800] font-semibold">PATRIK BARCAJ // SOLO INŽINIER &amp; VÝVOJÁR</span>
                <span className="text-zinc-500">VUT V BRNE (FIT) • POLYGRAFIA • NEXT.JS</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Value Pillars Grid (1:1 Vzťah) */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Žiadny šum */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="h-full bg-[#121214] border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg relative overflow-hidden group">
                <span className="absolute top-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute top-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute bottom-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute bottom-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                <div>
                  <div className="font-mono text-xs text-[#00D26A] tracking-wider mb-2">
                    [ 01 // ŽIADNY ŠUM ]
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                    👤 Žiadny komunikačný šum
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Riešite zadanie priamo s človekom, čo kóduje a pripravuje dáta. Žiadni account manažéri ani skreslené informácie.
                  </p>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <p>• <strong className="text-zinc-200">Priamy kontakt:</strong> Konzultácie cez WhatsApp a telefón bez filtrov.</p>
                    <p>• <strong className="text-zinc-200">Nulové skreslenie:</strong> Od požiadavky k realizácii bez sprostredkovateľov.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 font-mono text-xs text-[#00D26A] flex justify-between items-center">
                  <span>BEZ PROSTREDNÍKOV</span>
                  <span className="text-white font-bold font-mono">1:1</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Všetko zariadim */}
            <ScrollReveal delay={0.2} className="h-full">
              <div className="h-full bg-[#121214] border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg relative overflow-hidden group">
                <span className="absolute top-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute top-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute bottom-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute bottom-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                <div>
                  <div className="font-mono text-xs text-[#FFB800] tracking-wider mb-2">
                    [ 02 // VŠETKO ZARIADIM ]
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                    🛠️ Všetko vyriešim na kľúč
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Nemusíte ovládať technické pojmy. Prevezmem surové podklady a odovzdám hotovú vec na kľúč.
                  </p>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <p>• <strong className="text-zinc-200">Hrubé vstupy:</strong> Stačí náčrt na papieri, sken, fotka či audio správa.</p>
                    <p>• <strong className="text-zinc-200">Zero-Effort:</strong> Nemusíte písať špecifikáciu, riešim všetko za vás.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 font-mono text-xs text-[#FFB800] flex justify-between items-center">
                  <span>DONE-FOR-YOU</span>
                  <span className="text-white font-bold font-mono">0 STAROSTÍ</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Dodanie do 48h */}
            <ScrollReveal delay={0.3} className="h-full">
              <div className="h-full bg-[#121214] border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg relative overflow-hidden group">
                <span className="absolute top-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute top-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute bottom-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                <span className="absolute bottom-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                <div>
                  <div className="font-mono text-xs text-[#00D26A] tracking-wider mb-2">
                    [ 03 // DODANIE DO 48H ]
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                    ⚡ Expresná realizácia
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Expresná realizácia menších zásahov a automatizácií bez zbytočnej firemnej byrokracie.
                  </p>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <p>• <strong className="text-zinc-200">Okamžitý štart:</strong> Realizácia bez interných schvaľovacích reťazcov.</p>
                    <p>• <strong className="text-zinc-200">Garancia termínu:</strong> Dohodnutý termín dodania podkladov a kódu platí.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 font-mono text-xs text-[#00D26A] flex justify-between items-center">
                  <span>GARANCIA TERMÍNU</span>
                  <span className="text-white font-bold font-mono">DO 48H</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}

