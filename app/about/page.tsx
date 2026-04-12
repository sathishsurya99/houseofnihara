import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | House of Nihara",
    description: "Learn about the brand story of House of Nihara, a premium handcrafted fashion label.",
};

export default function About() {
    return (
        <>
            <div className="page-header" style={{ backgroundColor: 'var(--color-off-white)' }}>
                <h1>Our Story</h1>
            </div>

            <section className="fade-in-section" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', marginBottom: '6rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px', height: '500px' }}>
                        <img src="/images/gallery/atelier.jpg" alt="Tailoring precise garments" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-royal-blue)' }}>The Visionary Approach</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#444' }}>Welcome to House of Nihara. What started as a passion for exquisite fabrics and fine tailoring has blossomed into a premium handcrafted fashion label dedicated to modern women.</p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#444' }}>We embody luxury, grace, and confidence with every piece we design. Our creations are not just garments; they are wearable art meant to inspire.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', marginBottom: '6rem', flexWrap: 'wrap-reverse' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-royal-blue)' }}>Handcrafted Perfection</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#444' }}>We pride ourselves on attention to detail. From selecting the softest silks to precision draping, our master artisans pour their expertise into crafting party wear and evening gowns.</p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#444' }}>Our custom designs allow you to be the protagonist of your style narrative, giving you complete control over your final, dazzling look.</p>
                    </div>
                    <div style={{ flex: '1 1 400px', height: '500px' }}>
                        <img src="/images/gallery/ig4.jpg" alt="Fashion show insight" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
        </>
    );
}
