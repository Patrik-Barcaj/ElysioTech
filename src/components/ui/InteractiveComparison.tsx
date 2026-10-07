"use client";
import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function InteractiveComparison() {
    const [sliderPos, setSliderPos] = useState<number>(50);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        setSliderPos(percentage);
    }, []);

    const onPointerDown = () => {
        setIsDragging(true);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onPointerUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="w-full max-w-6xl mx-auto my-12">
            {/* Header & Mode Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D26A]/40 bg-[#00D26A]/10 text-[#00D26A] text-xs font-mono tracking-widest uppercase mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A] animate-pulse"></span>
                        Interaktívne porovnanie
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        Surová fotka z terénu <span className="text-zinc-500 font-normal">vs.</span> <span className="text-[#00D26A]">Spracovaný digitálny výstup</span>
                    </h3>
                </div>

                {/* Quick Preset Buttons */}
                <div className="flex items-center gap-2 bg-[#121214] p-1.5 rounded-xl border border-neutral-800 text-xs font-mono shrink-0">
                    <button
                        type="button"
                        onClick={() => setSliderPos(0)}
                        className={`px-3 py-1.5 rounded-lg transition-all ${sliderPos < 20 ? 'bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Problém
                    </button>
                    <button
                        type="button"
                        onClick={() => setSliderPos(50)}
                        className={`px-3 py-1.5 rounded-lg transition-all ${sliderPos >= 20 && sliderPos <= 80 ? 'bg-[#00D26A]/20 text-[#00D26A] font-bold border border-[#00D26A]/40' : 'text-zinc-400 hover:text-white'}`}
                    >
                        50 / 50
                    </button>
                    <button
                        type="button"
                        onClick={() => setSliderPos(100)}
                        className={`px-3 py-1.5 rounded-lg transition-all ${sliderPos > 80 ? 'bg-[#00D26A]/20 text-[#00D26A] font-bold border border-[#00D26A]/40' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Digitálny výstup
                    </button>
                </div>
            </div>

            {/* Main Interactive Comparison Frame */}
            <div
                ref={containerRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-[#121214] select-none cursor-ew-resize shadow-2xl shadow-black/80"
            >
                {/* Viewfinder corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00D26A] z-30 pointer-events-none"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00D26A] z-30 pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00D26A] z-30 pointer-events-none"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00D26A] z-30 pointer-events-none"></div>

                {/* LAYER 1: Raw Field Photo (BEFORE) */}
                <div className="absolute inset-0">
                    <Image
                        src="/drone/DJI_0228.jpg"
                        alt="Surový záber z terénu bez spracovania"
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover"
                        priority
                    />

                    {/* Dark gradient for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>

                    {/* Before Label */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-black/80 text-amber-400 border border-amber-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                            ⚠️ SUROVÝ ZÁBER Z TERÉNU
                        </span>
                    </div>

                    {/* Problem POI Markers on Left */}
                    <div className="absolute top-[32%] left-[18%] z-20 max-w-[200px] pointer-events-none">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
                            <span className="text-[11px] font-mono font-bold text-rose-300 bg-black/85 px-2 py-1 rounded border border-rose-500/40 backdrop-blur-sm">
                                ❌ Chýbajú presné kóty
                            </span>
                        </div>
                    </div>

                    <div className="absolute bottom-[28%] left-[24%] z-20 max-w-[220px] pointer-events-none hidden sm:block">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping"></span>
                            <span className="text-[11px] font-mono font-bold text-amber-300 bg-black/85 px-2 py-1 rounded border border-amber-500/40 backdrop-blur-sm">
                                ⚠️ Odhad kubatúry od oka
                            </span>
                        </div>
                    </div>
                </div>

                {/* LAYER 2: Processed Orthophoto & Vector Data (AFTER) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
                >
                    <Image
                        src="/drone/DJI_0236.jpg"
                        alt="Spracovaná 90° ortofotomapa so zameraním"
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover"
                        priority
                    />

                    {/* Blueprint millimeter grid overlay on digital output */}
                    <div className="absolute inset-0 bg-blueprint-fine pointer-events-none opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>

                    {/* After Label */}
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-black/80 text-[#00D26A] border border-[#00D26A]/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
                            ✓ SPRACOVANÁ ORTOFOTOMAPA
                        </span>
                    </div>

                    {/* Technical Output POI Markers on Right */}
                    <div className="absolute top-[28%] right-[20%] z-20 max-w-[240px] pointer-events-none">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#00D26A] animate-ping"></span>
                            <span className="text-[11px] font-mono font-bold text-[#00D26A] bg-black/85 px-2.5 py-1 rounded border border-[#00D26A]/40 backdrop-blur-sm shadow-md">
                                ✓ 4K Audit objektu
                            </span>
                        </div>
                    </div>

                    <div className="absolute bottom-[30%] right-[22%] z-20 max-w-[240px] pointer-events-none hidden sm:block">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FFB800] animate-ping"></span>
                            <span className="text-[11px] font-mono font-bold text-[#FFB800] bg-black/85 px-2.5 py-1 rounded border border-[#FFB800]/40 backdrop-blur-sm shadow-md">
                                ✓ Vyznačené zóny staveniska
                            </span>
                        </div>
                    </div>

                    {/* Telemetry HUD bar at bottom right */}
                    <div className="absolute bottom-4 right-4 z-20 hidden md:block">
                        <span className="text-[10px] font-mono text-zinc-300 bg-black/80 px-3 py-1 rounded border border-neutral-800 backdrop-blur-md">
                            EASA A1/A3 • GSD 1.2 CM/PX • WGS-84 • DIGITÁLNY REPORT DO 48H
                        </span>
                    </div>
                </div>

                {/* DIVIDER LINE & DRAG HANDLE */}
                <div
                    className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
                    style={{ left: `${sliderPos}%` }}
                >
                    {/* Line */}
                    <div className="w-[2px] h-full bg-[#00D26A] shadow-[0_0_12px_rgba(0,210,106,0.8)]"></div>

                    {/* Handle */}
                    <div className="absolute w-9 h-9 rounded-full bg-black/90 border-2 border-[#00D26A] shadow-xl flex items-center justify-center text-white text-xs font-bold pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                        <svg className="w-4 h-4 text-[#00D26A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Accessible slider input for keyboard / screen readers */}
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>◀ Potiahnite pre porovnanie detailu ▶</span>
                <span className="hidden sm:inline">Reálny podklad z terénneho zberu dát</span>
            </div>

            {/* 3 Value Delivery Points Below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-800">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121214] border border-neutral-800">
                    <span className="text-xl">⏱️</span>
                    <div>
                        <span className="font-bold text-white text-sm block">Rýchly zber na stavbe</span>
                        <span className="text-xs text-zinc-400">Bezpečná inšpekcia bez plošín a zbytočných zdržaní.</span>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121214] border border-neutral-800">
                    <span className="text-xl">📊</span>
                    <div>
                        <span className="font-bold text-white text-sm block">Digitálny report do 48h</span>
                        <span className="text-xs text-zinc-400">Spracované dáta pripravené na priame technické rozhodnutia.</span>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121214] border border-neutral-800">
                    <span className="text-xl">🌐</span>
                    <div>
                        <span className="font-bold text-white text-sm block">V prehliadači bez inštalácie</span>
                        <span className="text-xs text-zinc-400">Otvorte odkaz v mobile alebo na PC a okamžite zdieľajte s tímom.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
