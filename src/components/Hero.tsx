import Link from 'next/link'; // import Link component
import Image from 'next/image'; // import Image component

export default function Hero() { // export Hero component function
    return ( // return JSX markup
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-16"> {/* base full screen wrapper */}
            {/* Dark background grid and gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none"> {/* background glow graphics */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/[0.08] via-transparent to-transparent"></div> {/* radial center highlight */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full filter blur-[140px] translate-x-1/3 -translate-y-1/3"></div> {/* top right amber glow */}
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full filter blur-[140px] -translate-x-1/3 translate-y-1/3"></div> {/* bottom left emerald glow */}
                {/* Subtle tech grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaS0xdjYwaDFWMEpNMCA1OXYxaDYwdi0xSDB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] opacity-50"></div> {/* subtle pattern */}
            </div> {/* background glow end */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> {/* content container */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"> {/* asymmetric split */}
                    
                    {/* Left: Typography & Technical Pitch */}
                    <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0"> {/* text content wrapper */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-6"> {/* pre-heading badge */}
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.85)]"></span> {/* glowing dot */}
                            TECHNICKÉ ŠTÚDIO • BRATISLAVSKÝ KRAJ
                        </div> {/* pre-heading end */}
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white tracking-tight leading-[1.12] mb-6"> {/* main headline */}
                            Zákazkový softvér, <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400">letecké dáta a veľkoformátová tlač.</span>
                        </h1> {/* main headline end */}
                        
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0"> {/* subheadline */}
                            Vyvíjame moderné webové aplikácie a prezentačné weby, spracovávame letecké snímky dronom a zabezpečujeme priamu priemyselnú tlač. Všetko pod priamym technickým dohľadom od návrhu po finálny výstup.
                        </p> {/* subheadline end */}
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"> {/* cta group */}
                            <a
                                href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20spoluprace%20a%20vasich%20sluzieb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold font-display tracking-wide transition-all shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.65)] flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                Kontaktovať cez WhatsApp
                            </a>
                            <Link
                                href="/#services"
                                className="px-8 py-4 bg-transparent border border-amber-500/40 text-gray-900 dark:text-white hover:border-amber-500 rounded-xl font-bold font-display hover:bg-amber-500/10 transition-all flex items-center justify-center"
                            >
                                Prehľad služieb a riešení
                            </Link>
                        </div> {/* cta group end */}

                        {/* Trust Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-white/10 text-left">
                            <div className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Full-Stack softvérový vývoj</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Certifikovaná prevádzka EASA A1/A3</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Priama priemyselná UV tlač</span>
                            </div>
                        </div>
                    </div> {/* text content wrapper end */}

                    {/* Right: Production & Tech Showcase Collage */}
                    <div className="flex-1 relative w-full max-w-lg hidden lg:block"> {/* image collage wrapper */}
                        <div className="relative w-full aspect-square"> {/* aspect ratio box */}
                            {/* Photo 2: In-House Production & Drones */}
                            <div className="absolute top-0 right-0 w-[82%] h-[78%] border border-amber-500/30 rounded-3xl transform rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-700 bg-gray-200 dark:bg-[#151C2C] overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.25)] z-10 hover:z-30 group cursor-pointer"> {/* background card rotated */}
                                <Image src="/drone-bg.png" alt="Letecké zábery a UV tlač" fill className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" /> {/* drone image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div> {/* gradient overlay */}
                                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"> {/* text content */}
                                    <h3 className="text-xl font-display font-bold text-white mb-1 drop-shadow-lg">Dron & <span className="text-amber-400">UV Tlač</span></h3> {/* title */}
                                    <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">Letecké ortofoto, kótovanie sietí a odolné tabule na parcelu</p> {/* description */}
                                </div> {/* text content end */}
                            </div> {/* background card rotated end */}

                            {/* Photo 1: Software & GIS Solutions */}
                            <div className="absolute bottom-0 left-0 w-[82%] h-[78%] border border-emerald-500/30 rounded-3xl transform -rotate-3 hover:-rotate-6 hover:scale-105 transition-all duration-700 bg-gray-200 dark:bg-[#151C2C] overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.25)] z-20 hover:z-30 group cursor-pointer"> {/* foreground card rotated */}
                                <Image src="/digital-bg.png" alt="Vývoj a GIS Riešenia" fill className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" /> {/* digital image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div> {/* gradient overlay */}
                                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"> {/* text content */}
                                    <h3 className="text-xl font-display font-bold text-white mb-1 drop-shadow-lg">Web & <span className="text-emerald-400">GIS Softvér</span></h3> {/* title */}
                                    <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">Interaktívne parcelné mapy, one-page vizitky a portály na mieru</p> {/* description */}
                                </div> {/* text content end */}
                            </div> {/* foreground card rotated end */}
                            
                        </div> {/* aspect ratio box end */}
                    </div> {/* image collage wrapper end */}

                </div> {/* asymmetric split end */}
            </div> {/* content container end */}
        </section>
    );
}
