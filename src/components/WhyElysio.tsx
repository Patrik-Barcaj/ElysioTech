import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  return (
    <section id="why-elysio" className="py-24 bg-[#080808] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-semibold font-display tracking-widest mb-4 uppercase">
            STANDARD SPOLUPRÁCE
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

        {/* 3 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          
          {/* Card 1: Rýchlosť */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full bg-[#121214] border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider uppercase block mb-3">
                  GARANCIA TERMÍNU
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-3">
                  ⚡ Rýchlosť do 48 hodín
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Letecké dáta, technické vektorové podklady aj softvérové prototypy odovzdávam do dvoch pracovných dní od schválenia zadania.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: 1:1 Priamy kontakt */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full bg-[#121214] border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#00D26A] font-semibold tracking-wider uppercase block mb-3">
                  BEZ PROSTREDNÍKOV
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-3">
                  👤 1:1 Priamy kontakt
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Zadanie riešite priamo s človekom, ktorý lieta, kreslí a kóduje. Nulový šum, nulové skreslenie technických detailov.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Presnosť */}
          <ScrollReveal delay={0.3} className="h-full">
            <div className="h-full bg-[#121214] border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider uppercase block mb-3">
                  ČISTÉ DÁTA
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-3">
                  🎯 Výrobná & Technická presnosť
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Vektory pasujú priamo do CNC/lasera, ortofotomapy sedia na kataster a aplikácie bežia na čistom, optimalizovanom kóde.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
