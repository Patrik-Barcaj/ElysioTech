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
                        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4"> {/* subsection header flex */}
                            <div className="w-3 h-8 bg-gradient-to-b from-aurora-purple to-aurora-indigo rounded-full"></div> {/* accent bar */}
                            <h3 className="text-3xl font-bold font-display text-white">Vetva A: Web ako služba <span className="text-aurora-purple text-xl font-normal ml-2">(SaaS)</span></h3> {/* subsection title */}
                        </div> {/* subsection header end */}
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative group/grid"> {/* saas grid layout */}
                            {/* Starter Pack */}
                            <ScrollReveal delay={0.1} className="h-full"> {/* scroll reveal item */}
                                <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-aurora-purple/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-purple/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(191,90,242,0.4)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer"> {/* saas pricing container */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="relative z-10"> {/* content wrapper */}
                                        <h4 className="text-xl font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aurora-purple transition-all duration-300">ŠTART</h4> {/* pack name */}
                                        <p className="text-gray-400 text-sm mb-6 h-10 group-hover:text-gray-300 transition-colors duration-300">Ideálne pre samostatných remeselníkov, odťahové či kľúčové služby.</p> {/* desc */}
                                        <div className="flex items-end gap-2 mb-8 border-b border-white/5 pb-8 group-hover:border-aurora-purple/30 transition-colors duration-300"> {/* price block */}
                                            <span className="text-4xl font-display font-bold text-aurora-purple drop-shadow-[0_0_8px_rgba(191,90,242,0.5)] group-hover:scale-110 transition-transform origin-left duration-300">19 €</span> {/* price */}
                                            <span className="text-gray-500 text-sm mb-1 group-hover:text-gray-400 transition-colors duration-300">/ mesiac</span> {/* recurrence */}
                                        </div> {/* price block end */}
                                        <ul className="space-y-4 mb-8 text-sm text-gray-300"> {/* features list */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-purple shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 0 € Vstupný poplatok</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-purple shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Bez viazanosti / Zrušenie kedykoľvek</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-purple shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Spustenie do 7-10 dní</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-purple transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Jednostránkový web (Landing Page)</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-purple transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> .sk doména & hosting</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-purple transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Drobné grafické úpravy v cene (cenníky, hodiny)</li> {/* feature */}
                                        </ul> {/* features list end */}
                                    </div> {/* content wrapper end */}
                                </div> {/* saas container end */}
                            </ScrollReveal> {/* scroll reveal end */}

                            {/* Pro Pack */}
                            <ScrollReveal delay={0.2} className="h-full"> {/* scroll reveal item */}
                                <div className="h-full bg-white/[0.05] border border-aurora-indigo/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(94,92,230,0.15)] transform md:-translate-y-4 hover:border-aurora-indigo/60 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-indigo/15 hover:-translate-y-7 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(94,92,230,0.5)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer"> {/* saas pricing container highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-aurora-indigo to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div> {/* top highlight border */}
                                    <div className="absolute -top-4 right-8 bg-gradient-to-r from-aurora-indigo to-aurora-purple text-white shadow-[0_0_15px_rgba(94,92,230,0.5)] text-xs font-bold px-4 py-1.5 rounded-full font-display z-20 transition-all duration-300 group-hover:scale-110">ODPORÚČANÉ</div> {/* badge */}
                                    <div className="relative z-10 mt-4"> {/* content wrapper */}
                                        <h4 className="text-xl font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aurora-indigo transition-all duration-300">PRO</h4> {/* pack name */}
                                        <p className="text-gray-400 text-sm mb-6 h-10 group-hover:text-gray-300 transition-colors duration-300">Zlatá stredná cesta pre lokálne reštaurácie a ambulancie.</p> {/* desc */}
                                        <div className="flex items-end gap-2 mb-8 border-b border-white/10 pb-8 group-hover:border-aurora-indigo/30 transition-colors duration-300"> {/* price block */}
                                            <span className="text-4xl font-display font-bold text-aurora-indigo drop-shadow-[0_0_12px_rgba(94,92,230,0.6)] group-hover:scale-110 transition-transform origin-left duration-300">39 €</span> {/* price */}
                                            <span className="text-gray-500 text-sm mb-1 group-hover:text-gray-400 transition-colors duration-300">/ mesiac</span> {/* recurrence */}
                                        </div> {/* price block end */}
                                        <ul className="space-y-4 mb-8 text-sm text-gray-300"> {/* features list */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-indigo shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Všetko z balíka ŠTART</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-indigo shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Viacstránkový web (do 5 podstránok)</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-indigo transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Prioritná správa a aktualizácie</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-indigo transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Základná SEO optimalizácia</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-indigo transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Kompletná digitálna grafická podpora (bannery)</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-indigo transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Zľava na sprostredkovanie tlače</li> {/* feature */}
                                        </ul> {/* features list end */}
                                    </div> {/* content wrapper end */}
                                </div> {/* saas container end */}
                            </ScrollReveal> {/* scroll reveal end */}

                            {/* Premium Pack */}
                            <ScrollReveal delay={0.3} className="h-full"> {/* scroll reveal item */}
                                <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-aurora-green/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-green/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(48,209,88,0.4)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer"> {/* saas pricing container */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="relative z-10"> {/* content wrapper */}
                                        <h4 className="text-xl font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aurora-green transition-all duration-300">PREMIUM</h4> {/* pack name */}
                                        <p className="text-gray-400 text-sm mb-6 h-10 group-hover:text-gray-300 transition-colors duration-300">Pre realitky, penzióny a stavebné firmy so špecifickými požiadavkami.</p> {/* desc */}
                                        <div className="flex items-end gap-2 mb-8 border-b border-white/5 pb-8 group-hover:border-aurora-green/30 transition-colors duration-300"> {/* price block */}
                                            <span className="text-4xl font-display font-bold text-aurora-green drop-shadow-[0_0_8px_rgba(48,209,88,0.5)] group-hover:scale-110 transition-transform origin-left duration-300">79 €</span> {/* price */}
                                            <span className="text-gray-500 text-sm mb-1 group-hover:text-gray-400 transition-colors duration-300">/ mesiac</span> {/* recurrence */}
                                        </div> {/* price block end */}
                                        <ul className="space-y-4 mb-8 text-sm text-gray-300"> {/* features list */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Všetko z balíka PRO</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-aurora-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Komplexný web, appka alebo e-shop</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-green transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> VIP Prioritná podpora 24/7</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-green transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Kompletný dizajn tlačovín s vybavením tlače</li> {/* feature */}
                                            <li className="flex items-start gap-3"><svg className="w-5 h-5 text-white shrink-0 mt-0.5 group-hover:text-aurora-green transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 1x ročne profi letecké fotenie/video z drona zdarma</li> {/* feature */}
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
                            <h3 className="text-3xl font-bold font-display text-white">Vetva B: Samostatné služby</h3> {/* subsection title */}
                        </div> {/* subsection header end */}
                        
                        <div className="flex flex-col gap-6"> {/* standalone stack layout (no horizontal scroll) */}
                            <ScrollReveal delay={0.1}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-green/30 hover:shadow-[0_10px_30px_-15px_rgba(48,209,88,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-green transition-colors duration-300">Letecké zábery z drona (DJI Mini 3)</h4> {/* name */}
                                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Zahŕňa 4K fotografie/video, postprocesing a grafické zakreslenie hraníc pozemku či parcely prispôsobené pre realitnú inzerciu.</p> {/* desc */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-green transition-colors duration-300 drop-shadow-[0_0_8px_rgba(48,209,88,0.5)]">50 - 80 €</span> {/* price */}
                                        <p className="text-gray-500 text-sm">za výjazd/lokalitu</p> {/* metric */}
                                    </div> {/* price block end */}
                                </div> {/* item card row end */}
                            </ScrollReveal> {/* standalone item end */}

                            <ScrollReveal delay={0.2}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-purple/30 hover:shadow-[0_10px_30px_-15px_rgba(191,90,242,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-purple transition-colors duration-300">Grafický dizajn</h4> {/* name */}
                                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Tvorba minimalistických logotypov v krivkách, návrhy vizitiek, letákov, layoutov pre tlač a digitálnych assetov pre branding.</p> {/* desc */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-purple transition-colors duration-300 drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]">30 - 50 €</span> {/* price */}
                                        <p className="text-gray-500 text-sm">za úkon</p> {/* metric */}
                                    </div> {/* price block end */}
                                </div> {/* item card row end */}
                            </ScrollReveal> {/* standalone item end */}

                            <ScrollReveal delay={0.3}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-indigo/30 hover:shadow-[0_10px_30px_-15px_rgba(94,92,230,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-indigo transition-colors duration-300">Sprostredkovanie tlače</h4> {/* name */}
                                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Zahŕňa kompletnú predtlačovú prípravu dát (CMYK, spadávky), zadanie objednávky overenej tlačiarni a manažment dodania.</p> {/* desc */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-indigo transition-colors duration-300 drop-shadow-[0_0_8px_rgba(94,92,230,0.5)]">Cena tlače + 15 €</span> {/* price */}
                                        <p className="text-gray-500 text-sm">servisný poplatok</p> {/* metric */}
                                    </div> {/* price block end */}
                                </div> {/* item card row end */}
                            </ScrollReveal> {/* standalone item end */}

                            <ScrollReveal delay={0.4}> {/* standalone item */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] hover:border-aurora-purple/30 hover:shadow-[0_10px_30px_-15px_rgba(191,90,242,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"> {/* item card row */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="flex-1 relative z-10"> {/* details block */}
                                        <h4 className="text-xl font-bold text-white font-display mb-2 group-hover:text-aurora-purple transition-colors duration-300">Custom vývoj a kódovanie</h4> {/* name */}
                                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Samostatné skripty, úpravy databáz, integrácie API alebo modifikácie už existujúceho legacy kódu.</p> {/* desc */}
                                    </div> {/* details block end */}
                                    <div className="md:text-right shrink-0 relative z-10"> {/* price block */}
                                        <span className="text-3xl font-display font-bold text-white group-hover:text-aurora-purple transition-colors duration-300 drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]">25 €</span> {/* price */}
                                        <p className="text-gray-500 text-sm">/ hodina</p> {/* metric */}
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
