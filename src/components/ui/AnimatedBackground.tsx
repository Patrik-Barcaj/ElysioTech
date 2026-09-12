"use client"; // mark as client component for framer-motion

import React, { useEffect, useState } from 'react'; // import react hooks
import { motion } from 'framer-motion'; // import motion from framer-motion

export default function AnimatedBackground() { // export AnimatedBackground component
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // state for mouse position
    
    useEffect(() => { // effect for mouse tracking
        const handleMouseMove = (e: MouseEvent) => { // mouse move handler
            setMousePosition({ // update state
                x: e.clientX, // x pos
                y: e.clientY // y pos
            });
        }; // handler end
        
        window.addEventListener('mousemove', handleMouseMove); // attach listener
        return () => window.removeEventListener('mousemove', handleMouseMove); // cleanup listener
    }, []); // empty dependency array

    return ( // return JSX layout
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none"> {/* background wrapper */}
            {/* Base gradient blobs */}
            <motion.div  // animated blob
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-aurora-purple/20 rounded-full blur-[100px]" // tailwind classes
                animate={{ // animation definition
                    x: [0, 50, -50, 0], // x translation
                    y: [0, -50, 50, 0], // y translation
                    scale: [1, 1.1, 0.9, 1], // scale changes
                }} // end animation
                transition={{ // animation transition config
                    duration: 15, // duration in seconds
                    repeat: Infinity, // loop forever
                    ease: "linear" // linear easing
                }} // end transition
            /> {/* blob end */}
            
            <motion.div // animated blob
                className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-aurora-green/10 rounded-full blur-[120px]" // tailwind classes
                animate={{ // animation definition
                    x: [0, -70, 70, 0], // x translation
                    y: [0, 70, -70, 0], // y translation
                    scale: [1, 1.2, 0.8, 1], // scale changes
                }} // end animation
                transition={{ // animation transition config
                    duration: 20, // duration in seconds
                    repeat: Infinity, // loop forever
                    ease: "linear" // linear easing
                }} // end transition
            /> {/* blob end */}

            {/* Mouse tracking subtle glow */}
            <motion.div // animated blob
                className="absolute w-80 h-80 bg-aurora-indigo/15 rounded-full blur-[100px] pointer-events-none" // tailwind classes
                animate={{ // animation definition
                    x: mousePosition.x - 160, // center on mouse x
                    y: mousePosition.y - 160, // center on mouse y
                }} // end animation
                transition={{ // animation transition config
                    type: "spring", // spring physics
                    damping: 40, // spring damping
                    stiffness: 50, // spring stiffness
                    mass: 0.5 // spring mass
                }} // end transition
            /> {/* blob end */}
        </div> // background wrapper end
    ); // return end
} // component end
