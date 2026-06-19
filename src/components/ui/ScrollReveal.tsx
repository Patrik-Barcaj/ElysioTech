"use client"; // mark as client component for framer-motion

import React, { useRef } from 'react'; // import react hooks
import { motion, useInView } from 'framer-motion'; // import framer-motion

interface ScrollRevealProps { // define props interface
    children: React.ReactNode; // wrapped content
    delay?: number; // optional delay
    direction?: 'up' | 'down' | 'left' | 'right'; // optional direction
    className?: string; // optional classes
} // end interface

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = "" }: ScrollRevealProps) { // export ScrollReveal component
    const ref = useRef(null); // ref for intersection observer
    const isInView = useInView(ref, { once: true, margin: "-10%" }); // hook for visibility

    // Determine initial transform based on direction
    const getInitialTransform = () => { // helper function
        switch (direction) { // switch on direction
            case 'up': return { y: 40, x: 0 }; // slide up
            case 'down': return { y: -40, x: 0 }; // slide down
            case 'left': return { x: 40, y: 0 }; // slide left
            case 'right': return { x: -40, y: 0 }; // slide right
            default: return { y: 40, x: 0 }; // default up
        } // end switch
    }; // end helper

    const initialTransform = getInitialTransform(); // get initial state

    return ( // return JSX layout
        <div ref={ref} className={className}> {/* wrapper with ref */}
            <motion.div // animated container
                className="h-full" // ensure inner container stretches
                initial={{ opacity: 0, ...initialTransform }} // starting state
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialTransform }} // target state
                transition={{ // animation config
                    duration: 0.7, // duration
                    delay: delay, // delay
                    ease: [0.25, 0.1, 0.25, 1.0] // cubic bezier ease
                }} // end transition
            >
                {children} {/* render children */}
            </motion.div> {/* animated container end */}
        </div>
    ); // return end
} // component end
