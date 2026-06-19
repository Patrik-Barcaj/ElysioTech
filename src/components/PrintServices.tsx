import React from 'react'; // import react library

export default function PrintServices() { // export print services component
    return ( // return jsx content
        <section id="print" className="py-24 bg-gradient-to-b from-[#0a0715] to-[#0f0a1f] relative border-t border-white/5"> {/* section container */}
            <div className="absolute inset-0 z-0 pointer-events-none"> {/* background graphics wrapper */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-aurora-purple/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30"> {/* center glow */}</div>
            </div> {/* background graphics end */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max width content wrapper */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> {/* split grid structure */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 order-2 lg:order-1"> {/* visual element box */}
                        <img src="/print-production.png" alt="Print Production" className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700" /> {/* production image with local premium render */}
                        <div className="absolute inset-0 bg-gradient-to-r from-aurora-dark via-transparent to-transparent"> {/* vignette overlay */}</div>
                    </div> {/* visual element box end */}
                    <div className="order-1 lg:order-2"> {/* text block wrapper */}
                        <h2 className="text-sm font-bold text-aurora-purple tracking-widest uppercase mb-3 font-display"> {/* subtitle tag */}
                            Komplexné riešenia {/* text content */}
                        </h2> {/* subtitle end */}
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6 leading-tight"> {/* main title header */}
                            Spolupráca s Tlačiarňami & Tlač {/* text content */}
                        </h3> {/* main title end */}
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed"> {/* body text paragraph */}
                            Všetko, čo pre vás navrhneme a vytvoríme, dokážeme kompletne zabezpečiť aj v tlačenej forme. Vďaka úzkej spolupráci s overenými tlačiarňami preberáme celú logistiku a technické detaily na seba. {/* text content */}
                        </p> {/* body text end */}
                        <div className="space-y-6"> {/* feature list container */}
                            <div className="flex items-start"> {/* list item container 1 */}
                                <div className="w-10 h-10 rounded-xl bg-aurora-purple/20 flex items-center justify-center mr-4 text-aurora-purple border border-aurora-purple/30 shrink-0"> {/* icon badge */}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {/* check icon */}
                                </div> {/* icon badge end */}
                                <div> {/* description wrapper */}
                                    <h4 className="text-lg font-bold text-white font-display mb-1">Bezstarostný proces (Turnkey)</h4> {/* title */}
                                    <p className="text-gray-400">Pripravíme podklady, skontrolujeme farebnosť, zadáme do výroby a doručíme hotový produkt až k vám.</p> {/* desc */}
                                </div> {/* description wrapper end */}
                            </div> {/* list item end 1 */}
                            <div className="flex items-start"> {/* list item container 2 */}
                                <div className="w-10 h-10 rounded-xl bg-aurora-purple/20 flex items-center justify-center mr-4 text-aurora-purple border border-aurora-purple/30 shrink-0"> {/* icon badge */}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> {/* print icon */}
                                </div> {/* icon badge end */}
                                <div> {/* description wrapper */}
                                    <h4 className="text-lg font-bold text-white font-display mb-1">Široká škála formátov</h4> {/* title */}
                                    <p className="text-gray-400">Od vizitiek, letákov, brožúr až po veľkoformátové bannery a reklamné predmety.</p> {/* desc */}
                                </div> {/* description wrapper end */}
                            </div> {/* list item end 2 */}
                            <div className="flex items-start"> {/* list item container 3 */}
                                <div className="w-10 h-10 rounded-xl bg-aurora-purple/20 flex items-center justify-center mr-4 text-aurora-purple border border-aurora-purple/30 shrink-0"> {/* icon badge */}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {/* eur icon */}
                                </div> {/* icon badge end */}
                                <div> {/* description wrapper */}
                                    <h4 className="text-lg font-bold text-white font-display mb-1">Výhodné ceny a prémiová kvalita</h4> {/* title */}
                                    <p className="text-gray-400">Vďaka partnerským zľavám vieme ponúknuť priaznivé ceny pri zachovaní najvyššej kvality tlače.</p> {/* desc */}
                                </div> {/* description wrapper end */}
                            </div> {/* list item end 3 */}
                        </div> {/* feature list end */}
                    </div> {/* text block wrapper end */}
                </div> {/* split grid end */}
            </div> {/* max width content wrapper end */}
        </section> // section container end
    ); // return end
} // component end
