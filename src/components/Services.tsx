import React from 'react'; // import react library
import ScrollReveal from './ui/ScrollReveal'; // import ScrollReveal

export default function Services() { // export default services component function
    const digitalServices = [ // array of digital services
        { // web service object
            title: 'Webstránky podľa potreby', // web service title
            description: 'Jednoduché, moderné a rýchle prezentačné weby navrhnuté presne pre vaše podnikanie alebo projekt.', // web service description
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
            icon: ( // web icon opening
                <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> // svg markup
            ) // web icon closing
        }, // web service object closing
        { // app service object
            title: 'Menšie aplikácie na mieru', // app service title
            description: 'Tvorba jednoduchších webových alebo mobilných aplikácií pre špecifické interné či verejné účely.', // app service description
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
            icon: ( // app icon opening
                <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> // svg markup
            ) // app icon closing
        }, // app service object closing
        { // design service object
            title: 'Grafické návrhy & Branding', // design service title
            description: 'Kompletný grafický dizajn od loga po vizitky a letáky, ktoré môžeme rovno poslať do tlače.', // design service description
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
            icon: ( // design icon opening
                <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> // svg markup
            ) // design icon closing
        }, // design service object closing
        { // technical graphics object
            title: 'Technická grafika', // tech graphics title
            description: 'Prehľadné vektorové schémy, technické nákresy a jednoduché vizualizácie procesov.', // tech graphics description
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
            icon: ( // tech graphics icon opening
                <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg> // svg markup
            ) // tech graphics icon closing
        } // tech graphics object closing
    ]; // end digital services array

    const droneServices = [ // array of drone services
        { // video service object
            title: 'Letecké video zábery', // video service title
            description: 'Prezentačné letecké video sekvencie v 4K kvalite pre vaše pozemky, podujatia či projekty.', // video service description
            image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600&auto=format&fit=crop',
            icon: ( // video icon opening
                <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> // svg markup
            ) // video icon closing
        }, // video service object closing
        { // scanning service object
            title: 'Letecká fotografia', // scanning service title
            description: 'Kvalitné letecké snímky z výšky vhodné pre zachytenie chaty, nehnuteľností či prírody.', // scanning service description
            image: 'https://images.unsplash.com/photo-1506469717960-433cebe3f181?q=80&w=600&auto=format&fit=crop',
            icon: ( // scanning icon opening
                <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> // svg markup
            ) // scanning icon closing
        }, // scanning service object closing
        { // postproduction service object
            title: 'Strih & Úprava materiálu', // postproduction service title
            description: 'Základná úprava, strih a farebná korekcia nasnímaných záberov podľa vašej predstavy.', // postproduction service description
            image: 'https://images.unsplash.com/photo-1574717024453-354056a5df3f?q=80&w=600&auto=format&fit=crop',
            icon: ( // postproduction icon opening
                <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg> // svg markup
            ) // postproduction icon closing
        } // postproduction service object closing
    ]; // end drone services array

    return ( // start return block
        <section id="services" className="py-24 relative"> {/* main services section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-20"> {/* header text container */}
                    <h2 className="text-sm font-bold text-aurora-green tracking-widest uppercase mb-3 font-display">Naša Ponuka</h2> {/* uppercase top label */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white font-display">Služby ElysioTech</h3> {/* main section title */}
                </div> {/* header text end */}

                {/* Digital Studio Services Section */}
                <div id="digital-services" className="mb-20 scroll-mt-24"> {/* digital block wrapper */}
                    <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4"> {/* subsection header flex */}
                        <div className="w-3 h-8 bg-aurora-purple rounded-full"></div> {/* accent bar */}
                        <h4 className="text-2xl md:text-3xl font-bold font-display text-white">Digital <span className="text-aurora-purple">Studio</span></h4> {/* subsection title */}
                    </div> {/* subsection header end */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* digital grid layout */}
                        {digitalServices.map((service, index) => ( // map digital services
                            <ScrollReveal key={index} delay={index * 0.1} className="h-full"> {/* scroll reveal wrapper */}
                                <div className="h-full bg-aurora-glass border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-purple/10 hover:border-aurora-purple/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_-10px_rgba(191,90,242,0.4)] group cursor-pointer relative overflow-hidden flex flex-col"> {/* service card */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="w-full h-40 mb-6 rounded-xl overflow-hidden relative border border-white/10 group-hover:border-aurora-purple/30 transition-colors duration-500 shrink-0"> {/* image container */}
                                        <img src={service.image} alt={service.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" /> {/* service image */}
                                        <div className="absolute bottom-2 left-2 z-10 w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-aurora-purple/50 group-hover:bg-aurora-purple/20 transition-all duration-500"> {/* icon frame */}
                                            {service.icon} {/* render icon */}
                                        </div> {/* icon frame end */}
                                    </div> {/* image container end */}
                                    <h5 className="relative z-10 text-xl font-bold text-white mb-3 font-display group-hover:text-aurora-purple transition-colors duration-300">{service.title}</h5> {/* card title */}
                                    <p className="relative z-10 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p> {/* card description */}
                                </div>
                            </ScrollReveal> // scroll reveal end
                        ))}
                    </div> {/* digital grid end */}
                </div> {/* digital block end */}

                {/* Air Drones Services Section */}
                <div id="drone-services" className="scroll-mt-24"> {/* air block wrapper */}
                    <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4"> {/* subsection header flex */}
                        <div className="w-3 h-8 bg-aurora-green rounded-full"></div> {/* accent bar */}
                        <h4 className="text-2xl md:text-3xl font-bold font-display text-white">Air <span className="text-aurora-green">Drones</span></h4> {/* subsection title */}
                    </div> {/* subsection header end */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* air grid layout */}
                        {droneServices.map((service, index) => ( // map drone services
                            <ScrollReveal key={index} delay={index * 0.1} className="h-full"> {/* scroll reveal wrapper */}
                                <div className="h-full bg-aurora-glass border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-gradient-to-br hover:from-white/5 hover:to-aurora-green/10 hover:border-aurora-green/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_-10px_rgba(48,209,88,0.4)] group cursor-pointer relative overflow-hidden flex flex-col"> {/* service card */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-aurora-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> {/* hover background glow */}
                                    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative border border-white/10 group-hover:border-aurora-green/30 transition-colors duration-500 shrink-0"> {/* image container */}
                                        <img src={service.image} alt={service.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" /> {/* service image */}
                                        <div className="absolute bottom-2 left-2 z-10 w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-aurora-green/50 group-hover:bg-aurora-green/20 transition-all duration-500"> {/* icon frame */}
                                            {service.icon} {/* render icon */}
                                        </div> {/* icon frame end */}
                                    </div> {/* image container end */}
                                    <h5 className="relative z-10 text-xl font-bold text-white mb-3 font-display group-hover:text-aurora-green transition-colors duration-300">{service.title}</h5> {/* card title */}
                                    <p className="relative z-10 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p> {/* card description */}
                                </div>
                            </ScrollReveal> // scroll reveal end
                        ))}
                    </div> {/* air grid end */}
                </div> {/* air block end */}

            </div> {/* container block end */}
        </section> // main section end
    ); // end return block
} // end services component
