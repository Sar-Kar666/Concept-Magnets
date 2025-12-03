"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface GetInTouchProps {
    className?: string;
}

export const GetInTouch = ({ className }: GetInTouchProps) => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);

    // Magnetic button refs
    const magneticBtnRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Parallax Background Blob
            gsap.to(blobRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // 2. Staggered Text Reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.fromTo(headingRef.current,
                { y: 50, opacity: 0, rotateX: -20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(textRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6"
                )
                .fromTo(buttonsRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6"
                );

            // 3. Card 3D Entrance
            gsap.fromTo(cardRef.current,
                { x: 100, opacity: 0, rotateY: 15 },
                {
                    x: 0,
                    opacity: 1,
                    rotateY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );

        }, sectionRef);

        // Magnetic Button Effect
        const btn = magneticBtnRef.current;
        if (btn) {
            const moveBtn = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            const resetBtn = () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            };

            btn.addEventListener('mousemove', moveBtn);
            btn.addEventListener('mouseleave', resetBtn);

            return () => {
                btn.removeEventListener('mousemove', moveBtn);
                btn.removeEventListener('mouseleave', resetBtn);
                ctx.revert();
            };
        }

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={cn("relative w-full bg-background py-24 md:py-32 overflow-hidden perspective-1000", className)}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Heading & Call to Action */}
                    <div className="space-y-8">
                        <h2 ref={headingRef} className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground leading-[0.9]">
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                                conversation.
                            </span>
                        </h2>
                        <p ref={textRef} className="text-lg md:text-xl text-foreground/70 max-w-md leading-relaxed">
                            Ready to take your digital presence to the next level? We're here to help you navigate the complexities of the modern web.
                        </p>

                        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 pt-4">
                            <a
                                ref={magneticBtnRef}
                                href="mailto:hello@conceptmagnet.com"
                                className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300 group overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Say Hello
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-foreground border border-foreground/20 rounded-full hover:bg-foreground/5 hover:border-white transition-all duration-300"
                            >
                                View Services
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Contact Details & Visual */}
                    <div ref={cardRef} className="relative perspective-1000">
                        <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 space-y-8 hover:border-white/50 transition-colors duration-500 shadow-2xl shadow-black/50 group/card">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-white/20 transition-colors duration-300">
                                        <Mail className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover/item:text-white transition-colors">Email Us</h3>
                                        <p className="text-foreground/60 mt-1">hello@conceptmagnet.com</p>
                                        <p className="text-foreground/60">careers@conceptmagnet.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-white/20 transition-colors duration-300">
                                        <MapPin className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover/item:text-white transition-colors">Visit Us</h3>
                                        <p className="text-foreground/60 mt-1">123 Innovation Drive</p>
                                        <p className="text-foreground/60">Tech City, TC 90210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-white/20 transition-colors duration-300">
                                        <Phone className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover/item:text-white transition-colors">Call Us</h3>
                                        <p className="text-foreground/60 mt-1">+1 (555) 123-4567</p>
                                        <p className="text-foreground/60">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Concept Magnet. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient Blob */}
            <div
                ref={blobRef}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/10 via-gray-500/10 to-black/10 blur-[120px] rounded-full -z-10 opacity-60 pointer-events-none"
            />
        </section>
    );
};
