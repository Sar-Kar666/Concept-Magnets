'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function ZoomParallaxDemo() {

    // Lenis is now handled globally in SmoothScroll component

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
        // Adding duplicates to match the 7 images expected by the component logic if needed, 
        // or just letting it cycle. The original demo had 7 images.
        {
            src: '/images/work_2.png',
            alt: 'Work 2',
        },
        {
            src: '/images/work_1.png',
            alt: 'Work 1',
        },
    ];

    return (
        <div className="w-full relative">
            <div className="w-full z-10 flex justify-center py-12 md:py-20 pointer-events-none">
                <h1 className="text-6xl sm:text-8xl font-bold text-foreground md:text-9xl leading-none text-center">
                    Our Work
                </h1>
            </div>
            <ZoomParallax images={images} />
            <div className="h-[50vh]" />
        </div>
    );
}
