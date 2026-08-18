import pixelcraftLogo from '@/assets/websites/PixelCraft.logo.png';
import zenPierceLogo from '@/assets/websites/zen-pierce.png';
import echoLogo from '@/assets/websites/logo2.0.png';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  technologies: string[];
  liveUrl: string;
  image: string;
  bgClass?: string;
  deliverables: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-pixelcraft',
    slug: 'pixelcraft',
    title: 'PixelCraft',
    subtitle: 'Interaktívny generátor & editor pixel-art grafiky',
    category: 'Webová Aplikácia & Systém',
    tagline: 'Výkonný webový nástroj na tvorbu, transformáciu a export pixelovej grafiky a herných assetov.',
    description: 'PixelCraft je moderná webová aplikácia navrhnutá pre tvorcov, dizajnérov a vývojárov hier. Poskytuje interaktívny canvas editor s optimalizovaným renderingom v reálnom čase, paletami farieb a exportom do viacerých formátov.',
    longDescription: [
      'Aplikácia vznikla s dôrazom na maximálny výkon a plynulú manipuláciu s pixelovými mriežkami priamo v prehliadači bez nutnosti inštalácie externého softvéru.',
      'Architektúra je postavená na modernom Next.js a React ekosystéme s využitím HTML5 Canvas API a optimalizovaného spracovania dát, čo zaručuje okamžitú odozvu pri kreslení aj na mobilných zariadeniach.',
      'Súčasťou riešenia je systém vrstiev, história úprav (Undo/Redo), pokročilý výber farieb, import referenčných obrázkov a priamy export optimalizovaných PNG súborov.'
    ],
    features: [
      'Interaktívne plátno s nastaviteľnou veľkosťou mriežky (8x8 až 64x64)',
      'Optimalizovaný rendering cez HTML5 Canvas bez oneskorenia',
      'Predpripravené retro farebné palety a vlastný RGB/HEX výber',
      'História operácií a klávesové skratky pre rýchlu prácu',
      'Jednoduchý export vo vysokom rozlíšení bez straty ostrosti pixelov'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas API'],
    liveUrl: 'https://pixelcraft.elysiotech.com',
    image: pixelcraftLogo.src,
    bgClass: 'bg-black/90',
    deliverables: ['Webová aplikácia', 'UI/UX návrh', 'Canvas Engine', 'Mobilná optimalizácia']
  },
  {
    id: 'proj-zenpierce',
    slug: 'zen-pierce',
    title: 'Zen Pierce',
    subtitle: 'Vizuálny & katalógový web pre prémiové piercing štúdio',
    category: 'Vizuálny & Katalógový Web',
    tagline: 'Elegantná webová prezentácia s interaktívnym katalógom služieb, šperkov a online rezerváciou.',
    description: 'Zen Pierce je moderný prezentačný web vytvorený na mieru pre štúdio piercingu a body artu. Kombinuje čistý minimalistický vizuál s dôrazom na hygienické štandardy, portfólio prác a jednoduchú orientáciu zákazníka.',
    longDescription: [
      'Cieľom projektu bolo vytvoriť dôveryhodnú a vizuálne atraktívnu online prezentáciu, ktorá odbúrava obavy klientov, prehľadne vysvetľuje proces aplikácie a starostlivosti o piercing.',
      'Web disponuje interaktívnou galériou šperkov a realizácií s filtrovaním podľa umiestnenia, detailným cenníkom a priamym prepojením na rezervačný systém a sociálne siete.',
      'Riešenie je plne optimalizované pre mobilné zariadenia s bleskovým načítaním do 0,5 sekundy a responzívnymi interakciami.'
    ],
    features: [
      'Minimalistický tmavý dizajn s prémiovým vizuálnym štýlom',
      'Interaktívny katalóg šperkov s filtrovaním podľa zón',
      'Prehľadný cenník a podrobné pokyny pre následnú starostlivosť (Aftercare)',
      'Priame prepojenie na rýchly kontakt cez WhatsApp a Instagram',
      'Vysoký dôraz na SEO a lokálne vyhľadávanie'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    liveUrl: 'https://zenpierce.elysiotech.com',
    image: zenPierceLogo.src,
    bgClass: 'bg-[#111111]',
    deliverables: ['Prezentačný web', 'Katalóg šperkov', 'SEO optimalizácia', 'Responzívny dizajn']
  },
  {
    id: 'proj-echo',
    slug: 'echo',
    title: 'Echo',
    subtitle: 'Fyzická zbierka, archív & interaktívny prehrávač',
    category: 'Fyzická Zbierka & Prehrávač',
    tagline: 'Unikátna digitálna platforma pre správu, vizualizáciu a interaktívne prehrávanie audio zbierky.',
    description: 'Echo predstavuje webovú aplikáciu pre audio nadšencov a zberateľov fyzických nosičov. Umožňuje katalogizovať hudobnú zbierku, vizualizovať obaly albumov a prehrávať zvukové nahrávky cez moderné webové rozhranie.',
    longDescription: [
      'Projekt prepája fyzický svet vinylov, kaziet a CD s digitálnym rozhraním. Používateľom prináša zážitok z listovania v zbierke obohatený o interaktívne audio vizualizácie.',
      'Implementovaný je zákazkový audio engine s plynulým prehrávaním na pozadí, generovaním zvukových vĺn a dynamickým farebným podsvietením podľa obalu albumu.',
      'Systém zahŕňa vyhľadávanie v databáze, kategorizáciu podľa žánrov a rokov vydania a detailné zobrazenie tracklistov.'
    ],
    features: [
      'Zákazkový webový audio prehrávač s waveform vizualizáciou',
      'Katalógová správa fyzických a digitálnych albumov',
      'Dynamické adaptívne farebné pozadia podľa obalu nahrávky',
      'Prehľadné filtrovanie a okamžité fulltextové vyhľadávanie',
      'Responzívne ovládanie prehrávania pre desktop aj smartfóny'
    ],
    technologies: ['Next.js', 'React', 'Web Audio API', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://echo.elysiotech.com',
    image: echoLogo.src,
    bgClass: 'bg-[#0f172a]',
    deliverables: ['Audio Web Aplikácia', 'Web Audio Engine', 'UI/UX Archív', 'Databázová štruktúra']
  },
  {
    id: 'proj-gis-demo',
    slug: 'gis-portal',
    title: 'Real Estate GIS Portál',
    subtitle: 'Interaktívna mapová platforma s ortofotomapami a parcelami',
    category: 'Zákazkový GIS & Mapy',
    tagline: 'Zákazkový mapový portál integrujúci letecké snímky z dronu, hranice parciel a dáta pre investorov.',
    description: 'Real Estate GIS Portál demonštruje možnosti prepojenia presných leteckých ortofotomáp s interaktívnymi vektorovými vrstvami katastra nehnuteľností priamo vo webovom prehliadači.',
    longDescription: [
      'Riešenie určené pre developerov, realitné kancelárie a investorov, ktorí potrebujú klientom prezentovať rozsah pozemkov, inžinierske siete a terénne prevýšenia v reálnom prostredí.',
      'Aplikácia využíva vektorové mapové jadro s vysokým výkonom, podporou vrstvenia ortofotomáp vo vysokom rozlíšení a interaktívnymi nástrojmi na meranie plôch a vzdialeností.',
      'Dáta sú priamo synchronizované s výstupmi z leteckého zberu dát a vektorového spracovania od ELYSIO TECH.'
    ],
    features: [
      'Interaktívne mapové vrstvy MapLibre / MapTiler s vysokou snímkovou frekvenciou',
      'Presné prekrytie ortofotomapy z dronu s katastrálnou mapou',
      'Nástroje na meranie vzdialeností, obvodov a výmer parciel',
      'Filtrovanie zón podľa stavebného určenia a dostupnosti sietí',
      'Okamžité načítanie bez nutnosti špecializovaného GIS softvéru'
    ],
    technologies: ['Next.js', 'React', 'MapLibre GL', 'GeoJSON', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '/#portfolio',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?q=80&w=1200&auto=format&fit=crop',
    bgClass: 'bg-[#0b1329]',
    deliverables: ['GIS Web Platforma', 'Spracovanie GeoDát', 'Vektorové vrstvy', 'Integrácia máp']
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
