"use client"; // mark as client component

import React from 'react'; // import react
import { motion } from 'framer-motion'; // import motion

interface MarqueeProps { // define props
    items: string[]; // array of strings to display
    speed?: number; // speed of marquee
} // end interface

export default function Marquee({ items, speed = 40 }: MarqueeProps) { // export Marquee component
    return ( // return JSX layout
        <div className="relative w-full overflow-hidden bg-aurora-dark/50 border-y border-white/5 py-6 flex items-center"> {/* marquee wrapper */}
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-aurora-dark to-transparent z-10"></div> {/* left fade */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-aurora-dark to-transparent z-10"></div> {/* right fade */}

            <motion.div // animated track
                className="flex whitespace-nowrap" // flex layout
                animate={{ // animation definition
                    x: ["0%", "-50%"] // scroll from 0 to -50% (since we duplicate items)
                }} // end animation
                transition={{ // animation config
                    duration: speed, // duration
                    ease: "linear", // linear constant speed
                    repeat: Infinity // loop forever
                }} // end transition
            > {/* track content */}
                {/* Duplicate the items array twice to create seamless loop */}
                {[...items, ...items, ...items, ...items].map((item, index) => ( // map duplicated items
                    <div key={index} className="flex items-center px-8"> {/* item wrapper */}
                        <span className="text-2xl font-bold font-display text-white/40 uppercase tracking-widest hover:text-aurora-purple transition-colors duration-300"> {/* item text */}
                            {item} {/* render text */}
                        </span> {/* text end */}
                        <span className="w-2 h-2 rounded-full bg-aurora-green/50 mx-8"></span> {/* separator dot */}
                    </div> // item wrapper end
                ))} {/* map end */}
            </motion.div> {/* animated track end */}
        </div> // marquee wrapper end
    ); // return end
} // component end
