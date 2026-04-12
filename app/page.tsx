import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/hero.jpg" alt="House of Nihara Hero" className="hero-bg" />
        <div className="hero-content animate-float">
          <h1>Elegance in Every Stitch</h1>
          <p>Elevate your wardrobe with our meticulously crafted collection of long flowing gowns, party wear, and custom designs.</p>
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
            <Link href="/gallery" className="btn btn-secondary">View Lookbook</Link>
          </div>
        </div>
      </section>

      {/* Services / Bespoke Section */}
      <section className="fade-in-section">
        <h2 className="section-title">The Bespoke Experience</h2>
        <div className="grid-3">
          <Link href="/contact" className="product-card">
            <div className="product-img-wrapper">
              <img src="/images/gowns/blue-gown.jpg" alt="Custom Gowns" loading="lazy" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Custom Couture</h3>
              <span className="product-category" style={{ textTransform: 'none', letterSpacing: '0', fontSize: '0.95rem' }}>Meticulously tailored to contour your individuality.</span>
            </div>
          </Link>
          <Link href="/contact" className="product-card">
            <div className="product-img-wrapper">
              <img src="/images/gallery/atelier.jpg" alt="Private Fitting" loading="lazy" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Private Fittings</h3>
              <span className="product-category" style={{ textTransform: 'none', letterSpacing: '0', fontSize: '0.95rem' }}>Experience white-glove tailoring at our atelier.</span>
            </div>
          </Link>
          <Link href="/contact" className="product-card">
            <div className="product-img-wrapper">
              <img src="/images/partywear/pink-dress.jpg" alt="Event Styling" loading="lazy" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Event Styling</h3>
              <span className="product-category" style={{ textTransform: 'none', letterSpacing: '0', fontSize: '0.95rem' }}>Curated elegance for your most significant moments.</span>
            </div>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="fade-in-section">
        <div className="about-preview">
          <div className="about-image">
            <img src="/images/gallery/atelier.jpg" alt="House of Nihara Atelier" loading="lazy" />
          </div>
          <div className="about-text">
            <h2>Our Heritage</h2>
            <p>House of Nihara is more than just a brand; it&apos;s a celebration of femininity, grace, and confidence. Our creations reflect a commitment to quality, featuring intricate details and luxurious fabrics tailored for the modern woman.</p>
            <Link href="/about" className="btn btn-secondary">Discover Our Story</Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="fade-in-section">
        <h2 className="section-title">Follow @house_of__nihara</h2>
        <div className="instagram-grid">
          <a href="https://instagram.com/house_of__nihara" className="insta-item" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery/ig1.jpg" alt="Instagram Post 1" loading="lazy" />
            <div className="insta-overlay">♥ 124</div>
          </a>
          <a href="https://instagram.com/house_of__nihara" className="insta-item" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery/ig2.jpg" alt="Instagram Post 2" loading="lazy" />
            <div className="insta-overlay">♥ 312</div>
          </a>
          <a href="https://instagram.com/house_of__nihara" className="insta-item" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery/ig3.jpg" alt="Instagram Post 3" loading="lazy" />
            <div className="insta-overlay">♥ 205</div>
          </a>
          <a href="https://instagram.com/house_of__nihara" className="insta-item" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery/ig4.jpg" alt="Instagram Post 4" loading="lazy" />
            <div className="insta-overlay">♥ 428</div>
          </a>
          <a href="https://instagram.com/house_of__nihara" className="insta-item" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery/ig5.jpg" alt="Instagram Post 5" loading="lazy" />
            <div className="insta-overlay">♥ 189</div>
          </a>
        </div>
      </section>
    </>
  );
}
