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
    deliverables: ['Webová aplikácia', 'UI/UX návrh', 'Canvas Engine', 'Mobilná optimalizácia'],
    ctaText: 'Spustiť appku →'
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
    deliverables: ['Prezentačný web', 'Katalóg šperkov', 'SEO optimalizácia', 'Responzívny dizajn'],
    ctaText: 'Navštíviť web →'
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
    deliverables: ['Audio Web Aplikácia', 'Web Audio Engine', 'UI/UX Archív', 'Databázová štruktúra'],
    ctaText: 'Spustiť prehrávač →'
  },
  {
    id: 'proj-setdrift',
    slug: 'setdrift',
    title: 'SetDrift',
    subtitle: 'Dátovo riadený agregátor koncertných setlistov & Spotify kompilátor',
    category: 'Webová Aplikácia & Music Tech',
    tagline: 'Dátovo riadený agregátor koncertných setlistov, ktorý v reálnom čase analyzuje turné zo Setlist.fm a okamžite zostavuje presné playlisty do Spotify prostredníctvom automatizovaného párovania skladieb.',
    description: 'SetDrift je inovatívna webová aplikácia a PWA prepájajúca reálne živé setlisty zo Setlist.fm so službou Spotify. Analyzuje prebiehajúce turné v reálnom čase a automaticky generuje presné warm-up playlisty.',
    longDescription: [
      'SetDrift vznikol ako odpoveď na potrebu hudobných fanúšikov a návštevníkov festivalov prísť na koncerty dokonale pripravení. Aplikácia inteligentne prepája komunitnú databázu Setlist.fm s oficiálnym Spotify Web API.',
      'Srdcom architektúry je pokročilý dátový parser a predikčný algoritmus, ktorý agreguje setlisty z posledných zastávok prebiehajúceho turné, odstraňuje duplicity a nezrovnalosti v názvoch skladieb pomocou fuzzy regex matching a rekonštruuje pravdepodobný koncertný set rozdelený na hlavnú časť a prídavky (Encores).',
      'Unikátnou inováciou je Festival Timetable Merge: inteligentný engine schopný spracovať kompletný časový harmonogram viacdňového festivalu a vygenerovať ucelený chronologický warm-up playlist všetkých vystupujúcich interpretov.',
      'Aplikácia je vyvinutá ako plnohodnotná Progressive Web App (PWA) s lokálnym IndexedDB úložiskom, vďaka čomu funguje spoľahlivo aj v sieťovo preťažených prostrediach festivalových areálov a štadiónov.'
    ],
    features: [
      'Inteligentná predikcia setlistov: Agregácia nedávnych dátumov turné, čistenie metadát fuzzy regex matchingom a štruktúrovanie na hlavný set a prídavky (Encores)',
      'Zlúčenie festivalových harmonogramov: Multi-artist engine pre zlúčenie celého festivalového harmonogramu do jedného chronologického warm-up playlistu',
      'PWA & offline odolnosť: Plne inštalovateľná mobilná PWA s klientskym cachovaním (IndexedDB) pre festivalové areály so slabým internetovým pripojením',
      'Priame Spotify prepojenie & deep linking: 1-klikový OAuth export a okamžité otvorenie vytvoreného playlistu v natívnej mobilnej aplikácii Spotify'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spotify Web API', 'Setlist.fm API', 'Upstash Redis', 'PWA'],
    liveUrl: 'https://setdrift.elysiotech.com',
    image: setDriftLogo.src,
    bgClass: 'bg-[#0a0f18]',
    deliverables: [
      'Full-Stack architektúra',
      'UI/UX návrh & branding',
      'Integrácia Spotify Web API & OAuth',
      'Setlist.fm API & dátový parser',
      'Mobilná PWA & IndexedDB offline cache',
      'Upstash Redis rate-limiting & cache'
    ],
    role: 'Full-Stack architektúra, UI/UX dizajn, API integrácia',
    ctaText: 'Spustiť aplikáciu →'
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
