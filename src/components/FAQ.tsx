"use client"; // use client directive
import { useState } from 'react'; // import useState hook
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function FAQ() { // export FAQ component function
    const [openDigital, setOpenDigital] = useState<number | null>(null); // state for open digital faq index
    const [openDrone, setOpenDrone] = useState<number | null>(null); // state for open drone faq index

    const digitalFaqs = [ // FAQ array for digital studio
        { q: 'Aké technológie využívate pri vývoji?', a: 'Pre weby a menšie aplikácie využívame moderné technológie ako Next.js, React a klasické HTML/CSS. Vždy sa prispôsobíme tomu, čo konkrétny projekt vyžaduje.' }, // faq 1
        { q: 'Ako to funguje s tlačou grafiky?', a: 'Všetko, čo pre vás graficky navrhneme (vizitky, letáky, bannery), vieme po vzájomnej dohode dať vytlačiť u našich partnerských tlačiarní a doručiť hotové až k vám.' }, // faq 2
        { q: 'Ako dlho trvá dodanie webovej stránky?', a: ' Vyhotovenie závisí na náročnosti projektu a schválení grafického návrhu s dodaním všetkých podkladov. Jednoduchú prezentačnú webstránku zvyčajne dodáme už do 4 pracovných dní.' }, // faq 3
        { q: 'Poskytujete aj webhosting a správu domény?', a: 'Áno, vieme vám pomôcť s kúpou domény, nastavením webhostingu a následnou technickou správou webu, aby ste sa nemuseli o nič starať.' }, // faq 4
        { q: 'Robíte aj optimalizáciu pre vyhľadávače (SEO)?', a: 'Základnú on-page optimalizáciu pre vyhľadávače (správna štruktúra webu, meta popisky, rýchlosť načítania) robíme automaticky pri každom webe.' } // faq 5
    ]; // digital faqs end


    const droneFaqs = [ // FAQ array for drone services
        { q: 'Aké drony používate na zábery?', a: 'Používame moderné kompaktné drony, ktoré sú ideálne na tvorbu kvalitných leteckých fotografií a plynulých 4K videosekvencií s ohľadom na bezpečnosť a pravidlá letu.' }, // faq 1
        { q: 'Aká je cena za letecké zábery?', a: 'Cena je individuálna a závisí od rozsahu fotenia/natáčania, miesta a postprodukcie. Radi vám pripravíme cenovú ponuku na mieru po krátkej konzultácii.' }, // faq 2
        { q: 'Čo ak bude v deň natáčania nepriaznivé počasie?', a: 'V prípade zlého počasia (silný vietor, dážď, husté sneženie) let z bezpečnostných dôvodov presunieme na najbližší možný náhradný termín bez dodatočných poplatkov.' }, // faq 3
        { q: 'Potrebujem na natáčanie dronom nejaké povolenie?', a: 'My zabezpečujeme kompletné legislatívne krytie vrátane povolení a poistenia. Ak sa let realizuje v chránenej oblasti, môže to vyžadovať dlhšiu prípravu.' }, // faq 4
        { q: 'Ponúkate aj 3D mapovanie alebo inšpekčné práce?', a: 'Nie, zameriavame sa čisto na vizuálne letecké fotografie a videá (napr. zábery pozemkov, chát, prírody či rodinných udalostí). Technické inšpekcie a 3D skenovanie neponúkame.' } // faq 5

    ]; // drone faqs end

    const toggleDigital = (index: number) => { // function to toggle digital faq
        setOpenDigital(openDigital === index ? null : index); // close if open, otherwise open index
    }; // toggle function end

    const toggleDrone = (index: number) => { // function to toggle drone faq
        setOpenDrone(openDrone === index ? null : index); // close if open, otherwise open index
    }; // toggle function end

    return ( // return JSX layout
        <section id="faq" className="py-24 bg-[#0a0715] relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <h2 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display">Otázky a odpovede</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Často Kladené Otázky</h3> {/* title */}
                </div> {/* header block end */}

                {/* Digital Studio FAQ */}
                <div className="mb-12"> {/* digital faq block */}
                    <h4 className="text-2xl font-bold font-display text-white mb-6 border-l-4 border-aurora-purple pl-4">Digital <span className="text-aurora-purple">Studio</span></h4> {/* section title */}
                    <div className="space-y-4"> {/* faqs wrapper */}
                        {digitalFaqs.map((faq, i) => { // map digital faqs
                            return ( // return digital card JSX
                                <ScrollReveal key={i} delay={i * 0.1}> {/* scroll reveal wrap */}
                                    <div className="bg-aurora-glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-aurora-purple/50 hover:shadow-[0_10px_30px_-10px_rgba(191,90,242,0.3)] group relative"> {/* faq card container */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                        <button onClick={() => toggleDigital(i)} className="w-full flex justify-between items-center p-6 text-left text-white hover:bg-white/5 transition-colors focus:outline-none relative z-10"> {/* button toggle */}
                                            <span className="text-lg font-bold font-display">{faq.q}</span> {/* question text */}
                                            <span className="text-2xl font-bold text-aurora-purple ml-4 shrink-0">{openDigital === i ? '−' : '+'}</span> {/* state icon */}
                                        </button> {/* button closing tag */}
                                        <div className={`transition-all duration-350 ease-in-out overflow-hidden ${openDigital === i ? 'max-h-80 border-t border-white/5 p-6 bg-white/[0.02]' : 'max-h-0'}`}> {/* panel container with expanded height limit */}
                                            <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p> {/* answer text block */}
                                        </div> {/* panel closing tag element */}
                                    </div>
                                </ScrollReveal> // scroll reveal end
                            ); // return end
                        })} {/* map end */}
                    </div> {/* faqs wrapper end */}
                </div> {/* digital faq block end */}

                {/* Air Drones FAQ */}
                <div> {/* air faq block */}
                    <h4 className="text-2xl font-bold font-display text-white mb-6 border-l-4 border-aurora-green pl-4">Air <span className="text-aurora-green">Drones</span></h4> {/* section title */}
                    <div className="space-y-4"> {/* faqs wrapper */}
                        {droneFaqs.map((faq, i) => { // map drone faqs
                            return ( // return drone card JSX
                                <ScrollReveal key={i} delay={i * 0.1}> {/* scroll reveal wrap */}
                                    <div className="bg-aurora-glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-aurora-green/50 hover:shadow-[0_10px_30px_-10px_rgba(48,209,88,0.3)] group relative"> {/* faq card container */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                        <button onClick={() => toggleDrone(i)} className="w-full flex justify-between items-center p-6 text-left text-white hover:bg-white/5 transition-colors focus:outline-none relative z-10"> {/* button toggle */}
                                            <span className="text-lg font-bold font-display">{faq.q}</span> {/* question text */}
                                            <span className="text-2xl font-bold text-aurora-green ml-4 shrink-0">{openDrone === i ? '−' : '+'}</span> {/* state icon */}
                                        </button> {/* button closing tag */}
                                        <div className={`transition-all duration-350 ease-in-out overflow-hidden ${openDrone === i ? 'max-h-80 border-t border-white/5 p-6 bg-white/[0.02]' : 'max-h-0'}`}> {/* panel container with expanded height limit */}
                                            <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p> {/* answer text block */}
                                        </div> {/* panel closing tag element */}
                                    </div>
                                </ScrollReveal> // scroll reveal end
                            ); // return end
                        })} {/* map end */}
                    </div> {/* faqs wrapper end */}
                </div> {/* air faq block end */}

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
