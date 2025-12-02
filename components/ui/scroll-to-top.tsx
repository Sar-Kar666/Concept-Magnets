'use client';

import { useLayoutEffect } from 'react';

export function ScrollToTop() {
    useLayoutEffect(() => {
        // Prevent browser from restoring scroll position
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }

        // Force scroll to top
        window.scrollTo(0, 0);
    }, []);

    return null;
}
