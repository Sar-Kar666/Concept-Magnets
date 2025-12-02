import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';

export default function WorkPage() {
    const navLinks = [
        { label: 'HOME', href: '/' },
        { label: 'SERVICES', href: '#' },
        { label: 'WORK', href: '/work' },
        { label: 'CONTACT', href: '#' },
    ];

    const images = [
        { src: '/images/work_2.png', alt: 'Work 2' },
        { src: '/images/work_1.png', alt: 'Work 1' },
        { src: '/images/work_3.png', alt: 'Work 3' },
        { src: '/images/work_4.png', alt: 'Work 4' },
        { src: '/images/work_5.png', alt: 'Work 5' },
    ];

    return (
        <main className="min-h-screen bg-background font-sans relative">
            <div className="absolute top-0 left-0 right-0 z-50 p-8 md:p-12">
                <Navbar
                    logoText="concept magnet"
                    navLinks={navLinks}
                    className="text-white"
                    linkClassName="text-white/80 hover:text-white"
                />
            </div>

            <InfiniteGallery
                images={images}
                speed={1.2}
                zSpacing={3}
                visibleCount={12}
                falloff={{ near: 0.8, far: 14 }}
                className="h-screen w-full overflow-hidden"
            />

            <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white z-40">
                <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
                    <span className="italic">Our Work</span>
                </h1>
            </div>

            <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold z-40 text-foreground/60">
                <p>Use mouse wheel, arrow keys, or touch to navigate</p>
            </div>
        </main>
    );
}
