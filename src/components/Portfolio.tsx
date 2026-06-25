"use client"; // use client directive
import React, { useState } from 'react'; // import react library with useState
import droneImg1 from '../assets/drone pics/DJI_0228.jpg'; // import drone image 1
import droneImg2 from '../assets/drone pics/DJI_0234.jpg'; // import drone image 2
import droneImg3 from '../assets/drone pics/DJI_0235.jpg'; // import drone image 3
import droneImg4 from '../assets/drone pics/DJI_0236.jpg'; // import drone image 4
import pixelcraftLogo from '../assets/websites/PixelCraft.logo.png'; // import pixelcraft logo
import zenPierceLogo from '../assets/websites/zen-pierce.png'; // import zen pierce logo

export default function Portfolio() { // export Portfolio component function
    const projects = [ // array of web/app projects
        { title: 'PixelCraft', category: 'Webová Aplikácia & Branding', src: pixelcraftLogo.src, link: 'https://pixel-craft-tau.vercel.app', bgClass: 'bg-black' }, // project 1
        { title: 'Zen Pierce', category: 'Vizuálny & Systémový Návrh', src: zenPierceLogo.src, link: 'https://zen-pierce.vercel.app', bgClass: 'bg-black' }, // project 2
        { title: 'Fintech Mobilná Appka', category: 'UI/UX & App Vývoj', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop', link: '#', bgClass: '' }, // project 3
        { title: 'Rebranding pre Smart Značku', category: 'Brand Identita', src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600&auto=format&fit=crop', link: '#', bgClass: '' } // project 4
    ]; // projects end

    const gallery = [ // array of gallery images
        { title: 'Letecké Zábery pre Developerov', category: 'Video & Foto', src: droneImg1.src }, // gal 1
        { title: '3D Model Historickej Katedrály', category: 'Fotogrametria & Sken', src: droneImg2.src }, // gal 2
        { title: 'Teplotná Inšpekcia Solárneho Parku', category: 'Priemyselná Inšpekcia', src: droneImg3.src }, // gal 3
        { title: 'Presná Ortofotomapa Pozemku', category: 'Geodézia & Zameranie', src: droneImg4.src } // gal 4
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
        <section id="portfolio" className="py-24 bg-[#0a0715] relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <h2 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display">Ukážky Práce</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Naše Portfólio</h3> {/* title */}
                </div> {/* header block end */}

                {/* Unified Portfolio */}
                <div className="mb-20"> {/* portfolio wrapper */}

                    <h4 className="text-2xl font-bold font-display text-white mb-8 border-l-4 border-aurora-purple pl-4">Naše <span className="text-aurora-purple">Projekty</span></h4> {/* projects title */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"> {/* projects layout */}
                        {projects.map((proj, idx) => ( // map projects
                            <a key={idx} href={proj.link} target={proj.link !== '#' ? "_blank" : undefined} rel={proj.link !== '#' ? "noopener noreferrer" : undefined} className={`group relative aspect-square overflow-hidden rounded-2xl ${proj.bgClass || 'bg-white/5'} border border-white/10 cursor-pointer block`}> {/* project card */}
                                <img src={proj.src} alt={proj.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" /> {/* project image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> {/* overlay */}
                                    <div className="p-5 w-full"> {/* padding wrapper */}
                                        <p className="text-aurora-purple text-xs font-bold uppercase tracking-wider mb-1">{proj.category}</p> {/* category label */}
                                        <h5 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight">{proj.title}</h5> {/* title */}
                                        {proj.link !== '#' && <span className="text-xs text-white/50 mt-1 block">Zobraziť web ↗</span>} {/* link hint */}
                                    </div> {/* padding end */}
                                </div> {/* overlay end */}
                            </a> // project card end
                        ))} {/* map projects end */}
                    </div> {/* projects layout end */}

                    <h4 className="text-2xl font-bold font-display text-white mb-8 border-l-4 border-aurora-green pl-4">Foto & Video <span className="text-aurora-green">Galéria</span></h4> {/* gallery title */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* gallery layout */}
                        {gallery.map((gal, idx) => ( // map gallery
                            <div key={idx} onClick={() => openLightbox(idx)} className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 cursor-pointer"> {/* gallery card */}
                                <img src={gal.src} alt={gal.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" /> {/* gallery image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> {/* overlay */}
                                    <div className="p-5 w-full"> {/* padding wrapper */}
                                        <p className="text-aurora-green text-xs font-bold uppercase tracking-wider mb-1">{gal.category}</p> {/* category label */}
                                        <h5 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight">{gal.title}</h5> {/* title */}
                                    </div> {/* padding end */}
                                </div> {/* overlay end */}
                            </div> // gallery card end
                        ))} {/* map gallery end */}
                    </div> {/* gallery layout end */}

                </div> {/* portfolio wrapper end */}

                <div className="mt-16 text-center"> {/* bottom button container */}
                    <button onClick={() => alert('Všetky naše projekty momentálne nahrávame do galérie. Ďalšie referencie čoskoro pribudnú!')} className="px-8 py-4 bg-transparent border border-aurora-purple text-white rounded-full font-bold hover:bg-aurora-purple/20 transition-all duration-300"> {/* display alert on click */}
                        Zobraziť celú galériu {/* button label */}
                    </button> {/* button end */}
                </div> {/* bottom button end */}
            </div> {/* container block end */}

            {/* Lightbox Modal */}
            {lightbox !== null && ( // lightbox conditional render
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={closeLightbox}> {/* lightbox overlay */}
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"> {/* close button */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> {/* close icon */}
                    </button> {/* close btn end */}

                    <button onClick={prevImage} className="absolute left-4 sm:left-10 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full"> {/* prev button */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> {/* prev icon */}
                    </button> {/* prev btn end */}

                    <img src={gallery[lightbox].src} alt="Gallery popup" className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} /> {/* popup image */}

                    <button onClick={nextImage} className="absolute right-4 sm:right-10 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full"> {/* next button */}
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
