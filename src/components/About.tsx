import React from 'react'; // import react library
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal
import ParallaxImage from './ui/ParallaxImage'; // import parallax image

export default function About() { // export About component function
    return ( // return JSX layout
        <section id="about" className="py-24 bg-aurora-dark relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max width container */}
                <div className="text-center mb-16"> {/* header wrapper */}
                    <h2 className="text-sm font-bold text-aurora-green tracking-widest uppercase mb-6 font-display">O Nás</h2> {/* subtitle label with increased bottom margin */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Kto Sme & Čo Robíme</h3> {/* main title */}
                </div> {/* header wrapper end */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* split layout container */}
                    {/* Left: Digital Studio About */}
                    <ScrollReveal delay={0.1} className="h-full"> {/* scroll reveal wrap */}
                        <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-8 hover:border-aurora-purple/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-purple/10 hover:-translate-y-3 hover:shadow-[0_15px_40px_-10px_rgba(191,90,242,0.4)] transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden"> {/* digital box */}
                        <div className="absolute inset-0 bg-gradient-to-b from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                        <div className="relative z-10"> {/* text block wrapper */}
                            <h4 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-aurora-purple transition-colors duration-300">Digital <span className="text-aurora-purple">Studio</span></h4> {/* digital title */}
                            <p className="text-gray-400 mb-6 leading-relaxed"> {/* desc */}
                                Zameriavame sa na tvorbu jednoduchých, funkčných webov a menších aplikácií presne podľa potrieb klientov. Taktiež navrhujeme vizuálnu grafiku (letáky, vizitky, logá), ktorú po dohode kompletne zadáme a objednáme v tlačiarni. {/* text */}
                            </p> {/* desc end */}
                            <ul className="space-y-3 mb-8"> {/* bullet list */}
                                <li className="flex items-center text-gray-300"> {/* bullet item */}
                                    <span className="w-6 h-6 rounded-full bg-aurora-purple/20 flex items-center justify-center mr-3 text-aurora-purple text-xs border border-aurora-purple/30">✓</span> {/* check icon */}
                                    Webstránky na mieru a podľa potrieb {/* text */}
                                </li> {/* bullet item end */}
                                <li className="flex items-center text-gray-300"> {/* bullet item */}
                                    <span className="w-6 h-6 rounded-full bg-aurora-purple/20 flex items-center justify-center mr-3 text-aurora-purple text-xs border border-aurora-purple/30">✓</span> {/* check icon */}
                                    Vývoj menších a prehľadných aplikácií {/* text */}
                                </li> {/* bullet item end */}
                                <li className="flex items-center text-gray-300"> {/* bullet item */}
                                    <span className="w-6 h-6 rounded-full bg-aurora-purple/20 flex items-center justify-center mr-3 text-aurora-purple text-xs border border-aurora-purple/30">✓</span> {/* check icon */}
                                    Zabezpečenie tlače navrhnutej grafiky {/* text */}
                                </li> {/* bullet item end */}
                            </ul> {/* bullet list end */}
                        </div> {/* text block end */}
                        <div className="relative z-10 aspect-video rounded-2xl overflow-hidden border border-white/5 mt-auto group-hover:border-aurora-purple/40 transition-colors duration-500"> {/* image wrap */}
                            <ParallaxImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="Digital Studio Work" className="absolute inset-0 w-full h-full opacity-70" /> {/* graphics image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark via-transparent to-transparent pointer-events-none"></div> {/* overlay */}
                        </div> {/* image wrap end */}
                    </div> {/* digital box end */}
                    </ScrollReveal> {/* scroll reveal end */}

                    {/* Right: Air Drones About */}
                    <ScrollReveal delay={0.3} className="h-full"> {/* scroll reveal wrap */}
                        <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-8 hover:border-aurora-green/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-green/10 hover:-translate-y-3 hover:shadow-[0_15px_40px_-10px_rgba(48,209,88,0.4)] transition-all duration-500 flex flex-col justify-between group cursor-pointer relative overflow-hidden"> {/* air box */}
                        <div className="absolute inset-0 bg-gradient-to-b from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                        <div className="relative z-10"> {/* text block wrapper */}
                            <h4 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-aurora-green transition-colors duration-300">Air <span className="text-aurora-green">Drones</span></h4> {/* air title */}
                            <p className="text-gray-400 mb-6 leading-relaxed"> {/* desc */}
                                Ponúkame letecké zábery a fotografie realizované našimi dronmi. Sústredíme sa na pekné prezentačné zábery prírody, pozemkov, chát alebo rodinných udalostí z vtáčej perspektívy. {/* text */}
                            </p> {/* desc end */}
                            <ul className="space-y-3 mb-8"> {/* bullet list */}
                                <li className="flex items-center text-gray-300"> {/* bullet item */}
                                    <span className="w-6 h-6 rounded-full bg-aurora-green/20 flex items-center justify-center mr-3 text-aurora-green text-xs border border-aurora-green/30">✓</span> {/* check icon */}
                                    Letecké fotografie v 4K rozlíšení. {/* text */}
                                </li> {/* bullet item end */}
                                <li className="flex items-center text-gray-300"> {/* bullet item */}
                                    <span className="w-6 h-6 rounded-full bg-aurora-green/20 flex items-center justify-center mr-3 text-aurora-green text-xs border border-aurora-green/30">✓</span> {/* check icon */}
                                    Plynulé videosekvencie z výšky {/* text */}
                                </li> {/* bullet item end */}
                                <li className="flex items-center text-gray-300"> {/* bullet item */}
                                    <span className="w-6 h-6 rounded-full bg-aurora-green/20 flex items-center justify-center mr-3 text-aurora-green text-xs border border-aurora-green/30">✓</span> {/* check icon */}
                                    Flexibilný a bezpečný prístup k letu {/* text */}
                                </li> {/* bullet item end */}
                            </ul> {/* bullet list end */}
                        </div> {/* text block end */}
                        <div className="relative z-10 aspect-video rounded-2xl overflow-hidden border border-white/5 mt-auto group-hover:border-aurora-green/40 transition-colors duration-500"> {/* image wrap */}
                            <ParallaxImage src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=600&auto=format&fit=crop" alt="Drone Services Work" className="absolute inset-0 w-full h-full opacity-70" /> {/* drone image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark via-transparent to-transparent pointer-events-none"></div> {/* overlay */}
                        </div> {/* image wrap end */}
                    </div> {/* air box end */}
                    </ScrollReveal> {/* scroll reveal end */}
                </div> {/* split layout end */}
            </div> {/* max width container end */}
        </section> // section wrapper end
    ); // return end
} // component function end
