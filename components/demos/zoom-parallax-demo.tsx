'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ZoomParallaxDemo() {

    React.useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
    }, [])


    const images = [
        {
            src: '/images/work_2.png',
            alt: 'Work 2',
        },
        {
            src: '/images/work_1.png',
            alt: 'Work 1',
        },
        {
            src: '/images/work_3.png',
            alt: 'Work 3',
        },
        {
            src: '/images/work_4.png',
            alt: 'Work 4',
        },
        {
            src: '/images/work_5.png',
            alt: 'Work 5',
        },
    ];

    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-5xl sm:text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl leading-none text-center">
                    Our Work
                </h1>
            </div>
            <ZoomParallax images={images} />
        </div>
    );
}
