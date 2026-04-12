import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | House of Nihara",
    description: "View the House of Nihara lookbook. Featuring our models in elegant gowns and party wear.",
};

export default function Gallery() {
    return (
        <>
            <div className="page-header" style={{ backgroundColor: 'var(--color-light-gray)' }}>
                <h1 style={{ color: 'var(--color-black)' }}>Lookbook</h1>
            </div>

            <section className="fade-in-section">
                <h2 className="section-title">The Elegance Edit</h2>
                <div style={{ columnCount: 3, columnGap: '2rem', marginTop: '3rem', minHeight: '60vh' }} className="masonry-grid-md">
                    <div style={{ breakInside: 'avoid', marginBottom: '2rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} className="group">
                        <img src="/images/gallery/black-gown.jpg" alt="Gallery Image 1" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: '4px', transition: 'transform var(--transition-slow)' }} className="group-hover:scale-105" />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,17,17,0.8))', padding: '2rem 1.5rem 1.5rem', color: 'var(--color-white)', opacity: 0, transition: 'var(--transition-fast)' }} className="group-hover:opacity-100"><h3>Velvet Noir</h3></div>
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '2rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} className="group">
                        <img src="/images/gallery/blue-gown.jpg" alt="Gallery Image 2" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: '4px', transition: 'transform var(--transition-slow)' }} className="group-hover:scale-105" />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,17,17,0.8))', padding: '2rem 1.5rem 1.5rem', color: 'var(--color-white)', opacity: 0, transition: 'var(--transition-fast)' }} className="group-hover:opacity-100"><h3>Sapphire Drapes</h3></div>
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '2rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} className="group">
                        <img src="/images/gallery/pink-dress.jpg" alt="Gallery Image 3" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: '4px', transition: 'transform var(--transition-slow)' }} className="group-hover:scale-105" />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,17,17,0.8))', padding: '2rem 1.5rem 1.5rem', color: 'var(--color-white)', opacity: 0, transition: 'var(--transition-fast)' }} className="group-hover:opacity-100"><h3>Blush Evening</h3></div>
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '2rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} className="group">
                        <img src="/images/gallery/ig2.jpg" alt="Gallery Image 4" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: '4px', transition: 'transform var(--transition-slow)' }} className="group-hover:scale-105" />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,17,17,0.8))', padding: '2rem 1.5rem 1.5rem', color: 'var(--color-white)', opacity: 0, transition: 'var(--transition-fast)' }} className="group-hover:opacity-100"><h3>Atelier Grace</h3></div>
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '2rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} className="group">
                        <img src="/images/gallery/ig4.jpg" alt="Gallery Image 5" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: '4px', transition: 'transform var(--transition-slow)' }} className="group-hover:scale-105" />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,17,17,0.8))', padding: '2rem 1.5rem 1.5rem', color: 'var(--color-white)', opacity: 0, transition: 'var(--transition-fast)' }} className="group-hover:opacity-100"><h3>Silver Accent</h3></div>
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '2rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} className="group">
                        <img src="/images/hero.jpg" alt="Gallery Image 6" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: '4px', transition: 'transform var(--transition-slow)' }} className="group-hover:scale-105" />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,17,17,0.8))', padding: '2rem 1.5rem 1.5rem', color: 'var(--color-white)', opacity: 0, transition: 'var(--transition-fast)' }} className="group-hover:opacity-100"><h3>The Signature Trio</h3></div>
                    </div>
                </div>
            </section>
        </>
    );
}
