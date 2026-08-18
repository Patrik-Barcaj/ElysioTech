"use client"; // use client directive
import React, { useState } from 'react'; // import react and useState
import ScrollReveal from './ui/ScrollReveal'; // import scroll reveal

export default function FAQ() { // export FAQ component function
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [openId, setOpenId] = useState<string | null>('faq-soft-1'); // state for open question id

    const categories = [
        { id: 'all', name: 'Všetky oblasti' },
        { id: 'software', name: 'Weby & Softvér' },
        { id: 'drone', name: 'Letecké zábery & Dáta' },
        { id: 'print', name: 'Veľkoformátová tlač' }
    ];

    const faqs = [
        // Category 1: Weby & Softvér
        {
            id: 'faq-soft-1',
            category: 'software',
            categoryName: 'Weby & Softvér',
            q: 'V akom technologickom stacku vyvíjate webové aplikácie a weby?',
            a: 'Vyvíjame v modernom full-stack ekosystéme Next.js, React a TypeScript s integráciou GIS mapových vrstiev (MapLibre / MapTiler) a Tailwind CSS. Kód je optimalizovaný pre bleskové načítanie do 0,5s a vysoké SEO skóre.'
        },
        {
            id: 'faq-soft-2',
            category: 'software',
            categoryName: 'Weby & Softvér',
            q: 'Získam po dokončení plné vlastníctvo zdrojových kódov?',
            a: 'Áno. Po odovzdaní projektu získavate 100% vlastníctvo všetkých zdrojových kódov, assetov a prístupov bez akýchkoľvek skrytých licenčných poplatkov alebo viazanosti na našu správu.'
        },
        {
            id: 'faq-soft-3',
            category: 'software',
            categoryName: 'Weby & Softvér',
            q: 'Ako prebieha správa obsahu a údržba po spustení webu?',
            a: 'Podľa požiadaviek pripravíme jednoduché a prehľadné administračné rozhranie alebo zabezpečíme dlhodobú technickú podporu a aktualizácie na základe dohody.'
        },

        // Category 2: Dronové dáta
        {
            id: 'faq-drone-1',
            category: 'drone',
            categoryName: 'Letecké zábery & Dáta',
            q: 'Je prevádzka dronu legálna a certifikovaná?',
            a: 'Áno. Disponujeme oficiálnou registráciou a pilotnou certifikáciou EASA pre kategórie Open A1/A3. Lety realizujeme bezpečne, zodpovedne a v plnom súlade s platnou leteckou legislatívou SR.'
        },
        {
            id: 'faq-drone-2',
            category: 'drone',
            categoryName: 'Letecké zábery & Dáta',
            q: 'Je nutná moja osobná prítomnosť pri zbere leteckých dát?',
            a: 'Nie. Zber dát realizujeme samostatne na základe parcelného čísla, katastrálneho územia alebo GPS súradníc. Výsledné digitálne náhľady a spracované dáta odovzdávame elektronicky.'
        },
        {
            id: 'faq-drone-3',
            category: 'drone',
            categoryName: 'Letecké zábery & Dáta',
            q: 'V akých formátoch a rozlíšení dodávate letecké výstupy?',
            a: 'Fotografie dodávame v 4K/RAW (DNG/JPG) rozlíšení s vysokým dynamickým rozsahom, videosekvencie v plynulom 4K formáte a ortofotomapy v georeferencovaných vrstvách (GeoTIFF, GeoJSON, PNG).'
        },

        // Category 3: Veľkoformátová tlač
        {
            id: 'faq-print-1',
            category: 'print',
            categoryName: 'Veľkoformátová tlač',
            q: 'Aké materiály využívate pri výrobe reklamných tabúľ a bannerov?',
            a: 'Používame sendvičové hliníkové panely (Dibond) s dlhodobou stálosťou, odľahčené tvrdené PVC dosky (Komatex) a spevnené PVC bannery s kovovými očkami pre uchytenie na ploty a konštrukcie.'
        },
        {
            id: 'faq-print-2',
            category: 'print',
            categoryName: 'Veľkoformátová tlač',
            q: 'Aká je odolnosť tlačových materiálov voči poveternostným vplyvom?',
            a: 'Priama priemyselná UV tlač využíva vytvrdzované UV atramenty, ktoré sú vysoko odolné voči dažďu, mrazu, vetru a UV žiareniu, čo zabraňuje blednutiu farieb na priamom slnku.'
        },
        {
            id: 'faq-print-3',
            category: 'print',
            categoryName: 'Veľkoformátová tlač',
            q: 'Zabezpečujete aj grafickú prípravu a kótovanie do tlače?',
            a: 'Áno. Grafické podklady, zakreslenie kót, výmer pozemkov či logo manuál pripravujeme priamo v požadovanom tlačovom CMYK farebnom profile a rozlíšení 300 DPI.'
        }
    ];

    const toggleFaq = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const filteredFaqs = activeCategory === 'all' 
        ? faqs 
        : faqs.filter(faq => faq.category === activeCategory);

    return ( // return JSX layout
        <section id="faq" className="py-24 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-black/5 dark:border-white/5"> {/* section wrapper */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* container block */}
                <div className="text-center mb-12"> {/* header block */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-3 uppercase">
                        Otázky a odpovede
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-display">Často kladené otázky</h2> {/* title */}
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-base sm:text-lg">Prehľadné odpovede rozdelené podľa 3 hlavných oblastí našich služieb.</p>
                </div> {/* header block end */}

                {/* 3 Focus Area Category Switcher */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105'
                                        : 'bg-white dark:bg-[#151C2C] text-gray-700 dark:text-gray-300 border border-black/10 dark:border-white/10 hover:border-amber-500/50'
                                }`}
                            >
                                {cat.name}
                            </button>
                        );
                    })}
                </div>

                {/* Questions List Accordion */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => {
                        const isOpen = openId === faq.id;
                        return (
                            <ScrollReveal key={faq.id} delay={index * 0.05}>
                                <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white dark:bg-[#151C2C] border-amber-500/50 shadow-[0_10px_25px_rgba(245,158,11,0.1)]' : 'bg-white/70 dark:bg-[#151C2C]/50 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'}`}>
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none gap-4"
                                    >
                                        <div>
                                            <span className="text-[11px] font-bold font-display uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                                                {faq.categoryName}
                                            </span>
                                            <span className={`text-base sm:text-lg font-bold font-display transition-colors ${isOpen ? 'text-amber-500 dark:text-amber-400' : 'text-gray-900 dark:text-white'}`}>
                                                {faq.q}
                                            </span>
                                        </div>
                                        <span className={`text-2xl font-bold transition-transform duration-300 shrink-0 ${isOpen ? 'text-amber-500 rotate-45' : 'text-gray-400'}`}>
                                            +
                                        </span>
                                    </button>
                                    
                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 border-t border-black/5 dark:border-white/10 p-6 pt-3 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div> {/* container block end */}
        </section> // section wrapper end
    ); // return statement end
} // component function end
