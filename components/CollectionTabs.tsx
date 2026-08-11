"use client";
import { useState } from 'react';

interface Product {
    id: string;
    name: string;
    category: 'dresses' | 'accessories';
    price: string;
    originalPrice?: string;
    tag: string;
    image: string;
    color: string;
    colorCode: string;
    fabric: string;
    description: string;
    matchingAccessory?: {
        name: string;
        image: string;
        price: string;
    };
    features: string[];
}

const products: Product[] = [
    // =========================================
    // 11 AUTHENTIC HANDCRAFTED DRESSES & CO-ORDS
    // =========================================
    {
        id: "dress-mint-floral-scallop",
        name: "Seafoam Mint Scallop Floral Kurti",
        category: "dresses",
        price: "₹2,999",
        originalPrice: "₹3,599",
        tag: "Designer Pick",
        image: "/images/dresses/dress-mint-floral-scallop.jpg",
        color: "Seafoam Mint Aqua",
        colorCode: "#26A69A",
        fabric: "Organza Silk Blend & Sheer Puff Sleeves",
        description: "Breathtaking mint seafoam kurti decorated with hand-painted rose poppy botanical flora. Styled with a delicate scalloped keyhole neckline, organza sheer puff sleeves, and a tailored straight cut.",
        matchingAccessory: {
            name: "Translucent Starfish Jelly Hair Claws",
            image: "/images/accessories/acc-starfish-jelly-claws.jpg",
            price: "₹329"
        },
        features: ["Hand-Painted Poppy Botanical Blooms", "Scalloped Keyhole Neckline Detail", "Organza Sheer Puff Sleeves", "Custom Made to Measure Available"]
    },
    {
        id: "dress-ruby-crimson-coord",
        name: "Ruby Crimson Botanical Co-ord Set",
        category: "dresses",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Trending Co-ord",
        image: "/images/dresses/dress-ruby-crimson-coord.jpg",
        color: "Crimson Berry Red",
        colorCode: "#C2185B",
        fabric: "Pure Cotton Slub with Matching Trousers",
        description: "Effortlessly elegant 2-piece set featuring an all-over intricate white floral block print on deep crimson red. Finished with a tailored notched lapel V-neck and matching chevron print trousers.",
        matchingAccessory: {
            name: "Vibrant Triangle Cutout Hair Claws",
            image: "/images/accessories/acc-triangle-matte-claws.jpg",
            price: "₹329"
        },
        features: ["2-Piece Matching Kurti & Pant Set", "All-Over Botanical Block Print", "Notched Lapel Comfort V-Neck", "Breathable Day-to-Evening Fabric"]
    },
    {
        id: "dress-cyan-yellow-panel",
        name: "Cerulean Blue & Canary Temple Brocade Kurti",
        category: "dresses",
        price: "₹3,199",
        originalPrice: "₹3,799",
        tag: "Festive Exclusive",
        image: "/images/dresses/dress-cyan-yellow-panel.jpg",
        color: "Royal Cyan & Canary Yellow",
        colorCode: "#00ACC1",
        fabric: "Artisanal Chanderi Silk with Brocade Insert",
        description: "Striking two-tone ensemble pairing vivid cerulean cyan silk with a center canary yellow temple brocade panel and matching cyan trousers. Highlighted with subtle golden butti dots.",
        matchingAccessory: {
            name: "Minimalist Circular Donut Ring Claws",
            image: "/images/accessories/acc-donut-ring-claws.jpg",
            price: "₹299"
        },
        features: ["Two-Tone Royal Cyan & Yellow Palette", "Temple Pointed Central Panel Design", "Golden Butti Woven Accents", "Tailored Sizing & Sleeve Customization"]
    },
    {
        id: "dress-lavender-floral-silk",
        name: "Lilac Bloom Hand-Painted Silk Kurti",
        category: "dresses",
        price: "₹2,999",
        originalPrice: "₹3,599",
        tag: "Artisanal Silk",
        image: "/images/dresses/dress-lavender-floral-silk.jpg",
        color: "Pastel Lilac Lavender",
        colorCode: "#AB47BC",
        fabric: "Raw Silk with Woven Gold Zari Border",
        description: "Soft pastel lilac raw silk kurti with hand-painted pink flower branches, butterflies, and a tailored mandarin V-collar with a heavy golden brocade hemline border.",
        matchingAccessory: {
            name: "Crown Crest Palace Cutout Claws",
            image: "/images/accessories/acc-crown-crest-claws.jpg",
            price: "₹349"
        },
        features: ["Hand-Painted Botanical Flower & Butterfly Art", "Woven Gold Zari Hem Border", "Tailored Mandarin V-Neckline", "Pure Elegance for Celebrations"]
    },
    {
        id: "dress-rani-green-collar",
        name: "Rani Checkered Kurti with Lime Cape Collar",
        category: "dresses",
        price: "₹3,099",
        originalPrice: "₹3,699",
        tag: "Statement Piece",
        image: "/images/dresses/dress-rani-green-collar.jpg",
        color: "Rani Pink & Lime Chartreuse",
        colorCode: "#E91E63",
        fabric: "Woven Checkered Silk with Brocade Contrast",
        description: "Bold festive couture kurti crafted from rich rani pink grid checkered silk, dramatized with an architectural chartreuse lime green peaked collar yoke and puffed sleeves.",
        matchingAccessory: {
            name: "Ikat & Tribal Geometric Side Claws",
            image: "/images/accessories/acc-ikat-tribal-clips.jpg",
            price: "₹349"
        },
        features: ["Grid Checkered Silk Texture", "Peaked Contrast Lime Collar Detail", "Puffed Statement Sleeve Cuffs", "High-Slit Tailored Silhouette"]
    },
    {
        id: "dress-rani-lotus",
        name: "Rani Pink Pichwai Lotus Kurti",
        category: "dresses",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Bestseller",
        image: "/images/dresses/dress-rani-lotus.jpg",
        color: "Rani Fuchsia Pink",
        colorCode: "#E91E63",
        fabric: "Premium Raw Silk Blend & Cotton Lining",
        description: "An ode to Indian heritage craftsmanship. Features hand-painted Pichwai lotus flowers and a holy cow motif along the border, tailored in a flattering straight silhouette with puffed sleeves and V-neckline.",
        matchingAccessory: {
            name: "Handcrafted Satin Strawberry Blossom Clips",
            image: "/images/accessories/acc-satin-flower-clips.jpg",
            price: "₹399"
        },
        features: ["Pichwai Lotus & Sacred Cow Art", "Tailored V-Neck & Puffed Sleeves", "Breathable Premium Fabric", "Custom Sizing & Customization Available"]
    },
    {
        id: "dress-purple-lotus",
        name: "Amethyst Bloom Heritage Kurti",
        category: "dresses",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Exclusive Drop",
        image: "/images/dresses/dress-purple-lotus.jpg",
        color: "Royal Purple",
        colorCode: "#7B1FA2",
        fabric: "Artisanal Silk with Golden Thread Accents",
        description: "Regal amethyst purple kurti dressed with floating blossom motifs and traditional Pichwai cow art. Ideal for festive gatherings, poojas, and celebratory occasions.",
        matchingAccessory: {
            name: "Crown Crest Palace Cutout Claws",
            image: "/images/accessories/acc-crown-crest-claws.jpg",
            price: "₹349"
        },
        features: ["Deep Royal Purple Palette", "Artisanal Lotus Floral Prints", "Comfort Straight Cut", "Custom Sizing Available"]
    },
    {
        id: "dress-yellow-floral",
        name: "Sunlight Meadow Floral Co-ord Set",
        category: "dresses",
        price: "₹2,799",
        originalPrice: "₹3,299",
        tag: "New Arrival",
        image: "/images/dresses/dress-yellow-floral.jpg",
        color: "Sunlight Buttercup",
        colorCode: "#FBC02D",
        fabric: "Breathable Chanderi Blend & Matching Trousers",
        description: "Charming botanical floral printed kurti paired with matching tailored trousers. Features a delicate keyhole neckline and half sleeves for effortless festive comfort.",
        matchingAccessory: {
            name: "Matte Velvet Plumeria Flower Clips",
            image: "/images/accessories/acc-matte-velvet-plumeria.jpg",
            price: "₹349"
        },
        features: ["2-Piece Co-ord (Kurti + Pants)", "Botanical Meadow Flora Art", "Delicate Keyhole Neckline", "Made to Measure Available"]
    },
    {
        id: "dress-emerald-fusion",
        name: "Cerulean Emerald Panel Brocade Kurti",
        category: "dresses",
        price: "₹2,999",
        originalPrice: "₹3,699",
        tag: "Festive Exclusive",
        image: "/images/dresses/dress-emerald-fusion.jpg",
        color: "Emerald Aqua Fusion",
        colorCode: "#00897B",
        fabric: "Woven Brocade Central Panel & Raw Silk",
        description: "A statement silhouette combining vibrant emerald green with a floral brocade central insert, accented by subtle golden foil dots and a tailored cut-out neckline.",
        matchingAccessory: {
            name: "Translucent Starfish Jelly Hair Claws",
            image: "/images/accessories/acc-starfish-jelly-claws.jpg",
            price: "₹329"
        },
        features: ["Brocade Center Floral Panel", "Keyhole Collar Detail", "Festive Gold Accents", "Tailored Fit Sizing"]
    },
    {
        id: "dress-cyan-lotus",
        name: "Cerulean Aqua Lotus Kurti",
        category: "dresses",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Trending",
        image: "/images/dresses/dress-cyan-lotus.jpg",
        color: "Cerulean Aqua Cyan",
        colorCode: "#00ACC1",
        fabric: "Lightweight Chanderi Silk Blend",
        description: "Capturing breezy sophistication with a vibrant aqua hue, accented by delicate pink and white lotus motifs and Pichwai art. Finished with custom tailoring for a flattering fit.",
        matchingAccessory: {
            name: "Scalloped Seashell Glossy Hair Claws",
            image: "/images/accessories/acc-seashell-claws.jpg",
            price: "₹349"
        },
        features: ["Vibrant Aqua Cyan Colorway", "Hand-detailed Pichwai Art", "Soft Against Skin", "Made to Measure Available"]
    },
    {
        id: "dress-ikat-pink",
        name: "Fuchsia Ikat Heritage Co-ord Suit",
        category: "dresses",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Artisanal Weave",
        image: "/images/dresses/dress-ikat-pink.jpg",
        color: "Magenta Fuchsia",
        colorCode: "#C2185B",
        fabric: "Handcrafted Ikat Geometric Silk Blend",
        description: "Sophisticated collared kurti set with matching pants featuring heritage white and peach Ikat geometric diamond motifs. Styled with side slits and button-down collar.",
        matchingAccessory: {
            name: "Ikat & Tribal Geometric Side Claws",
            image: "/images/accessories/acc-ikat-tribal-clips.jpg",
            price: "₹349"
        },
        features: ["Collared Button-Front Styling", "2-Piece Kurti Pant Set", "Authentic Ikat Motifs", "Premium Silk Texture"]
    },

    // =========================================
    // 13 AUTHENTIC HOUSE OF NIHARA HAIR ACCESSORIES
    // =========================================
    {
        id: "acc-ikat-tribal-clips",
        name: "Ikat & Tribal Geometric Side Claws",
        category: "accessories",
        price: "₹349",
        originalPrice: "₹499",
        tag: "Heritage Print",
        image: "/images/accessories/acc-ikat-tribal-clips.jpg",
        color: "Tribal Chevron & Ikat Patterns",
        colorCode: "#303F9F",
        fabric: "Printed High-Gloss Acetate & Heavy Tension Clamp",
        description: "Authentic ethnic tribal and geometric Ikat printed hair side claws. Features high-definition geometric chevron and diamond patterns that naturally pair with ethnic kurtis.",
        features: ["Heritage Geometric & Ikat Motif Art", "Firm Side-Slide Hair Hold", "Gloss Coated Fade-Proof Prints", "Colors: Royal Blue, Brick Rust, Black & Violet"]
    },
    {
        id: "acc-cocobee-banana-combs",
        name: "CocoBee Curved Banana Grip Combs",
        category: "accessories",
        price: "₹349",
        originalPrice: "₹499",
        tag: "Ergonomic Grip",
        image: "/images/accessories/acc-cocobee-banana-combs.jpg",
        color: "Tortoiseshell, Amber & Noir",
        colorCode: "#6D4C41",
        fabric: "Flexible Contour Resin & Deep Interlocking Teeth",
        description: "Signature curved banana hair combs engineered to hold high ponytails and french twists seamlessly without pulling or slipping. Designed for long-lasting comfort.",
        features: ["Curved Head Contour Silhouette", "Deep Non-Slip Interlocking Teeth", "High Elasticity Heavy Duty Plastic", "Tortoise Amber, Gloss Black, Matte Noir & Ruby"]
    },
    {
        id: "acc-matte-velvet-plumeria",
        name: "Matte Velvet Plumeria Flower Clips",
        category: "accessories",
        price: "₹349",
        originalPrice: "₹499",
        tag: "Velvet Matte",
        image: "/images/accessories/acc-matte-velvet-plumeria.jpg",
        color: "Deep Forest & Jewel Mattes",
        colorCode: "#004D40",
        fabric: "Soft-Touch Matte Resin & Spring Clip",
        description: "Sculpted 5-petal Hawaiian plumeria flower clips coated with a luxurious soft-touch matte velvet finish. Rich earthy and jewel tones that enhance traditional attire.",
        features: ["Soft Touch Matte Velvet Texture", "Five-Petal Botanical Blossom Shape", "Gentle Zero-Crease Hair Grip", "Emerald Green, Navy Blue, Coral Pink, Rust & Slate"]
    },
    {
        id: "acc-starfish-jelly-claws",
        name: "Translucent Starfish Jelly Hair Claws",
        category: "accessories",
        price: "₹329",
        originalPrice: "₹499",
        tag: "New Arrival",
        image: "/images/accessories/acc-starfish-jelly-claws.jpg",
        color: "Jelly Jewel Multi-Tones",
        colorCode: "#00897B",
        fabric: "Glossy Translucent Acrylic & High Tension Steel Spring",
        description: "Playful sculpted starfish / 5-petal blossom claw clips in glowing jewel tones (sea aqua, ruby red, amber brown, smokey charcoal, candy pink). Non-slip grip for half and full updos.",
        features: ["Sculpted Starfish Petal Shape", "Crystal-Clear Translucent Sheen", "Comfort Curved Grip Teeth", "Set of Vibrant Summer Jewel Tones"]
    },
    {
        id: "acc-rect-frame-claws",
        name: "Geometric Open Frame Rectangle Claws",
        category: "accessories",
        price: "₹329",
        originalPrice: "₹499",
        tag: "Modern Chic",
        image: "/images/accessories/acc-rect-frame-claws.jpg",
        color: "Pastel Sorbet Palette",
        colorCode: "#80DEEA",
        fabric: "Smooth Satin Finish Resin & Strong Hinge",
        description: "Contemporary hollow rectangular cutout hair claws in soft candy pastels (sky cyan, lemon yellow, lilac purple, bubblegum pink, emerald mint). Minimalist styling for everyday elegance.",
        features: ["Geometric Architectural Cutout", "Lightweight Anti-Headache Design", "Holds Fine to Thick Hair Effortlessly", "Colors: Cyan, Pink, Yellow, Purple & Mint"]
    },
    {
        id: "acc-donut-ring-claws",
        name: "Minimalist Circular Donut Ring Claws",
        category: "accessories",
        price: "₹299",
        originalPrice: "₹449",
        tag: "Everyday Staple",
        image: "/images/accessories/acc-donut-ring-claws.jpg",
        color: "Candy Gloss Ring Colors",
        colorCode: "#FFB74D",
        fabric: "Polished High-Gloss Acrylic",
        description: "Chic circular ring clips designed with rounded teeth that grasp buns and top-knots firmly without snagging or creasing hair. Available in warm amber, mint, blush and yellow.",
        features: ["Sleek Ring Cutout Silhouette", "Snag-Free Rounded Teeth", "Gentle on Hair Strands", "Ideal for Messy Buns & Half-Up Styles"]
    },
    {
        id: "acc-crown-crest-claws",
        name: "Crown Crest Palace Cutout Claws",
        category: "accessories",
        price: "₹349",
        originalPrice: "₹499",
        tag: "Regal Elegance",
        image: "/images/accessories/acc-crown-crest-claws.jpg",
        color: "Royal Gem Tones",
        colorCode: "#8E24AA",
        fabric: "Durable Acetate Resin & Steel Spring",
        description: "Intricately contoured palace arch crown hair claws in royal hues (amethyst purple, amber honey, icy crystal, blush pink, jade teal). Strong jaw tension for all-day hold.",
        features: ["Palace Crown Arch Contour", "Rich Luminous Color Depth", "Extra Strong Locking Grip", "Perfect for Festive Occasions"]
    },
    {
        id: "acc-triangle-matte-claws",
        name: "Vibrant Triangle Cutout Hair Claws",
        category: "accessories",
        price: "₹329",
        originalPrice: "₹499",
        tag: "Bold Color",
        image: "/images/accessories/acc-triangle-matte-claws.jpg",
        color: "Sunset Coral & Berry Hues",
        colorCode: "#D81B60",
        fabric: "Satin Gloss Molded Resin",
        description: "Trendy triangular open-frame claw clips in luscious warm tones (magenta berry, tangerine orange, apricot peach, coral pink). Adds a burst of color to any casual or festive hairstyle.",
        features: ["Clean Triangular Window Cutout", "Non-Slip Interlocking Teeth", "Comfort Curve Sits Flat on Head", "Available in 5 Sunset Tones"]
    },
    {
        id: "acc-satin-flower-clips",
        name: "Handcrafted Satin Strawberry Blossom Clips",
        category: "accessories",
        price: "₹399",
        originalPrice: "₹599",
        tag: "Handmade Signature",
        image: "/images/accessories/acc-satin-flower-clips.jpg",
        color: "Pastel Blossom Pink & Berry",
        colorCode: "#F48FB1",
        fabric: "Premium Satin Ribbon & Lustrous Center Pearl",
        description: "Exquisite handcrafted floral hair clips made with folded satin petals featuring whimsical strawberry prints and an iridescent central pearl. Gentle clip grip for fine and thick hair alike.",
        features: ["Handmade Satin Petal Art", "Lustrous Center Faux Pearl", "Zero-Pull Hair Grip", "Available in Set of Harmonious Colors"]
    },
    {
        id: "acc-seashell-claws",
        name: "Scalloped Seashell Glossy Hair Claws",
        category: "accessories",
        price: "₹349",
        originalPrice: "₹499",
        tag: "Bestseller Clip",
        image: "/images/accessories/acc-seashell-claws.jpg",
        color: "Multi-Palette Shell Shades",
        colorCode: "#D7CCC8",
        fabric: "High-Gloss Cellulose Acetate & Strong Steel Spring",
        description: "Vintage-inspired scalloped clam shell hair claws with a rich high-gloss polished finish. Provides a secure, non-slip hold for half-up and full french twist hairstyles.",
        features: ["Unique Scalloped Shell Silhouette", "Durable Shatter-Resistant Acetate", "Strong Spring Non-Slip Hold", "Available in Ivory, Onyx, Amber & Rose"]
    },
    {
        id: "acc-butterfly-petal-claws",
        name: "Glossy Petal Butterfly Hair Claws",
        category: "accessories",
        price: "₹349",
        originalPrice: "₹499",
        tag: "Minimalist Chic",
        image: "/images/accessories/acc-butterfly-petal-claws.jpg",
        color: "Tonal Tortoise & Monochromes",
        colorCode: "#5D4037",
        fabric: "Polished Gloss Resin & Double Grip Teeth",
        description: "Contemporary butterfly petal cut-out hair claws designed for effortless daily styling and festive half-up dos. Smooth curved teeth prevent hair pulling.",
        features: ["Modern Sculpted Butterfly Cutouts", "Lightweight Comfort for All-Day Wear", "Anti-Snap Resin Construction", "Classic Black, Tortoise, Ivory & Smoke"]
    },
    {
        id: "acc-plumeria-blossom-clips",
        name: "Double Plumeria Blossom Hair Clips",
        category: "accessories",
        price: "₹399",
        originalPrice: "₹599",
        tag: "Festive Floral",
        image: "/images/accessories/acc-plumeria-blossom-clips.jpg",
        color: "Vibrant Tropical Palette",
        colorCode: "#FF7043",
        fabric: "Matte-Gloss Translucent Floral Resin",
        description: "Pair of cascading tropical plumeria / frangipani flower clips in vibrant gradient colors. Adds a romantic botanical flair to open hair, braids, and festive updos.",
        features: ["Cascading Dual Flower Design", "Soft Gradient Color Tones", "Firm Comfort Alligator Grip", "Available in Sunset Coral, Magenta, Lime & Lavender"]
    },
    {
        id: "acc-glitter-triangle-claws",
        name: "Shimmer Glitter Geometric Mini Claws",
        category: "accessories",
        price: "₹299",
        originalPrice: "₹449",
        tag: "Party Sparkle",
        image: "/images/accessories/acc-glitter-triangle-claws.jpg",
        color: "Glitter Gemstone Hues",
        colorCode: "#FFD54F",
        fabric: "Embedded Fine Crystal Glitter & Clear Acrylic",
        description: "Dainty triangular claw clips infused with radiant fine glitter sparkle. Perfect for sectioning hair, accentuating braids, or adding celebratory sparkle to any outfit.",
        features: ["Embedded Non-Flaking Sparkle", "Compact Geometric Triangle Shape", "Firm Locking Teeth", "Colors: Emerald, Ruby, Gold, Topaz & Diamond"]
    }
];

