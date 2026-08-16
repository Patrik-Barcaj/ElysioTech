"use client"; // mark as client component
import React, { useState } from 'react'; // import react library and useState
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function Contact() { // export Contact component function
    const [isSubmitted, setIsSubmitted] = useState(false); // form submission state
    const [isSubmitting, setIsSubmitting] = useState(false); // form loading state

    const handleSubmit = (e: React.FormEvent) => { // handle form submit
        e.preventDefault(); // prevent page reload
        setIsSubmitting(true); // set submitting state

        // Simulate API call
        setTimeout(() => { // simulate delay
            setIsSubmitting(false); // reset submitting state
            setIsSubmitted(true); // set submitted state
        }, 1000); // 1 second delay
    }; // handle form submit end

    return ( // return JSX layout
        <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0B0F17] relative border-t border-black/5 dark:border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="max-w-3xl mx-auto text-center mb-16"> {/* header wrapper */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Priamy kontakt
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display mb-4 tracking-tight">
                        Získajte rýchlu cenovú ponuku
                    </h2> {/* title */}
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Napíšte nám na WhatsApp, zavolajte alebo pošlite správu cez formulár. Ozveme sa obratom.
                    </p> {/* description */}
                </div> {/* header wrapper end */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch"> {/* split layout grid */}
                    <ScrollReveal delay={0.1} className="h-full"> {/* left side scroll reveal */}
                        <div className="h-full bg-white shadow-sm dark:shadow-none dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:border-amber-500/40 relative overflow-hidden group"> {/* form card container */}
                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10"> {/* form wrapper */}
                                <div> {/* name wrapper */}
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1.5">Vaše meno / Spoločnosť</label> {/* label name */}
                                    <input type="text" id="name" required className="w-full bg-gray-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Meno Priezvisko / Firma" /> {/* name input field */}
                                </div> {/* name wrapper end */}
                                <div> {/* email wrapper */}
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1.5">Emailová adresa alebo telefón</label> {/* label email */}
                                    <input type="text" id="email" required className="w-full bg-gray-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="+421 9XX XXX XXX / email@firma.sk" /> {/* email input field */}
                                </div> {/* email wrapper end */}
                                <div> {/* message wrapper */}
                                    <label htmlFor="msg" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1.5">Popis projektu alebo parcelné číslo</label> {/* label message */}
                                    <textarea id="msg" rows={4} required className="w-full bg-gray-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Zábery pozemku v Senci / UV tlač tabule 2x1m / One-page web"></textarea> {/* message textarea field */}
                                </div> {/* message wrapper end */}
                                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold font-display rounded-xl text-base tracking-wide transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"> {/* submit button */}
                                    {isSubmitting ? 'Odosielam...' : 'Odoslať dopyt'} {/* button label */}
                                </button> {/* submit button end */}
                            </form> {/* form wrapper end */}
                        </div> {/* form card container end */}
                    </ScrollReveal> {/* left side scroll reveal end */}

                    <ScrollReveal delay={0.2} direction="left" className="h-full"> {/* right side scroll reveal */}
                        <div className="h-full flex flex-col justify-between space-y-8 p-4"> {/* contact info column */}
                            <div> {/* support section */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-4">Priama komunikácia</h3> {/* title */}
                                <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                    <li className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                        <span><strong className="text-gray-900 dark:text-white">WhatsApp & SMS:</strong> Najrýchlejšia odozva do niekoľkých minút počas celého dňa.</span>
                                    </li>
                                    <li className="flex items-start gap-3 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                                        <span><strong className="text-gray-900 dark:text-white">Telefonický kontakt:</strong> Kedykoľvek cez pracovné dni aj cez víkendy.</span>
                                    </li>
                                    <li className="flex items-start gap-3 p-3 rounded-2xl bg-slate-500/5 border border-black/10 dark:border-white/10">
                                        <span className="text-gray-400 font-bold mt-0.5">•</span>
                                        <span><strong className="text-gray-900 dark:text-white">Osobné stretnutia & Obhliadky:</strong> Bratislava, Senec, Pezinok, Dunajská Lužná a okolie.</span>
                                    </li>
                                </ul>
                            </div> {/* support section end */}

                            <div> {/* direct action buttons block */}
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-display mb-3">Rýchle spojenie</h3> {/* social title */}
                                <div className="flex flex-col sm:flex-row gap-3"> {/* flex container */}
                                    <a href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20vizualu/tlace/webu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold transition-all shadow-md"> {/* whatsapp button */}
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                        <span>WhatsApp Správa</span>
                                    </a>

                                    <a href="tel:+421903406402" className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:border-amber-500/50 transition-all">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        <span>+421 903 406 402</span>
                                    </a>
                                </div> {/* flex container end */}
                            </div> {/* direct action buttons end */}
                        </div> {/* contact info column end */}
                    </ScrollReveal> {/* right side scroll reveal end */}
                </div> {/* split layout grid end */}
            </div> {/* container block end */}
            
            {isSubmitted && ( // popup condition
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"> {/* overlay */}
                    <div className="bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden"> {/* popup container */}
                        <div className="relative z-10"> {/* popup content */}
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500"> {/* icon container */}
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {/* success icon */}
                            </div> {/* icon container end */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Správa odoslaná!</h3> {/* title */}
                            <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm">Ďakujeme za váš dopyt. Budeme vás kontaktovať obratom.</p> {/* text */}
                            <button onClick={() => setIsSubmitted(false)} className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-xl font-bold transition-all"> {/* close button */}
                                Zavrieť {/* button text */}
                            </button> {/* close button end */}
                        </div> {/* popup content end */}
                    </div> {/* popup container end */}
                </div> // overlay end
            )} {/* popup condition end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
