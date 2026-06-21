import Link from 'next/link'; // import Link component
import Image from 'next/image'; // import Image component

export default function Hero() { // export Hero component function
    return ( // return JSX markup
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"> {/* base full screen wrapper */}
            {/* Dark background grid and gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none"> {/* background glow graphics */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aurora-purple/[0.1] via-transparent to-transparent"></div> {/* radial center highlight */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-aurora-purple/10 rounded-full filter blur-[120px] translate-x-1/3 -translate-y-1/3"></div> {/* top right purple glow */}
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-aurora-green/10 rounded-full filter blur-[120px] -translate-x-1/3 translate-y-1/3"></div> {/* bottom left green glow */}
                {/* Subtle tech grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaS0xdjYwaDFWMEpNMCA1OXYxaDYwdi0xSDB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] opacity-50"></div> {/* subtle pattern */}
            </div> {/* background glow end */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> {/* content container */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"> {/* asymmetric split */}
                    
                    {/* Left: Typography Focus */}
                    <div className="flex-1 text-center md:text-left mt-16 md:mt-0"> {/* text content wrapper */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurora-purple/10 border border-aurora-purple/30 text-xs font-display tracking-widest text-aurora-purple mb-8"> {/* pre-heading badge */}
                            <span className="w-2 h-2 rounded-full bg-aurora-purple animate-pulse shadow-[0_0_10px_rgba(191,90,242,0.8)]"></span> {/* glowing dot */}
                            DIGITAL AGENCY
                        </div> {/* pre-heading end */}
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6"> {/* main headline */}
                            <strong>Digitálne riešenia</strong> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple via-aurora-green to-white">pre váš biznis.</span> <br />
                            <span className="text-3xl md:text-4xl text-gray-300 font-normal">Bez vstupných nákladov a zbytočných zmlúv.</span>
                        </h1> {/* main headline end */}
                        
                        <ul className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl leading-relaxed space-y-4 text-left mx-auto md:mx-0"> {/* subheadline */}
                            <li className="flex items-start gap-3"><span className="text-aurora-green mt-1">•</span> <span><strong>Čo robíme:</strong> Rýchle weby v čistom kóde, profi zábery z drona, grafika a tlač.</span></li>
                            <li className="flex items-start gap-3"><span className="text-aurora-purple mt-1">•</span> <span><strong>Filozofia:</strong> Vy podnikáte, my riešime zvyšok.</span></li>
                        </ul> {/* subheadline end */}
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"> {/* cta group */}
                            <Link href="#services" className="px-8 py-4 bg-white text-black rounded-xl font-bold font-display hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(191,90,242,0.3)] hover:shadow-[0_0_40px_rgba(191,90,242,0.5)] flex items-center justify-center gap-2"> {/* primary cta */}
                                Preskúmať Služby {/* cta text */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> {/* arrow icon */}
                            </Link> {/* primary cta end */}
                            <Link href="/cennik" className="px-8 py-4 bg-transparent border border-aurora-green/30 text-white hover:border-aurora-green/60 rounded-xl font-bold font-display hover:bg-aurora-green/10 transition-all flex items-center justify-center"> {/* secondary cta */}
                                Zobraziť Cenník {/* cta text */}
                            </Link> {/* secondary cta end */}
                        </div> {/* cta group end */}
                    </div> {/* text content wrapper end */}

                    {/* Right: Image Collage */}
                    <div className="flex-1 relative w-full max-w-lg hidden md:block mt-10 md:mt-0"> {/* image collage wrapper */}
                        <div className="relative w-full aspect-square"> {/* aspect ratio box */}
                            {/* Photo 2: Air Drones (now in background position) */}
                            <div className="absolute top-0 right-0 w-[80%] h-[75%] border border-aurora-purple/30 rounded-3xl transform rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-700 bg-black overflow-hidden shadow-[0_0_40px_rgba(191,90,242,0.15)] z-10 hover:z-30 group cursor-pointer"> {/* background card rotated */}
                                <Image src="/drone-bg.png" alt="Air Drones" fill className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" /> {/* drone image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div> {/* gradient overlay */}
                                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"> {/* text content */}
                                    <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-lg">Air <span className="text-aurora-green">Drones</span></h3> {/* title */}
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">Letecké zábery a fotografie</p> {/* description */}
                                </div> {/* text content end */}
                            </div> {/* background card rotated end */}

                            {/* Photo 1: Digital Studio (now in foreground position) */}
                            <div className="absolute bottom-0 left-0 w-[80%] h-[75%] border border-aurora-green/30 rounded-3xl transform -rotate-3 hover:-rotate-6 hover:scale-105 transition-all duration-700 bg-black overflow-hidden shadow-[0_0_50px_rgba(161,255,206,0.15)] z-20 hover:z-30 group cursor-pointer"> {/* foreground card rotated */}
                                <Image src="/digital-bg.png" alt="Digital Studio" fill className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" /> {/* digital image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div> {/* gradient overlay */}
                                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"> {/* text content */}
                                    <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-lg">Digital <span className="text-aurora-purple">Studio</span></h3> {/* title */}
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">Weby, aplikácie a grafika</p> {/* description */}
                                </div> {/* text content end */}
                            </div> {/* foreground card rotated end */}
                            
                        </div> {/* aspect ratio box end */}
                    </div> {/* image collage wrapper end */}

                </div> {/* asymmetric split end */}
            </div> {/* content container end */}
        </section> // section element end
    ); // return statement end
} // component function end
