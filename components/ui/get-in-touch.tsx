"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GetInTouchProps {
    className?: string;
}

export const GetInTouch = ({ className }: GetInTouchProps) => {
    return (
        <section className={cn("relative w-full bg-background py-24 md:py-32 overflow-hidden", className)}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Heading & Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
                            Let's start a <br />
                            <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">conversation.</span>
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                            Ready to take your digital presence to the next level? We're here to help you navigate the complexities of the modern web.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="mailto:hello@conceptmagnet.com"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 group"
                            >
                                Say Hello
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground border border-foreground/20 rounded-full hover:bg-foreground/5 hover:border-[#00f0ff] transition-all duration-300"
                            >
                                View Services
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Details & Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 hover:border-[#7000ff] transition-colors duration-500">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-[#00f0ff]/10 rounded-full group-hover:bg-[#00f0ff]/20 transition-colors">
                                        <Mail className="h-6 w-6 text-[#00f0ff]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-[#00f0ff] transition-colors">Email Us</h3>
                                        <p className="text-foreground/60">hello@conceptmagnet.com</p>
                                        <p className="text-foreground/60">careers@conceptmagnet.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-[#7000ff]/10 rounded-full group-hover:bg-[#7000ff]/20 transition-colors">
                                        <MapPin className="h-6 w-6 text-[#7000ff]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-[#7000ff] transition-colors">Visit Us</h3>
                                        <p className="text-foreground/60">123 Innovation Drive</p>
                                        <p className="text-foreground/60">Tech City, TC 90210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-[#ff0099]/10 rounded-full group-hover:bg-[#ff0099]/20 transition-colors">
                                        <Phone className="h-6 w-6 text-[#ff0099]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-[#ff0099] transition-colors">Call Us</h3>
                                        <p className="text-foreground/60">+1 (555) 123-4567</p>
                                        <p className="text-foreground/60">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00f0ff]/30 via-[#7000ff]/30 to-[#ff0099]/30 blur-[100px] rounded-full -z-10 opacity-50 pointer-events-none animate-pulse" />
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Concept Magnet. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
