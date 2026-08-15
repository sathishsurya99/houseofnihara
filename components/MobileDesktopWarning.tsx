"use client";

import { useEffect, useState } from "react";

export default function MobileDesktopWarning() {
    const [isOpen, setIsOpen] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [activeTab, setActiveTab] = useState<"safari" | "chrome" | "other">("safari");

    useEffect(() => {
        // Detect mobile only after mounting to avoid hydration mismatch
        const ua = navigator.userAgent;
        // Accurate mobile detection excluding tablets (like iPad / Android tablets)
        const isMobile = /iPhone|iPod|Windows Phone|BlackBerry|webOS/i.test(ua) || 
                         (/Android/i.test(ua) && /Mobile/i.test(ua));
        
        const choice = localStorage.getItem("mobile_desktop_choice");
        
        if (isMobile && choice !== "continue") {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
        }
        
        return () => {
            // Restore scroll if component unmounts
            document.body.style.overflow = "";
        };
    }, []);

    const handleContinue = () => {
        localStorage.setItem("mobile_desktop_choice", "continue");
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    if (!isOpen) return null;

    return (
        <div className="mobile-warning-backdrop">
            <div className="mobile-warning-card" role="dialog" aria-modal="true" aria-labelledby="mobile-warning-title">
                {!showInstructions ? (
                    <div className="mobile-warning-step">
                        <div className="mobile-warning-icon-container">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <h2 id="mobile-warning-title" className="mobile-warning-title">Best Experience on Desktop</h2>
                        <p className="mobile-warning-message">
                            This website is optimized for desktop view. For the best experience, please enable Desktop Site in your browser.
                        </p>
                        <div className="mobile-warning-actions">
                            <button onClick={() => setShowInstructions(true)} className="btn-nihara-primary mobile-warning-btn-full">
                                Enable Desktop Site
                            </button>
                            <button onClick={handleContinue} className="btn-nihara-outline mobile-warning-btn-full">
                                Continue Anyway
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="mobile-warning-step">
                        <h2 id="mobile-warning-title" className="mobile-warning-title">How to Enable Desktop Site</h2>
                        <p className="mobile-warning-message">
                            Please select your mobile browser below for instructions:
                        </p>
                        
                        <div className="mobile-warning-tabs">
                            <button 
                                className={`mobile-warning-tab-btn ${activeTab === 'safari' ? 'active' : ''}`}
                                onClick={() => setActiveTab('safari')}
                            >
                                Safari (iOS)
                            </button>
                            <button 
                                className={`mobile-warning-tab-btn ${activeTab === 'chrome' ? 'active' : ''}`}
                                onClick={() => setActiveTab('chrome')}
                            >
                                Chrome
                            </button>
                            <button 
                                className={`mobile-warning-tab-btn ${activeTab === 'other' ? 'active' : ''}`}
                                onClick={() => setActiveTab('other')}
                            >
                                Other
                            </button>
                        </div>

                        <div className="mobile-warning-tab-content">
                            {activeTab === 'safari' && (
                                <ol className="mobile-warning-instructions-list">
                                    <li>Tap the <strong>aA</strong> (or Page Settings) button on the left of the address bar.</li>
                                    <li>Select <strong>Request Desktop Website</strong> from the menu.</li>
                                </ol>
                            )}
                            {activeTab === 'chrome' && (
                                <ol className="mobile-warning-instructions-list">
                                    <li>Tap the <strong>three dots</strong> (menu) icon (top-right on Android, bottom-right on iOS).</li>
                                    <li>Scroll down and toggle or check <strong>Desktop site</strong> (or <strong>Request Desktop Site</strong>).</li>
                                </ol>
                            )}
                            {activeTab === 'other' && (
                                <ol className="mobile-warning-instructions-list">
                                    <li>Open your browser's menu (usually a <strong>three dots</strong> or <strong>menu icon</strong>).</li>
                                    <li>Look for an option labeled <strong>Desktop site</strong>, <strong>Request Desktop Site</strong>, or <strong>Desktop View</strong>.</li>
                                </ol>
                            )}
                        </div>

                        <div className="mobile-warning-actions">
                            <button onClick={handleContinue} className="btn-nihara-primary mobile-warning-btn-full">
                                Close & Continue anyway
                            </button>
                            <button onClick={() => setShowInstructions(false)} className="btn-nihara-outline mobile-warning-btn-full">
                                Back
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
