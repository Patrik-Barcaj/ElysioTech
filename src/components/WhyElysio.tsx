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
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            {/* Card 1: Rýchlosť */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="h-full bg-[#121214] border border-neutral-800 rounded-xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                    ⚡ Rýchlosť do 48 hodín
                  </h3>
                  <div className="space-y-2.5 text-sm text-zinc-300">
                    <p>• <strong className="text-white">Dáta do 2 dní:</strong> Surové zábery, ortofoto aj kód dodávam do 48 hodín.</p>
                    <p>• <strong className="text-white">Cloudový odkaz:</strong> Okamžitý prístup k plnému rozlíšeniu bez čakania.</p>
                    <p>• <strong className="text-white">Okamžitý štart:</strong> Realizácia bez interných schvaľovacích procesov.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 font-mono text-xs text-amber-400">
                  GARANCIA TERMÍNU
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: 1:1 Priamy kontakt */}
            <ScrollReveal delay={0.2} className="h-full">
              <div className="h-full bg-[#121214] border border-neutral-800 rounded-xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                    👤 1:1 Priamy kontakt
                  </h3>
                  <div className="space-y-2.5 text-sm text-zinc-300">
                    <p>• <strong className="text-white">Priamo s technikom:</strong> Riešite zadanie s človekom, čo lieta a kóduje.</p>
                    <p>• <strong className="text-white">WhatsApp & telefón:</strong> Rýchle operatívne zmeny a konzultácie bez čakania.</p>
                    <p>• <strong className="text-white">Nulový šum:</strong> Žiadne skreslené zadania cez account manažérov.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 font-mono text-xs text-[#00D26A]">
                  BEZ PROSTREDNÍKOV
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Presnosť */}
            <ScrollReveal delay={0.3} className="h-full">
              <div className="h-full bg-[#121214] border border-neutral-800 rounded-xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                    🎯 Výrobná & Technická presnosť
                  </h3>
                  <div className="space-y-2.5 text-sm text-zinc-300">
                    <p>• <strong className="text-white">Výrobné formáty:</strong> Vektory pasujú presne do CNC, lasera aj plotra.</p>
                    <p>• <strong className="text-white">Presné mapovanie:</strong> Zábery a ortofoto presne sedia na hranice parcely.</p>
                    <p>• <strong className="text-white">Vlastný kód:</strong> Aplikácie bežia bez závislostí na ťažkých CMS šablónach.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 font-mono text-xs text-amber-400">
                  ČISTÉ DÁTA
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}
