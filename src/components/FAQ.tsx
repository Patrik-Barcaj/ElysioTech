"use client"; // use client directive
import React, { useState } from 'react'; // import react and useState
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function FAQ() { // export FAQ component function
    const [openCategory, setOpenCategory] = useState<number | null>(0); // state for open category index, default 0
    const [openQuestion, setOpenQuestion] = useState<number | null>(null); // state for open question index

    const faqCategories = [ // categorized FAQ array
        { // category item 1
            title: 'Model spolupráce a Ceny', // cat title
            faqs: [ // cat faqs
                { q: 'Musím platiť mesačný paušál?', a: 'Nie. Ak preferujete vlastniť kód, radi vám web, systém alebo grafiku naceníme a odpredáme jednorazovo. Na paušály zároveň platí 3-mesačná garancia a nulový vstupný poplatok pre balíky ŠTART a PRO.' }, // faq 1
                { q: 'Aká je cena za letecké zábery?', a: 'Cena je individuálna a závisí od rozsahu fotenia/natáčania, miesta a postprodukcie. Radi vám pripravíme cenovú ponuku na mieru po krátkej konzultácii.' } // faq 2
            ] // cat faqs end
        }, // category item 1 end
        { // category item 2
            title: 'Weby a Systémy', // cat title
            faqs: [ // cat faqs
                { q: 'Aké technológie využívate pri vývoji?', a: 'Pre weby a menšie aplikácie využívame moderné technológie ako Next.js, React a klasické HTML/CSS. Vždy sa prispôsobíme tomu, čo konkrétny projekt vyžaduje.' }, // faq 1
                { q: 'Ako dlho trvá dodanie webovej stránky?', a: ' Vyhotovenie závisí na náročnosti projektu a schválení grafického návrhu s dodaním všetkých podkladov. Jednoduchú prezentačnú webstránku zvyčajne dodáme už do 4 pracovných dní.' }, // faq 2
                { q: 'Poskytujete aj webhosting a správu domény?', a: 'Áno, vieme vám pomôcť s kúpou domény, nastavením webhostingu a následnou technickou správou webu, aby ste sa nemuseli o nič starať.' }, // faq 3
                { q: 'Robíte aj optimalizáciu pre vyhľadávače (SEO)?', a: 'Základnú on-page optimalizáciu pre vyhľadávače (správna štruktúra webu, meta popisky, rýchlosť načítania) robíme automaticky pri každom webe.' } // faq 4
            ] // cat faqs end
        }, // category item 2 end
        { // category item 3
            title: 'Drony a Letecké zábery', // cat title
            faqs: [ // cat faqs
                { q: 'Aké drony používate na zábery?', a: 'Používame moderné kompaktné drony, ktoré sú ideálne na tvorbu kvalitných leteckých fotografií a plynulých 4K videosekvencií s ohľadom na bezpečnosť a pravidlá letu.' }, // faq 1
                { q: 'Čo ak bude v deň natáčania nepriaznivé počasie?', a: 'V prípade zlého počasia (silný vietor, dážď, husté sneženie) let z bezpečnostných dôvodov presunieme na najbližší možný náhradný termín bez dodatočných poplatkov.' }, // faq 2
                { q: 'Potrebujem na natáčanie dronom nejaké povolenie?', a: 'My zabezpečujeme kompletné legislatívne krytie vrátane povolení a poistenia. Ak sa let realizuje v chránenej oblasti, môže to vyžadovať dlhšiu prípravu.' }, // faq 3
                { q: 'Ponúkate aj 3D mapovanie alebo inšpekčné práce?', a: 'Nie, zameriavame sa čisto na vizuálne letecké fotografie a videá (napr. zábery pozemkov, chát, prírody či rodinných udalostí). Technické inšpekcie a 3D skenovanie neponúkame.' } // faq 4
            ] // cat faqs end
        }, // category item 3 end
        { // category item 4
            title: 'Grafika a Tlač', // cat title
            faqs: [ // cat faqs
                { q: 'Ako to funguje s tlačou grafiky?', a: 'Všetko, čo pre vás graficky navrhneme (vizitky, letáky, bannery), vieme po vzájomnej dohode dať vytlačiť u našich partnerských tlačiarní a doručiť hotové až k vám.' } // faq 1
            ] // cat faqs end
        } // category item 4 end
    ]; // categorized faq array end

    const toggleCategory = (index: number) => { // function to toggle category
        setOpenCategory(openCategory === index ? null : index); // close if open, open if closed
        setOpenQuestion(null); // always reset question when switching category
    }; // toggle category end

    const toggleQuestion = (index: number, e: React.MouseEvent) => { // function to toggle question
        e.stopPropagation(); // prevent bubbling to category
        setOpenQuestion(openQuestion === index ? null : index); // close if open, open if closed
    }; // toggle question end

    return ( // return JSX layout
        <section id="faq" className="py-24 bg-[#0a0715] relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <h2 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display">Otázky a odpovede</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Často Kladené Otázky</h3> {/* title */}
                </div> {/* header block end */}

                <div className="mb-12"> {/* unified faq block */}
                    <div className="space-y-6"> {/* categories wrapper */}
                        {faqCategories.map((category, catIndex) => ( // map categories
                            <ScrollReveal key={catIndex} delay={catIndex * 0.1}> {/* scroll reveal wrap */}
                                <div className={`border rounded-3xl overflow-hidden transition-all duration-500 ${openCategory === catIndex ? 'bg-aurora-glass border-aurora-purple/40 shadow-[0_10px_30px_-10px_rgba(191,90,242,0.2)]' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}> {/* category card container */}
                                    <button onClick={() => toggleCategory(catIndex)} className="w-full flex justify-between items-center p-6 md:p-8 transition-colors focus:outline-none"> {/* category toggle */}
                                        <span className={`text-xl md:text-2xl font-bold font-display transition-colors ${openCategory === catIndex ? 'text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-indigo' : 'text-white'}`}>{category.title}</span> {/* category title */}
                                        <span className={`text-3xl font-bold transition-transform duration-300 ${openCategory === catIndex ? 'text-aurora-purple rotate-180' : 'text-gray-500 hover:text-white'}`}>{openCategory === catIndex ? '−' : '+'}</span> {/* state icon */}
                                    </button> {/* category button end */}
                                    
                                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${openCategory === catIndex ? 'max-h-[2000px] border-t border-white/10 opacity-100' : 'max-h-0 opacity-0'}`}> {/* category content panel */}
                                        <div className="p-4 md:p-6 space-y-4 bg-black/20"> {/* questions wrapper */}
                                            {category.faqs.map((faq, qIndex) => ( // map questions
                                                <div key={qIndex} className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-aurora-green/30 transition-all duration-300"> {/* question container */}
                                                    <button onClick={(e) => toggleQuestion(qIndex, e)} className="w-full flex justify-between items-center p-5 text-left transition-colors focus:outline-none group"> {/* question toggle */}
                                                        <span className={`text-base font-bold font-display pr-4 transition-colors ${openQuestion === qIndex ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{faq.q}</span> {/* question text */}
                                                        <span className={`text-2xl font-bold shrink-0 transition-colors ${openQuestion === qIndex ? 'text-aurora-green' : 'text-gray-600 group-hover:text-gray-400'}`}>{openQuestion === qIndex ? '−' : '+'}</span> {/* question state icon */}
                                                    </button> {/* question toggle end */}
                                                    <div className={`transition-all duration-350 ease-in-out overflow-hidden ${openQuestion === qIndex ? 'max-h-96 border-t border-white/5 p-5 bg-white/[0.02] opacity-100' : 'max-h-0 opacity-0'}`}> {/* answer panel */}
                                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{faq.a}</p> {/* answer text */}
                                                    </div> {/* answer panel end */}
                                                </div> // question container end
                                            ))} {/* map questions end */}
                                        </div> {/* questions wrapper end */}
                                    </div> {/* category content panel end */}
                                </div> {/* category card container end */}
                            </ScrollReveal> // scroll reveal end
                        ))} {/* map categories end */}
                    </div> {/* categories wrapper end */}
                </div> {/* unified faq block end */}

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
