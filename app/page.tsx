import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import ScrollFxDemo from '@/components/demos/scroll-fx-demo';
import ZoomParallaxDemo from '@/components/demos/zoom-parallax-demo';
import { GetInTouch } from '@/components/ui/get-in-touch';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export default function Home() {
    const navLinks = [
        { label: 'HOME', href: '#home' },
        { label: 'SERVICES', href: '#services' },
        { label: 'WORK', href: '/work' },
        { label: 'CONTACT', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <Facebook className="h-5 w-5" />, href: '#' },
        { icon: <Instagram className="h-5 w-5" />, href: '#' },
        { icon: <Twitter className="h-5 w-5" />, href: '#' },
        { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    ];

    return (
        <main className="min-h-screen">
            <ScrollToTop />
            <section id="home" className="mb-40 md:mb-20">
                <MinimalistHero
                    logoText={<><span className="text-primary">concept</span> M.</>}
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
            </section>
            <section id="services">
                <ScrollFxDemo />
            </section>
            <ZoomParallaxDemo />
            <section id="contact">
                <GetInTouch />
            </section>
        </main>
    );
}
