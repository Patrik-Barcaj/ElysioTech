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
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] font-semibold text-xs font-display tracking-widest mb-6"> {/* pre-heading badge */}
                            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse shadow-[0_0_10px_rgba(255,184,0,0.85)]"></span> {/* glowing dot */}
                            DIGITÁLNE A TECHNICKÉ ŠTÚDIO • BRATISLAVSKÝ KRAJ
                        </div> {/* pre-heading end */}
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6"> {/* main headline */}
                            Technické služby bez agentúrnej prirážky: <br className="hidden sm:inline" />
                            Letecké dáta, <span className="text-[#FFB800]">Technická grafika</span> a <span className="text-[#00D26A]">Aplikácie.</span>
                        </h1> {/* main headline end */}
                        
                        <p className="text-lg sm:text-xl text-zinc-300 font-normal mb-8 max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0"> {/* subheadline */}
                            Potrebujete zamerať pozemok dronom, pripraviť presné kótované plány a vektorové podklady, alebo nasadiť webovú aplikáciu na mieru? Priama realizácia od špecialistu bez sprostredkovateľov.
                        </p> {/* subheadline end */}
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3"> {/* cta group */}
                            <a
                                href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20nezavazne%20informovat%20o%20sluzbach..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 rounded-lg text-sm font-semibold bg-[#00D26A] hover:bg-[#00B85C] text-black font-display tracking-wide transition-all shadow-lg shadow-[#00D26A]/20 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 text-center"
                            >
                                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                <span>Rýchla kalkulácia cez WhatsApp</span>
                            </a>
                            <Link
                                href="/#services"
                                className="px-5 py-3 rounded-lg text-sm font-semibold whitespace-nowrap bg-[#121214] border border-neutral-800 text-white hover:border-[#FFB800]/50 font-display hover:bg-[#18181b] transition-all flex items-center justify-center text-center"
                            >
                                Prehľad služieb a cien
                            </Link>
                        </div> {/* cta group end */}

                        {/* Microcopy reassurance under buttons */}
                        <p className="font-mono text-xs text-zinc-400 mt-2 mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5">
                            <span className="text-[#00D26A] font-bold">●</span> Odpovedáme do 15 minút • Stačí poslať lokalitu alebo zadanie
                        </p>

                        {/* Interactive Service Router */}
                        <div className="pt-6 border-t border-neutral-800 text-left">
                            <div className="grid grid-cols-3 gap-2 pt-2 max-w-md mx-auto lg:mx-0">
                                <a href="#cennik" className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md bg-zinc-900/80 border border-neutral-800 hover:border-amber-500/50 text-[11px] font-mono text-zinc-300 transition-colors">
                                    <span className="text-amber-400 font-bold">DRON</span>
                                    <span className="text-zinc-500">od 75€</span>
                                </a>
                                <a href="#cennik" className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md bg-zinc-900/80 border border-neutral-800 hover:border-amber-500/50 text-[11px] font-mono text-zinc-300 transition-colors">
                                    <span className="text-amber-400 font-bold">GRAFIKA</span>
                                    <span className="text-zinc-500">od 25€/h</span>
                                </a>
                                <a href="#cennik" className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md bg-zinc-900/80 border border-neutral-800 hover:border-amber-500/50 text-[11px] font-mono text-zinc-300 transition-colors">
                                    <span className="text-amber-400 font-bold">APP & WEB</span>
                                    <span className="text-zinc-500">od 250€</span>
                                </a>
                            </div>
                        </div>
                    </div> {/* text content wrapper end */}

                    {/* Right: Flat Technical Telemetry Frame */}
                    <div className="flex-1 relative w-full max-w-xl mx-auto lg:max-w-none">
                        <div className="relative rounded-xl border border-neutral-800 bg-[#121214] overflow-hidden shadow-2xl shadow-black/80 aspect-[16/10] group">
                            {/* Real Image Layer */}
                            <Image
                                src="/drone-preview.jpg"
                                alt="Letecká 90° ortofotomapa pozemku dronom"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Subtle dark vignette and fine grid overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)] pointer-events-none"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

                            {/* Telemetry Overlay Badges (Top & Bottom Corners) */}
                            {/* Top-left badge */}
                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center">
                                <span className="font-mono text-[11px] text-amber-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-amber-500/30 flex items-center gap-1.5 shadow-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse"></span>
                                    ● LIVE SENSOR // 4K UHD
                                </span>
                            </div>

                            {/* Top-right sensor status */}
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 hidden sm:flex items-center">
                                <span className="font-mono text-[10px] text-[#00D26A] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-[#00D26A]/30 flex items-center gap-1">
                                    GPS FIX • 18 SATS
                                </span>
                            </div>

                            {/* Bottom-left metadata */}
                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                                <span className="font-mono text-[10px] text-zinc-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 inline-block shadow-md">
                                    EASA A1/A3 • 90° ORTHOPHOTO • BA-KRAJ
                                </span>
                            </div>

                            {/* Bottom-right scale & resolution */}
                            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                                <span className="w-3 h-[1px] bg-zinc-400 inline-block"></span>
                                <span>GSD 1.2 CM/PX</span>
                            </div>
                        </div>
                    </div>

                </div> {/* asymmetric split end */}
            </div> {/* content container end */}
        </section>
    );
}
