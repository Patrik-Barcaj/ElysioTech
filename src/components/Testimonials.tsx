"use client"; // add client directive for state

import React, { useState, useEffect } from 'react'; // import react and hooks

export default function Testimonials() { // export Testimonials component function
    const digitalReviews = [ // array of digital studio reviews
        { type: 'digital', name: 'Violet F.', proj: 'Úprava reklamného banneru', text: 'Veľmi rýchla a bezproblémová úprava fotiek na našom reklamnom banneri. Výmena fotky budovy a doplnenie loga prebehlo obratom a profesionálne.' }, // review 1 with custom banner modification summary
        { type: 'digital', name: 'Lucia G.', proj: 'Dizajn produktových etikiet', text: 'Ďakujem za skvelú prácu a veľmi príjemnú komunikáciu. Grafické podklady boli dodané precízne a navyše za férovú cenu.' }, // review 2 with custom label graphics work summary
        { type: 'digital', name: 'Michaela C.', proj: 'Úprava webstránky', text: 'Veľmi oceňujem rýchlosť a ochotu pri úprave webovej stránky. Všetky požadované zmeny boli zapracované presne podľa predstáv a fungujú super.' } // review 3 with custom web modification summary
    ]; // digital reviews end

    const droneReviews = [ // array of drone services reviews
        { type: 'drone', name: 'Marek T.', proj: 'Zábery rodinného domu', text: 'Veľmi pekné fotky nášho domu a pozemku na predaj. Komunikácia bola rýchla, cena priateľská a zábery z výšky nám veľmi pomohli pri inzercii.' }, // review 1 with custom realistic family home shoot summary
        { type: 'drone', name: 'Jozef M.', proj: 'Video & foto vinohradu', text: 'Skvelé letecké video a fotky nášho vinohradu na web. Výborná komunikácia a výsledné 4K zábery vyzerajú naozaj reprezentatívne.' }, // review 2 with shortened vineyard shoot summary
        { type: 'drone', name: 'Anonymný klient', proj: 'Fotenie záhrady & statku', text: 'Naozaj nádherná práca, výsledné letecké fotky našej záhrady a statku vyzerajú úplne super a kvalitne. Odporúčam.' } // review 3 with custom drone garden work summary
    ]; // drone reviews end

    // Mix reviews by alternating them to keep it dynamic
    const allReviews = [];
    for (let i = 0; i < Math.max(digitalReviews.length, droneReviews.length); i++) {
        if (digitalReviews[i]) allReviews.push(digitalReviews[i]);
        if (droneReviews[i]) allReviews.push(droneReviews[i]);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // state for hover pause

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
        <section id="testimonials" className="py-24 bg-aurora-dark relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <h2 className="text-sm font-bold text-aurora-green tracking-widest uppercase mb-3 font-display">Hodnotenia</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Čo Hovoria Naši Klienti</h3> {/* title */}
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
                            {allReviews.map((r, i) => ( // map all reviews
                                <div key={i} className="w-full shrink-0 px-4 py-4"> {/* slide wrapper */}
                                    {/* Presný štýl pôvodnej karty */}
                                    <div className={`max-w-md mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 shadow-lg ${r.type === 'digital' ? 'hover:border-aurora-purple/40 hover:shadow-[0_0_30px_rgba(191,90,242,0.15)]' : 'hover:border-aurora-green/40 hover:shadow-[0_0_30px_rgba(161,255,206,0.15)]'}`}> {/* card */}
                                        <div className={`flex mb-4 text-xl ${r.type === 'digital' ? 'text-aurora-purple' : 'text-aurora-green'}`}>★ ★ ★ ★ ★</div> {/* stars rating */}
                                        <p className="text-gray-300 text-base italic mb-6 leading-relaxed">"{r.text}"</p> {/* testimonial text */}
                                        <div> {/* author wrapper */}
                                            <p className="text-white font-bold font-display text-base">{r.name}</p> {/* author name */}
                                            <p className={`text-sm font-light mt-1 ${r.type === 'digital' ? 'text-aurora-purple' : 'text-aurora-green'}`}>{r.proj}</p> {/* author project */}
                                        </div> {/* author wrapper end */}
                                    </div> {/* card end */}
                                </div> // slide wrapper end
                            ))}
                        </div> {/* slider flex container end */}
                    </div> {/* mask end */}

                    {/* Navigation Buttons */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-12 p-3 bg-[#0a0715]/90 text-white rounded-full border border-white/10 hover:bg-white/10 transition-colors z-10 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:scale-110 shadow-xl"> {/* prev button */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg> {/* icon */}
                    </button> {/* prev button end */}
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-12 p-3 bg-[#0a0715]/90 text-white rounded-full border border-white/10 hover:bg-white/10 transition-colors z-10 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:scale-110 shadow-xl"> {/* next button */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg> {/* icon */}
                    </button> {/* next button end */}

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-6 gap-2"> {/* dots container */}
                        {allReviews.map((_, i) => ( // map dots
                            <button 
                                key={i} 
                                onClick={() => setCurrentIndex(i)} 
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50 w-2'}`}
                            /> // dot
                        ))}
                    </div> {/* dots container end */}

                </div> {/* carousel container end */}

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
