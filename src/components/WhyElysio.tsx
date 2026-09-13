import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  const comparisonItems = [
    {
      id: 'comp-comm',
      criterion: 'Komunikácia',
      elysio: 'Priamy kontakt s technikom a pilotom',
      agency: 'Account manažéri a skreslené zadania'
    },
    {
      id: 'comp-speed',
      criterion: 'Rýchlosť',
      elysio: 'Prvé dáta a softvérové prototypy do 48 hodín',
      agency: 'Týždne schvaľovacích procesov'
    },
    {
      id: 'comp-budget',
      criterion: 'Rozpočet',
      elysio: 'Platba za reálnu prácu a kód',
      agency: 'Réžie agentúrnych kancelárií'
    }
  ];

  return (
    <section id="why-elysio" className="py-24 bg-[#080808] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-semibold font-display tracking-widest mb-4 uppercase">
            Model spolupráce
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Priame technické riadenie <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFD066] to-[#00D26A]">
              bez medzičlánkov.
            </span>
          </h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg leading-relaxed">
            Eliminujeme komunikačný šum a agentúrnu réžiu. Všetky technické fázy projektu koordinuje priamo vývojár a operátor.
          </p>
        </div>

        {/* Streamlined Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              {/* Table Column Headers on Desktop */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 px-4 border-b border-neutral-800 text-xs font-display font-bold uppercase tracking-wider text-zinc-500">
                <div className="col-span-3">Kritérium</div>
                <div className="col-span-5 text-[#00D26A] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D26A] shadow-[0_0_8px_rgba(0,210,106,0.8)]"></span>
                  Model Elysio Tech
                </div>
                <div className="col-span-4 text-zinc-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                  Bežná agentúra
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-4 md:space-y-3 pt-4 md:pt-4">
                {comparisonItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center p-4 rounded-2xl bg-[#080808] border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                  >
                    {/* Criterion Title */}
                    <div className="md:col-span-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFB800] block md:hidden mb-1">
                        Kritérium
                      </span>
                      <h3 className="text-base font-bold font-display text-white">
                        {item.criterion}
                      </h3>
                    </div>

                    {/* Elysio (Green Checkmark) */}
                    <div className="md:col-span-5 flex items-start gap-3 p-3.5 rounded-xl bg-[#00D26A]/10 border border-[#00D26A]/25">
                      <span className="w-5 h-5 rounded-full bg-[#00D26A]/20 text-[#00D26A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#00D26A] uppercase tracking-wider block md:hidden mb-0.5">
                          Elysio Tech
                        </span>
                        <p className="text-sm font-semibold text-white leading-snug">
                          {item.elysio}
                        </p>
                      </div>
                    </div>

                    {/* Agency (Red Cross) */}
                    <div className="md:col-span-4 flex items-start gap-3 p-3.5 rounded-xl bg-red-500/5 border border-red-500/15">
                      <span className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block md:hidden mb-0.5">
                          Klasická agentúra
                        </span>
                        <p className="text-sm text-zinc-400 leading-snug">
                          {item.agency}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Guarantee Reassurance */}
              <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-[#00D26A] font-bold">●</span> Priamy prístup bez komunikačného šumu
                </span>
                <span className="text-zinc-500">
                  Dodanie dohodnutých výstupov bez skrytých poplatkov
                </span>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
