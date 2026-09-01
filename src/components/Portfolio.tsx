"use client"; // use client directive
import React, { useState } from 'react'; // import react library with useState
import droneImg1 from '../assets/drone pics/DJI_0228.jpg'; // import drone image 1
import droneImg2 from '../assets/drone pics/DJI_0234.jpg'; // import drone image 2
import droneImg3 from '../assets/drone pics/DJI_0235.jpg'; // import drone image 3
import droneImg4 from '../assets/drone pics/DJI_0236.jpg'; // import drone image 4
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import setDriftLogo from '@/assets/apps/SetDrift.png';

export default function Portfolio() { // export Portfolio component function
    const otherProjects = projectsData.filter((p) => p.slug !== 'setdrift');
    const highlights = [
        {
            id: 'hl-prediction',
            title: 'Intelligent Setlist Prediction',
            desc: 'Aggregates recent tour dates, cleans metadata with fuzzy regex matching, and structures sets into Main Set and Encores.',
            accent: 'amber'
        },
        {
            id: 'hl-festival',
            title: 'Festival Timetable Merge',
            desc: 'Multi-artist engine that merges whole festival schedules into a single chronological warmup playlist.',
            accent: 'emerald'
        },
        {
            id: 'hl-pwa',
            title: 'PWA & Offline Resilience',
            desc: 'Fully installable mobile PWA with client-side caching (IndexedDB) for network-constrained stadium/festival environments.',
            accent: 'emerald'
        },
        {
            id: 'hl-spotify',
            title: 'Direct Spotify OAuth & Deep Linking',
            desc: 'Frictionless 1-click export directly into native mobile Spotify apps.',
            accent: 'amber'
        }
    ];
    const techBadges = [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Spotify Web API',
        'Setlist.fm API',
        'Upstash Redis',
        'PWA'
    ];
    const gallery = [ // array of gallery images
        { id: 'gal-drone-1', title: 'Letecké Zábery Pozemkov pre Developerov', category: 'Letecké Ortofoto & Video', src: droneImg1.src }, // gal 1
        { id: 'gal-drone-2', title: 'Zameranie Parciálnych Hraníc', category: 'Vektorové Kóty & Siete', src: droneImg2.src }, // gal 2
        { id: 'gal-drone-3', title: 'Prezentácia Stavebného Areálu', category: 'Veľkoformátový Zber Dát', src: droneImg3.src }, // gal 3
        { id: 'gal-drone-4', title: 'Presná Ortofotomapa Pozemku (90°)', category: 'Geodézia & Kataster', src: droneImg4.src } // gal 4
    ]; // gallery end

    const [lightbox, setLightbox] = useState<number | null>(null); // lightbox state

    const openLightbox = (index: number) => { // open lightbox function
        setLightbox(index); // set state
    }; // open function end

    const closeLightbox = () => { // close lightbox function
        setLightbox(null); // clear state
    }; // close function end

    const nextImage = (e: React.MouseEvent) => { // next image function
        e.stopPropagation(); // prevent closing
        if (lightbox === null) return; // guard clause
        const max = gallery.length - 1; // get max index
        setLightbox(lightbox === max ? 0 : lightbox + 1); // set next state
    }; // next function end

    const prevImage = (e: React.MouseEvent) => { // prev image function
        e.stopPropagation(); // prevent closing
        if (lightbox === null) return; // guard clause
        const max = gallery.length - 1; // get max index
        setLightbox(lightbox === 0 ? max : lightbox - 1); // set prev state
    }; // prev function end

    return ( // return JSX layout
        <section id="portfolio" className="py-24 bg-white dark:bg-[#0B0F17] relative border-t border-black/5 dark:border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Portfólio realizácií
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display">Naše projekty</h2> {/* title */}
                </div> {/* header block end */}

                {/* Unified Portfolio */}
                <div className="mb-16"> {/* portfolio wrapper */}

                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-6 border-l-4 border-amber-500 pl-4">
                        Weby & <span className="text-amber-500">Aplikácie</span>
                    </h3> {/* projects title */}
                    
                    {/* Featured Case Study: SetDrift */}
                    <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-[#151C2C]/90 border border-amber-500/30 dark:border-white/10 hover:border-amber-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.18)] mb-12 p-6 sm:p-8 lg:p-10 group">
                        {/* Ambient glow */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/15 transition-colors"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-colors"></div>

                        {/* Top Metadata Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 relative z-10 border-b border-black/5 dark:border-white/10 pb-5">
                            <div className="flex flex-wrap items-center gap-2.5">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-display tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Vlajkový Projekt • Case Study
                                </span>
                                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-wider text-amber-600 dark:text-amber-400 font-medium">
                                    Web Application / Music Tech & Automation / PWA
                                </span>
                            </div>

                            <div className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <span className="text-amber-500 font-bold uppercase tracking-wider font-display">Role:</span>
                                <span className="text-gray-800 dark:text-gray-200 font-medium">Full-Stack Architecture, UI/UX Design, API Integration</span>
                            </div>
                        </div>

                        {/* Main Grid: Info + Visual */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            
                            {/* Left Column (7 cols): Descriptions, Highlights, Badges & CTAs */}
                            <div className="lg:col-span-7 space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight">
                                            SetDrift
                                        </h4>
                                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                            LIVE PWA
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Data-driven concert warm-up aggregator that analyzes real-time live tour setlists from Setlist.fm and instantly compiles accurate, ready-to-play playlists into Spotify via automated track matching and tour-cycle analytics.
                                    </p>
                                </div>

                                {/* Key Highlights */}
                                <div className="space-y-3">
                                    <div className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 font-display flex items-center gap-2">
                                        <span>Kľúčové inovácie & technické riešenie</span>
                                        <div className="h-[1px] flex-1 bg-amber-500/20"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {highlights.map((hl) => (
                                            <div
                                                key={hl.id}
                                                className={`p-3.5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 ${
                                                    hl.accent === 'amber' ? 'hover:border-amber-500/40' : 'hover:border-emerald-500/40'
                                                } transition-colors`}
                                            >
                                                <div className="flex items-start gap-2.5">
                                                    <span
                                                        className={`w-5 h-5 rounded-full ${
                                                            hl.accent === 'amber'
                                                                ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                                                                : 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                                                        } text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5`}
                                                    >
                                                        ✓
                                                    </span>
                                                    <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                                        <strong className="text-gray-900 dark:text-white font-display block mb-0.5">
                                                            {hl.title}
                                                        </strong>
                                                        {hl.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack Badges */}
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-display block mb-2.5">
                                        Tech Stack Badges
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {techBadges.map((tech) => (
                                            <span
                                                key={`tech-${tech}`}
                                                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-black/5 dark:bg-white/5 text-gray-800 dark:text-gray-200 border border-black/10 dark:border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                    <a
                                        href="https://setdrift.elysiotech.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3.5 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold font-display rounded-xl text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                                    >
                                        <span>Launch App →</span>
                                    </a>
                                    <Link
                                        href="/projekty/setdrift"
                                        className="py-3.5 px-6 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-black/10 dark:border-white/15 rounded-xl font-bold font-display text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                                    >
                                        <span>Detail prípadovej štúdie</span>
                                        <span className="text-amber-500 font-semibold">↗</span>
                                    </Link>
                                </div>

                            </div>

                            {/* Right Column (5 cols): SetDrift Logo & Live Card */}
                            <div className="lg:col-span-5 flex flex-col items-center justify-center">
                                <a
                                    href="https://setdrift.elysiotech.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full relative aspect-square max-w-[360px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1626] to-[#070b12] border border-black/10 dark:border-white/10 p-6 flex flex-col items-center justify-between group/visual shadow-2xl hover:border-amber-500/50 transition-all duration-500"
                                >
                                    <div className="w-full flex items-center justify-between text-xs text-gray-400 font-mono">
                                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                            setdrift.elysiotech.com
                                        </span>
                                        <span className="text-[10px] uppercase tracking-widest text-amber-500 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">PWA Ready</span>
                                    </div>

                                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-auto">
                                        <div className="absolute inset-0 bg-emerald-500/10 rounded-full filter blur-2xl group-hover/visual:bg-amber-500/20 transition-all duration-500"></div>
                                        <Image
                                            src={setDriftLogo}
                                            alt="SetDrift Logo"
                                            width={208}
                                            height={208}
                                            className="object-contain relative z-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transform transition-transform duration-500 group-hover/visual:scale-105"
                                        />
                                    </div>

                                    <div className="w-full pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                                        <span>Spotify Web API + OAuth</span>
                                        <span className="text-amber-400 font-semibold group-hover/visual:translate-x-1 transition-transform inline-flex items-center gap-1">
                                            Launch App <span>→</span>
                                        </span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white border-l-4 border-amber-500/50 pl-3">
                            Ďalšie webové projekty
                        </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"> {/* projects layout */}
                        {otherProjects.map((proj) => ( // map projects
                            <Link
                                key={proj.id}
                                href={`/projekty/${proj.slug}`}
                                className={`group relative aspect-square overflow-hidden rounded-2xl ${proj.bgClass || 'bg-black/5 dark:bg-white/5'} border border-black/10 dark:border-white/10 cursor-pointer block shadow-sm hover:shadow-xl transition-all`}
                            >
                                <div className="relative w-full h-full p-4 flex items-center justify-center">
                                    <Image
                                        src={proj.image}
                                        alt={proj.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-contain transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> {/* overlay */}
                                    <div className="p-5 w-full"> {/* padding wrapper */}
                                        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">{proj.category}</p> {/* category label */}
                                        <h4 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight">{proj.title}</h4> {/* title */}
                                        <span className="text-xs text-amber-300 font-semibold mt-2 inline-flex items-center gap-1">
                                            Zobraziť detail projektu ↗
                                        </span>
                                    </div> {/* padding end */}
                                </div> {/* overlay end */}
                            </Link> // project card end
                        ))} {/* map projects end */}
                    </div> {/* projects layout end */}

                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-4">
                        Foto & Video <span className="text-emerald-500">Galéria pozemkov</span>
                    </h3> {/* gallery title */}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* gallery layout */}
                        {gallery.map((gal, idx) => ( // map gallery
                            <div
                                key={gal.id}
                                onClick={() => openLightbox(idx)}
                                className="group relative aspect-square overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={gal.src}
                                        alt={gal.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> {/* overlay */}
                                    <div className="p-5 w-full"> {/* padding wrapper */}
                                        <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">{gal.category}</p> {/* category label */}
                                        <h4 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight">{gal.title}</h4> {/* title */}
                                    </div> {/* padding end */}
                                </div> {/* overlay end */}
                            </div> // gallery card end
                        ))} {/* map gallery end */}
                    </div> {/* gallery layout end */}

                </div> {/* portfolio wrapper end */}

            </div> {/* container block end */}

            {/* Lightbox Modal */}
            {lightbox !== null && ( // lightbox conditional render
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}> {/* lightbox overlay */}
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50 p-2"> {/* close button */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> {/* close icon */}
                    </button> {/* close btn end */}

                    <button onClick={prevImage} className="absolute left-4 sm:left-10 text-white/80 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full"> {/* prev button */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> {/* prev icon */}
                    </button> {/* prev btn end */}

                    <div className="relative max-h-[85vh] max-w-[85vw] w-[1200px] h-[800px]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={gallery[lightbox].src}
                            alt={gallery[lightbox].title}
                            fill
                            className="object-contain rounded-lg shadow-2xl"
                        />
                    </div>

                    <button onClick={nextImage} className="absolute right-4 sm:right-10 text-white/80 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full"> {/* next button */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg> {/* next icon */}
                    </button> {/* next btn end */}

                    <div className="absolute bottom-6 left-0 right-0 text-center text-white font-bold text-lg drop-shadow-lg pointer-events-none"> {/* title wrapper */}
                        {gallery[lightbox].title} {/* project title */}
                    </div> {/* title wrapper end */}
                </div> // lightbox overlay end
            )} {/* lightbox conditional render end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