export default function CollectionTabs() {
    const [activeTab, setActiveTab] = useState<'all' | 'dresses' | 'accessories'>('all');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = activeTab === 'all' 
        ? products 
        : products.filter(p => p.category === activeTab);

    return (
        <section id="collection-tabs" className="collection-tabs-section">
            <div className="container">
                {/* Header */}
                <div className="section-header-center">
                    <span className="section-badge">CURATED ATELIER WARDROBE</span>
                    <h2 className="section-main-heading">Explore Our Complete Collection</h2>
                    <p className="section-subtext">
                        Discover handcrafted Indian heritage kurtis, bespoke co-ord sets, and naturally paired signature hair accessories.
                    </p>
                </div>

                {/* Tab Pill Switcher */}
                <div className="tab-control-wrapper">
                    <div className="tab-pill-bar" role="tablist">
                        <button
                            role="tab"
                            aria-selected={activeTab === 'all'}
                            className={`tab-btn ${activeTab === 'all' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            <span>All Creations</span>
                            <span className="tab-count">{products.length}</span>
                        </button>

                        <button
                            role="tab"
                            aria-selected={activeTab === 'dresses'}
                            className={`tab-btn ${activeTab === 'dresses' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('dresses')}
                            id="dresses-tab"
                        >
                            <span>Dresses & Co-ords</span>
                            <span className="tab-count">11</span>
                        </button>

                        <button
                            role="tab"
                            aria-selected={activeTab === 'accessories'}
                            className={`tab-btn ${activeTab === 'accessories' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('accessories')}
                            id="hair-accessories"
                        >
                            <span>Hair Accessories</span>
                            <span className="tab-count">13</span>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="product-showcase-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="nihara-product-card">
                            {/* Card Image Box */}
                            <div className="card-image-box" onClick={() => setSelectedProduct(product)}>
                                <span className="product-badge-tag">{product.tag}</span>
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="product-img"
                                    loading="lazy" 
                                />
                                <div className="card-hover-overlay">
                                    <button 
                                        type="button" 
                                        className="quick-view-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProduct(product);
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span>Quick View</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                                <div className="card-meta">
                                    <span className="color-swatch-dot" style={{ backgroundColor: product.colorCode }}></span>
                                    <span className="color-name">{product.color}</span>
                                    <span className="category-pill-micro">{product.category === 'dresses' ? 'Couture' : 'Accessory'}</span>
                                </div>

                                <h3 className="card-product-title" onClick={() => setSelectedProduct(product)}>
                                    {product.name}
                                </h3>

                                <p className="card-fabric-tag">{product.fabric}</p>

                                {/* Natural Pair Suggestion */}
                                {product.matchingAccessory && (
                                    <div className="card-pairing-hint" onClick={() => {
                                        const match = products.find(p => p.name === product.matchingAccessory?.name);
                                        if (match) setSelectedProduct(match);
                                    }}>
                                        <span className="hint-label">✦ Styled with:</span>
                                        <span className="hint-name">{product.matchingAccessory.name}</span>
                                    </div>
                                )}

                                <div className="card-pricing-row">
                                    <div className="price-group">
                                        <span className="current-price">{product.price}</span>
                                        {product.originalPrice && (
                                            <span className="original-price">{product.originalPrice}</span>
                                        )}
                                    </div>

                                    <a
                                        href={`https://wa.me/?text=Hello%20House%20of%20Nihara,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.price)}).`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-order-btn"
                                        title="Order via WhatsApp"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                        <span>Order</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick View Modal */}
            {selectedProduct && (
                <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close-btn" 
                            onClick={() => setSelectedProduct(null)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <div className="modal-body-grid">
                            <div className="modal-image-col">
                                <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-main-img" />
                            </div>

                            <div className="modal-info-col">
                                <span className="modal-tag">{selectedProduct.tag}</span>
                                <h2 className="modal-title">{selectedProduct.name}</h2>
                                <p className="modal-color-info">Color: <strong>{selectedProduct.color}</strong> • Details: <strong>{selectedProduct.fabric}</strong></p>

                                <div className="modal-price-box">
                                    <span className="modal-current-price">{selectedProduct.price}</span>
                                    {selectedProduct.originalPrice && (
                                        <span className="modal-original-price">{selectedProduct.originalPrice}</span>
                                    )}
                                    <span className="modal-badge-saving">House of Nihara Original</span>
                                </div>

                                <p className="modal-desc">{selectedProduct.description}</p>

                                {/* If Dress: Complete the Look Pairing */}
                                {selectedProduct.matchingAccessory && (
                                    <div className="modal-styled-with-box">
                                        <div className="styled-with-header">
                                            <span>✦ COMPLETE THE LOOK</span>
                                            <p>Recommended matching hair accessory to pair with this outfit:</p>
                                        </div>
                                        <div 
                                            className="styled-with-card" 
                                            onClick={() => {
                                                const match = products.find(p => p.name === selectedProduct.matchingAccessory?.name);
                                                if (match) setSelectedProduct(match);
                                            }} 
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img src={selectedProduct.matchingAccessory.image} alt={selectedProduct.matchingAccessory.name} />
                                            <div>
                                                <h5>{selectedProduct.matchingAccessory.name}</h5>
                                                <span className="styled-with-price">{selectedProduct.matchingAccessory.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="modal-features">
                                    <h4>Craftsmanship Highlights</h4>
                                    <ul>
                                        {selectedProduct.features.map((feat, i) => (
                                            <li key={i}>
                                                <span className="feature-check">✓</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-actions">
                                    <a
                                        href={`https://wa.me/?text=Hi%20House%20of%20Nihara,%20I'm%20interested%20in%20ordering%20the%20${encodeURIComponent(selectedProduct.name)}%20(${encodeURIComponent(selectedProduct.price)})`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-wa-btn"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                        <span>Order on WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
