"use client";
import type { Metadata } from "next";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
    };

    return (
        <>
            <div className="page-header">
                <h1>Contact Us</h1>
            </div>

            <section className="fade-in-section">
                <div style={{ display: 'flex', gap: '4rem', marginTop: '2rem', maxWidth: '1200px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Talk Fashion</h2>
                        <p style={{ marginBottom: '2rem', color: '#555', fontSize: '1.1rem' }}>Have an inquiry about a custom design or need styling advice? Reach out to us directly or fill out the form, and our atelier team will assist you.</p>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem' }}>
                                <strong>WhatsApp / Phone:</strong>
                                <a href="tel:+919342629717" style={{ color: 'var(--color-black)', fontWeight: 500 }}>+91 9342629717</a>
                            </div>
                            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem' }}>
                                <strong>Instagram:</strong>
                                <a href="https://instagram.com/house_of__nihara" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-black)', fontWeight: 500 }}>@house_of__nihara</a>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: '1.5 1 500px', background: 'var(--color-white)', padding: '3rem', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Full Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email Address" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control" required style={{ cursor: 'pointer', appearance: 'none', background: 'transparent' }} defaultValue="">
                                    <option value="" disabled>Inquiry Type</option>
                                    <option value="custom">Custom Design</option>
                                    <option value="bridal">Bridal / Evening Gown</option>
                                    <option value="general">General Question</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Tell us about your requirements..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
