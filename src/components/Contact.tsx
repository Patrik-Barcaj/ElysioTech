import React from 'react'; // import react library
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function Contact() { // export Contact component function
    return ( // return JSX layout
        <section id="contact" className="py-24 bg-aurora-dark relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="max-w-3xl mx-auto text-center mb-16"> {/* header wrapper */}
                    <h2 className="text-sm font-bold text-aurora-green tracking-widest uppercase mb-3 font-display">Spojme sa</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6 tracking-tight">Kontaktujte nás</h3> {/* title */}
                    <p className="text-gray-400 text-lg">Máte záujem o spoluprácu? Napíšte nám a spoločne navrhneme najlepšie riešenie.</p> {/* description */}
                </div> {/* header wrapper end */}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"> {/* split layout grid */}
                    <ScrollReveal delay={0.1} className="h-full"> {/* left side scroll reveal */}
                        <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:border-aurora-indigo/50 hover:shadow-[0_20px_50px_-15px_rgba(94,92,230,0.4)] hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-indigo/5 relative overflow-hidden group"> {/* form card container */}
                            <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                            <form className="space-y-6 relative z-10"> {/* form wrapper */}
                                <div> {/* name wrapper */}
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Vaše meno</label> {/* label name */}
                                    <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-aurora-purple focus:border-transparent transition-all" placeholder="Meno Priezvisko" /> {/* name input field */}
                                </div> {/* name wrapper end */}
                                <div> {/* email wrapper */}
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Emailová adresa</label> {/* label email */}
                                    <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-aurora-purple focus:border-transparent transition-all" placeholder="meno@email.com" /> {/* email input field */}
                                </div> {/* email wrapper end */}
                                <div> {/* message wrapper */}
                                    <label htmlFor="msg" className="block text-sm font-medium text-gray-300 mb-2">Správa</label> {/* label message */}
                                    <textarea id="msg" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-aurora-green focus:border-transparent transition-all" placeholder="Ako vám môžeme pomôcť?"></textarea> {/* message textarea field */}
                                </div> {/* message wrapper end */}
                                <button type="button" className="w-full py-4 bg-gradient-to-r from-aurora-purple to-aurora-indigo text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(191,90,242,0.4)] transition-all duration-300 transform hover:-translate-y-1"> {/* submit button */}
                                    Odoslať správu {/* button label */}
                                </button> {/* submit button end */}
                            </form> {/* form wrapper end */}
                        </div> {/* form card container end */}
                    </ScrollReveal> {/* left side scroll reveal end */}
                    
                    <ScrollReveal delay={0.3} direction="left" className="h-full"> {/* right side scroll reveal */}
                        <div className="h-full flex flex-col justify-center space-y-10 p-4"> {/* contact info column */}
                            <div> {/* company address block */}
                                <h4 className="text-xl font-bold text-white font-display mb-3">Sídlo</h4> {/* title */}
                                <p className="text-gray-400">Bratislava, Slovensko</p> {/* address description */}
                            </div> {/* company address block end */}
                            
                            <div> {/* direct contact block */}
                                <h4 className="text-xl font-bold text-white font-display mb-3">Priamy kontakt</h4> {/* title */}
                                <p className="text-gray-400 text-lg mb-2">Email: <a href="mailto:info@elysiotech.com" className="text-white hover:text-aurora-purple transition-colors">info@elysiotech.com</a></p> {/* email */}
                                <p className="text-gray-500 text-sm">Telefón: +421 903 406 406</p> {/* smaller phone number */}
                            </div> {/* direct contact block end */}
                            
                            <div> {/* social links block */}
                                <h4 className="text-xl font-bold text-white font-display mb-4">Rýchla správa</h4> {/* social title */}
                                <div className="flex gap-4"> {/* flex row container */}
                                    <a href="https://instagram.com/elysiotech" target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white overflow-hidden group hover:border-transparent transition-all duration-300"> {/* instagram button */}
                                        <span className="absolute inset-0 bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span> {/* instagram gradient layer */}
                                        <svg className="w-5 h-5 relative z-10 text-pink-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> {/* instagram SVG icon */}
                                        <span className="relative z-10 font-medium">Instagram</span> {/* label */}
                                    </a> {/* instagram button end */}
                                    
                                    <a href="https://wa.me/421903406406" target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white overflow-hidden group hover:border-transparent transition-all duration-300"> {/* whatsapp button */}
                                        <span className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span> {/* whatsapp gradient layer */}
                                        <svg className="w-5 h-5 relative z-10 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z"/></svg> {/* whatsapp icon */}
                                        <span className="relative z-10 font-medium">WhatsApp</span> {/* label */}
                                    </a> {/* whatsapp button end */}
                                </div> {/* flex row end */}
                            </div> {/* social links block end */}
                        </div> {/* contact info column end */}
                    </ScrollReveal> {/* right side scroll reveal end */}
                </div> {/* split layout grid end */}
            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
