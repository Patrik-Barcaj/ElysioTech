"use client"; // add client directive for state

import React, { useState, useEffect } from 'react'; // import react and hooks

export default function Testimonials() { // export Testimonials component function
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // state for hover pause

    const allReviews = [
        { id: 'rev-1', type: 'drone', name: 'Marek T. (Bratislava)', proj: 'Letecké ortofoto & grafika pozemku', text: 'Veľmi profesionálne a presné zábery nášho stavebného pozemku na predaj. Vektorové zakreslenie inžinierskych sietí nám ušetrilo množstvo času pri komunikácii so záujemcami.' },
        { id: 'rev-2', type: 'print', name: 'Peter K. (Senec)', proj: 'Veľkoformátový PVC banner', text: 'Banner na oplotenie areálu bol vytlačený a dodaný v priebehu 3 dní. Vysoká odolnosť voči poveternostným vplyvom a presné farby priamej UV tlače.' },
        { id: 'rev-3', type: 'web', name: 'Michaela C. (Pezinok)', proj: 'One-Page prezentačný web', text: 'Rýchla realizácia webu pre developerský projekt. Načítanie stránky je okamžité a zábery z dronu pôsobia na klientov maximálne reprezentatívne.' },
        { id: 'rev-4', type: 'drone', name: 'Jozef M. (Dunajská Lužná)', proj: '4K video & fotodokumentácia', text: 'Skvelá spolupráca, rýchly výjazd a výborná kvalita výstupov. Všetko prebehlo samostatne bez nutnosti mojej osobnej prítomnosti na pozemku.' }
    ];

    // Auto-advance logic
    useEffect(() => {
        if (isHovered) return; // pause if hovered
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % allReviews.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, [allReviews.length, isHovered]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % allReviews.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);

    return ( // return JSX layout
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-[#0f1420] relative border-t border-black/5 dark:border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Hodnotenia
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display">Čo hovoria naši klienti</h2> {/* title */}
                </div> {/* header block end */}

                <div 
                    className="relative group/carousel max-w-2xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)} // set hover true
                    onMouseLeave={() => setIsHovered(false)} // set hover false
                > {/* carousel container with constrained width */}
                    <div className="overflow-hidden"> {/* mask */}
                        <div 
                            className="flex transition-transform duration-700 ease-in-out" 
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        > {/* slider flex container */}
                            {allReviews.map((r) => ( // map all reviews
                                <div key={r.id} className="w-full shrink-0 px-4 py-4"> {/* slide wrapper */}
                                    <div className="max-w-md mx-auto bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-amber-500/40 shadow-lg"> {/* card */}
                                        <div className="flex mb-4 text-lg text-amber-500">
                                            ★★★★★
                                        </div> {/* stars rating */}
                                        <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base italic mb-6 leading-relaxed">&ldquo;{r.text}&rdquo;</p> {/* testimonial text */}
                                        <div> {/* author wrapper */}
                                            <p className="text-gray-900 dark:text-white font-bold font-display text-base">{r.name}</p> {/* author name */}
                                            <p className="text-xs sm:text-sm font-medium mt-1 text-emerald-600 dark:text-emerald-400">{r.proj}</p> {/* author project */}
                                        </div> {/* author wrapper end */}
                                    </div> {/* card end */}
                                </div> // slide wrapper end
                            ))}
                        </div> {/* slider flex container end */}
                    </div> {/* mask end */}

                    {/* Navigation Buttons */}
                    <button onClick={prev} aria-label="Predchádzajúce hodnotenie" className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-12 p-3 bg-white dark:bg-[#151C2C] text-gray-900 dark:text-white rounded-full border border-black/10 dark:border-white/10 hover:border-amber-500/50 transition-colors z-10 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 shadow-xl"> {/* prev button */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg> {/* icon */}
                    </button> {/* prev button end */}
                    <button onClick={next} aria-label="Ďalšie hodnotenie" className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-12 p-3 bg-white dark:bg-[#151C2C] text-gray-900 dark:text-white rounded-full border border-black/10 dark:border-white/10 hover:border-amber-500/50 transition-colors z-10 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 shadow-xl"> {/* next button */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg> {/* icon */}
                    </button> {/* next button end */}

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-6 gap-2"> {/* dots container */}
                        {allReviews.map((r, i) => ( // map dots
                            <button 
                                key={`dot-${r.id}`} 
                                onClick={() => setCurrentIndex(i)} 
                                aria-label={`Prejsť na hodnotenie ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-amber-500 w-6' : 'bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40 w-2'}`}
                            /> // dot
                        ))}
                    </div> {/* dots container end */}

                </div> {/* carousel container end */}

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
