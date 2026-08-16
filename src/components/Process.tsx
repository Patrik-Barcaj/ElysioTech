import Image from 'next/image'; // import next image
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function Process() { // export Process component function
    const unifiedSteps = [ // unified steps for all projects
        { 
            num: '01', 
            title: 'Zadanie & Súradnice (10 minút)', 
            desc: 'Pošlete nám parcelné číslo alebo adresu cez WhatsApp/telefón. Zvolíte si digitálny balík alebo fyzickú tlač.' 
        },
        { 
            num: '02', 
            title: 'Nálet & Spracovanie dát', 
            desc: 'Zrealizujeme let v optimálnom svetle a v Illustratore zakreslíme presné hranice a inžinierske siete.' 
        },
        { 
            num: '03', 
            title: 'Výroba & Nasadenie', 
            desc: 'Tlačíme fyzické tabule priamo na UV tlačiarenskej technológii a spúšťame webové podklady.' 
        },
        { 
            num: '04', 
            title: 'Odovzdanie', 
            desc: 'Digitálne súbory odovzdávame v plnej kvalite cez cloudové úložisko, hotové tabule expedujeme pripravené na montáž.' 
        }
    ]; // unified steps end

    return ( // return JSX layout
        <section id="process" className="py-24 bg-gray-50 dark:bg-[#0B0F17] relative border-t border-black/5 dark:border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Jednoduchý a priamy proces
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display">Ako pracujeme</h2> {/* title */}
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-base sm:text-lg">Od prvého kontaktu až po hotový výsledok bez zdržovania.</p>
                </div> {/* header block end */}

                {/* Unified Process */}
                <div className="mb-12"> {/* unified wrapper */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"> {/* split grid */}
                        <ScrollReveal direction="right" className="w-full h-[320px] lg:h-auto min-h-[350px] relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hidden md:block"> {/* image wrapper */}
                            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Pracovný proces" fill className="object-cover" /> {/* image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div> {/* tint */}
                            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                                <div className="text-xs font-display tracking-widest text-amber-400 uppercase mb-1">Rýchlosť & Precíznosť</div>
                                <div className="text-lg font-bold">Všetko dodané jedným špecialistom do 3 až 5 dní</div>
                            </div>
                        </ScrollReveal> {/* image wrapper end */}
                        <div className="grid grid-cols-1 gap-5"> {/* steps grid */}
                            {unifiedSteps.map((step, idx) => ( // map unified steps
                                <ScrollReveal key={step.num} delay={idx * 0.1} className="w-full"> {/* scroll reveal wrapper */}
                                    <div className="w-full relative bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C]/80 border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:-translate-x-1 hover:border-amber-500/40 hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] transition-all duration-300 group overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4"> {/* step card */}
                                        <div className="relative z-10 text-3xl sm:text-4xl font-extrabold text-amber-500 dark:text-amber-400 font-display group-hover:scale-110 transition-transform duration-300 shrink-0 w-14">{step.num}</div> {/* step number */}
                                        <div>
                                            <h3 className="relative z-10 text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 font-display group-hover:text-amber-500 transition-colors duration-300">{step.title}</h3> {/* step title */}
                                            <p className="relative z-10 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{step.desc}</p> {/* step desc */}
                                        </div>
                                    </div>
                                </ScrollReveal> // scroll reveal end
                            ))}
                        </div> {/* steps grid end */}
                    </div> {/* split grid end */}
                </div> {/* unified wrapper end */}

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
