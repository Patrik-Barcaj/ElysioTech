"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ui/ScrollReveal';
import { Clock, Eye, FileDown, Layers, CheckCircle2, X } from 'lucide-react';

export default function Testimonials() {
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

    const protocolParams = [
        {
            id: 'param-delivery',
            title: 'Čas dodania',
            value: '48h',
            subtext: 'Garantovaný SLA termín od ukončenia letu',
            icon: Clock,
            accentColor: '#FFB800',
            bgGlow: 'bg-[#FFB800]/10',
            borderColor: 'border-[#FFB800]/30',
        },
        {
            id: 'param-resolution',
            title: 'Rozlíšenie',
            value: '48 MPx',
            subtext: 'Ortofoto s hustotou detailu 1.2 cm/px',
            icon: Layers,
            accentColor: '#00D26A',
            bgGlow: 'bg-[#00D26A]/10',
            borderColor: 'border-[#00D26A]/30',
        },
        {
            id: 'param-outputs',
            title: 'Výstupy',
            value: 'GeoTIFF & PDF',
            subtext: 'Vektorové hranice parciel + inšpekčný záznam',
            icon: CheckCircle2,
            accentColor: '#FFB800',
            bgGlow: 'bg-[#FFB800]/10',
            borderColor: 'border-[#FFB800]/30',
        },
    ];

    return (
        <section id="protocol" className="py-24 bg-[#080808] relative border-t border-neutral-800">
            <div id="testimonials" className="absolute -top-20 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-3 uppercase">
                        [ 04 // PROTOCOL ] • VÝSTUPNÝ AUDIT
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
                        Technický inšpekčný protokol <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFD066] to-[#00D26A]">(Náhľad)</span>
                    </h2>
                    <p className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg font-medium">
                        Štandardizovaný výstupný protokol generovaný ku každému leteckému auditu územia, stavby alebo priemyselného objektu.
                    </p>
                </div>

                {/* Interactive Protocol Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
                    {/* Left: 16:9 Interactive Inspection Sheet Placeholder */}
                    <div className="lg:col-span-7">
                        <ScrollReveal delay={0.1}>
                            <div 
                                onClick={() => setIsPreviewModalOpen(true)}
                                className="group relative aspect-video w-full rounded-3xl overflow-hidden border border-neutral-800 bg-[#121214] shadow-2xl cursor-pointer hover:border-[#FFB800]/60 transition-all duration-300"
                            >
                                {/* Coordinate cross accents */}
                                <span className="absolute top-3 left-3 z-20 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute top-3 right-3 z-20 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 left-3 z-20 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                <span className="absolute bottom-3 right-3 z-20 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                                {/* 16:9 Image */}
                                <Image
                                    src="https://placehold.co/1000x562/121214/eab308?text=Vzorovy+Inspekcny+Protokol+[PDF+Nahlad]"
                                    alt="Vzorový Inšpekčný Protokol [PDF Náhľad]"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                    priority
                                />

                                {/* Interactive Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end justify-between p-6 z-10">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#00D26A] animate-pulse"></span>
                                        <span className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                                            Protokol č. ET-2026-A1 • Overené
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-neutral-700 text-xs font-mono text-[#FFB800] group-hover:border-[#FFB800] transition-colors">
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>Zväčšiť náhľad</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: 3 Technical Parameters + Download Action */}
                    <div className="lg:col-span-5 space-y-4">
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-3.5 mb-6">
                                {protocolParams.map((param) => {
                                    const IconComponent = param.icon;
                                    return (
                                        <div
                                            key={param.id}
                                            className="bg-[#121214] border border-neutral-800 rounded-2xl p-4 sm:p-5 hover:border-neutral-700 transition-all duration-200 flex items-start gap-4 group"
                                        >
                                            <div className={`w-11 h-11 rounded-xl ${param.bgGlow} border ${param.borderColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                                <IconComponent className="w-5 h-5" style={{ color: param.accentColor }} strokeWidth={1.75} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                                                    {param.title}
                                                </div>
                                                <div className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight mt-0.5">
                                                    {param.value}
                                                </div>
                                                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                                                    {param.subtext}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Download Action Button */}
                            <div className="pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPreviewModalOpen(true)}
                                    className="w-full py-4 px-6 rounded-2xl border-2 border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10 font-bold font-display text-sm sm:text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-[#FFB800]/10 group"
                                >
                                    <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                                    <span>Stiahnuť vzorový report</span>
                                    <span className="font-mono text-xs opacity-70">[PDF]</span>
                                </button>
                                <p className="text-center text-[11px] font-mono text-zinc-500 mt-2.5">
                                    Vzorový PDF protokol obsahuje geodátovú analýzu a katastrálny zákres.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Interactive Lightbox / Modal for Protocol Inspection */}
            {isPreviewModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
                    onClick={() => setIsPreviewModalOpen(false)}
                >
                    <div
                        className="relative max-w-5xl w-full bg-[#121214] border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setIsPreviewModalOpen(false)}
                            className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                            aria-label="Zavrieť náhľad"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-2 uppercase">
                                [ VZOROVÝ REPORT // TECHNICKÁ ŠPECIFIKÁCIA ]
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                                Technický inšpekčný protokol & Katastrálny rozbor
                            </h3>
                            <p className="text-sm text-zinc-300 mt-1">
                                Geometricky presný náhľad fotogrametrického výstupu pripraveného pre projektantov a geodetov.
                            </p>
                        </div>

                        {/* Large 16:9 Image in Modal */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-[#09090b] mb-6 shadow-inner">
                            <Image
                                src="https://placehold.co/1000x562/121214/eab308?text=Vzorovy+Inspekcny+Protokol+[PDF+Nahlad]"
                                alt="Detail inšpekčného protokolu"
                                fill
                                sizes="1000px"
                                className="object-contain"
                                unoptimized
                            />
                        </div>

                        {/* Telemetry Summary Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-black/60 border border-neutral-800 text-xs font-mono mb-6">
                            <div>
                                <span className="text-zinc-500 block">Čas dodania:</span>
                                <span className="text-white font-bold">48 hodín (SLA)</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 block">Snímač a rozlíšenie:</span>
                                <span className="text-[#00D26A] font-bold">48 MPx / 1.2 cm na pixel</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 block">Dátové formáty:</span>
                                <span className="text-[#FFB800] font-bold">GeoTIFF, DXF, SVG, PDF</span>
                            </div>
                        </div>

                        {/* Modal Action Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                            <span className="text-xs font-mono text-zinc-400">
                                Certifikácia pilota EASA Open A1/A3 • Zmluvná garancia
                            </span>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://placehold.co/1000x562/121214/eab308?text=Vzorovy+Inspekcny+Protokol+[PDF+Nahlad]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 rounded-xl border border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10 font-bold font-display text-xs sm:text-sm transition-all"
                                >
                                    Otvoriť PDF v novom okne ↗
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setIsPreviewModalOpen(false)}
                                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold font-display text-xs sm:text-sm transition-all border border-neutral-700"
                                >
                                    Zavrieť
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
