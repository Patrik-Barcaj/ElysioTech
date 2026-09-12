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
    <main className="bg-[#080808] min-h-[100dvh] text-zinc-300 relative">
      <Navigation />

      <article className="pt-28 sm:pt-32 pb-24 relative overflow-hidden">
        {/* Background glow graphics */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FFB800]/5 rounded-full filter blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[#00D26A]/5 rounded-full filter blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
              <Link href="/" className="hover:text-[#00D26A] transition-colors">Domov</Link>
              <span>/</span>
              <Link href="/#portfolio" className="hover:text-[#00D26A] transition-colors">Naše projekty</Link>
              <span>/</span>
              <span className="text-white font-medium">{project.title}</span>
            </nav>

            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFB800] hover:text-white transition-colors group"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">←</span>
              Späť na prehľad projektov
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-xs font-display font-semibold tracking-widest text-[#FFB800] mb-4 uppercase">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-amber-400 to-[#00D26A] font-display font-bold mb-4">
              {project.subtitle}
            </p>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
            {project.role && (
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121214] border border-neutral-800 text-xs text-zinc-300">
                <span className="text-[#FFB800] font-bold uppercase tracking-wider font-display">Rola:</span>
                <span className="font-medium text-zinc-200">{project.role}</span>
              </div>
            )}
          </div>

          {/* Main Grid: Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
            
            {/* Left 2 Cols: Details, Features & Architecture */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Detailed Description */}
              <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-bold font-display text-white mb-6 border-l-4 border-[#FFB800] pl-4">
                  O projekte & Riešenie
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed text-base">
                  {project.longDescription.map((paragraph, index) => (
                    <p key={`desc-p-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-bold font-display text-white mb-6 border-l-4 border-[#00D26A] pl-4">
                  Kľúčové funkcie & Vlastnosti
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={`feat-${index}`} className="flex items-start gap-3 text-zinc-200">
                      <span className="w-6 h-6 rounded-full bg-[#00D26A]/10 text-[#00D26A] font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs border border-[#00D26A]/30">
                        ✓
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-xl font-bold font-display text-white mb-4">
                  Rozsah dodávky
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item, index) => (
                    <div key={`deliv-${index}`} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080808] border border-neutral-800 text-sm text-zinc-300 font-medium">
                      <span className="text-[#FFB800] font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Visual, Stack & Actions */}
            <div className="space-y-8 sticky top-28">
              
              {/* Visual Card */}
              <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 shadow-sm overflow-hidden group">
                <div className={`relative aspect-video sm:aspect-square w-full rounded-2xl overflow-hidden ${project.bgClass || 'bg-black/40'} border border-neutral-800 mb-6 flex items-center justify-center p-4`}>
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
                  className="w-full py-4 px-6 bg-[#00D26A] hover:bg-[#00B85C] text-black font-extrabold font-display rounded-xl text-base tracking-wide transition-all shadow-lg shadow-[#00D26A]/20 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 text-center"
                >
                  <span>{project.ctaText || (isExternalLink ? 'Navštíviť živý web' : 'Zobraziť v portfóliu')}</span>
                  <span className="text-lg font-bold">↗</span>
                </a>
              </div>

              {/* Technology Stack Card */}
              <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider font-display mb-4">
                  Použité technológie
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`tech-${tech}`}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation CTA Card */}
              <div className="bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  Máte záujem o podobné riešenie?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed">
                  Navrhneme a naprogramujeme modernú aplikáciu alebo web presne podľa vašich požiadaviek.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/421903406402?text=Dobry%20den,%20chcem%20sa%20informovat%20ohladom%20spoluprace%20a%20vasich%20sluzieb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#00D26A] hover:bg-[#00B85C] text-black rounded-xl font-extrabold font-display text-xs sm:text-sm transition-all shadow-lg shadow-[#00D26A]/20 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.573-10.564 5.824 0 10.569 4.743 10.571 10.564.002 5.82-4.747 10.564-10.571 10.564z" /></svg>
                    <span>Napísať na WhatsApp</span>
                  </a>
                  <Link
                    href="/#contact"
                    className="w-full py-3 px-4 bg-[#121214] border border-neutral-800 hover:border-[#FFB800]/50 text-white rounded-xl font-bold font-display text-xs sm:text-sm transition-all text-center block"
                  >
                    Kontaktný formulár
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Explore Other Projects Carousel / Grid */}
          <div className="border-t border-neutral-800 pt-16">
            <h2 className="text-2xl font-bold font-display text-white mb-8">
              Ďalšie projekty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProjects.map((other) => (
                <Link
                  key={other.id}
                  href={`/projekty/${other.slug}`}
                  className="group bg-[#121214] border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-[#FFB800] font-bold uppercase tracking-wider block mb-2">{other.category}</span>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-[#00D26A] transition-colors mb-2">
                      {other.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {other.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#00D26A] inline-flex items-center gap-1 mt-auto">
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
