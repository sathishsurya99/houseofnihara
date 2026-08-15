"use client";

import { useEffect, useState } from "react";

export default function MobileDesktopWarning() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !navigator) return;

        const ua = navigator.userAgent;
        // Detect mobile user agent (changes to a desktop user agent when "Desktop Site" is enabled in browser)
        const isMobile = /Mobi|Android|iPhone|iPod|iPad|Windows Phone|BlackBerry|webOS/i.test(ua);

        // Force test override using query parameter (helps testing on desktop/emulators)
        const urlParams = new URLSearchParams(window.location.search);
        const forceMobile = urlParams.get("mobile") === "true";

        if (isMobile || forceMobile) {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    if (!isOpen) return null;

    return (
        <div className="mobile-warning-backdrop">
            <div className="mobile-warning-card" role="dialog" aria-modal="true" aria-labelledby="mobile-warning-title">
                <div className="mobile-warning-icon-container">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                </div>
                <h2 id="mobile-warning-title" className="mobile-warning-title">Please Enable Desktop Site</h2>
                <p className="mobile-warning-message">
                    For the best experience, please enable Desktop Site in your browser.
                </p>
                <div className="mobile-warning-actions">
                    <button onClick={handleClose} className="btn-nihara-primary mobile-warning-btn-full">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
