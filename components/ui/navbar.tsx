"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
    logoText: string | React.ReactNode;
    navLinks: { label: string; href: string }[];
    className?: string;
    linkClassName?: string;
}

export const Navbar = ({ logoText, navLinks, className, linkClassName }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <header className={cn("z-50 flex w-full max-w-7xl items-center justify-between mx-auto relative", className)}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold tracking-wider relative z-50"
                >
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>{logoText}</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, staggerChildren: 0.1 }}
                    className="hidden items-center space-x-8 md:flex"
                >
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.label}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className={cn("text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground", linkClassName)}
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-1.5 md:hidden relative z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-current origin-center"
                    ></motion.span>
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-0.5 w-6 bg-current"
                    ></motion.span>
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-current origin-center"
                    ></motion.span>
                </motion.button>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md md:hidden"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn("text-2xl font-bold tracking-widest text-foreground hover:text-primary transition-colors", linkClassName)}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
