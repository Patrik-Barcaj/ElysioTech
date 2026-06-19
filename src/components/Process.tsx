import React from 'react'; // import react library
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function Process() { // export Process component function
    const digitalSteps = [ // steps for digital projects
        { num: '01', title: 'Analýza & Koncept', desc: 'Preberieme ciele, cieľovú skupinu a navrhneme optimálnu štruktúru.' }, // step 1
        { num: '02', title: 'UI/UX Dizajn', desc: 'Navrhneme vizuál a detailné grafické spracovanie.' }, // step 2
        { num: '03', title: 'Vývoj & Kódovanie', desc: 'Naprogramujeme projekt s dôrazom na rýchlosť a bezpečnosť.' }, // step 3
        { num: '04', title: 'Nasadenie & Podpora', desc: 'Web či aplikáciu spustíme a zabezpečíme následnú podporu.' } // step 4
    ]; // digital steps end

    const droneSteps = [ // steps for drone projects
        { num: '01', title: 'Konzultácia & Plán', desc: 'Definujeme požiadavky pre zábery.' }, // step 1
        { num: '02', title: 'Legislatíva & Povolenia', desc: 'Zabezpečíme letové povolenia a nahlásenie letu úradom.' }, // step 2
        { num: '03', title: 'Realizácia Letu', desc: 'Vykoná sa bezpečný let na dohodnutom mieste.' }, // step 3
        { num: '04', title: 'Postprodukcia', desc: 'Spravíme farebnú korekciu, zostriháme video či upravíme fotky podľa vašich predstáv.' } // step 4
    ]; // drone steps end

    return ( // return JSX layout
        <section id="process" className="py-24 bg-[#0a0715] relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <h2 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display">Ako to prebieha</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Náš Postup</h3> {/* title */}
                </div> {/* header block end */}

                {/* Digital Studio Process */}
                <div className="mb-24"> {/* digital wrapper */}
                    <h4 className="text-2xl font-bold font-display text-white mb-8 border-l-4 border-aurora-purple pl-4">Postup pre <span className="text-aurora-purple">Digital Studio</span></h4> {/* process title */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"> {/* split grid */}
                        <ScrollReveal direction="right" className="w-full h-[300px] lg:h-auto relative rounded-3xl overflow-hidden border border-white/10 hidden md:block"> {/* image wrapper */}
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Digital Process" className="absolute inset-0 w-full h-full object-cover" /> {/* image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/20 to-transparent mix-blend-overlay"></div> {/* tint */}
                        </ScrollReveal> {/* image wrapper end */}
                        <div className="grid grid-cols-1 gap-6"> {/* steps grid */}
                            {digitalSteps.map((step, idx) => ( // map digital steps
                                <ScrollReveal key={idx} delay={idx * 0.1} className="w-full"> {/* scroll reveal wrapper */}
                                    <div className="w-full relative bg-aurora-glass border border-white/5 rounded-3xl p-6 hover:-translate-x-2 hover:border-aurora-purple/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-purple/10 hover:shadow-[0_15px_40px_-10px_rgba(191,90,242,0.4)] transition-all duration-500 group overflow-hidden cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4"> {/* step card */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                        <div className="relative z-10 text-4xl font-extrabold text-aurora-purple font-display group-hover:scale-110 transition-transform duration-300 shrink-0 w-16">{step.num}</div> {/* step number */}
                                        <div>
                                            <h5 className="relative z-10 text-lg font-bold text-white mb-1 font-display group-hover:text-aurora-purple transition-colors duration-300">{step.title}</h5> {/* step title */}
                                            <p className="relative z-10 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.desc}</p> {/* step desc */}
                                        </div>
                                    </div>
                                </ScrollReveal> // scroll reveal end
                            ))}
                        </div> {/* steps grid end */}
                    </div> {/* split grid end */}
                </div> {/* digital wrapper end */}

                {/* Air Drones Process */}
                <div> {/* air wrapper */}
                    <h4 className="text-2xl font-bold font-display text-white mb-8 border-l-4 border-aurora-green pl-4">Postup pre <span className="text-aurora-green">Air Drones</span></h4> {/* process title */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"> {/* split grid */}
                        <div className="grid grid-cols-1 gap-6 lg:order-1 order-2"> {/* steps grid */}
                            {droneSteps.map((step, idx) => ( // map drone steps
                                <ScrollReveal key={idx} delay={idx * 0.1} className="w-full"> {/* scroll reveal wrapper */}
                                    <div className="w-full relative bg-aurora-glass border border-white/5 rounded-3xl p-6 hover:-translate-x-2 hover:border-aurora-green/50 hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-green/10 hover:shadow-[0_15px_40px_-10px_rgba(48,209,88,0.4)] transition-all duration-500 group overflow-hidden cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4"> {/* step card */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                        <div className="relative z-10 text-4xl font-extrabold text-aurora-green font-display group-hover:scale-110 transition-transform duration-300 shrink-0 w-16">{step.num}</div> {/* step number */}
                                        <div>
                                            <h5 className="relative z-10 text-lg font-bold text-white mb-1 font-display group-hover:text-aurora-green transition-colors duration-300">{step.title}</h5> {/* step title */}
                                            <p className="relative z-10 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.desc}</p> {/* step desc */}
                                        </div>
                                    </div>
                                </ScrollReveal> // scroll reveal end
                            ))}
                        </div> {/* steps grid end */}
                        <ScrollReveal direction="left" className="w-full h-[300px] lg:h-auto relative rounded-3xl overflow-hidden border border-white/10 lg:order-2 order-1 hidden md:block"> {/* image wrapper */}
                            <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop" alt="Drone Process" className="absolute inset-0 w-full h-full object-cover" /> {/* image */}
                            <div className="absolute inset-0 bg-gradient-to-l from-aurora-green/20 to-transparent mix-blend-overlay"></div> {/* tint */}
                        </ScrollReveal> {/* image wrapper end */}
                    </div> {/* split grid end */}
                </div> {/* air wrapper end */}

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
