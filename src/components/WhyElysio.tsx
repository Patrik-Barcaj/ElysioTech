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

        {/* Single Clean Horizontal Panel with 3 Pillars */}
        <ScrollReveal delay={0.1} className="max-w-5xl mx-auto">
          <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
              
              {/* Pillar 1: Inžiniersky základ */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sm font-bold text-[#00D26A] mb-5">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    Inžiniersky základ (VUT FIT)
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Pevné algoritmické a softvérové základy bez amatérskych riešení. Čistý moderný kód bez zbytočných CMS závislostí.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Polygrafická prax */}
              <div className="flex flex-col justify-between md:border-x md:border-neutral-800/80 md:px-8">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sm font-bold text-[#FFB800] mb-5">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    Polygrafická prax
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Reálne skúsenosti z fyzickej výroby a tlače. Vektorové dáta a rezacie krivky pre CNC, laser a plotre sedia na desatinu milimetra.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Done-For-You záruka */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-[#00D26A] mb-5">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    Done-For-You záruka
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Žiadna byrokracia ani technické pojmy. Komunikujete priamo so mnou a hotový výsledok dostanete na kľúč do 48 hodín.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Signature Line */}
            <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 text-center sm:text-left">
              <span>Patrik Barcaj • Samostatný inžinier a vývojár</span>
              <span className="text-[#00D26A] font-medium">Garancia dodania do 48 hodín</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
