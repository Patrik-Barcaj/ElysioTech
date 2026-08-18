"use client"; // use client directive
import React, { useState } from 'react'; // import react library with useState
import droneImg1 from '../assets/drone pics/DJI_0228.jpg'; // import drone image 1
import droneImg2 from '../assets/drone pics/DJI_0234.jpg'; // import drone image 2
import droneImg3 from '../assets/drone pics/DJI_0235.jpg'; // import drone image 3
import droneImg4 from '../assets/drone pics/DJI_0236.jpg'; // import drone image 4
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';

export default function Portfolio() { // export Portfolio component function
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
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"> {/* projects layout */}
                        {projectsData.map((proj) => ( // map projects
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
