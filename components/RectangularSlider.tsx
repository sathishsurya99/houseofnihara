"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface Slide {
    id: number;
    image: string;
    tag: string;
    title: string;
    subtitle: string;
    price: string;
    color: string;
    accentColor: string;
    bgGradient: string;
    fabric: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "/images/dresses/dress-geometric-coord.jpg",
        tag: "NEW STUDIO ARRIVAL • CO-ORD SET",
        title: "Terracotta & Sage Geometric Flare Co-ord",
        subtitle: "Modernist flared A-line silhouette with earthy capsule motifs and matching tailored cigarette trousers.",
        price: "₹2,999",
        color: "Terracotta & Sage",
        accentColor: "#D97736",
        bgGradient: "radial-gradient(ellipse at 80% 50%, rgba(217, 119, 54, 0.25) 0%, rgba(20, 18, 22, 0.98) 70%)",
        fabric: "Artisanal Linen-Silk Blend with Matching Trousers"
    },
    {
        id: 2,
        image: "/images/dresses/dress-mint-floral-scallop.jpg",
        tag: "STUDIO EXCLUSIVE • BOTANICAL SILK",
        title: "Seafoam Mint Scallop Floral Kurti",
        subtitle: "Breathtaking hand-painted rose poppy botanical artwork with scalloped keyhole neckline & organza puff sleeves.",
        price: "₹2,999",
        color: "Seafoam Aqua",
        accentColor: "#26A69A",
        bgGradient: "radial-gradient(ellipse at 80% 50%, rgba(38, 166, 154, 0.25) 0%, rgba(20, 18, 22, 0.98) 70%)",
        fabric: "Organza Silk Blend with Sheer Puff Sleeves"
    },
    {
        id: 3,
        image: "/images/dresses/dress-cyan-yellow-panel.jpg",
        tag: "TEMPLE BROCADE • FESTIVE COUTURE",
        title: "Cerulean Blue & Canary Temple Brocade Kurti",
        subtitle: "Striking royal cyan silk with a center canary yellow temple brocade panel and matching cyan tailored trousers.",
        price: "₹3,199",
        color: "Royal Cyan & Canary Yellow",
        accentColor: "#00ACC1",
        bgGradient: "radial-gradient(ellipse at 80% 50%, rgba(0, 172, 193, 0.25) 0%, rgba(20, 18, 22, 0.98) 70%)",
        fabric: "Artisanal Chanderi Silk with Brocade Insert"
    },
    {
        id: 4,
        image: "/images/dresses/dress-ikat-pink.jpg",
        tag: "ARTISANAL GEOMETRIC",
        title: "Fuchsia Ikat Heritage Co-ord",
        subtitle: "Classic collared button-down kurti pant suit in vibrant magenta with authentic heritage Ikat geometric weave.",
        price: "₹2,899",
        color: "Magenta Ikat",
        accentColor: "#D81B60",
        bgGradient: "radial-gradient(ellipse at 80% 50%, rgba(216, 27, 96, 0.22) 0%, rgba(20, 18, 22, 0.98) 70%)",
        fabric: "Handwoven Ikat Weave Silk Blend"
    },
    {
        id: 5,
        image: "/images/dresses/dress-yellow-floral.jpg",
        tag: "SUMMER SOIRÉE",
        title: "Sunlight Meadow Floral Co-ord",
        subtitle: "Breezy pastel buttercup kurti and trousers set detailed with handcrafted botanical floral illustrations.",
        price: "₹2,799",
        color: "Meadow Gold",
        accentColor: "#D4AF37",
        bgGradient: "radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.2) 0%, rgba(20, 18, 22, 0.98) 70%)",
        fabric: "Lightweight Breathable Chanderi Blend"
    },
    {
        id: 6,
        image: "/images/dresses/dress-purple-lotus.jpg",
        tag: "HERITAGE COUTURE",
        title: "Amethyst Bloom Silk Ensemble",
        subtitle: "Regal royal purple silhouette adorned with floating lotus petal prints and delicate craftsmanship.",
        price: "₹2,899",
        color: "Royal Purple",
        accentColor: "#8E24AA",
        bgGradient: "radial-gradient(ellipse at 80% 50%, rgba(142, 36, 170, 0.22) 0%, rgba(20, 18, 22, 0.98) 70%)",
        fabric: "Artisanal Silk with Gold Thread Finish"
    }
];

