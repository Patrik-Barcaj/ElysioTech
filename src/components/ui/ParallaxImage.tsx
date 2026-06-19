"use client"; // mark as client component

import React, { useRef } from 'react'; // import react hooks
import { motion, useScroll, useTransform } from 'framer-motion'; // import framer-motion hooks

interface ParallaxImageProps { // define props
    src: string; // image source
    alt: string; // image alt text
    className?: string; // optional extra classes
} // end interface

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) { // export ParallaxImage component
    const ref = useRef(null); // ref for scroll tracking
    const { scrollYProgress } = useScroll({ // scroll progress hook
        target: ref, // element to track
        offset: ["start end", "end start"] // track while element is between viewport bottom and top
    }); // end scroll hook

    // Map scroll progress (0 to 1) to y translation (-20% to 20%)
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]); // y transform calculation

    return ( // return JSX layout
        <div ref={ref} className={`relative overflow-hidden ${className}`}> {/* container with hidden overflow */}
            <motion.img // animated image
                src={src} // set source
                alt={alt} // set alt
                style={{ y }} // apply parallax y transform
                className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]" // image classes (taller than container for parallax headroom)
            /> {/* image end */}
        </div> // container end
    ); // return end
} // component end
