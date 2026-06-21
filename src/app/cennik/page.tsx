import React from 'react'; // import react
import Navigation from '@/components/Navigation'; // import navigation
import Footer from '@/components/Footer'; // import footer
import Link from 'next/link'; // import link
import ScrollReveal from '@/components/ui/ScrollReveal'; // import scroll reveal

export default function PricingPage() { // export pricing page component
    return ( // return jsx layout
        <main className="bg-[#0a0715] min-h-screen text-white relative"> {/* main container */}
            <Navigation /> {/* render navigation header */}

            <section className="pt-32 pb-24 relative overflow-hidden"> {/* hero section */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max width container */}
                    <div className="text-center mb-20 group"> {/* header block */}
                        <h1 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display hover:text-aurora-purple transition-colors duration-300">Cenník & Model Služieb</h1> {/* subtitle label */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple via-aurora-indigo to-aurora-green font-display mb-6 tracking-tight hover:scale-105 transition-transform duration-500">Vyberte si prístup, ktorý vám vyhovuje</h2> {/* main title */}
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Vy podnikáte, my riešime technológie. Ponúkame moderný SaaS prístup k webe (všetko v jednom) alebo samostatné jednorazové služby bez viazanosti.</p> {/* description */}
                    </div> {/* header block end */}

                    {/* VETVA A: Web ako služba (SaaS predplatné) */}
                    <div className="mb-24"> {/* branch a wrapper */}
                        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4"> {/* subsection header flex */}
                            <div className="w-3 h-8 bg-gradient-to-b from-aurora-purple to-aurora-indigo rounded-full"></div> {/* accent bar */}
                            <h3 className="text-3xl font-bold font-display text-white">Vetva A: Weby a aplikácie</h3> {/* subsection title */}
                        </div> {/* subsection header end */}
                        
                        <p className="text-gray-400 mb-8 px-4 text-lg"><span className="text-aurora-purple">•</span> <strong>Pravidlo:</strong> Žiadna viazanosť. 0 € akontácia pri mesačnej alternatíve.</p> {/* rule description */}

                        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full max-w-full px-4 relative group/grid"> {/* saas grid layout */}
                            {/* Starter Pack */}
                            <ScrollReveal delay={0.1} className="h-full w-full"> {/* scroll reveal item */}
                                <div className="h-full w-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-aurora-purple/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-purple/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(191,90,242,0.4)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer"> {/* saas pricing container */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="relative z-10 w-full"> {/* content wrapper */}
                                        <h4 className="text-xl font-bold font-display text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aurora-purple transition-all duration-300">ŠTART</h4> {/* pack name */}
                                        
                                        <div className="flex flex-col gap-2 mb-8 border-b border-white/5 pb-8 group-hover:border-aurora-purple/30 transition-colors duration-300 w-full"> {/* price block */}
                                            <div className="text-2xl font-display text-white"><span className="text-sm text-gray-500 font-normal">Jednorazovo: </span><strong>250 €</strong></div> {/* price */}
                                            <div className="text-xl font-display text-aurora-purple drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]"><span className="text-sm text-gray-500 font-normal">Alternatíva: </span><strong>25 € / mesiac</strong></div> {/* price */}
                                        </div> {/* price block end */}
                                        
                                        <ul className="space-y-4 mb-8 text-sm text-gray-300 w-full"> {/* features list */}
                                            <li className="flex items-start gap-3 w-full break-words"><span className="text-aurora-purple mt-0.5 shrink-0">•</span> <span><strong>Obsah:</strong> Jednostránkový web, doména, hosting, správa, drobné úpravy.</span></li> {/* feature */}
                                        </ul> {/* features list end */}
                                    </div> {/* content wrapper end */}
                                </div> {/* saas container end */}
                            </ScrollReveal> {/* scroll reveal end */}

                            {/* Pro Pack */}
                            <ScrollReveal delay={0.2} className="h-full w-full"> {/* scroll reveal item */}
                                <div className="h-full w-full bg-white/[0.05] border border-aurora-indigo/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(94,92,230,0.15)] transform md:-translate-y-4 hover:border-aurora-indigo/60 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-indigo/15 hover:-translate-y-7 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(94,92,230,0.5)] transition-all duration-500 flex flex-col justify-between group relative cursor-pointer"> {/* saas pricing container highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div> {/* hover background glow */}
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-aurora-indigo to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div> {/* top highlight border */}
                                    <div className="absolute -top-4 right-8 bg-gradient-to-r from-aurora-indigo to-aurora-purple text-white shadow-[0_0_15px_rgba(94,92,230,0.5)] text-xs font-bold px-4 py-1.5 rounded-full font-display z-20 transition-all duration-300 group-hover:scale-110">ODPORÚČANÉ</div> {/* badge */}
                                    <div className="relative z-10 mt-4 w-full"> {/* content wrapper */}
                                        <h4 className="text-xl font-bold font-display text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aurora-indigo transition-all duration-300">PRO</h4> {/* pack name */}
                                        
                                        <div className="flex flex-col gap-2 mb-8 border-b border-white/10 pb-8 group-hover:border-aurora-indigo/30 transition-colors duration-300 w-full"> {/* price block */}
                                            <div className="text-2xl font-display text-white"><span className="text-sm text-gray-500 font-normal">Jednorazovo: </span><strong>490 €</strong></div> {/* price */}
                                            <div className="text-xl font-display text-aurora-indigo drop-shadow-[0_0_12px_rgba(94,92,230,0.6)]"><span className="text-sm text-gray-500 font-normal">Alternatíva: </span><strong>49 € / mesiac</strong></div> {/* price */}
                                        </div> {/* price block end */}
                                        
                                        <ul className="space-y-4 mb-8 text-sm text-gray-300 w-full"> {/* features list */}
                                            <li className="flex items-start gap-3 w-full break-words"><span className="text-aurora-indigo mt-0.5 shrink-0">•</span> <span><strong>Obsah:</strong> Viacstránkový web/app (do 5 podstránok), SEO, kompletná digitálna grafika.</span></li> {/* feature */}
                                        </ul> {/* features list end */}
                                    </div> {/* content wrapper end */}
                                </div> {/* saas container end */}
                            </ScrollReveal> {/* scroll reveal end */}

                            {/* Premium Pack */}
                            <ScrollReveal delay={0.3} className="h-full w-full"> {/* scroll reveal item */}
                                <div className="h-full w-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-aurora-green/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-green/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(48,209,88,0.4)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer"> {/* saas pricing container */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="relative z-10 w-full"> {/* content wrapper */}
                                        <h4 className="text-xl font-bold font-display text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aurora-green transition-all duration-300">INDIVIDUÁL</h4> {/* pack name */}
                                        
                                        <div className="flex flex-col gap-2 mb-8 border-b border-white/5 pb-8 group-hover:border-aurora-green/30 transition-colors duration-300 w-full"> {/* price block */}
                                            <div className="text-2xl font-display text-white"><span className="text-sm text-gray-500 font-normal">Cena: </span><strong>Individuálne</strong></div> {/* price */}
                                            <div className="text-xl font-display text-aurora-green drop-shadow-[0_0_8px_rgba(48,209,88,0.5)]"><strong>Mesačne dohodou</strong></div> {/* price */}
                                        </div> {/* price block end */}
                                        
                                        <ul className="space-y-4 mb-8 text-sm text-gray-300 w-full"> {/* features list */}
                                            <li className="flex items-start gap-3 w-full break-words"><span className="text-aurora-green mt-0.5 shrink-0">•</span> <span><strong>Obsah:</strong> Veľké projekty, e-shopy, custom aplikácie + <strong>zábery z drona (aj doobeda po dohode)</strong>.</span></li> {/* feature */}
                                        </ul> {/* features list end */}
                                    </div> {/* content wrapper end */}
                                </div> {/* saas container end */}
                            </ScrollReveal> {/* scroll reveal end */}
                        </div> {/* saas grid layout end */}
                    </div> {/* branch a wrapper end */}

                    {/* VETVA B: Samostatné Služby */}
                    <div className="mb-16"> {/* branch b wrapper */}
                        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4"> {/* subsection header flex */}
                            <div className="w-3 h-8 bg-gradient-to-b from-aurora-green to-aurora-purple rounded-full"></div> {/* accent bar */}
                            <h3 className="text-3xl font-bold font-display text-white">Vetva B: Samostatné služby bez webu</h3> {/* subsection title */}
                        </div> {/* subsection header end */}
                        
                        <div className="flex flex-col gap-6 w-full max-w-full px-4"> {/* standalone stack layout (no horizontal scroll) */}
                            <ScrollReveal delay={0.1}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-green/30 hover:shadow-[0_10px_30px_-15px_rgba(48,209,88,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10 w-full"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-green transition-colors duration-300">Dron (Foto / Video)</h4> {/* name */}
                                        <ul className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 space-y-1 w-full break-words"> {/* desc list */}
                                            <li className="flex items-start gap-2"><span className="text-aurora-green shrink-0 mt-0.5">•</span> <span>4K, úprava, zakreslenie pozemku, <strong>aj doobeda po dohode</strong>.</span></li>
                                        </ul> {/* desc list end */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-green transition-colors duration-300 drop-shadow-[0_0_8px_rgba(48,209,88,0.5)]"><strong>70 € – 100 €</strong></span> {/* price */}
                                        <p className="text-gray-500 text-sm">/ výjazd</p> {/* metric */}
                                    </div> {/* price block end */}
                                </div> {/* item card row end */}
                            </ScrollReveal> {/* standalone item end */}

                            <ScrollReveal delay={0.2}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-purple/30 hover:shadow-[0_10px_30px_-15px_rgba(191,90,242,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10 w-full"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-purple transition-colors duration-300">Grafický dizajn</h4> {/* name */}
                                        <ul className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 space-y-1 w-full break-words"> {/* desc list */}
                                            <li className="flex items-start gap-2"><span className="text-aurora-purple shrink-0 mt-0.5">•</span> <span>vector logá, vizitky, letáky.</span></li>
                                        </ul> {/* desc list end */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-purple transition-colors duration-300 drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]"><strong>40 €</strong></span> {/* price */}
                                        <p className="text-gray-500 text-sm">/ úkon</p> {/* metric */}
                                    </div> {/* price block end */}
                                </div> {/* item card row end */}
                            </ScrollReveal> {/* standalone item end */}

                            <ScrollReveal delay={0.3}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-indigo/30 hover:shadow-[0_10px_30px_-15px_rgba(94,92,230,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10 w-full"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-indigo transition-colors duration-300">Sprostredkovanie tlače</h4> {/* name */}
                                        <ul className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 space-y-1 w-full break-words"> {/* desc list */}
                                            <li className="flex items-start gap-2"><span className="text-aurora-indigo shrink-0 mt-0.5">•</span> <span>CMYK, spadávky, dodanie kuriérom.</span></li>
                                        </ul> {/* desc list end */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-indigo transition-colors duration-300 drop-shadow-[0_0_8px_rgba(94,92,230,0.5)]"><strong>Cena tlače + 20 €</strong></span> {/* price */}
                                        <p className="text-gray-500 text-sm">servis</p> {/* metric */}
                                    </div> {/* price block end */}
                                </div> {/* item card row end */}
                            </ScrollReveal> {/* standalone item end */}
                        </div> {/* standalone stack layout end */}
                    </div> {/* branch b wrapper end */}

                    {/* CTA section */}
                    <div className="text-center mt-20 group"> {/* cta container */}
                        <h3 className="text-xl text-gray-300 font-display mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-purple group-hover:to-aurora-indigo transition-all duration-300">Chcete spustiť svoj web do 10 dní?</h3> {/* cta header */}
                        <Link href="/#contact" className="inline-block py-4 px-10 bg-gradient-to-r from-aurora-purple via-aurora-indigo to-aurora-green bg-[length:200%_auto] text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(191,90,242,0.8)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[position:100%_center] hover:scale-105 active:scale-95"> {/* cta button */}
                            Kontaktovať ELYSIO {/* button text */}
                        </Link> {/* cta link end */}
                    </div> {/* cta container end */}

                </div> {/* max width container end */}
            </section> {/* pricing section end */}

            <Footer /> {/* render footer */}
        </main> // end main container
    ); // end return block
} // end component function
