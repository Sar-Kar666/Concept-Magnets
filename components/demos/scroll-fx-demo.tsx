"use client";

import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";

const sections = [
    {
        leftLabel: "Marketing",
        title: <>Digital</>,
        rightLabel: "Marketing",
    },
    {
        leftLabel: "SEO",
        title: <>Optimization</>,
        rightLabel: "SEO",
    },
    {
        leftLabel: "Brand",
        title: <>Strategy</>,
        rightLabel: "Brand",
    },
    {
        leftLabel: "Website",
        title: <>Development</>,
        rightLabel: "Website",
    },
    {
        leftLabel: "Influencer",
        title: "Marketing",
        rightLabel: "Influencer",
    },
    {
        leftLabel: "Meta",
        title: "Ads",
        rightLabel: "Meta",
    },
    {
        leftLabel: "Content",
        title: "Creation",
        rightLabel: "Content",
    },
];

export default function ScrollFxDemo() {
    const apiRef = React.useRef<FullScreenFXAPI>(null);

    return (
        <FullScreenScrollFX
            sections={sections}
            header={<h1 className="text-4xl sm:text-6xl font-extrabold text-foreground md:text-8xl lg:text-9xl leading-none">What We Do</h1>}
            footer={<div></div>}
            showProgress
            durations={{ change: 0.7, snap: 800 }}
            fontFamily="var(--font-outfit)"
            colors={{
                text: "var(--foreground)",
                pageBg: "var(--background)",
                stageBg: "var(--background)",
                overlay: "rgba(0,0,0,0.5)",
            }}
        />
    );
}
