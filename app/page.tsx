import Link from 'next/link';
import RectangularSlider from '../components/RectangularSlider';
import CollectionTabs from '../components/CollectionTabs';

export default function Home() {
  return (
    <div className="home-page-container">
      {/* 1. Rectangular Slider (Directly Below Navigation) */}
      <RectangularSlider />

      {/* 2. Collection Tabs: Dresses & Hair Accessories */}
      <CollectionTabs />

      {/* 3. Value Pillars / Craftsmanship Highlights */}
      <section className="features-strip-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Pure Artisan Handcraft</h4>
                <p>Meticulously hand-detailed Pichwai lotus motifs & bespoke tailoring.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Custom Made-to-Measure</h4>
                <p>Personalized fittings tailored perfectly to your unique silhouette.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Pan-India & Global Delivery</h4>
                <p>Safe, expedited shipping delivered right to your doorstep.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Personal Stylist Support</h4>
                <p>Direct WhatsApp consultations for styling, sizes, and orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Atelier Heritage Story */}
      <section className="heritage-section">
        <div className="container">
          <div className="heritage-grid">
            <div className="heritage-image-wrapper">
              <img 
                src="/images/dresses/dress-geometric-coord.jpg" 
                alt="House of Nihara Atelier Creation" 
                className="heritage-main-img" 
                loading="lazy" 
              />
              <div className="heritage-badge-floating">
                <span>EST. 2024</span>
                <strong>House of Nihara</strong>
              </div>
            </div>

            <div className="heritage-text-content">
              <span className="section-badge">ABOUT OUR ATELIER</span>
              <h2 className="heritage-title">Where Tradition Meets Modern Sophistication</h2>
              <p className="heritage-lead">
                House of Nihara was born out of love for authentic handcrafted fashion, fluid silhouettes, and timeless femininity.
              </p>
              <p className="heritage-p">
                From vibrant festival kurtis featuring hand-painted lotus blooms to delicate bespoke hair adornments, every creation is designed to make you feel radiant, empowered, and effortlessly elegant.
              </p>
              <div className="heritage-btn-group">
                <Link href="/about" className="btn-nihara-primary">
                  Discover Our Story
                </Link>
                <Link href="/contact" className="btn-nihara-outline">
                  Book Fitting Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Instagram Community / Lookbook Showcase */}
      <section className="insta-showcase-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">JOIN OUR STYLE COMMUNITY</span>
            <h2 className="section-main-heading">Follow @house_of__nihara</h2>
            <p className="section-subtext">Tag us in your moments of elegance to be featured in our lookbook gallery.</p>
          </div>

          <div className="insta-feed-grid">
            <a href="https://instagram.com/house_of__nihara" target="_blank" rel="noopener noreferrer" className="insta-card">
              <img src="/images/dresses/dress-geometric-coord.jpg" alt="Terracotta & Sage Geometric Flare Co-ord" loading="lazy" />
              <div className="insta-hover-overlay">
                <span>♥ 782</span>
                <p>#HouseOfNihara #GeometricCoord #StudioStyle</p>
              </div>
            </a>
            <a href="https://instagram.com/house_of__nihara" target="_blank" rel="noopener noreferrer" className="insta-card">
              <img src="/images/salwar/salwar-plum-slate-rose.jpg" alt="Vintage Plum Rose & Slate Blue Salwar" loading="lazy" />
              <div className="insta-hover-overlay">
                <span>♥ 649</span>
                <p>#SalwarSuitSet #PlumRose #ArtisanalSilk</p>
              </div>
            </a>
            <a href="https://instagram.com/house_of__nihara" target="_blank" rel="noopener noreferrer" className="insta-card">
              <img src="/images/salwar/salwar-teal-lime-botanical.jpg" alt="Teal Aqua Botanical Salwar Set" loading="lazy" />
              <div className="insta-hover-overlay">
                <span>♥ 825</span>
                <p>#TealLime #FestiveCouture #ZariWeave</p>
              </div>
            </a>
            <a href="https://instagram.com/house_of__nihara" target="_blank" rel="noopener noreferrer" className="insta-card">
              <img src="/images/accessories/acc-satin-tulip-bow-clips.jpg" alt="Handcrafted Satin Tulip Bow Clips" loading="lazy" />
              <div className="insta-hover-overlay">
                <span>♥ 534</span>
                <p>#HandmadeAccessories #TulipBow #FloralClips</p>
              </div>
            </a>
          </div>

          <div className="insta-cta-wrap">
            <a 
              href="https://instagram.com/house_of__nihara" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @house_of__nihara</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