export default function RectangularSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-advance slides every 5.5s
    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(() => {
                nextSlide();
            }, 5500);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, nextSlide]);

    const activeSlide = slides[currentIndex];

    return (
        <section 
            className="hd-slider-section"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Ambient Glow */}
            <div 
                className="slider-ambient-bg" 
                style={{ background: activeSlide.bgGradient }}
            ></div>

            <div className="container slider-hd-container">
                <div className="slider-hd-grid">
                    {/* Left Pane: Editorial Typography & Content */}
                    <div className="slider-info-pane">
                        <div className="slider-badge-row">
                            <span className="slider-hd-badge" style={{ borderColor: activeSlide.accentColor, color: activeSlide.accentColor }}>
                                {activeSlide.tag}
                            </span>
                            <span className="slider-color-pill">
                                <span className="swatch-mini" style={{ backgroundColor: activeSlide.accentColor }}></span>
                                {activeSlide.color}
                            </span>
                        </div>

                        <h1 className="slider-hd-title">
                            {activeSlide.title}
                        </h1>

                        <p className="slider-hd-desc">
                            {activeSlide.subtitle}
                        </p>

                        <div className="slider-meta-strip">
                            <div className="slider-price-tag">
                                <span className="price-val">{activeSlide.price}</span>
                                <span className="price-note">Custom Made-to-Measure</span>
                            </div>
                            <div className="slider-fabric-chip">
                                <span>{activeSlide.fabric}</span>
                            </div>
                        </div>

                        <div className="slider-actions-row">
                            <a 
                                href={`https://wa.me/919342629717?text=Hello%20House%20of%20Nihara,%20I'm%20interested%20in%20ordering%20the%20${encodeURIComponent(activeSlide.title)}%20(${encodeURIComponent(activeSlide.price)})`}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="slider-primary-cta"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                                <span>Order on WhatsApp</span>
                            </a>
                            <a href="#collection-tabs" className="slider-secondary-cta">
                                <span>View Collection</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>

                        {/* Navigation Dots & Numbers */}
                        <div className="slider-nav-controls">
                            <div className="slider-arrow-pair">
                                <button className="slider-hd-arrow" onClick={prevSlide} aria-label="Previous">
                                    ‹
                                </button>
                                <button className="slider-hd-arrow" onClick={nextSlide} aria-label="Next">
                                    ›
                                </button>
                            </div>

                            <div className="slider-indicators">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`slider-pill-dot ${currentIndex === idx ? 'dot-active' : ''}`}
                                        onClick={() => goToSlide(idx)}
                                        aria-label={`Slide ${idx + 1}`}
                                    ></button>
                                ))}
                            </div>

                            <div className="slider-index-counter">
                                <strong>{String(currentIndex + 1).padStart(2, '0')}</strong>
                                <span>/</span>
                                <span>{String(slides.length).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Pane: HD Full Resolution Portrait Showcase */}
                    <div className="slider-photo-pane">
                        <div className="hd-photo-frame">
                            <img 
                                src={activeSlide.image} 
                                alt={activeSlide.title} 
                                className="hd-showcase-img"
                                loading="eager"
                            />
                            <div className="photo-corner-badge">
                                <span>✦ HANDCRAFTED</span>
                            </div>
                        </div>

                        {/* Interactive Thumbnail Carousel */}
                        <div className="slider-mini-thumbnails">
                            {slides.map((slide, idx) => (
                                <div 
                                    key={slide.id}
                                    className={`mini-thumb-box ${currentIndex === idx ? 'thumb-selected' : ''}`}
                                    onClick={() => goToSlide(idx)}
                                >
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
