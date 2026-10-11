"use client"; // use client directive
import React, { useState } from 'react'; // import react library with useState
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';

export default function Portfolio() {
    const devProjects = projectsData.filter((p) => p.slug !== 'katastralny-zakres');

    const droneCaptures = [
        {
            id: 'gal-drone-1',
            title: 'Presná ortofotomapa pozemku (90°)',
            category: 'Ortorektifikácia & Geodézia',
            tag: 'Ortofoto 90°',
            src: '/drone/DJI_0236.jpg',
            desc: 'Kolmý fotogrametrický zber pre rekonštrukciu mierkovej ortofotomapy bez perspektívneho skreslenia.'
        },
        {
            id: 'gal-drone-2',
            title: 'Zameranie parciálnych hraníc',
            category: 'Vektorové siete & Kataster C-KN / E-KN',
            tag: 'Katastrálny zákres',
            src: '/drone/DJI_0234.jpg',
            desc: 'Vektorové osadenie parciel z katastrálnej mapy priamo do ortofotomapy pre okamžitú identifikáciu hraníc.'
        },
        {
            id: 'gal-drone-3',
            title: 'Prezentácia a inšpekcia stavebného areálu',
            category: 'Stavebný monitoring & Investor audit',
            tag: 'Stavebný areál',
            src: '/drone/DJI_0235.jpg',
            desc: 'Detailná kontrola stavu stavby, prístupov, zemných prác a skladovania stavebného materiálu.'
        },
        {
            id: 'gal-drone-4',
            title: 'Letecké zábery pozemkov a širšieho okolia',
            category: 'Veľkoformátový zber dát & Infraštruktúra',
            tag: 'Letecký prehľad',
            src: '/drone/DJI_0228.jpg',
            desc: 'Prehľadné letecké snímky s vysokým dynamickým rozsahom zachytávajúce kontext územia a dopravné napojenie.'
        }
    ];

    const [isTechModalOpen, setIsTechModalOpen] = useState(false);
    const [lightbox, setLightbox] = useState<number | null>(null);

    const closeLightbox = () => {
        setLightbox(null);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightbox === null) return;
        const max = droneCaptures.length - 1;
        setLightbox(lightbox === max ? 0 : lightbox + 1);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightbox === null) return;
        const max = droneCaptures.length - 1;
        setLightbox(lightbox === 0 ? max : lightbox - 1);
    };

    return (
        <section id="portfolio" className="py-24 bg-[#080808] relative border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-3 uppercase">
                        [ 03 // PORTFOLIO ] • REALIZÁCIE
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">Projekty</h2>
                </div>

                {/* Unified Portfolio */}
                <div className="mb-16">

                    {/* Section 01: Dev */}
                    <h3 className="text-2xl font-bold font-display text-white mb-6 border-l-4 border-[#00D26A] pl-4 flex items-center gap-2">
                        <span className="font-mono text-xs text-[#00D26A] font-semibold">[ 01 // DEV ]</span>
                        <span>Weby & <span className="text-[#00D26A]">Aplikácie</span></span>
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {devProjects.map((proj) => (
                            <div
                                key={proj.id}
                                className={`group relative aspect-square overflow-hidden rounded-2xl ${proj.bgClass || 'bg-[#121214]'} border border-neutral-800 shadow-sm hover:shadow-xl hover:border-[#00D26A]/50 transition-all`}
                            >
                                {/* Stretched link to project case study */}
                                <Link
                                    href={`/projekty/${proj.slug}`}
                                    className="absolute inset-0 z-0"
                                    aria-label={`Detail projektu ${proj.title}`}
                                />

                                <div className={`relative w-full h-full ${proj.imageFit === 'cover' ? 'p-0' : 'p-4'} flex items-center justify-center pointer-events-none`}>
                                    <Image
                                        src={proj.image}
                                        alt={proj.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className={`${proj.imageFit === 'cover' ? 'object-cover object-center' : 'object-contain'} transform transition-transform duration-700 group-hover:scale-105`}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 z-10 pointer-events-none">
                                    <div className="w-full pointer-events-auto">
                                        <p className="text-[#FFB800] text-xs font-bold uppercase tracking-wider mb-1">{proj.category}</p>
                                        <h4 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight mb-2.5">{proj.title}</h4>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {proj.liveUrl && proj.liveUrl.startsWith('http') && (
                                                <a
                                                    href={proj.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-2.5 py-1 rounded-lg bg-[#00D26A] hover:bg-[#00B85C] text-black font-extrabold font-display text-xs tracking-wide transition-all shadow-lg shadow-[#00D26A]/25 flex items-center gap-1"
                                                >
                                                    <span>{proj.ctaText || 'Navštíviť ↗'}</span>
                                                </a>
                                            )}
                                            <Link
                                                href={`/projekty/${proj.slug}`}
                                                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-1"
                                            >
                                                <span>Detail ↗</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Section 02: Air (Technický inšpekčný panel & Katastrálny zákres) */}
                    <h3 className="text-2xl font-bold font-display text-white mb-6 border-l-4 border-[#00D26A] pl-4 flex items-center gap-2">
                        <span className="font-mono text-xs text-[#00D26A] font-semibold">[ 02 // AIR ]</span>
                        <span>Inšpekčný výstup & <span className="text-[#00D26A]">Katastrálny zákres</span></span>
                    </h3>
                    
                    <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-[#00D26A]/50 transition-all duration-300">
                        {/* Coordinate cross accents */}
                        <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                        <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                        <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                        <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D26A]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00D26A]/10 transition-colors"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            {/* Ľavá strana (2/3 šírky) */}
                            <div className="lg:col-span-8 flex flex-col gap-4">
                                <div 
                                    onClick={() => setLightbox(0)}
                                    className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black/60 shadow-inner group/img cursor-zoom-in"
                                >
                                    <Image
                                        src="https://placehold.co/960x540/121214/eab308?text=Letecka+Ortofotomapa+%2B+Katastralny+Zakres+[DEMO]"
                                        alt="Letecká Ortofotomapa + Katastrálny Zákres [DEMO]"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 850px"
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                        unoptimized
                                    />
                                    {/* Badges on image */}
                                    <div className="absolute top-3 left-3 flex items-center gap-2">
                                        <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-[#FFB800] tracking-wider uppercase">
                                            48 MPx RGB
                                        </span>
                                        <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#00D26A]/30 text-[11px] font-mono font-semibold text-[#00D26A] tracking-wider uppercase">
                                            EASA A1/A3
                                        </span>
                                    </div>
                                    
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-end justify-between">
                                        <div>
                                            <p className="text-[11px] font-mono text-[#FFB800] uppercase font-semibold">DEMO DÁTA // ORTOFOTO & KATASTER</p>
                                            <p className="text-sm font-bold text-white font-display">Inšpekčný výstup & Katastrálny zákres</p>
                                        </div>
                                        <span className="text-xs text-zinc-400 font-mono bg-black/70 px-2 py-1 rounded border border-neutral-700 flex items-center gap-1 shrink-0">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                            Zväčšiť
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Pravá strana (1/3 šírky) */}
                            <div className="lg:col-span-4 flex flex-col justify-between h-full">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D26A]/40 bg-[#00D26A]/10 text-[#00D26A] text-xs font-mono tracking-widest mb-3 uppercase">
                                        [ 02 // AIR ] • KATASTRÁLNY ZÁKRES
                                    </div>
                                    <h4 className="text-2xl font-extrabold text-white font-display mb-3 tracking-tight">
                                        Inšpekčný výstup & Katastrálny zákres
                                    </h4>
                                    <p className="text-sm text-zinc-300 leading-relaxed mb-5 font-medium">
                                        Operatívny letecký audit záujmového územia, generovanie detailnej ortofotomapy a vektorové osadenie hraníc parciel priamo do výstupných dát.
                                    </p>

                                    {/* Technický checklist parametrov */}
                                    <div className="bg-[#090d0b] border border-neutral-800 rounded-2xl p-5 mb-5 space-y-3">
                                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFB800] border-b border-neutral-800/80 pb-2 flex items-center justify-between">
                                            <span>Technický checklist</span>
                                            <span className="text-[#00D26A]">EASA A1/A3</span>
                                        </div>
                                        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-[#00D26A] font-bold text-sm leading-none mt-0.5">✓</span>
                                                <div>
                                                    <strong className="text-white font-semibold">Senzor:</strong>{' '}
                                                    <span className="text-zinc-300">48 MPx RGB (f/1.7)</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-[#00D26A] font-bold text-sm leading-none mt-0.5">✓</span>
                                                <div>
                                                    <strong className="text-white font-semibold">Typ letu:</strong>{' '}
                                                    <span className="text-zinc-300">Mriežkový fotogrametrický prelet</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-[#00D26A] font-bold text-sm leading-none mt-0.5">✓</span>
                                                <div>
                                                    <strong className="text-white font-semibold">Výstupy:</strong>{' '}
                                                    <span className="text-zinc-300">Ortofotomapa + PDF protokol defektov</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-[#00D26A] font-bold text-sm leading-none mt-0.5">✓</span>
                                                <div>
                                                    <strong className="text-white font-semibold">Dostupnosť:</strong>{' '}
                                                    <span className="text-zinc-300">Výjazdy v týždni od 14:30 / víkendy</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="space-y-2 pt-1">
                                    {/* Tlačidlo (outline): Stiahnuť vzorový PDF protokol */}
                                    <button
                                        type="button"
                                        onClick={() => setIsTechModalOpen(true)}
                                        className="w-full py-3 px-4 rounded-xl border-2 border-[#00D26A] text-[#00D26A] hover:bg-[#00D26A]/10 font-bold font-display text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 text-center shadow-sm"
                                    >
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span>Stiahnuť vzorový PDF protokol</span>
                                    </button>

                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsTechModalOpen(true)}
                                            className="flex-1 py-2.5 px-3 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-extrabold font-display text-xs transition-all text-center"
                                        >
                                            Technické parametre ↗
                                        </button>
                                        <Link
                                            href="/projekty/katastralny-zakres"
                                            className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold font-display text-xs transition-all border border-neutral-700 text-center"
                                        >
                                            Detail projektu →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* Technical Parameters Modal */}
            {isTechModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
                    onClick={() => setIsTechModalOpen(false)}
                >
                    <div 
                        className="relative max-w-4xl w-full bg-[#121214] border border-neutral-700 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsTechModalOpen(false)}
                            className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                            aria-label="Zavrieť detail"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Modal Header */}
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D26A]/40 bg-[#00D26A]/10 text-[#00D26A] text-xs font-mono tracking-widest mb-2 uppercase">
                                [ TECHNICKÁ ŠPECIFIKÁCIA // AIR ]
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                                Technická fotodokumentácia & Katastrálny zákres
                            </h3>
                            <p className="text-sm sm:text-base text-zinc-300 mt-2 font-medium">
                                Operatívny letecký audit záujmového územia, generovanie detailnej ortofotomapy a vektorové osadenie hraníc parciel priamo do výstupných dát.
                            </p>
                        </div>

                        {/* 3 Telemetry Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-[#090d0b] border border-neutral-800 rounded-2xl p-5">
                                <div className="text-xs font-mono text-[#FFB800] font-bold uppercase tracking-wider mb-2">[ Snímač ]</div>
                                <h5 className="text-base font-bold text-white mb-2 font-display">48 MPx RGB Snímač</h5>
                                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                                    1/2&quot; CMOS senzor s optikou f/1.7, 4K/60fps video a záznam do formátov RAW (DNG) pre zachovanie plného dynamického rozsahu.
                                </p>
                                <div className="text-[11px] font-mono text-zinc-400 space-y-1 border-t border-neutral-800/80 pt-2">
                                    <div>• Rozlíšenie: 8000 × 6000 px</div>
                                    <div>• Citlivosť: ISO 100 - 6400</div>
                                </div>
                            </div>

                            <div className="bg-[#090d0b] border border-neutral-800 rounded-2xl p-5">
                                <div className="text-xs font-mono text-[#00D26A] font-bold uppercase tracking-wider mb-2">[ Výpočet ]</div>
                                <h5 className="text-base font-bold text-white mb-2 font-display">Dedikované PC</h5>
                                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                                    Fotogrametrická rekonštrukcia prebieha lokálne na dedikovanej pracovnej stanici bez straty kvality a bez nahrávania na verejné cloudy.
                                </p>
                                <div className="text-[11px] font-mono text-zinc-400 space-y-1 border-t border-neutral-800/80 pt-2">
                                    <div>• 100% ochrana dát klienta</div>
                                    <div>• Vysoká hustota mračna bodov</div>
                                </div>
                            </div>

                            <div className="bg-[#090d0b] border border-neutral-800 rounded-2xl p-5">
                                <div className="text-xs font-mono text-[#FFB800] font-bold uppercase tracking-wider mb-2">[ Formáty ]</div>
                                <h5 className="text-base font-bold text-white mb-2 font-display">Výstupy pre prax</h5>
                                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                                    Dáta exportujeme do štandardizovaných CAD/GIS formátov pripravených pre okamžitý import do architektonických softvérov.
                                </p>
                                <div className="text-[11px] font-mono text-zinc-400 space-y-1 border-t border-neutral-800/80 pt-2">
                                    <div>• GeoTIFF, DXF, SVG, PDF</div>
                                    <div>• Ultra HD inšpekčné zábery</div>
                                </div>
                            </div>
                        </div>

                        {/* Inspection Captures Gallery */}
                        <div className="mb-8">
                            <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-400 mb-3">
                                Vzorky inšpekčných záberov z realizácie
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {droneCaptures.map((cap, i) => (
                                    <div 
                                        key={`modal-cap-${cap.id}`}
                                        onClick={() => {
                                            setLightbox(i);
                                        }}
                                        className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 cursor-pointer group/modal-img"
                                    >
                                        <Image
                                            src={cap.src}
                                            alt={cap.title}
                                            fill
                                            sizes="250px"
                                            className="object-cover group-hover/modal-img:scale-105 transition-transform"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                                            <span className="text-[10px] font-mono text-zinc-200 truncate">{cap.tag}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Action Bar */}
                        <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                                <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
                                <span>EASA Open A1/A3 certifikovaný operátor • Poistenie dohodnuté</span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/projekty/katastralny-zakres"
                                    className="px-4 py-2.5 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-extrabold font-display text-xs sm:text-sm transition-all"
                                >
                                    Kompletná prípadová štúdia ↗
                                </Link>
                                <a
                                    href="https://wa.me/421903406402?text=Dobry%20den,%20mame%20zaujem%20o%20technicku%20fotodokumentaciu%20a%20katastralny%20zakres"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold font-display text-xs sm:text-sm transition-all border border-neutral-700"
                                >
                                    Dopytovať audit (WhatsApp)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox Modal */}
            {lightbox !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50 p-2">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <button onClick={prevImage} className="absolute left-4 sm:left-10 text-white/80 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <div className="relative max-h-[85vh] max-w-[85vw] w-[1200px] h-[800px]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={lightbox === 0 ? "https://placehold.co/960x540/121214/eab308?text=Letecka+Ortofotomapa+%2B+Katastralny+Zakres+[DEMO]" : droneCaptures[lightbox].src}
                            alt={lightbox === 0 ? "Inšpekčný výstup & Katastrálny zákres [DEMO]" : droneCaptures[lightbox].title}
                            fill
                            className="object-contain rounded-lg shadow-2xl"
                            unoptimized
                        />
                    </div>

                    <button onClick={nextImage} className="absolute right-4 sm:right-10 text-white/80 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="absolute bottom-6 left-0 right-0 text-center text-white font-bold text-lg drop-shadow-lg pointer-events-none px-4">
                        <p>{lightbox === 0 ? "Inšpekčný výstup & Katastrálny zákres [DEMO]" : droneCaptures[lightbox].title}</p>
                        <p className="text-xs text-zinc-400 font-mono mt-1 font-normal">
                            {lightbox === 0 ? "Operatívny letecký audit záujmového územia a vektorové osadenie hraníc." : droneCaptures[lightbox].desc}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
