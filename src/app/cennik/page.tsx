import React from 'react'; // import react
import Navigation from '@/components/Navigation'; // import navigation
import Footer from '@/components/Footer'; // import footer
import Link from 'next/link'; // import link
import ScrollReveal from '@/components/ui/ScrollReveal'; // import scroll reveal

export default function PricingPage() { // export pricing page component
    return ( // return jsx layout
        <main className="bg-aurora-dark min-h-screen text-white relative"> {/* main container */}
            <Navigation /> {/* render navigation header */}

            <section className="pt-32 pb-24 relative overflow-hidden"> {/* hero section */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max width container */}
                    <div className="text-center mb-20 group"> {/* header block */}
                        <h1 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display hover:text-aurora-purple transition-colors duration-300">Cenník</h1> {/* subtitle label */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple via-aurora-indigo to-aurora-green font-display mb-6 hover:scale-105 transition-transform duration-500">Transparentné a férové ceny</h2> {/* main title with gradient */}
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto group-hover:text-gray-300 transition-colors duration-300">Prehľad cien pre naše služby. Každý projekt posudzujeme individuálne a prispôsobujeme vašim konkrétnym potrebám.</p> {/* description */}
                    </div> {/* header block end */}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 group/grid"> {/* main grid layout change to 3 columns */}
                        {/* Digital Studio Pricing */} {/* Digital Studio column */}
                        <ScrollReveal delay={0.1} className="h-full"> {/* scroll reveal digital pricing wrapper */}
                            <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-6 hover:border-aurora-purple/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-purple/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(191,90,242,0.4)] transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden"> {/* digital pricing container */}
                                <div className="absolute inset-0 bg-gradient-to-b from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                <div className="relative z-10 flex flex-col h-full"> {/* content wrapper */}
                                    <div className="w-full h-32 mb-6 rounded-xl overflow-hidden relative border border-white/10 shrink-0 group-hover:border-aurora-purple/30 transition-colors duration-500"> {/* banner image */}
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="Jednorazové Platby" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" /> {/* image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> {/* overlay */}
                                        <h3 className="absolute bottom-3 left-3 text-2xl font-bold font-display text-white border-l-4 border-aurora-purple pl-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-purple group-hover:to-white transition-all duration-300">Jednorazové <span className="text-aurora-purple">Platby</span></h3> {/* section title */}
                                    </div> {/* banner image end */}
                                    <div className="space-y-6"> {/* price items stack */}
                                        <div className="border-b border-white/5 pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* price item 1 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-purple transition-all duration-300">Grafické práce & Banner</h4> {/* item name */}
                                                <span className="text-aurora-purple font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]">od 34 €</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Návrh vizitiek, letákov, plagátov, reklamných bannerov alebo loga, kompletne pripravené na tlač.</p> {/* description */}
                                        </div> {/* price item 1 end */}
                                        <div className="border-b border-white/5 pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* price item 2 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-purple transition-all duration-300">Prezentačný Web</h4> {/* item name */}
                                                <span className="text-aurora-purple font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]">od 139 €</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Jednoduchá a rýchla webová stránka pre firmy alebo živnostníkov s moderným dizajnom a kontaktom.</p> {/* description */}
                                        </div> {/* price item 2 end */}
                                        <div className="pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* price item 3 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-purple transition-all duration-300">Webová Aplikácia na mieru</h4> {/* item name */}
                                                <span className="text-aurora-purple font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(191,90,242,0.5)]">od 300 €</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Komplexnejšie riešenia, klientske portály, správa databáz alebo interaktívne systémy podľa požiadaviek.</p> {/* description */}
                                        </div> {/* price item 3 end */}
                                    </div> {/* price items stack end */}
                                </div> {/* content wrapper end */}
                            </div> {/* digital container end */}
                        </ScrollReveal> {/* scroll reveal end */}
                        {/* Monthly / Yearly Pricing */} {/* subscription pricing column */}
                        <ScrollReveal delay={0.2} className="h-full"> {/* scroll reveal monthly pricing wrapper */}
                            <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-6 hover:border-aurora-indigo/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-indigo/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(94,92,230,0.4)] transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden"> {/* subscription pricing container */}
                                <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                <div className="relative z-10 flex flex-col h-full"> {/* content wrapper */}
                                    <div className="w-full h-32 mb-6 rounded-xl overflow-hidden relative border border-white/10 shrink-0 group-hover:border-aurora-indigo/30 transition-colors duration-500"> {/* banner image */}
                                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600&auto=format&fit=crop" alt="Mesačné Platby" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" /> {/* image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> {/* overlay */}
                                        <h3 className="absolute bottom-3 left-3 text-2xl font-bold font-display text-white border-l-4 border-aurora-indigo pl-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-indigo group-hover:to-white transition-all duration-300">Mesačné & <span className="text-aurora-indigo">Ročné platby</span></h3> {/* section title */}
                                    </div> {/* banner image end */}
                                    <div className="space-y-6"> {/* price items stack */}
                                        <div className="border-b border-white/5 pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* subscription item 1 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-indigo transition-all duration-300">Prezentačný Web (Prenájom)</h4> {/* item name */}
                                                <span className="text-aurora-indigo font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(94,92,230,0.5)]">od 19 € / mes.</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Kompletný web bez úvodnej jednorazovej investície, vrátane hostingu, domény a technickej podpory.</p> {/* description */}
                                        </div> {/* subscription item 1 end */}
                                        <div className="border-b border-white/5 pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* subscription item 2 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-indigo transition-all duration-300">Webová Aplikácia (Prenájom)</h4> {/* item name */}
                                                <span className="text-aurora-indigo font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(94,92,230,0.5)]">od 39 € / mes.</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Prenájom a prevádzka klientskych systémov, databáz alebo portálov s garantovanou správou a podporou.</p> {/* description */}
                                        </div> {/* subscription item 2 end */}
                                        <div className="pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* subscription item 3 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-indigo transition-all duration-300">Podpora & Správa webu</h4> {/* item name */}
                                                <span className="text-aurora-indigo font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(94,92,230,0.5)]">od 19 € / mes.</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Správa existujúcej stránky, aktualizácie, zálohovanie, hosting, doména a technická podpora.</p> {/* description */}
                                        </div> {/* subscription item 3 end */}
                                    </div> {/* price items stack end */}
                                </div> {/* content wrapper end */}
                            </div> {/* subscription container end */}
                        </ScrollReveal> {/* scroll reveal monthly pricing wrapper end */}
                        {/* Air Drones Pricing */} {/* Drones column */}
                        <ScrollReveal delay={0.3} className="h-full"> {/* scroll reveal drones wrapper */}
                            <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-6 hover:border-aurora-green/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-green/10 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(48,209,88,0.4)] transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden"> {/* drone pricing container */}
                                <div className="absolute inset-0 bg-gradient-to-b from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                <div className="relative z-10 flex flex-col h-full"> {/* content wrapper */}
                                    <div className="w-full h-32 mb-6 rounded-xl overflow-hidden relative border border-white/10 shrink-0 group-hover:border-aurora-green/30 transition-colors duration-500"> {/* banner image */}
                                        <img src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&w=600&auto=format&fit=crop" alt="Air Drones" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" /> {/* image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> {/* overlay */}
                                        <h3 className="absolute bottom-3 left-3 text-2xl font-bold font-display text-white border-l-4 border-aurora-green pl-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-green group-hover:to-white transition-all duration-300">Air <span className="text-aurora-green">Drones</span></h3> {/* section title */}
                                    </div> {/* banner image end */}
                                    <div className="space-y-6"> {/* price items stack */}
                                        <div className="border-b border-white/5 pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* price item 1 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-green transition-all duration-300">Letecké Fotenie</h4> {/* item name */}
                                                <span className="text-aurora-green font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(48,209,88,0.5)]">od 89 €</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Letecké fotografie vo vysokom rozlíšení pre nehnuteľnosti, pozemky, rodinné domy, záhrady alebo vinohrady.</p> {/* description */}
                                        </div> {/* price item 1 end */}
                                        <div className="border-b border-white/5 pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* price item 2 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-green transition-all duration-300">Letecké Foto & Video</h4> {/* item name */}
                                                <span className="text-aurora-green font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(48,209,88,0.5)]">od 119 €</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Kompletné promo video vo formáte 4K, vrátane farebnej postprodukcie, strihu a výberu leteckých fotiek.</p> {/* description */}
                                        </div> {/* price item 2 end */}
                                        <div className="pb-4 hover:translate-x-2 transition-transform duration-300 group/item hover:bg-white/[0.02] rounded-lg p-2"> {/* price item 3 */}
                                            <div className="flex justify-between items-baseline mb-2"> {/* header flex row */}
                                                <h4 className="text-lg font-bold text-white font-display group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-aurora-green transition-all duration-300">Inšpekčné lety & Modely</h4> {/* item name */}
                                                <span className="text-aurora-green font-bold font-display group-hover/item:scale-110 transition-transform origin-right duration-300 drop-shadow-[0_0_8px_rgba(48,209,88,0.5)]">od 149 €</span> {/* item price */}
                                            </div> {/* header end */}
                                            <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Technické inšpekcie striech, budov, fotovoltiky a tvorba 3D modelov z dronu pre stavebníctvo.</p> {/* description */}
                                        </div> {/* price item 3 end */}
                                    </div> {/* price items stack end */}
                                </div> {/* content wrapper end */}
                            </div> {/* drone container end */}
                        </ScrollReveal> {/* scroll reveal end */}
                    </div> {/* main grid end */}

                    {/* Terms & Subscription Details Info */}
                    <ScrollReveal delay={0.4}> {/* scroll reveal terms wrapper */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 mb-16 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group relative overflow-hidden"> {/* terms card */}
                            <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/5 via-transparent to-aurora-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                            <div className="relative z-10"> {/* content wrapper */}
                                <h3 className="text-2xl font-bold font-display text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-purple group-hover:to-aurora-indigo transition-all duration-500">Dôležité informácie k cenníku</h3> {/* terms title */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* terms grid */}
                                    <div className="hover:-translate-y-2 transition-transform duration-300 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-aurora-indigo/20 cursor-default group/term"> {/* term column 1 */}
                                        <h4 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2 group-hover/term:text-aurora-indigo transition-colors duration-300"> {/* term subtitle */}
                                            <span className="w-2 h-2 rounded-full bg-aurora-indigo shadow-[0_0_8px_rgba(94,92,230,0.8)] group-hover/term:scale-150 transition-transform duration-300"></span> {/* indicator dot */}
                                            Orientačné ceny {/* text */}
                                        </h4> {/* term subtitle end */}
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover/term:text-gray-300 transition-colors duration-300">Všetky uvedené ceny sú orientačné a predstavujú minimálnu cenu pre daný typ služby. Výsledná cena závisí od presných špecifikácií, rozsahu a celkovej náročnosti projektu.</p> {/* term text */}
                                    </div> {/* term column 1 end */}
                                    <div className="hover:-translate-y-2 transition-transform duration-300 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-aurora-purple/20 cursor-default group/term"> {/* term column 2 */}
                                        <h4 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2 group-hover/term:text-aurora-purple transition-colors duration-300"> {/* term subtitle */}
                                            <span className="w-2 h-2 rounded-full bg-aurora-purple shadow-[0_0_8px_rgba(191,90,242,0.8)] group-hover/term:scale-150 transition-transform duration-300"></span> {/* indicator dot */}
                                            Zálohové platby {/* text */}
                                        </h4> {/* term subtitle end */}
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover/term:text-gray-300 transition-colors duration-300">V prípade náročnejších projektov sa pred zahájením akejkoľvek práce môže účtovať zálohová platba vo výške 30% z celkovej dohodnutej rozpočtovej sumy.</p> {/* term text */}
                                    </div> {/* term column 2 end */}
                                    <div className="hover:-translate-y-2 transition-transform duration-300 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-aurora-green/20 cursor-default group/term"> {/* term column 3 */}
                                        <h4 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2 group-hover/term:text-aurora-green transition-colors duration-300"> {/* term subtitle */}
                                            <span className="w-2 h-2 rounded-full bg-aurora-green shadow-[0_0_8px_rgba(48,209,88,0.8)] group-hover/term:scale-150 transition-transform duration-300"></span> {/* indicator dot */}
                                            Mesačné / Ročné platby {/* text */}
                                        </h4> {/* term subtitle end */}
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover/term:text-gray-300 transition-colors duration-300">Pre weby a aplikácie poskytujeme možnosť pravidelnej mesačnej alebo ročnej úhrady. Táto platba pokrýva samotný vývoj, domény, hosting, plnú technickú podporu, priebežnú údržbu a aktualizáciu systému.</p> {/* term text */}
                                    </div> {/* term column 3 end */}
                                </div> {/* terms grid end */}
                            </div> {/* content wrapper end */}
                        </div> {/* terms card end */}
                    </ScrollReveal> {/* scroll reveal terms wrapper end */}

                    {/* CTA section */}
                    <div className="text-center group"> {/* cta container */}
                        <h3 className="text-xl text-gray-300 font-display mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-purple group-hover:to-aurora-indigo transition-all duration-300">Máte konkrétne požiadavky na projekt?</h3> {/* cta header */}
                        <Link href="/#contact" className="inline-block py-4 px-8 bg-gradient-to-r from-aurora-purple via-aurora-indigo to-aurora-green bg-[length:200%_auto] text-white rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(191,90,242,0.8)] transition-all duration-500 transform hover:-translate-y-2 hover:bg-[position:100%_center] hover:scale-105 active:scale-95"> {/* cta button */}
                            Požiadať o nacenenie na mieru {/* button text */}
                        </Link> {/* cta link end */}
                    </div> {/* cta container end */}

                </div> {/* max width container end */}
            </section> {/* pricing section end */}

            <Footer /> {/* render footer */}
        </main> // end main container
    ); // end return block
} // end component function
