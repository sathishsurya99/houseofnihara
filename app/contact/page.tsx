"use client";
import { useState } from 'react';
import Link from 'next/link';

interface CollectionCategory {
    id: string;
    title: string;
    tagline: string;
    icon: string;
    badge: string;
}

const collectionsList: CollectionCategory[] = [
    {
        id: "Kurti",
        title: "Kurti",
        tagline: "Hand-painted Pichwai lotus, brocade panels & festive raw silk kurtis",
        icon: "🪷",
        badge: "Signature Collection"
    },
    {
        id: "Coord set",
        title: "Coord Set",
        tagline: "2-piece matching kurti & tailored pant sets in meadow prints and Ikat weave",
        icon: "✨",
        badge: "Trending Sets"
    },
    {
        id: "Maxi",
        title: "Maxi",
        tagline: "Floor-sweeping celebratory gowns, Anarkali drapes & occasion silhouettes",
        icon: "👗",
        badge: "Celebration Wear"
    },
    {
        id: "Salwar suits",
        title: "Salwar Suits",
        tagline: "Regal 3-piece tailored salwar kameez suits with bespoke dupatta styling",
        icon: "👑",
        badge: "Traditional Luxury"
    },
    {
        id: "Hair accessories",
        title: "Hair Accessories",
        tagline: "Handcrafted satin blossom clips, scalloped seashell & glitter claws",
        icon: "🎀",
        badge: "Handmade Signature"
    }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'Kurti',
        notes: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSelectCollection = (colName: string) => {
        setFormData(prev => ({ ...prev, inquiryType: colName }));
        const formElement = document.getElementById('inquiry-form-box');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Build pre-filled WhatsApp message
        const message = `Hello House of Nihara,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCollection Interest: ${formData.inquiryType}\nSizing / Customization Notes: ${formData.notes}`;
        const waUrl = `https://wa.me/919342629717?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    };

    return (
        <div className="contact-page">
            {/* 1. Header Banner */}
            <div className="editorial-page-header">
                <span className="section-badge">ATELIER INQUIRIES & BESPOKE ORDERS</span>
                <h1 className="editorial-page-title">Connect with House of Nihara</h1>
                <p className="editorial-page-subtitle">
                    Inquire about our curated collections, request made-to-measure custom sizing, or order signature pieces directly via WhatsApp.
                </p>
            </div>

            {/* 2. Collections Showcase Strip on Contact Page */}
            <section className="contact-collections-strip">
                <div className="container">
                    <div className="section-header-center" style={{ marginBottom: '2rem' }}>
                        <span className="section-badge">OUR CREATION LINES</span>
                        <h2 className="section-main-heading">Select a Collection to Inquire</h2>
                        <p className="section-subtext">
                            Choose from our signature couture categories below for custom fittings, pricing, and orders.
                        </p>
                    </div>

                    <div className="contact-collections-grid">
                        {collectionsList.map((col) => (
                            <div
                                key={col.id}
                                className={`contact-col-card ${formData.inquiryType === col.id ? 'active-col-card' : ''}`}
                                onClick={() => handleSelectCollection(col.id)}
                            >
                                <div className="col-card-top">
                                    <span className="col-card-icon">{col.icon}</span>
                                    <span className="col-card-badge">{col.badge}</span>
                                </div>
                                <h3 className="col-card-title">{col.title}</h3>
                                <p className="col-card-tagline">{col.tagline}</p>
                                <button type="button" className="col-card-select-btn">
                                    {formData.inquiryType === col.id ? '✓ Selected' : 'Inquire This Collection →'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Main Contact & Form Section */}
            <section className="contact-main-section" id="inquiry-form-box">
                <div className="container">
                    <div className="contact-layout-grid">
                        {/* Left Column: Direct Atelier Information */}
                        <div className="contact-info-column">
                            <span className="section-badge">DIRECT ASSISTANCE</span>
                            <h2 className="contact-col-heading">Let's Talk Bespoke Fashion</h2>
                            <p className="contact-col-desc">
                                We offer personalized styling advice and custom sizing support for all our creations. Reach out via WhatsApp for the fastest reply from our designer.
                            </p>

                            {/* WhatsApp Fast Card */}
                            <div className="contact-wa-card">
                                <div className="wa-card-header">
                                    <div className="wa-icon-bubble">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Instant WhatsApp Stylist</h4>
                                        <p>Get fabric samples, custom sizing, and place direct orders.</p>
                                    </div>
                                </div>
                                <a
                                    href={`https://wa.me/919342629717?text=Hello%20House%20of%20Nihara,%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(formData.inquiryType)}%20collection.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wa-card-btn"
                                >
                                    Chat with Us Now
                                </a>
                            </div>

                            {/* Contact Details List */}
                            <div className="contact-details-list">
                                <div className="contact-detail-item">
                                    <div className="detail-icon">📞</div>
                                    <div>
                                        <strong>Phone & WhatsApp Hotline</strong>
                                        <a href="tel:+919342629717" className="detail-link">+91 93426 29717</a>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="detail-icon">📸</div>
                                    <div>
                                        <strong>Instagram Portfolio</strong>
                                        <a href="https://instagram.com/house_of__nihara" target="_blank" rel="noopener noreferrer" className="detail-link">
                                            @house_of__nihara
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="detail-icon">⏰</div>
                                    <div>
                                        <strong>Atelier Hours</strong>
                                        <p className="detail-text">Monday – Saturday: 10:00 AM – 7:30 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Bespoke Inquiry Form */}
                        <div className="contact-form-column">
                            <div className="contact-form-box">
                                <h3>Send an Inquiry to Atelier</h3>
                                <p className="form-subtext">Fill out this form and we will connect with you via WhatsApp or Email.</p>

                                {submitted ? (
                                    <div className="form-success-banner">
                                        <div className="success-icon">✓</div>
                                        <h4>Thank You for Connecting!</h4>
                                        <p>Your inquiry is being prepared on WhatsApp for the <strong>{formData.inquiryType}</strong> collection. Our atelier team will get back to you shortly.</p>
                                        <button
                                            type="button"
                                            onClick={() => setSubmitted(false)}
                                            className="btn-nihara-outline"
                                            style={{ marginTop: '1rem' }}
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="nihara-contact-form">
                                        <div className="form-input-group">
                                            <label>Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Sathish"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="nihara-input"
                                            />
                                        </div>

                                        <div className="form-row-2">
                                            <div className="form-input-group">
                                                <label>Phone / WhatsApp Number *</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="nihara-input"
                                                />
                                            </div>

                                            <div className="form-input-group">
                                                <label>Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="yourname@gmail.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="nihara-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-input-group">
                                            <label>Select Collection Line *</label>
                                            <select
                                                value={formData.inquiryType}
                                                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                                                className="nihara-input"
                                            >
                                                <option value="Kurti">Kurti (Lotus Pichwai, Raw Silk & Brocade)</option>
                                                <option value="Coord set">Coord Set (2-Piece Meadow & Ikat Suit Sets)</option>
                                                <option value="Maxi">Maxi (Celebration Gowns & Occasion Drapes)</option>
                                                <option value="Salwar suits">Salwar Suits (Tailored Salwar Kameez & Dupattas)</option>
                                                <option value="Hair accessories">Hair Accessories (Satin Blossom Clips, Shell Claws & Sparkle)</option>
                                                <option value="Bespoke Custom Made-to-Measure">Bespoke Custom Made-to-Measure</option>
                                            </select>
                                        </div>

                                        <div className="form-input-group">
                                            <label>Your Message / Sizing Requirements</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Specify preferred sizes (XS to 3XL), color customization, or special event date..."
                                                value={formData.notes}
                                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                                className="nihara-input"
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="form-submit-btn">
                                            <span>Send Inquiry for {formData.inquiryType} on WhatsApp</span>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-badge">FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className="section-main-heading">Everything You Need to Know</h2>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-card">
                            <h4>How do I order Kurtis or Coord Sets with custom sizing?</h4>
                            <p>Select your desired Kurti or Coord Set category above and connect with us on WhatsApp. Our master tailors customize length, bust, waist, and sleeve fit according to your exact measurements.</p>
                        </div>

                        <div className="faq-card">
                            <h4>What is the delivery timeline for Salwar Suits & Maxi dresses?</h4>
                            <p>Ready-to-wear pieces ship in 2–4 business days. Handcrafted Salwar Suits, Maxi drapes, and customized coord sets take 5–8 days for tailoring and finishing.</p>
                        </div>

                        <div className="faq-card">
                            <h4>Can I order matching Hair Accessories with my outfit?</h4>
                            <p>Yes! We offer handmade satin strawberry blossom clips, seashell claws, and shimmer hair adornments that perfectly complement your Kurtis and Coord sets.</p>
                        </div>

                        <div className="faq-card">
                            <h4>Do you ship internationally?</h4>
                            <p>Yes, House of Nihara ships worldwide to the USA, UK, UAE, Canada, Australia, and Singapore with express doorstep delivery.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
