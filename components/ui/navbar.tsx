"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    className?: string;
    linkClassName?: string;
}

export const Navbar = ({ logoText, navLinks, className, linkClassName }: NavbarProps) => {
    return (
        <header className={cn("z-30 flex w-full max-w-7xl items-center justify-between mx-auto", className)}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold tracking-wider"
            >
                <Link href="/">{logoText}</Link>
            </motion.div>
            <div className="hidden items-center space-x-8 md:flex">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={cn("text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground", linkClassName)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-1.5 md:hidden"
                aria-label="Open menu"
            >
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="block h-0.5 w-5 bg-current"></span>
            </motion.button>
        </header>
    );
};
