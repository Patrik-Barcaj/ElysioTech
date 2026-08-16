"use client"; // use client directive
import React, { useState } from 'react'; // import react and useState
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function FAQ() { // export FAQ component function
    const [openIndex, setOpenIndex] = useState<number | null>(0); // state for open question index

    const faqs = [
        {
            id: 'faq-easa',
            q: 'Je prevádzka dronu legálna a certifikovaná?',
            a: 'Áno. Disponujeme oficiálnou registráciou a pilotnou certifikáciou EASA pre kategórie Open A1/A3. Lety realizujeme bezpečne a v plnom súlade s platnou leteckou legislatívou SR.'
        },
        {
            id: 'faq-presence',
            q: 'Je nutná osobná prítomnosť pri zbere leteckých dát?',
            a: 'Nie. Zber dát realizujeme samostatne na základe parcelného čísla alebo GPS súradníc. Digitálne náhľady a spracované dáta odovzdávame elektronicky.'
        },
        {
            id: 'faq-materials',
            q: 'Aké materiály využívate pri veľkoformátovej tlači?',
            a: 'Používame kompozitné hliníkové panely (Dibond) s dlhodobou stálosťou, ľahké PVC dosky (Komatex) a spevnené PVC bannery s kovovými očkami. Všetko s priamou UV technológiou tlače.'
        },
        {
            id: 'faq-software',
            q: 'V akom technologickom stacku vyvíjate webové aplikácie?',
            a: 'Vyvíjame v modernom full-stack ekosystéme Next.js, React a TypeScript s integráciou GIS mapových vrstiev (MapLibre / MapTiler). Zabezpečujeme čistý kód, vysokú rýchlosť a odovzdanie zdrojových súborov.'
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return ( // return JSX layout
        <section id="faq" className="py-24 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-black/5 dark:border-white/5"> {/* section wrapper */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Otázky a odpovede
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display">Často kladené otázky</h2> {/* title */}
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-base sm:text-lg">Všetko, čo potrebujete vedieť pred začiatkom spolupráce.</p>
                </div> {/* header block end */}

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <ScrollReveal key={faq.id} delay={index * 0.08}>
                                <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white dark:bg-[#151C2C] border-amber-500/50 shadow-[0_10px_25px_rgba(245,158,11,0.1)]' : 'bg-white/70 dark:bg-[#151C2C]/50 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'}`}>
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none gap-4"
                                    >
                                        <span className={`text-base sm:text-lg font-bold font-display transition-colors ${isOpen ? 'text-amber-500 dark:text-amber-400' : 'text-gray-900 dark:text-white'}`}>
                                            {faq.q}
                                        </span>
                                        <span className={`text-2xl font-bold transition-transform duration-300 shrink-0 ${isOpen ? 'text-amber-500 rotate-45' : 'text-gray-400'}`}>
                                            +
                                        </span>
                                    </button>
                                    
                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 border-t border-black/5 dark:border-white/10 p-6 pt-2 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
