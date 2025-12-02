"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Navbar } from './navbar';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    mainText: string;
    readMoreLink: string;
    overlayText: {
        part1: string;
        part2: string;
    };
    socialLinks: { icon: React.ReactNode; href: string }[];
    locationText: string;
    className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
    >
        {children}
    </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
        {icon}
    </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
    logoText,
    navLinks,
    mainText,
    readMoreLink,
    overlayText,
    socialLinks,
    locationText,
    className,
}: MinimalistHeroProps) => {
    return (
        <div
            className={cn(
                'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
                className
            )}
        >
            {/* Header */}
            {/* Header */}
            <Navbar logoText={logoText} navLinks={navLinks} />

            {/* Main Content Area */}
            <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-0 py-12 md:py-0">
                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="z-20 order-2 md:order-1 text-center md:text-left"
                >
                    <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
                    <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
                        Read More
                    </a>
                </motion.div>

                {/* Center Image with Circle */}
                <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute z-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 blur-2xl opacity-80 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                    ></motion.div>
                </div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
                >
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
                        {overlayText.part1}
                        <br />
                        {overlayText.part2}
                    </h1>
                </motion.div>
            </div>

            {/* Footer Elements */}
            <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center space-x-4"
                >
                    {socialLinks.map((link, index) => (
                        <SocialIcon key={index} href={link.href} icon={link.icon} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="text-sm font-medium text-foreground/80"
                >
                    {locationText}
                </motion.div>
            </footer>
        </div>
    );
};
