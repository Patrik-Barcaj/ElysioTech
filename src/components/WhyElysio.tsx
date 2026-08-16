import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  return (
    <section id="why-elysio" className="py-24 bg-white dark:bg-[#0f1420] relative border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-4 uppercase">
            Model spolupráce
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight leading-tight">
            Priame technické riadenie <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400">
              bez medzičlánkov.
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
            Eliminujeme komunikačný šum a agentúrnu réžiu. Všetky technické fázy projektu sú koordinované jedným špecialistom.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Box 1: Sprostredkovaný model */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full bg-slate-50 dark:bg-[#151C2C]/50 border border-red-500/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-500/10 border-b border-l border-red-500/20 rounded-bl-2xl text-xs font-bold text-red-500 uppercase tracking-wider font-display">
                Sprostredkovaný model
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 font-bold">
                    ✕
                  </div>
                  <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                    Viacstupňová komunikácia
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
                  <div className="p-4 rounded-xl bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 space-y-2">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Reťazec odovzdávania zadaní:</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      Klient → Account manažér → Externý pilot → Externý grafik → Tlačiareň → Externý programátor.
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>Strata technického kontextu a detailov cez projektových medzičlánkov.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>Nekompatibilita formátov medzi grafikou, tlačou a webovým kódom.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>Viacnásobná agentúrna marža a predĺžené lehoty dodania.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 text-xs text-red-500/90 font-medium">
                Časové straty • Neefektívny rozpočet
              </div>
            </div>
          </ScrollReveal>

          {/* Box 2: Priame technické riadenie Elysio */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full bg-white dark:bg-[#151C2C] border-2 border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.12)]">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500 text-white rounded-bl-2xl text-xs font-bold uppercase tracking-wider font-display shadow-sm">
                Priamy model Elysio
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                    Priamy technický dohľad
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-8">
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                    <div className="font-semibold text-gray-900 dark:text-white">Priamy tok dát:</div>
                    <div className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
                      Snímky a vektorové dáta smerujú priamo do kódu aplikácie aj do tlačového workflowu.
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span><strong>Jeden kontaktný bod:</strong> Požiadavky riešite priamo s vývojárom a operátorom, bez straty kontextu cez sprostredkovateľov.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span><strong>Prepojenie digitálu a výroby:</strong> Dáta z dronu a grafické podklady smerujú priamo do kódu alebo tlače bez nekompatibility formátov.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span><strong>Efektivita dodania:</strong> Digitálne náhľady do 48 hodín, softvérové prototypy v horizontoch dní.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10 text-xs text-emerald-500 font-bold flex items-center gap-1.5">
                <span>✓</span> Maximálna technická presnosť a rýchla odozva
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
