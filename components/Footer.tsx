import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-col logo-col">
                    <h3>House of Nihara</h3>
                    <p>Premium handcrafted fashion label embodying luxury, grace, and confidence.</p>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <Link href="/contact">Book Consultation</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/gallery">Lookbook</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Contact & Policies</h3>
                    <div className="footer-links">
                        <Link href="/contact">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Returns</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe for exclusive drops and high-fashion insights.</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="email" placeholder="Your email address" style={{ padding: '10px', flex: 1, border: 'none', color: 'black' }} />
                        <button className="btn btn-primary" style={{ padding: '10px 20px' }}>Join</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 House of Nihara. All rights reserved.</p>
            </div>
        </footer>
    );
}
