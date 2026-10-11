"use client";

import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Clock, Layers, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
    const guarantees = [
        {
            id: 'guarantee-expedition',
            badge: '[ 48h Expedícia ]',
            title: '48h Expedícia',
            desc: 'Finálne dáta a spracované PDF protokoly doručené do 48 hodín od pristátia.',
            icon: Clock,
            accentColor: '#FFB800',
            bgGlow: 'bg-[#FFB800]/5',
            badgeBorder: 'border-[#FFB800]/40 text-[#FFB800] bg-[#FFB800]/10',
            features: [
                'Garantovaný SLA termín do 48 hodín',
                'Digitálne odovzdanie cez privátny cloud'
            ]
        },
        {
            id: 'guarantee-formats',
            badge: '[ Univerzálne formáty ]',
            title: 'Univerzálne formáty',
            desc: 'Dáta odovzdávame pripravené pre prax: GeoTIFF, DXF, SVG aj webové náhľady.',
            icon: Layers,
            accentColor: '#00D26A',
            bgGlow: 'bg-[#00D26A]/5',
            badgeBorder: 'border-[#00D26A]/40 text-[#00D26A] bg-[#00D26A]/10',
            features: [
                'Kompatibilita s CAD, GIS & Adobe nástrojmi',
                'Georeferencované ortofotomapy v mierke 1:1'
            ]
        },
        {
            id: 'guarantee-legislation',
            badge: '[ Legislatívna čistota ]',
            title: 'Legislatívna čistota',
            desc: 'Registrovaná prevádzka, EASA certifikácia A1/A3, poistenie a plný rešpekt k vzdušnému priestoru.',
            icon: ShieldCheck,
            accentColor: '#FFB800',
            bgGlow: 'bg-[#FFB800]/5',
            badgeBorder: 'border-[#FFB800]/40 text-[#FFB800] bg-[#FFB800]/10',
            features: [
                'Zmluvné poistenie zodpovednosti za škodu',
                'Striktné dodržiavanie leteckých predpisov SR'
            ]
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-[#080808] relative border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-3 uppercase">
                        [ 04 // STANDARDS ] • GARANCIA KVALITY
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
                        Garancia technického štandardu
                    </h2>
                    <p className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg font-medium">
                        Nekompromisná presnosť, bezpečnosť a pripravenosť dát pre okamžité nasadenie v projekčnej a developerskej praxi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {guarantees.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <ScrollReveal key={item.id} delay={0.1 * (idx + 1)} className="h-full">
                                <div className="h-full bg-[#121214] border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                                    {/* Coordinate cross accents */}
                                    <span className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                    <span className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                    <span className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>
                                    <span className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none leading-none opacity-60">+</span>

                                    <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgGlow} rounded-full blur-3xl group-hover:opacity-100 opacity-60 transition-opacity`}></div>

                                    <div>
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold border ${item.badgeBorder}`}>
                                                {item.badge}
                                            </span>
                                            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform">
                                                <IconComponent className="w-5 h-5" style={{ color: item.accentColor }} strokeWidth={1.75} />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-medium">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-neutral-800/80 mt-auto space-y-2.5">
                                        {item.features.map((feat) => (
                                            <div key={feat} className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                                                <span style={{ color: item.accentColor }} className="font-bold">✓</span>
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
