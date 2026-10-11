"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState<number>(50);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateSlider = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (e.touches.length > 0) {
            updateSlider(e.touches[0].clientX);
        }
    }, [updateSlider]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        setIsDragging(true);
        updateSlider(e.clientX);
    }, [updateSlider]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, updateSlider]);

    return (
        <section className="py-16 bg-[#080808] relative border-t border-neutral-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono tracking-widest mb-2 uppercase">
                        [ TELEMETRY COMPARISON ] • ROZLÍŠENIE DÁT
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
                        Satelit vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFD066] to-[#00D26A]">Ortofoto s katastrom</span>
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="max-w-5xl mx-auto">
                    <div
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onTouchMove={handleTouchMove}
                        onTouchStart={(e) => {
                            if (e.touches.length > 0) updateSlider(e.touches[0].clientX);
                        }}
                        className="relative aspect-video w-full rounded-3xl overflow-hidden border border-neutral-800 bg-[#121214] shadow-2xl select-none cursor-ew-resize group"
                    >
                        {/* Left layer (Pred): Satelitná mapa nízkej kvality */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="https://placehold.co/1200x675/18181b/71717a?text=Satelitny+snimok+(Bezny+standard)"
                                alt="Satelitný snímok (Bežný štandard)"
                                fill
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="object-cover pointer-events-none"
                                unoptimized
                                priority
                            />
                        </div>

                        {/* Right layer (Po): Ostrý 48 MPx letecký detail */}
                        <div
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        >
                            <Image
                                src="https://placehold.co/1200x675/09090b/eab308?text=Letecke+ortofoto+48MPx+%2B+Katastralny+zakres"
                                alt="Letecké ortofoto 48MPx + Katastrálny zákres"
                                fill
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="object-cover pointer-events-none"
                                unoptimized
                                priority
                            />
                        </div>

                        {/* Dividing line & draggable handle */}
                        <div
                            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFB800] via-[#00D26A] to-[#FFB800] -translate-x-1/2 pointer-events-none shadow-[0_0_15px_rgba(255,184,0,0.7)]"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black/90 border-2 border-[#FFB800] flex items-center justify-center shadow-2xl text-[#FFB800] text-sm font-bold backdrop-blur-md">
                                ⇄
                            </div>
                        </div>

                        {/* Corner technical labels */}
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                            <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 text-[11px] sm:text-xs font-mono font-semibold text-zinc-400 tracking-wider">
                                Satelit 15m/px
                            </span>
                        </div>

                        <div className="absolute top-4 right-4 z-20 pointer-events-none">
                            <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#FFB800]/40 text-[11px] sm:text-xs font-mono font-semibold text-[#FFB800] tracking-wider">
                                ElysioTech 1.2cm/px
                            </span>
                        </div>
                    </div>

                    {/* Single-line caption */}
                    <p className="mt-4 text-center text-xs sm:text-sm font-mono text-zinc-400 tracking-wide">
                        Posuňte stred pre porovnanie rozlíšenia a presnosti dát.
                    </p>
                </div>
            </div>
        </section>
    );
}
