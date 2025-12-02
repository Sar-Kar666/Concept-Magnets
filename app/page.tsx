import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import ScrollFxDemo from '@/components/demos/scroll-fx-demo';
import ZoomParallaxDemo from '@/components/demos/zoom-parallax-demo';
import { GetInTouch } from '@/components/ui/get-in-touch';

export default function Home() {
    const navLinks = [
        { label: 'HOME', href: '#' },
        { label: 'SERVICES', href: '#' },
        { label: 'WORK', href: '/work' },
        { label: 'CONTACT', href: '#' },
    ];

    const socialLinks = [
        { icon: <Facebook className="h-5 w-5" />, href: '#' },
        { icon: <Instagram className="h-5 w-5" />, href: '#' },
        { icon: <Twitter className="h-5 w-5" />, href: '#' },
        { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    ];

    return (
        <main className="min-h-screen">
            <MinimalistHero
                logoText="concept magnet"
                navLinks={navLinks}
                mainText="We create magnetic digital experiences that attract and retain your ideal audience."
                readMoreLink="#"
                overlayText={{
                    part1: 'concept',
                    part2: 'magnet',
                }}
                socialLinks={socialLinks}
                locationText="Global Agency"
            />
            <ScrollFxDemo />
            <ZoomParallaxDemo />
            <GetInTouch />
        </main>
    );
}
