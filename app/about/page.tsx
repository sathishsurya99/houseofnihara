import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "About Us & Craftsmanship | House of Nihara",
    description: "Learn about the heritage, craftsmanship, and artisanal story behind House of Nihara. Handcrafted Pichwai lotus motifs and bespoke tailoring.",
};

export default function AboutUs() {
    return (
        <div className="about-page-wrapper">
            {/* 1. Header Banner */}
            <div className="editorial-page-header">
                <span className="section-badge">ATELIER HERITAGE</span>
                <h1 className="editorial-page-title">The Story of House of Nihara</h1>
                <p className="editorial-page-subtitle">
                    Celebrating Indian heritage craftsmanship, timeless femininity, and contemporary bespoke luxury.
                </p>
            </div>

            {/* 2. Story Split Section */}
            <section className="about-story-section">
                <div className="container">
                    <div className="about-split-grid">
                        <div className="about-main-img-box">
                            <img 
                                src="/images/dresses/dress-geometric-coord.jpg" 
                                alt="House of Nihara Studio Creation" 
                                className="about-image"
                            />
                            <div className="about-floating-card">
                                <span className="floating-highlight">HANDMADE IN INDIA</span>
                                <p>Preserving artisanal craft & bespoke tailoring</p>
                            </div>
                        </div>

                        <div className="about-story-content">
                            <span className="section-badge">OUR GENESIS</span>
                            <h2 className="about-section-heading">Elegance in Every Thread, Grace in Every Silhouette</h2>
                            <p className="about-paragraph-lead">
                                House of Nihara was founded with a single guiding mission: to bring authentic Indian artistic heritage into the contemporary wardrobe of modern women.
                            </p>
                            <p className="about-paragraph">
                                Inspired by sacred Pichwai art, floating lotus blooms, and traditional Indian celebratory colors, our signature kurtis and bespoke accessories bridge the gap between regal tradition and effortless day-to-night grace.
                            </p>
                            <p className="about-paragraph">
                                Every garment is crafted with meticulous care—from hand-selected raw silk blends to hand-painted botanical motifs that make each creation unique.
                            </p>

                            <div className="about-stat-row">
                                <div className="stat-card">
                                    <span className="stat-num">100%</span>
                                    <span className="stat-label">Handcrafted Motifs</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-num">Custom</span>
                                    <span className="stat-label">Made to Measure</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-num">Pure</span>
                                    <span className="stat-label">Artisan Fabrics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Values & Pillars */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-badge">OUR PILLARS</span>
                        <h2 className="section-main-heading">Craftsmanship & Artistry</h2>
                        <p className="section-subtext">Four foundational principles that define every House of Nihara piece.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🪷</div>
                            <h3>Pichwai Artistry</h3>
                            <p>Hand-painted and intricately printed lotus motifs celebrating divine Indian art forms.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">✂️</div>
                            <h3>Bespoke Tailoring</h3>
                            <p>Every dress is tailored for the perfect contour, offering custom measurements for every body type.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">✨</div>
                            <h3>Signature Hair Adornments</h3>
                            <p>Handcrafted satin blossom clips, seashell claws, and shimmery accessories that naturally complete your look.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🤍</div>
                            <h3>Ethical Production</h3>
                            <p>Empowering local artisans and master tailors with fair practices, sustainable sourcing, and zero mass waste.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Atelier Craftsmanship Gallery */}
            <section className="about-gallery-strip">
                <div className="container">
                    <div className="about-gallery-grid">
                        <div className="gallery-thumb">
                            <img src="/images/dresses/dress-purple-lotus.jpg" alt="Amethyst Lotus Kurti" loading="lazy" />
                            <div className="thumb-caption">Amethyst Lotus Kurti</div>
                        </div>
                        <div className="gallery-thumb">
                            <img src="/images/dresses/dress-yellow-floral.jpg" alt="Sunlight Meadow Floral Co-ord" loading="lazy" />
                            <div className="thumb-caption">Sunlight Meadow Floral</div>
                        </div>
                        <div className="gallery-thumb">
                            <img src="/images/accessories/acc-satin-flower-clips.jpg" alt="Satin Strawberry Blossom Clips" loading="lazy" />
                            <div className="thumb-caption">Satin Strawberry Blossom Clips</div>
                        </div>
                        <div className="gallery-thumb">
                            <img src="/images/accessories/acc-satin-tulip-bow-clips.jpg" alt="Handcrafted Satin Tulip Bow Clips" loading="lazy" />
                            <div className="thumb-caption">Satin Ribbon Tulip Bow Clips</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="about-cta-box">
                        <span className="section-badge">CUSTOM FITTINGS</span>
                        <h2>Ready to Create Your Bespoke Look?</h2>
                        <p>Connect with our styling consultants directly on WhatsApp to design your custom tailored outfit.</p>
                        <div className="about-cta-btns">
                            <a 
                                href="https://wa.me/919342629717?text=Hello%20House%20of%20Nihara,%20I%20would%20like%20to%20consult%20about%20a%20bespoke%20dress%20and%20accessories." 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="nav-whatsapp-btn"
                                style={{ display: 'inline-flex', padding: '0.85rem 1.8rem', fontSize: '0.9rem' }}
                            >
                                Chat on WhatsApp
                            </a>
                            <Link href="/contact" className="slider-secondary-cta">
                                Contact Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
