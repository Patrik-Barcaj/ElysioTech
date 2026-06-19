"use client"; // use client directive
import React from 'react'; // import react library

export default function Portfolio() { // export Portfolio component function
    const digitalProjects = [ // array of digital projects
        { title: 'E-commerce Webstránka', category: 'Webdevelopment', src: 'https://images.unsplash.com/photo-1547658719-da2b81169d42?q=80&w=600&auto=format&fit=crop' }, // project 1
        { title: 'Fintech Mobilná Appka', category: 'UI/UX & App Vývoj', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' }, // project 2
        { title: 'Rebranding pre Smart Značku', category: 'Brand Identita', src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600&auto=format&fit=crop' }, // project 3
        { title: 'Schémy pre Výrobné Procesy', category: 'Technická Grafika', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop' } // project 4
    ]; // digital projects end

    const droneProjects = [ // array of drone projects
        { title: 'Letecké Zábery pre Developerov', category: 'Video & Foto', src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop' }, // project 1
        { title: '3D Model Historickej Katedrály', category: 'Fotogrametria & Sken', src: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=600&auto=format&fit=crop' }, // project 2
        { title: 'Teplotná Inšpekcia Solárneho Parku', category: 'Priemyselná Inšpekcia', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' }, // project 3
        { title: 'Presná Ortofotomapa Pozemku', category: 'Geodézia & Zameranie', src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600&auto=format&fit=crop' } // project 4
    ]; // drone projects end

    return ( // return JSX layout
        <section id="portfolio" className="py-24 bg-[#0a0715] relative border-t border-white/5"> {/* section wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-16"> {/* header block */}
                    <h2 className="text-sm font-bold text-aurora-indigo tracking-widest uppercase mb-3 font-display">Ukážky Práce</h2> {/* subtitle label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Naše Portfólio</h3> {/* title */}
                </div> {/* header block end */}

                {/* Digital Studio Portfolio */}
                <div className="mb-20"> {/* digital wrapper */}
                    <h4 className="text-2xl font-bold font-display text-white mb-8 border-l-4 border-aurora-purple pl-4">Projekty <span className="text-aurora-purple">Digital Studio</span></h4> {/* section header */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* grid layout */}
                        {digitalProjects.map((proj, idx) => ( // map digital projects
                            <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 cursor-pointer"> {/* project card */}
                                <img src={proj.src} alt={proj.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" /> {/* project image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> {/* overlay */}
                                    <div className="p-5 w-full"> {/* padding wrapper */}
                                        <p className="text-aurora-purple text-xs font-bold uppercase tracking-wider mb-1">{proj.category}</p> {/* category label */}
                                        <h5 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight">{proj.title}</h5> {/* title */}
                                    </div> {/* padding end */}
                                </div> {/* overlay end */}
                            </div>
                        ))}
                    </div> {/* grid layout end */}
                </div> {/* digital wrapper end */}

                {/* Air Drones Portfolio */}
                <div> {/* air wrapper */}
                    <h4 className="text-2xl font-bold font-display text-white mb-8 border-l-4 border-aurora-green pl-4">Projekty <span className="text-aurora-green">Air Drones</span></h4> {/* section header */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* grid layout */}
                        {droneProjects.map((proj, idx) => ( // map drone projects
                            <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 cursor-pointer"> {/* project card */}
                                <img src={proj.src} alt={proj.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" /> {/* project image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> {/* overlay */}
                                    <div className="p-5 w-full"> {/* padding wrapper */}
                                        <p className="text-aurora-green text-xs font-bold uppercase tracking-wider mb-1">{proj.category}</p> {/* category label */}
                                        <h5 className="text-white font-bold font-display drop-shadow-md text-sm sm:text-base leading-tight">{proj.title}</h5> {/* title */}
                                    </div> {/* padding end */}
                                </div> {/* overlay end */}
                            </div>
                        ))}
                    </div> {/* grid layout end */}
                </div> {/* air wrapper end */}

                <div className="mt-16 text-center"> {/* bottom button container */}
                    <button onClick={() => alert('Všetky naše projekty momentálne nahrávame do galérie. Ďalšie referencie čoskoro pribudnú!')} className="px-8 py-4 bg-transparent border border-aurora-purple text-white rounded-full font-bold hover:bg-aurora-purple/20 transition-all duration-300"> {/* display alert on click */}
                        Zobraziť celú galériu {/* button label */}
                    </button> {/* button end */}
                </div> {/* bottom button end */}
            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
