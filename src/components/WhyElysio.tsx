import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  const comparisonItems = [
    {
      id: 'comp-comm',
      criterion: 'Komunikácia & zadanie',
      elysio: 'Jeden priamy technický špecialista bez komunikačného šumu',
      agency: 'Account manažér → Projektový manažér → Subdodávatelia'
    },
    {
      id: 'comp-speed',
      criterion: 'Rýchlosť dodania',
      elysio: 'Letecké dáta do 48h, softvérové prototypy v horizontoch dní',
      agency: 'Viacstupňové schvaľovacie procesy (týždne až mesiace)'
    },
    {
      id: 'comp-sync',
      criterion: 'Prepojenie dát a výroby',
      elysio: 'Priamy import súradníc a vektorov do kódu webu aj do tlače',
      agency: 'Nekompatibilita formátov medzi rôznymi externými dodávateľmi'
    },
    {
      id: 'comp-pricing',
      criterion: 'Cenová efektivita',
      elysio: 'Platíte len za reálnu prácu bez agentúrnej réžie',
      agency: 'Viacnásobné prirážky za manažment a provízie medzičlánkov'
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

        {/* Comparison Grid (Elysio First) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-12">
          
          {/* Box 1: Priame technické riadenie Elysio (FIRST) */}
          <ScrollReveal delay={0.1} className="h-full order-1">
            <div className="h-full bg-[#121214] border-2 border-[#00D26A]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,210,106,0.12)]">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#00D26A] text-black font-extrabold rounded-bl-2xl text-xs uppercase tracking-wider font-display shadow-sm">
                Priamy model Elysio
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#00D26A]/15 border border-[#00D26A]/30 flex items-center justify-center text-[#00D26A] font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Priamy technický dohľad
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-300 mb-8">
                  <div className="p-4 rounded-xl bg-[#080808] border border-neutral-800 space-y-1.5">
                    <div className="font-semibold text-white">Priamy tok dát:</div>
                    <div className="text-xs sm:text-sm text-[#00D26A] font-medium leading-relaxed">
                      Snímky a vektorové dáta smerujú priamo do kódu aplikácie aj do tlačového workflowu.
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00D26A] font-bold shrink-0">✓</span>
                      <span><strong className="text-white">Jeden kontaktný bod:</strong> Požiadavky riešite priamo s technickým realizátorom bez straty kontextu.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00D26A] font-bold shrink-0">✓</span>
                      <span><strong className="text-white">Prepojenie digitálu a výroby:</strong> Dáta z dronu a grafika smerujú priamo do Next.js kódu alebo do UV tlače.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00D26A] font-bold shrink-0">✓</span>
                      <span><strong className="text-white">Efektivita dodania:</strong> Digitálne náhľady do 48 hodín, softvérové prototypy v horizontoch dní.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-xs text-[#00D26A] font-bold flex items-center gap-1.5">
                <span>✓</span> Maximálna technická presnosť a rýchla odozva
              </div>
            </div>
          </ScrollReveal>

          {/* Box 2: Sprostredkovaný model (Agency) */}
          <ScrollReveal delay={0.2} className="h-full order-2">
            <div className="h-full bg-[#121214]/60 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-950/30 border-b border-l border-red-900/40 rounded-bl-2xl text-xs font-bold text-red-400 uppercase tracking-wider font-display">
                Sprostredkovaný model (Agentúra)
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">
                    ✕
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-300">
                    Viacstupňová komunikácia
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-400 mb-8">
                  <div className="p-4 rounded-xl bg-[#080808] border border-neutral-800 space-y-1.5">
                    <div className="font-semibold text-zinc-300">Reťazec odovzdávania zadaní:</div>
                    <div className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                      Klient → Account manažér → Externý pilot → Grafik → Tlačiareň → Programátor.
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>Strata technického kontextu a detailov cez projektových sprostredkovateľov.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>Nekompatibilita formátov medzi grafikou, tlačiarňou a webovým kódom.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>Viacnásobná agentúrna marža a predĺžené lehoty dodania.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-xs text-red-400 font-bold flex items-center gap-1.5">
                <span>✕</span> Zbytočná réžia a predĺžené lehoty
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Direct Mobile & Desktop Comparative Matrix */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-6 text-center">
              Priame porovnanie parametrov
            </h3>

            <div className="space-y-4">
              {comparisonItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#080808] border border-neutral-800 rounded-2xl p-4 sm:p-5 transition-all hover:border-neutral-700"
                >
                  <div className="font-display font-bold text-sm text-white mb-3">
                    {item.criterion}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {/* Elysio Row/Col */}
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#00D26A]/10 border border-[#00D26A]/20 text-zinc-200">
                      <span className="text-[#00D26A] font-bold shrink-0">✓</span>
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-[#00D26A] font-bold mb-0.5">
                          ELYSIO TECH
                        </strong>
                        <span>{item.elysio}</span>
                      </div>
                    </div>

                    {/* Agency Row/Col */}
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-zinc-400">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-red-400/80 font-bold mb-0.5">
                          Klasická agentúra
                        </strong>
                        <span>{item.agency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
