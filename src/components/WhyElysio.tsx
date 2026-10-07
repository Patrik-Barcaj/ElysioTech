import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyElysio() {
  return (
    <section id="why-elysio" className="py-24 bg-[#080808] bg-blueprint-grid relative border-t border-neutral-800">
      <div id="o-nas" className="absolute -top-20 pointer-events-none"></div>
      <div id="about" className="absolute -top-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00D26A]/40 bg-[#00D26A]/10 text-[#00D26A] text-xs font-mono font-semibold tracking-widest mb-4 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A] animate-pulse"></span>
            KTO ZA TÝM STOJÍ • OSOBNÁ ZODPOVEDNOSŤ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Jeden kontakt <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D26A] via-[#FFD066] to-[#FFB800]">
              od letu až po kód.
            </span>
          </h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg leading-relaxed">
            Žiadne sprostredkovateľské marže ani account manažéri. Technik, ktorý rozumie hardvéru, súradniciam aj modernému webu.
          </p>
        </div>

        {/* Personal Craftsmanship Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Patrik's Profile & Core Craftsmanship (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1} className="h-full">
                <div className="h-full bg-[#121214] border border-neutral-800 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group shadow-xl">
                  {/* Viewfinder corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00D26A] pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00D26A] pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00D26A] pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00D26A] pointer-events-none"></div>

                  <div>
                    {/* Header badge */}
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D26A]/20 to-[#FFB800]/20 border border-[#00D26A]/40 flex items-center justify-center font-display font-extrabold text-white text-lg shrink-0">
                        PB
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-white">Patrik Barcaj</h3>
                        <p className="text-xs font-mono text-[#00D26A]">Pilot • Programátor • Grafik</p>
                      </div>
                    </div>

                    {/* Personal craftsmanship pitch */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                      Nehľadajte za mnou korporátne poschodia ani predajcov, ktorí technickému zadaniu nerozumejú. Pracujem ako samostatný technický špecialista: osobne prídem na váš objekt, vykonám bezpečný technický let dronom, spracujem surové dáta a ak potrebujete, dodám vám interaktívny digitálny report do prehliadača alebo presné výrobné výkresy.
                    </p>

                    {/* 3 Core Skill Pillars */}
                    <div className="space-y-3.5 pt-2 border-t border-neutral-800/80">
                      <div className="flex items-start gap-3">
                        <span className="text-base shrink-0">🚁</span>
                        <div className="text-xs sm:text-sm text-zinc-300">
                          <strong className="text-white">Pilotáž & Letecké dáta:</strong> Certifikácia EASA Open A1/A3, zodpovedný prístup a bezpečný zber dát do 48 hodín.
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-base shrink-0">💻</span>
                        <div className="text-xs sm:text-sm text-zinc-300">
                          <strong className="text-white">Webový vývoj & GIS:</strong> Next.js, React a TypeScript. Žiadne neprehľadné ZIP priečinky – digitálny odkaz priamo pre váš tím a investorov.
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-base shrink-0">📐</span>
                        <div className="text-xs sm:text-sm text-zinc-300">
                          <strong className="text-white">Technická grafika & CAD:</strong> Presné vektorové výkresy (DXF, SVG, DWG) pre laser, CNC a stavebnú výrobu bez rozmerových chýb.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom tagline */}
                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Lokalita: Bratislava & Západné Slovensko</span>
                    <span className="text-[#00D26A] font-bold">100% Priame jednanie</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Quick-Connect & Fast Direct Action (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2} className="h-full">
                <div className="h-full bg-[#121214] border border-[#00D26A]/30 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between shadow-[0_0_35px_rgba(0,210,106,0.08)] group">
                  {/* Viewfinder corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00D26A] pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00D26A] pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00D26A] pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00D26A] pointer-events-none"></div>

                  <div>
                    <span className="text-[11px] font-mono text-[#00D26A] font-bold uppercase tracking-wider block mb-2">
                      {"// PRIAMA LINKA NA TECHNIKA"}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white mb-3">
                      Žiadne čakanie na ponuky
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      Stačí poslať lokalitu, parcelu alebo popis problému priamo na WhatsApp. Odpoviem vám do 15 minút s reálnym termínom a cenovým odhadom.
                    </p>

                    {/* Direct Connect Buttons */}
                    <div className="space-y-3 mb-6">
                      <a
                        href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20priamo%20spytat%20na%20technicku%20zakazku..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-display font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-[#00D26A]/20 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
                      >
                        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                        <span>Napísať Patrikovi na WhatsApp</span>
                      </a>

                      <a
                        href="tel:+421903406402"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#080808] border border-neutral-700 hover:border-white/50 text-white font-mono text-sm tracking-wide transition-all flex items-center justify-center gap-2 hover:bg-[#18181b]"
                      >
                        <span>📞 +421 903 406 402</span>
                      </a>
                    </div>
                  </div>

                  {/* Reassurance pills */}
                  <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00D26A] font-bold">✓</span>
                      <span>Odpoveď spravidla do 15 minút</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00D26A] font-bold">✓</span>
                      <span>Doručenie digitálnych dát do 48 hodín</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

