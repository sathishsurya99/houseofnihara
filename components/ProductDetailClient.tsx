"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product, products, fetchUpdatedProducts } from '@/lib/products';

interface ProductDetailClientProps {
    productId: string;
}

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
    const [dynamicProducts, setDynamicProducts] = useState<Product[]>(products);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(true);
            const updated = await fetchUpdatedProducts(products);
            setDynamicProducts(updated);
            setIsLoading(false);
        };
        loadPrices();
    }, []);

    // Reset selected sizes when product ID changes (e.g. clicking complete the look accessories)
    useEffect(() => {
        setSelectedSizes([]);
    }, [productId]);

    const product = dynamicProducts.find(p => p.id === productId);

    const getCategoryLabel = (cat: string) => {
        switch (cat) {
            case 'kurti': return 'Kurtis';
            case 'coord-set': return 'Co-ord Sets';
            case 'salwar': return 'Salwar Suits';
            case 'maxi': return 'Maxi Gowns';
            case 'accessories': return 'Hair Accessories';
            default: return 'Couture';
        }
    };

    if (isLoading) {
        return (
            <div className="product-detail-loading">
                <div className="loading-spinner"></div>
                <p>Loading Atelier Creation...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="product-not-found-container">
                <span className="error-badge">404 ATELIER</span>
                <h2>Creation Not Found</h2>
                <p>The requested handcrafted design could not be found in our current archives.</p>
                <Link href="/#collection-tabs" className="btn-nihara-primary">
                    Return to Collections
                </Link>
            </div>
        );
    }

    // Resolve matching accessory if it exists
    const matchingAccessoryProduct = product.matchingAccessory
        ? dynamicProducts.find(p => p.name === product.matchingAccessory?.name)
        : null;

    return (
        <section className="product-detail-section">
            <div className="container">
                {/* Elegant Breadcrumbs */}
                <div className="detail-breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link href="/#collection-tabs">Collections</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-active">{getCategoryLabel(product.category)}</span>
                </div>

                {/* Main Product Layout Grid */}
                <div className="product-detail-grid">
                    {/* Left Column: Media Showcase */}
                    <div className="detail-image-col">
                        <div className="detail-image-frame">
                            <img src={product.image} alt={product.name} className="detail-main-img" />
                            <span className="image-corner-badge">✦ Handmade</span>
                        </div>
                    </div>

                    {/* Right Column: Information & Actions */}
                    <div className="detail-info-col">
                        <div className="detail-header-wrap">
                            <span className="detail-tag">{product.tag}</span>
                            <h1 className="detail-title">{product.name}</h1>
                            <p className="detail-color-info">
                                Color: <strong>{product.color}</strong> • Fabric: <strong>{product.fabric}</strong>
                            </p>
                        </div>

                        {/* Pricing Row */}
                        <div className="detail-price-box">
                            <span className="detail-current-price">{product.price}</span>
                            {product.originalPrice && (
                                <span className="detail-original-price">{product.originalPrice}</span>
                            )}
                            <span className="detail-badge-saving">House of Nihara Original</span>
                        </div>

                        {/* Description */}
                        <p className="detail-desc">{product.description}</p>

                        {/* Outfit Sizing Select Checkboxes */}
                        {product.category !== 'accessories' && (
                            <div className="detail-size-selection">
                                <h4>Select Size(s) <span className="required-star">*</span></h4>
                                <div className="size-checkbox-grid">
                                    {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
                                        <label key={size} className={`size-checkbox-label ${selectedSizes.includes(size) ? 'checked' : ''}`}>
                                            <input
                                                type="checkbox"
                                                value={size}
                                                checked={selectedSizes.includes(size)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedSizes([...selectedSizes, size]);
                                                    } else {
                                                        setSelectedSizes(selectedSizes.filter(s => s !== size));
                                                    }
                                                }}
                                                className="hidden-checkbox"
                                            />
                                            <span className="size-checkbox-custom"></span>
                                            <span className="size-name">{size}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Complete the Look Section */}
                        {product.matchingAccessory && (
                            <div className="detail-styled-with-box">
                                <div className="styled-with-header">
                                    <span>✦ COMPLETE THE LOOK</span>
                                    <p>Recommended matching hair accessory to pair with this outfit:</p>
                                </div>
                                {matchingAccessoryProduct ? (
                                    <Link href={`/product/${matchingAccessoryProduct.id}`} className="styled-with-card">
                                        <img src={product.matchingAccessory.image} alt={product.matchingAccessory.name} />
                                        <div>
                                            <h5>{product.matchingAccessory.name}</h5>
                                            <span className="styled-with-price">{product.matchingAccessory.price}</span>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="styled-with-card">
                                        <img src={product.matchingAccessory.image} alt={product.matchingAccessory.name} />
                                        <div>
                                            <h5>{product.matchingAccessory.name}</h5>
                                            <span className="styled-with-price">{product.matchingAccessory.price}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Craftsmanship Highlights List */}
                        <div className="detail-features">
                            <h4>Craftsmanship Highlights</h4>
                            <ul>
                                {product.features.map((feat, i) => (
                                    <li key={i}>
                                        <span className="feature-check">✓</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Order WhatsApp Actions */}
                        <div className="detail-actions-row">
                            <button
                                type="button"
                                onClick={() => {
                                    if (product.category !== 'accessories' && selectedSizes.length === 0) {
                                        triggerToast("Please select at least one size before placing your order.");
                                        return;
                                    }
                                    
                                    let text = `Hi House of Nihara, I'm interested in ordering the ${product.name} (${product.price})`;
                                    if (product.category !== 'accessories') {
                                        text = `Hi House of Nihara, I'm interested in ordering the ${product.name} (${product.price}) in size(s): ${selectedSizes.join(', ')}.`;
                                    }
                                    
                                    const waUrl = `https://wa.me/919342629717?text=${encodeURIComponent(text)}`;
                                    window.open(waUrl, '_blank', 'noopener,noreferrer');
                                }}
                                className="detail-wa-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                <span>Order on WhatsApp</span>
                            </button>
                            <Link href="/#collection-tabs" className="detail-back-link">
                                ✕ Back to Collection
                            </Link>
                        </div>
                    </div>
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
