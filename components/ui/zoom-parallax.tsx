'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale4, scale8, scale9];

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center 
                                ${index === 1 ? '[&>div]:!-top-[25vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[45vw] md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]' : ''} 
                                ${index === 2 ? '[&>div]:!-top-[40vh] [&>div]:!left-[10vw] [&>div]:!h-[25vh] [&>div]:!w-[40vw] md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]' : ''} 
                                ${index === 3 ? '[&>div]:!-top-[25vh] [&>div]:!left-[50vw] [&>div]:!h-[30vh] [&>div]:!w-[45vw] md:[&>div]:!top-0 md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]' : ''} 
                                ${index === 4 ? '[&>div]:!top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[45vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw]' : ''} 
                                ${index === 5 ? '[&>div]:!top-[45vh] [&>div]:!left-[10vw] [&>div]:!h-[25vh] [&>div]:!w-[40vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]' : ''} 
                                ${index === 6 ? '[&>div]:!top-[30vh] [&>div]:!left-[50vw] [&>div]:!h-[30vh] [&>div]:!w-[45vw] md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]' : ''} 
                            `}
                        >
                            <div className="relative h-[40vh] w-[80vw] md:h-[25vh] md:w-[25vw]">
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
