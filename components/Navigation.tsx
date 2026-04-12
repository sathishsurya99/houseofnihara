"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header>
            <nav className="nav-container">
                <Link href="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '2px solid rgba(255,255,255,0.5)' }}>
                        <img src="/images/logo1.jpeg" alt="House of Nihara Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'var(--font-heading)', color: 'var(--color-black)' }}>
                        <span style={{ fontSize: '0.85rem', letterSpacing: '6px', lineHeight: 1 }}>HOUSE OF</span>
                        <span style={{ fontSize: '2.2rem', letterSpacing: '2px', lineHeight: 1, marginTop: '8px' }}>NIHARA</span>
                    </div>
                </Link>
                <div className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                    <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''} onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span style={{ transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
                    <span style={{ opacity: isOpen ? '0' : '1' }}></span>
                    <span style={{ transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
                </div>
            </nav>
        </header>
    );
}
