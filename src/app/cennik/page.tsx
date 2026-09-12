import React from 'react'; // import react
import Navigation from '@/components/Navigation'; // import navigation
import Footer from '@/components/Footer'; // import footer
import Link from 'next/link'; // import link
import ScrollReveal from '@/components/ui/ScrollReveal'; // import scroll reveal

export default function PricingPage() { // export pricing page component
    return ( // return jsx layout
        <main className="bg-[#080808] min-h-[100dvh] text-zinc-300 relative"> {/* main container */}
            <Navigation /> {/* render navigation header */}

            <section className="pt-32 pb-24 relative overflow-hidden"> {/* hero section */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max width container */}
                    <div className="text-center mb-16"> {/* header block */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-xs font-display font-semibold tracking-widest text-[#FFB800] mb-4 uppercase">
                            Transparentné ceny bez agentúrnych prirážok
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4 tracking-tight">
                            Cenník a balíky <span className="text-[#00D26A]">služieb</span>
                        </h1> {/* main title */}
                        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                            Jasné jednorazové ceny za reálne dodanú prácu. Žiadne skryté poplatky, viazanosti ani zbytočná agentúrna réžia.
                        </p> {/* description */}
                    </div> {/* header block end */}

                    {/* 3 Core Technical Pillars Pricing Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 items-stretch">
                        
                        {/* Pillar 1: Vývoj softvéru & Webové aplikácie */}
                        <ScrollReveal delay={0.1} className="h-full">
                            <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold font-display text-white group-hover:text-[#FFB800] transition-colors">
                                            Softvér & Webové aplikácie
                                        </h2>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30">
                                            Next.js & React
                                        </span>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-neutral-800">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">od 250 €</span>
                                        <span className="text-xs text-zinc-400 ml-2">/ projekt</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-zinc-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Prezentačné weby (od 250 €):</strong> Rýchly Next.js kód, mobilná responzivita a optimalizácia.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>GIS a mapové aplikácie:</strong> Zákazkové mapové zobrazenia (MapLibre / MapTiler).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Aplikácie na mieru:</strong> Interné nástroje, klientske zóny a administrácia podľa špecifikácie.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20vyvoja%20webu/softveru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-[#121214] hover:bg-[#FFB800] border border-neutral-800 hover:border-[#FFB800] text-[#FFB800] hover:text-black font-extrabold font-display text-sm transition-all"
                                >
                                    Konzultovať vývoj cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Pillar 2: Letecká vizualizácia & Zber dát */}
                        <ScrollReveal delay={0.2} className="h-full">
                            <div className="h-full bg-[#121214] border border-neutral-800 border-t-2 border-t-[#00D26A] rounded-3xl p-8 shadow-[0_0_35px_rgba(0,210,106,0.12)] flex flex-col justify-between group relative overflow-hidden">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold font-display text-white group-hover:text-[#00D26A] transition-colors">
                                            Letecké dáta & Vizuál
                                        </h2>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00D26A]/10 text-[#00D26A] border border-[#00D26A]/30">
                                            Do 48 hodín
                                        </span>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-neutral-800">
                                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">od 75 €</span>
                                        <span className="text-xs text-zinc-400 ml-2">/ výjazd</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-zinc-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Ortofotomapy a snímky:</strong> Kolmé a šikmé zábery vo vysokom rozlíšení.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Vektorové zakreslenie:</strong> Kótovanie hraníc, výmer a inžinierskych sietí.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Certifikácia EASA (A1/A3):</strong> Bezpečná a plne legálna prevádzka.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20leteckych%20zaberov"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-extrabold font-display text-sm transition-all shadow-lg shadow-[#00D26A]/20"
                                >
                                    Objednať zábery cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Pillar 3: Priemyselná veľkoformátová tlač */}
                        <ScrollReveal delay={0.3} className="h-full">
                            <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold font-display text-white group-hover:text-[#FFB800] transition-colors">
                                            Veľkoformátová UV tlač
                                        </h2>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30">
                                            Priama výroba
                                        </span>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-neutral-800">
                                        <span className="text-2xl sm:text-3xl font-extrabold font-display text-white">od 25 € / hod.</span>
                                        <span className="text-xs text-zinc-400 ml-2">(alebo podľa formátu)</span>
                                    </div>
                                    <ul className="space-y-3 text-sm text-zinc-300 mb-8 leading-relaxed">
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Hliníkový Dibond:</strong> Kompozitné panely s dlhodobou stálosťou.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>PVC dosky Komatex:</strong> Ľahké panely s priamou UV potlačou.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-[#FFB800] font-bold">•</span>
                                            <span><strong>Spevnené PVC bannery:</strong> Opatrené kovovými očkami pre uchytenie na ploty a konštrukcie.</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20velkoformatovej%20tlace"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 text-center rounded-xl bg-[#121214] hover:bg-[#FFB800] border border-neutral-800 hover:border-[#FFB800] text-[#FFB800] hover:text-black font-extrabold font-display text-sm transition-all"
                                >
                                    Naceniť tlač cez WhatsApp
                                </a>
                            </div>
                        </ScrollReveal>

                    </div>

                    {/* Direct Contact CTA Banner */}
                    <div className="p-8 sm:p-12 rounded-3xl bg-[#121214] border border-neutral-800 text-center max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
                            Potrebujete komplexné riešenie na mieru?
                        </h2>
                        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
                            Letecký zber dát, grafické spracovanie, tlač prezentačných médií a softvérový vývoj pod jednou strechou.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20spoluprace%20a%20vasich%20sluzieb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#00D26A] hover:bg-[#00B85C] text-black rounded-xl font-extrabold font-display tracking-wide shadow-lg shadow-[#00D26A]/20 flex items-center justify-center gap-2 transition-all"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                Rýchla správa na WhatsApp
                            </a>
                            <Link
                                href="/#contact"
                                className="px-8 py-4 bg-[#121214] border border-neutral-800 hover:border-[#FFB800]/50 text-white rounded-xl font-bold font-display transition-all flex items-center justify-center"
                            >
                                Kontaktný formulár
                            </Link>
                        </div>
                    </div>

                </div> {/* max width container end */}
            </section> {/* pricing section end */}

            <Footer /> {/* render footer */}
        </main> // end main container
    ); // end return block
} // end component function
