import Link from 'next/link'; // import Link component
import Image from 'next/image'; // import Image component

export default function Hero() { // export Hero component function
    return ( // return JSX markup
        <section className="relative h-screen flex flex-col md:flex-row overflow-hidden pt-20"> {/* base full screen wrapper */}
            <div className="absolute inset-0 z-0 pointer-events-none"> {/* background glow graphics */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aurora-purple/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div> {/* purple glow glob */}
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aurora-green/20 rounded-full filter blur-3xl opacity-40 animate-pulse delay-1000"></div> {/* green glow glob */}
            </div> {/* background glow end */}

            {/* Left side: Digital Studio */}
            <div className="flex-1 relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/10 hover:border-aurora-purple/50 transition-colors duration-500"> {/* digital portal side */}
                <Image src="/digital-bg.png" alt="Digital Background" fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 z-0" /> {/* background image */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-black/60 hover:bg-black/45 backdrop-blur-[2px] hover:backdrop-blur-none transition-all duration-700"> {/* center layout box */}
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500 max-w-sm"> {/* animation transform card */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4 drop-shadow-lg"> {/* header title */}
                            Digital <span className="text-aurora-purple">Studio</span> {/* colorful title block */}
                        </h2> {/* title block end */}
                        <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed"> {/* description text */}
                            Tvorba jednoduchých webstránok, menších aplikácií na mieru a grafiky s možnosťou zabezpečenia tlače. {/* description */}
                        </p> {/* description end */}
                        <Link href="#digital-services" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-aurora-purple/30 hover:bg-aurora-purple/50 border-aurora-purple/40 backdrop-blur transition-all shadow-[0_0_15px_rgba(191,90,242,0.3)] hover:shadow-[0_0_25px_rgba(191,90,242,0.6)]"> {/* cta button */}
                            Preskúmať služby {/* button label */}
                        </Link> {/* cta end */}
                    </div> {/* animation card end */}
                </div> {/* center layout box end */}
            </div> {/* digital portal end */}

            {/* Right side: Air Drones */}
            <div className="flex-1 relative group overflow-hidden hover:border-aurora-green/50 transition-colors duration-500"> {/* drone portal side */}
                <Image src="/drone-bg.png" alt="Air Drones Background" fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 z-0" /> {/* background image */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-black/60 hover:bg-black/45 backdrop-blur-[2px] hover:backdrop-blur-none transition-all duration-700"> {/* center layout box */}
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500 max-w-sm"> {/* animation transform card */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4 drop-shadow-lg"> {/* header title */}
                            Air <span className="text-aurora-green">Drones</span> {/* colorful title block */}
                        </h2> {/* title block end */}
                        <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed"> {/* description text */}
                            Pekné a plynulé letecké zábery či fotografie z výšky pre vaše nehnuteľnosti alebo podujatia s našimi dronmi. {/* description */}
                        </p> {/* description end */}
                        <Link href="#drone-services" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-aurora-green/20 hover:bg-aurora-green/45 border-aurora-green/35 backdrop-blur transition-all shadow-[0_0_15px_rgba(161,255,206,0.3)] hover:shadow-[0_0_25px_rgba(161,255,206,0.6)]"> {/* cta button */}
                            Preskúmať služby {/* button label */}
                        </Link> {/* cta end */}
                    </div> {/* animation card end */}
                </div> {/* center layout box end */}
            </div> {/* drone portal end */}
        </section> // section element end
    ); // return statement end
} // component function end
