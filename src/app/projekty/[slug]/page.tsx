import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projectsData, getProjectBySlug } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Projekt nenájdený | ELYSIO TECH',
    };
  }

  return {
    title: `${project.title} – ${project.subtitle} | ELYSIO TECH`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isExternalLink = project.liveUrl.startsWith('http');
  const otherProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <main className="bg-gray-50 dark:bg-[#0B0F17] min-h-[100dvh] text-gray-900 dark:text-white relative">
      <Navigation />

      <article className="pt-28 sm:pt-32 pb-24 relative overflow-hidden">
        {/* Background glow graphics */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full filter blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-amber-500 transition-colors">Domov</Link>
              <span>/</span>
              <Link href="/#portfolio" className="hover:text-amber-500 transition-colors">Naše projekty</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">{project.title}</span>
            </nav>

            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors group"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">←</span>
              Späť na prehľad projektov
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-display tracking-widest text-amber-500 dark:text-amber-400 mb-4 uppercase">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 font-display font-bold mb-4">
              {project.subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Main Grid: Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
            
            {/* Left 2 Cols: Details, Features & Architecture */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Detailed Description */}
              <div className="bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-6 border-l-4 border-amber-500 pl-4">
                  O projekte & Riešenie
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {project.longDescription.map((paragraph, index) => (
                    <p key={`desc-p-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-6 border-l-4 border-emerald-500 pl-4">
                  Kľúčové funkcie & Vlastnosti
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={`feat-${index}`} className="flex items-start gap-3 text-gray-800 dark:text-gray-200">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs border border-emerald-500/20">
                        ✓
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-4">
                  Rozsah dodávky
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item, index) => (
                    <div key={`deliv-${index}`} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-black/5 dark:border-white/5 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <span className="text-amber-500">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Visual, Stack & Actions */}
            <div className="space-y-8 sticky top-28">
              
              {/* Visual Card */}
              <div className="bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-6 shadow-sm overflow-hidden group">
                <div className={`relative aspect-video sm:aspect-square w-full rounded-2xl overflow-hidden ${project.bgClass || 'bg-black/10 dark:bg-black/40'} border border-black/5 dark:border-white/10 mb-6 flex items-center justify-center p-4`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Primary Action Button: Open live site */}
                <a
                  href={project.liveUrl}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noopener noreferrer' : undefined}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold font-display rounded-xl text-base tracking-wide transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-3 transform hover:-translate-y-0.5 text-center"
                >
                  <span>{isExternalLink ? 'Navštíviť živý web' : 'Zobraziť v portfóliu'}</span>
                  <span className="text-lg">↗</span>
                </a>
              </div>

              {/* Technology Stack Card */}
              <div className="bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-display mb-4">
                  Použité technológie
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`tech-${tech}`}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation CTA Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-emerald-500/5 to-transparent border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
                  Máte záujem o podobné riešenie?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  Navrhneme a naprogramujeme modernú aplikáciu alebo web presne podľa vašich požiadaviek.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20spoluprace%20a%20vasich%20sluzieb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold font-display text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                    <span>Napísať na WhatsApp</span>
                  </a>
                  <Link
                    href="/#contact"
                    className="w-full py-3 px-4 bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 hover:border-amber-500/50 text-gray-900 dark:text-white rounded-xl font-bold font-display text-xs sm:text-sm transition-all text-center block"
                  >
                    Kontaktný formulár
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Explore Other Projects Carousel / Grid */}
          <div className="border-t border-black/10 dark:border-white/10 pt-16">
            <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-8">
              Ďalšie projekty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProjects.map((other) => (
                <Link
                  key={other.id}
                  href={`/projekty/${other.slug}`}
                  className="group bg-white dark:bg-[#151C2C] border border-black/10 dark:border-white/10 rounded-2xl p-5 hover:border-amber-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-amber-500 font-bold uppercase tracking-wider block mb-2">{other.category}</span>
                    <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">
                      {other.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {other.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 mt-auto">
                    Zobraziť detail projektu <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
