import React from 'react'; // import react library
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function Contact() { // export Contact component function
    return ( // return JSX layout
        <section id="contact" className="py-24 bg-aurora-dark relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="max-w-3xl mx-auto text-center mb-16"> {/* header wrapper */}
                    <h2 className="text-sm font-bold text-aurora-green tracking-widest uppercase mb-3 font-display">Spojme sa</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6">Kontaktujte nás</h3> {/* title */}
                    <p className="text-gray-400 text-lg">Máte záujem o spoluprácu? Napíšte nám a spoločne navrhneme najlepšie riešenie.</p> {/* description */}
                </div> {/* header wrapper end */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"> {/* split layout grid */}
                    <ScrollReveal delay={0.1} className="h-full"> {/* left side scroll reveal */}
                        <div className="h-full bg-aurora-glass border border-white/10 rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:border-aurora-indigo/50 hover:shadow-[0_20px_50px_-15px_rgba(94,92,230,0.4)] hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-indigo/5 relative overflow-hidden group"> {/* form card container */}
                            <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                            <form className="space-y-6 relative z-10"> {/* form wrapper */}
                                <div> {/* name wrapper */}
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Vaše meno</label> {/* label name */}
                                    <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aurora-purple focus:border-transparent transition-all" placeholder="Meno Priezvisko" /> {/* name input field */}
                                </div> {/* name wrapper end */}
                                <div> {/* email wrapper */}
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Emailová adresa</label> {/* label email */}
                                    <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aurora-purple focus:border-transparent transition-all" placeholder="meno@email.com" /> {/* email input field */}
                                </div> {/* email wrapper end */}
                                <div> {/* message wrapper */}
                                    <label htmlFor="msg" className="block text-sm font-medium text-gray-300 mb-2">Správa</label> {/* label message */}
                                    <textarea id="msg" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aurora-green focus:border-transparent transition-all" placeholder="Ako vám môžeme pomôcť?"></textarea> {/* message textarea field */}
                                </div> {/* message wrapper end */}
                                <button type="button" className="w-full py-4 bg-gradient-to-r from-aurora-purple to-aurora-indigo text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(191,90,242,0.4)] transition-all duration-300 transform hover:-translate-y-1"> {/* submit button */}
                                    Odoslať správu {/* button label */}
                                </button> {/* submit button end */}
                            </form> {/* form wrapper end */}
                        </div> {/* form card container end */}
                    </ScrollReveal> {/* left side scroll reveal end */}
                    <ScrollReveal delay={0.3} direction="left" className="h-full"> {/* right side scroll reveal */}
                        <div className="h-full flex flex-col justify-center space-y-8 p-4"> {/* contact info column */}
                            <div> {/* company address block */}
                                <h4 className="text-xl font-bold text-white font-display mb-2 flex items-center gap-3"> {/* title */}
                                    Sídlo {/* header text */}
                                </h4> {/* title end */}
                                <p className="text-gray-400">Bratislava, Slovensko</p> {/* address description */}
                            </div> {/* company address block end */}
                            <div> {/* direct contact block */}
                                <h4 className="text-xl font-bold text-white font-display mb-2 flex items-center gap-3"> {/* title */}
                                    Priamy kontakt {/* header text */}
                                </h4> {/* title end */}
                                <p className="text-gray-400">Email: info@elysiotech.com<br />Telefón: +421 903 406 406</p> {/* direct contact description */}
                            </div> {/* direct contact block end */}
                            <div> {/* social links block */}
                                <h4 className="text-xl font-bold text-white font-display mb-4">Sledujte nás</h4> {/* social title */}
                                <div className="flex gap-4"> {/* flex row container */}
                                    <button className="relative w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white overflow-hidden group hover:border-transparent transition-all duration-300"> {/* instagram social icon button */}
                                        <span className="absolute inset-0 bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span> {/* instagram gradient layer */}
                                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> {/* instagram SVG icon */}
                                    </button> {/* instagram button end */}
                                    <button className="relative w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white overflow-hidden group hover:border-transparent transition-all duration-300"> {/* facebook social icon button */}
                                        <span className="absolute inset-0 bg-[linear-gradient(45deg,#104a9e,#082b60)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span> {/* facebook gradient layer */}
                                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> {/* facebook SVG icon */}
                                    </button> {/* facebook button end */}
                                    <button className="relative w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white overflow-hidden group hover:border-transparent transition-all duration-300"> {/* linkedin social icon button */}
                                        <span className="absolute inset-0 bg-[linear-gradient(45deg,#0077b5,#0a66c2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span> {/* linkedin gradient layer */}
                                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> {/* linkedin SVG icon */}
                                    </button> {/* linkedin button end */}
                                </div> {/* flex row end */}
                            </div> {/* social links block end */}
                        </div> {/* contact info column end */}
                    </ScrollReveal> {/* right side scroll reveal end */}
                </div> {/* split layout grid end */}
            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
