"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FEATURES } from '@/config/features';

export default function Hero() {
    return (
        <section className="relative min-h-[85dvh] lg:min-h-[90dvh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
            {/* Ambient gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/[0.06] via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full filter blur-[140px] translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[140px] -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* Left: Typography & Value Pitch */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Clean Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-[#121214] text-zinc-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#00D26A]"></span>
                            <span>Patrik Barcaj • Technická realizácia &amp; Vývoj</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6">
                            Automatizácia procesov, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00D26A]">grafika a weby</span> na mieru.
                        </h1>
                        
                        <p className="text-base sm:text-lg text-zinc-400 font-normal mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            Zbavte sa manuálneho prepisovania tabuliek a získajte moderný web bez agentúrnych prirážok. Pošlite mi hrubé podklady – o kód, nastavenie a výrobnú prípravu sa postarám ja.
                        </p>
                        
                        {/* CTA Group */}
                        <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-4">
                            <a
                                href="https://wa.me/421903406402?text=Ahoj%20Patrik,%20chcem%20sa%20nezavazne%20informovat%20o%20sluzbach..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#00D26A] hover:bg-[#00B85C] text-black tracking-wide transition-all shadow-lg shadow-[#00D26A]/20 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 text-center"
                            >
                                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                <span>Nezáväzná kalkulácia cez WhatsApp</span>
                            </a>
                            <Link
                                href="/#services"
                                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#121214] hover:bg-[#18181b] border border-neutral-800 text-white hover:border-neutral-700 transition-all flex items-center justify-center text-center"
                            >
                                Zobraziť cenník služieb
                            </Link>
                        </div>

                        {/* Reassurance */}
                        <p className="text-xs text-zinc-400 mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]"></span>
                            <span>Odpovedám do 15 minút • Spolupráca 1:1 priamo so mnou</span>
                        </p>

                        {/* Clean Trust Pills */}
                        <div className="pt-6 border-t border-neutral-800/80">
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                <span className="px-3 py-1.5 rounded-full bg-[#121214] border border-neutral-800 text-xs text-zinc-300">
                                    Všetko vyriešim za vás
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-[#121214] border border-neutral-800 text-xs text-zinc-300">
                                    Priama spolupráca s technikom
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-[#121214] border border-neutral-800 text-xs text-zinc-300">
                                    Zákazky už od 25 €
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Premium App Window Mockup */}
                    <div className="flex-1 relative w-full max-w-xl mx-auto lg:max-w-none">
                        {FEATURES.ENABLE_DRONE_SERVICES ? (
                            <div className="relative rounded-2xl border border-neutral-800 bg-[#121214] overflow-hidden shadow-2xl aspect-[16/10]">
                                <Image
                                    src="/drone-preview.jpg"
                                    alt="Letecká ortofotomapa pozemku dronom"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="relative rounded-2xl border border-neutral-800 bg-[#121214] p-5 sm:p-7 shadow-2xl shadow-black/80 flex flex-col justify-between group">
                                {/* Window Top Header */}
                                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                                        <span className="ml-2 text-xs text-zinc-400 font-medium">pipeline.automation</span>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00D26A]/10 border border-[#00D26A]/30 text-[#00D26A] text-[11px] font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]"></span>
                                        <span>Aktívne</span>
                                    </div>
                                </div>

                                {/* Visual Data Flow Scheme */}
                                <div className="space-y-3.5 my-2">
                                    {/* Flow Step 1: Input */}
                                    <div className="p-3.5 rounded-xl bg-[#080808] border border-neutral-800/90 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center text-sm">
                                                📝
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Objednávka z webového formulára</div>
                                                <div className="text-[11px] text-zinc-400">Prijaté surové dáta &amp; kontakt klienta</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-medium text-[#00D26A] bg-[#00D26A]/10 px-2 py-0.5 rounded">Vstup</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex justify-center -my-1 text-zinc-600 text-xs">
                                        ↓ automatická synchronizácia
                                    </div>

                                    {/* Flow Step 2: Bridge */}
                                    <div className="p-3.5 rounded-xl bg-[#080808] border border-[#00D26A]/30 bg-[#00D26A]/[0.02] flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm text-[#00D26A]">
                                                ⚡
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Spracovanie v Google Sheets &amp; Notion</div>
                                                <div className="text-[11px] text-zinc-400">Okamžité párovanie položiek bez prepisovania</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">0 chýb</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex justify-center -my-1 text-zinc-600 text-xs">
                                        ↓ generovanie dokladov
                                    </div>

                                    {/* Flow Step 3: Output */}
                                    <div className="p-3.5 rounded-xl bg-[#080808] border border-neutral-800/90 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-sm text-[#FFB800]">
                                                📄
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Hotové PDF &amp; WhatsApp notifikácia</div>
                                                <div className="text-[11px] text-zinc-400">Automaticky odoslané klientovi za 0.2s</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-medium text-[#FFB800] bg-[#FFB800]/10 px-2 py-0.5 rounded">Odoslané</span>
                                    </div>
                                </div>

                                {/* Floating Pill Badge */}
                                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                                    <div className="text-xs text-zinc-400">
                                        Čas spracovania: <strong className="text-white">0.2 sekundy</strong>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D26A] text-black text-xs font-bold shadow-lg shadow-[#00D26A]/20">
                                        <span>✓</span>
                                        <span>100% hotové na kľúč</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
