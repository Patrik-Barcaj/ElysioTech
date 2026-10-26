"use client";
import React, { useState, useMemo } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { FEATURES } from '@/config/features';

const CALCULATOR_OPTIONS = [
    { id: 'quick-fix', name: 'Bleskový zásah / Grafika (od 25 €)', label: 'bleskovým zásahom / grafikou (od 25 €)' },
    { id: 'auto-flow', name: 'Firemná automatizácia (od 120 €)', label: 'firemnou automatizáciou (od 120 €)' },
    { id: 'full-dev', name: 'Webová aplikácia na kľúč (od 350 €)', label: 'webovou aplikáciou na kľúč (od 350 €)' },
] as const;

export default function Contact() {
    const [selectedOption, setSelectedOption] = useState<string>('auto-flow');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const selectedService = useMemo(() => {
        return CALCULATOR_OPTIONS.find(opt => opt.id === selectedOption) || CALCULATOR_OPTIONS[1];
    }, [selectedOption]);

    const whatsappUrl = useMemo(() => {
        const text = `Ahoj Patrik, potrebujem pomôcť s ${selectedService.label}. Pošlem ti podklady a chcem to nechať celé na teba.`;
        return `https://wa.me/421903406402?text=${encodeURIComponent(text)}`;
    }, [selectedService]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 bg-[#080808] relative border-t border-neutral-800">
            <div id="kontakt" className="absolute -top-20 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-[#121214] text-zinc-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                        <span>Priamy kontakt &amp; Kalkulácia</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Získajte rýchly odhad <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00D26A]">alebo cenovú ponuku</span>
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                        Napíšte mi priamo na WhatsApp, zavolajte alebo pošlite správu cez formulár. Ozvem sa do 15 minút.
                    </p>
                </div>

                {/* Minimalist Micro-Calculator */}
                <ScrollReveal delay={0.05} className="max-w-4xl mx-auto mb-16">
                    <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D26A]/30 bg-[#00D26A]/10 text-xs font-semibold text-[#00D26A] mb-3">
                                <span>Rýchla kalkulácia požiadavky</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                                Vyberte typ zadania a získajte okamžitý odhad
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400">
                                Vyberte službu a pošlite zadanie priamo na WhatsApp jedným kliknutím:
                            </p>
                        </div>

                        {/* 3 Selectable Clean Tiles */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                            {CALCULATOR_OPTIONS.map((opt) => {
                                const isSelected = selectedOption === opt.id;
                                return (
                                    <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => setSelectedOption(opt.id)}
                                        className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 relative ${
                                            isSelected
                                                ? 'bg-[#00D26A]/10 border-[#00D26A] shadow-[0_0_20px_rgba(0,210,106,0.15)] text-white'
                                                : 'bg-[#080808] border-neutral-800 text-zinc-300 hover:border-neutral-700'
                                        }`}
                                    >
                                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                            isSelected ? 'border-[#00D26A] bg-[#00D26A]' : 'border-neutral-700 bg-neutral-900'
                                        }`}>
                                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                                        </span>
                                        <span className="text-xs sm:text-sm font-semibold leading-tight">
                                            {opt.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Dynamic WhatsApp CTA button */}
                        <div className="text-center">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-bold text-sm tracking-wide transition-all shadow-xl shadow-[#00D26A]/20 transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                <span>Prebrať zadanie na WhatsApp</span>
                            </a>
                            <p className="text-xs text-zinc-500 mt-3">
                                Alebo mi napíšte cez formulár nižšie.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Form & Contact Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
                    
                    {/* Left: Contact Form */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-8 lg:p-9 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">Vaše meno / Spoločnosť</label>
                                    <input type="text" id="name" required className="w-full bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00D26A]/60 transition-all text-sm" placeholder="Meno Priezvisko / Firma" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">Email alebo telefón</label>
                                    <input type="text" id="email" required className="w-full bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00D26A]/60 transition-all text-sm" placeholder="+421 9XX... / email@domena.sk" />
                                </div>
                                <div>
                                    <label htmlFor="msg" className="block text-sm font-medium text-zinc-300 mb-1.5">
                                        {FEATURES.ENABLE_DRONE_SERVICES ? 'Popis projektu alebo parcelné číslo' : 'Popis požiadavky alebo projektu'}
                                    </label>
                                    <textarea
                                        id="msg"
                                        rows={4}
                                        required
                                        className="w-full min-h-[120px] resize-y bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00D26A]/60 transition-all text-sm"
                                        placeholder="Automatizácia / Grafika / Webová aplikácia"
                                    ></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-[#00D26A] hover:bg-[#00B85C] text-black font-bold rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-[#00D26A]/20 disabled:opacity-50">
                                    {isSubmitting ? 'Odosielam...' : 'Odoslať dopyt'}
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Right: Direct Contact Info */}
                    <ScrollReveal delay={0.2} direction="left" className="h-full">
                        <div className="h-full flex flex-col justify-between space-y-8 p-2 sm:p-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Priama komunikácia</h3>
                                <ul className="space-y-3.5 text-zinc-300 text-sm leading-relaxed">
                                    <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#00D26A]/5 border border-[#00D26A]/20">
                                        <span className="text-[#00D26A] font-bold mt-0.5">•</span>
                                        <span><strong className="text-white">WhatsApp &amp; SMS:</strong> Najrýchlejšia odozva do 15 minút počas celého dňa.</span>
                                    </li>
                                    <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                                        <span className="text-[#FFB800] font-bold mt-0.5">•</span>
                                        <span><strong className="text-white">Telefonický kontakt:</strong> Kedykoľvek cez pracovné dni aj cez víkendy.</span>
                                    </li>
                                    <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#121214] border border-neutral-800">
                                        <span className="text-zinc-500 font-bold mt-0.5">•</span>
                                        <span><strong className="text-white">Osobné stretnutia &amp; Konzultácie:</strong> Bratislava &amp; Západné Slovensko.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Rýchle spojenie</h4>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a href="https://wa.me/421903406402?text=Ahoj%20Patrik,%20chcem%20sa%20informovat%20ohladom%20spoluprace%20a%20sluzieb" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-bold text-sm shadow-lg shadow-[#00D26A]/20 transition-all flex-1">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                                        <span>WhatsApp</span>
                                    </a>
                                    <a href="tel:+421903406402" className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#121214] border border-neutral-800 text-white font-semibold text-sm hover:border-neutral-700 transition-all flex-1">
                                        <svg className="w-4 h-4 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        <span>+421 903 406 402</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
            
            {isSubmitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden">
                        <div className="w-14 h-14 bg-[#00D26A]/20 rounded-full flex items-center justify-center mx-auto mb-5 text-[#00D26A]">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Správa odoslaná!</h3>
                        <p className="text-zinc-400 mb-6 text-sm">Ďakujem za vašu požiadavku. Ozvem sa vám obratom.</p>
                        <button onClick={() => setIsSubmitted(false)} className="w-full py-3 bg-[#00D26A] hover:bg-[#00B85C] text-black rounded-xl font-bold text-sm transition-all">
                            Zavrieť
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
