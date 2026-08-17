"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product, products, fetchUpdatedProducts } from '@/lib/products';

type CategoryType = 'all' | 'kurti' | 'coord-set' | 'salwar' | 'maxi' | 'accessories';

interface CategoryCircle {
    id: CategoryType;
    name: string;
    image: string;
    tagline: string;
}

const categoryCircles: CategoryCircle[] = [
    {
        id: 'all',
        name: 'All Creations',
        image: '/images/logo1.jpeg',
        tagline: 'View All'
    },
    {
        id: 'kurti',
        name: 'Kurti',
        image: '/images/dresses/dress-mint-floral-scallop.jpg',
        tagline: 'Botanical Silk'
    },
    {
        id: 'coord-set',
        name: 'Coord set',
        image: '/images/dresses/dress-cyan-yellow-panel.jpg',
        tagline: '2-Piece Sets'
    },
    {
        id: 'salwar',
        name: 'Salwarsuit',
        image: '/images/salwar/salwar-plum-slate-rose.jpg',
        tagline: '3-Piece Sets'
    },
    {
        id: 'maxi',
        name: 'Maxi',
        image: '/images/gowns/maxi-flamingo-blue.jpg',
        tagline: 'Flared Gowns'
    },
    {
        id: 'accessories',
        name: 'Hair Accessories',
        image: '/images/accessories/acc-satin-tulip-bow-clips.jpg',
        tagline: 'Clips & Claws'
    }
];

export default function CollectionTabs() {
    const [activeTab, setActiveTab] = useState<CategoryType>('all');
    const [dynamicProducts, setDynamicProducts] = useState<Product[]>(products);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);

    const triggerToast = (msg: string) => {
        setToastMessage(msg);
        setShowToast(true);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    useEffect(() => {
        if (!showToast && toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage(null);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [showToast, toastMessage]);

    useEffect(() => {
        const loadPrices = async () => {
            const updated = await fetchUpdatedProducts(products);
            setDynamicProducts(updated);
        };
        loadPrices();
    }, []);

    const filteredProducts = activeTab === 'all'
        ? dynamicProducts
        : dynamicProducts.filter(p => p.category === activeTab);

    const getCategoryBadgeLabel = (cat: string) => {
        switch (cat) {
            case 'kurti': return 'Kurti';
            case 'coord-set': return 'Coord Set';
            case 'salwar': return 'Salwar Suit';
            case 'maxi': return 'Maxi Gown';
            case 'accessories': return 'Hair Accessory';
            default: return 'Couture';
        }
    };

    return (
        <section id="collection-tabs" className="collection-tabs-section">
            <div className="container">
                {/* Header */}
                <div className="section-header-center">
                    <span className="section-badge">CURATED ATELIER WARDROBE</span>
                    <h2 className="section-main-heading">Explore Our Complete Collection</h2>
                    <p className="section-subtext">
                        Tap any collection bubble to explore handcrafted Kurtis, Coord Sets, Salwar Suits, Maxi Gowns, and Hair Accessories.
                    </p>
                </div>

                {/* Luxury Circular Story-Style Category Tabbar */}
                <div className="circle-tabbar-wrapper">
                    <div className="circle-tabbar-track" role="tablist">
                        {categoryCircles.map((cat) => {
                            const count = cat.id === 'all'
                                ? dynamicProducts.length
                                : dynamicProducts.filter(p => p.category === cat.id).length;
                            const isActive = activeTab === cat.id;

                            return (
                                <button
                                    type="button"
                                    key={cat.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`circle-category-item ${isActive ? 'circle-active' : ''}`}
                                    onClick={() => setActiveTab(cat.id)}
                                    id={`${cat.id}-tab`}
                                >
                                    <div className="circle-ring-frame">
                                        <div className="circle-image-inner">
                                            <img src={cat.image} alt={cat.name} className="circle-thumb-img" />
                                        </div>
                                        <span className="circle-count-badge">{count}</span>
                                    </div>
                                    <span className="circle-category-label">{cat.name}</span>
                                    <span className="circle-category-sub">{cat.tagline}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Category Header Bar */}
                <div className="active-filter-status-bar">
                    <span className="active-filter-indicator">
                        Showing <strong>{filteredProducts.length}</strong> items in <strong>{categoryCircles.find(c => c.id === activeTab)?.name}</strong>
                    </span>
                    {activeTab !== 'all' && (
                        <button type="button" className="clear-filter-btn" onClick={() => setActiveTab('all')}>
                            View All Creations ✕
                        </button>
                    )}
                </div>

                {/* Product Grid */}
                <div className="product-showcase-grid">
                    {filteredProducts.map((product) => {
                        const match = product.matchingAccessory
                            ? dynamicProducts.find(p => p.name === product.matchingAccessory?.name)
                            : null;

                        return (
                            <div key={product.id} className="nihara-product-card">
                                {/* Card Image Box */}
                                <Link href={`/product/${product.id}`} className="card-image-box">
                                    <span className="product-badge-tag">{product.tag}</span>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-img"
                                        loading="lazy"
                                    />
                                    <div className="card-hover-overlay">
                                        <div className="quick-view-btn">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            <span>View Details</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card Body */}
                                <div className="card-body">
                                    <div className="card-meta">
                                        <span className="color-swatch-dot" style={{ backgroundColor: product.colorCode }}></span>
                                        <span className="color-name">{product.color}</span>
                                        <span className="category-pill-micro">
                                            {getCategoryBadgeLabel(product.category)}
                                        </span>
                                    </div>

                                    <h3 className="card-product-title">
                                        <Link href={`/product/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>

                                    <p className="card-fabric-tag">{product.fabric}</p>

                                    {/* Natural Pair Suggestion */}
                                    {product.matchingAccessory && (
                                        match ? (
                                            <Link href={`/product/${match.id}`} className="card-pairing-hint">
                                                <span className="hint-label">✦ Styled with:</span>
                                                <span className="hint-name">{product.matchingAccessory.name}</span>
                                            </Link>
                                        ) : (
                                            <div className="card-pairing-hint">
                                                <span className="hint-label">✦ Styled with:</span>
                                                <span className="hint-name">{product.matchingAccessory.name}</span>
                                            </div>
                                        )
                                    )}

                                    <div className="card-pricing-row">
                                        <div className="price-group">
                                            <span className="current-price">{product.price}</span>
                                            {product.originalPrice && (
                                                <span className="original-price">{product.originalPrice}</span>
                                            )}
                                        </div>

                                        {product.category !== 'accessories' ? (
                                            <Link
                                                href={`/product/${product.id}`}
                                                className="card-order-btn"
                                                title="Choose Size & Order"
                                            >
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                                </svg>
                                                <span>Order</span>
                                            </Link>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const text = `Hello House of Nihara, I would like to order the ${product.name} (${product.price}).`;
                                                    const waUrl = `https://wa.me/919342629717?text=${encodeURIComponent(text)}`;
                                                    window.open(waUrl, '_blank', 'noopener,noreferrer');
                                                }}
                                                className="card-order-btn"
                                                title="Order via WhatsApp"
                                            >
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                                </svg>
                                                <span>Order</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Toast Notification */}
            <div className={`nihara-toast-container ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive">
                <div className="toast-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <div className="toast-text">{toastMessage || ""}</div>
            </div>
        </section>
    );
}
