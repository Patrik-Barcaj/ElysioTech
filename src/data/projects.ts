import pixelcraftLogo from '@/assets/websites/PixelCraft.logo.png';
import zenPierceLogo from '@/assets/websites/zen-pierce.png';
import echoLogo from '@/assets/websites/logo2.0.png';
import setDriftLogo from '@/assets/apps/SetDrift.png';

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
  role?: string;
  ctaText?: string;
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
    id: 'proj-setdrift',
    slug: 'setdrift',
    title: 'SetDrift',
    subtitle: 'Data-driven concert warm-up aggregator & Spotify playlist compiler',
    category: 'Web Application / Music Tech & Automation / PWA',
    tagline: 'Data-driven concert warm-up aggregator that analyzes real-time live tour setlists from Setlist.fm and instantly compiles accurate, ready-to-play playlists into Spotify via automated track matching and tour-cycle analytics.',
    description: 'SetDrift je inovatívny webový nástroj a PWA aplikácia prepájajúca reálne živé setlisty zo Setlist.fm so Spotify. Analyzuje prebiehajúce turné v reálnom čase a automaticky generuje presné warm-up playlisty.',
    longDescription: [
      'SetDrift vznikol ako odpoveď na potrebu moderných fanúšikov hudby a návštevníkov festivalov prísť na koncerty dokonale pripravený. Aplikácia prepája komunitnú databázu Setlist.fm s oficiálnym Spotify Web API.',
      'Srdcom architektúry je pokročilý dátový parser a predikčný algoritmus, ktorý agreguje setlisty z posledných zastávok prebiehajúceho turné, odstraňuje duplicity a nezrovnalosti v názvoch skladieb fuzzy regex matchingom a rekonštruuje set rozdelený na hlavnú časť a prídavky.',
      'Unikátnou inováciou je Festival Timetable Merge: engine schopný spracovať kompletný časový rozpis viacdňového festivalu a vygenerovať chronologický playlist interpretov.',
      'Aplikácia je postavená ako plnohodnotná Progressive Web App (PWA) s lokálnym IndexedDB úložiskom, vďaka čomu funguje spoľahlivo aj v preťažených sieťach festivalových arén a štadiónov.'
    ],
    features: [
      'Intelligent Setlist Prediction: Aggregates recent tour dates, cleans metadata with fuzzy regex matching, and structures sets into Main Set and Encores.',
      'Festival Timetable Merge: Multi-artist engine that merges whole festival schedules into a single chronological warmup playlist.',
      'PWA & Offline Resilience: Fully installable mobile PWA with client-side caching (IndexedDB) for network-constrained stadium/festival environments.',
      'Direct Spotify OAuth & Deep Linking: Frictionless 1-click export directly into native mobile Spotify apps.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spotify Web API', 'Setlist.fm API', 'Upstash Redis', 'PWA'],
    liveUrl: 'https://setdrift.elysiotech.com',
    image: setDriftLogo.src,
    bgClass: 'bg-[#0a0f18]',
    deliverables: [
      'Full-Stack Architecture',
      'UI/UX Design & Branding',
      'Spotify Web API & OAuth Integration',
      'Setlist.fm API & Regex Parser',
      'Mobile PWA & IndexedDB Offline Cache',
      'Upstash Redis Rate-Limiting & Caching'
    ],
    role: 'Full-Stack Architecture, UI/UX Design, API Integration',
    ctaText: 'Launch App →'
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
