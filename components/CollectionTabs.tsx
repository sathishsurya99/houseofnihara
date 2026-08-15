"use client";
import { useState, useEffect } from 'react';

// Configure your Google Spreadsheet ID here.
// To use, publish your Google Sheet to the web (File > Share > Publish to web > Whole Document as CSV)
// and paste its ID here. If kept as "YOUR_SPREADSHEET_ID_HERE" or if loading fails, it defaults to the codebase prices.
const GOOGLE_SHEET_ID: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRu88ByM6H3b0fbTZBZ6YdSEOsDdxbdMRBxoM93zeSSp22vLkBAWoiDO2Li9Bx_G5oRDa8UbZz-X2fK/pub?gid=0&single=true&output=csv";

const parseCSVLine = (text: string) => {
    const result = [];
    let insideQuote = false;
    let current = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"') {
            insideQuote = !insideQuote;
        } else if (char === ',' && !insideQuote) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result.map(val => val.replace(/^"|"$/g, "").trim());
};

const convertGoogleDriveLink = (url: string): string => {
    if (!url) return url;


    // Check for drive.google.com/file/d/ID/view
    const fileIdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }

    // Check for drive.google.com/open?id=ID
    const openIdMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (openIdMatch && openIdMatch[1]) {
        return `https://drive.google.com/uc?export=view&id=${openIdMatch[1]}`;
    }

    return url;
};

interface Product {
    id: string;
    name: string;
    category: 'kurti' | 'coord-set' | 'salwar' | 'maxi' | 'accessories';
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
    // 1. CO-ORD SETS
    // =========================================
    {
        id: "dress-geometric-coord",
        name: "Terracotta & Sage Geometric Flare Co-ord Set",
        category: "coord-set",
        price: "₹2,999",
        originalPrice: "₹3,599",
        tag: "New Studio Arrival",
        image: "/images/dresses/dress-geometric-coord.jpg",
        color: "Terracotta & Sage Green",
        colorCode: "#D97736",
        fabric: "Artisanal Linen-Silk Blend with Matching Trousers",
        description: "Breathtaking sleeveless flared A-line kurti paired with tailored matching trousers. Showcases an earth-toned retro modernist geometric capsule print with terracotta, olive sage, dusty rose, and midnight navy accents, detailed with an elegant cutout keyhole collar.",
        matchingAccessory: {
            name: "Minimalist Circular Donut Ring Claws",
            image: "/images/accessories/acc-donut-ring-claws.jpg",
            price: "₹40"
        },
        features: ["Flared A-line Fluid Silhouette with Pleat Accents", "Sleeveless Cutout Keyhole Neckline", "Earth-Toned Modernist Geometric Motif", "2-Piece Kurti & Matching Trouser Set", "Custom Made-to-Measure Available"]
    },
    {
        id: "dress-ruby-crimson-coord",
        name: "Ruby Crimson Botanical Co-ord Set",
        category: "coord-set",
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
            price: "₹40"
        },
        features: ["2-Piece Matching Kurti & Pant Set", "All-Over Botanical Block Print", "Notched Lapel Comfort V-Neck", "Breathable Day-to-Evening Fabric"]
    },
    {
        id: "dress-yellow-floral",
        name: "Sunlight Meadow Floral Co-ord Set",
        category: "coord-set",
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
            price: "₹30"
        },
        features: ["2-Piece Co-ord (Kurti + Pants)", "Botanical Meadow Flora Art", "Delicate Keyhole Neckline", "Made to Measure Available"]
    },
    {
        id: "dress-ikat-pink",
        name: "Fuchsia Ikat Heritage Co-ord Suit",
        category: "coord-set",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Artisanal Weave",
        image: "/images/dresses/dress-ikat-pink.jpg",
        color: "Ruby Red",
        colorCode: "#C2185B",
        fabric: "Handcrafted Ikat Geometric Silk Blend",
        description: "Sophisticated collared kurti set with matching pants featuring heritage white and peach Ikat geometric diamond motifs. Styled with side slits and button-down collar.",
        matchingAccessory: {
            name: "Ikat & Tribal Geometric Side Claws",
            image: "/images/accessories/acc-ikat-tribal-clips.jpg",
            price: "₹40"
        },
        features: ["Collared Button-Front Styling", "2-Piece Kurti Pant Set", "Authentic Ikat Motifs", "Premium Silk Texture"]
    },

    // =========================================
    // 2. KURTI COLLECTION
    // =========================================
    {
        id: "dress-mint-floral-scallop",
        name: "Seafoam Mint Scallop Floral Kurti",
        category: "kurti",
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
            price: "₹40"
        },
        features: ["Hand-Painted Poppy Botanical Blooms", "Scalloped Keyhole Neckline Detail", "Organza Sheer Puff Sleeves", "Custom Made to Measure Available"]
    },
    {
        id: "dress-cyan-yellow-panel",
        name: "Cerulean Blue & Canary Temple Brocade Co-ord Set",
        category: "coord-set",
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
            price: "₹40"
        },
        features: ["Two-Tone Royal Cyan & Yellow Palette", "2-Piece Kurti & Matching Trouser Set", "Temple Pointed Central Panel Design", "Golden Butti Woven Accents", "Tailored Sizing & Sleeve Customization"]
    },
    {
        id: "dress-lavender-floral-silk",
        name: "Lilac Bloom Hand-Painted Silk Kurti",
        category: "kurti",
        price: "₹2,999",
        originalPrice: "₹3,599",
        tag: "Artisanal Silk",
        image: "/images/dresses/dress-lavender-floral-silk.jpg",
        color: "Pastel Pink Lavender",
        colorCode: "#AB47BC",
        fabric: "Raw Silk with Woven Gold Zari Border",
        description: "Soft pastel lilac raw silk kurti with hand-painted pink flower branches, butterflies, and a tailored mandarin V-collar with a heavy golden brocade hemline border.",
        matchingAccessory: {
            name: "Crown Crest Palace Cutout Claws",
            image: "/images/accessories/acc-crown-crest-claws.jpg",
            price: "₹40"
        },
        features: ["Hand-Painted Botanical Flower & Butterfly Art", "Woven Gold Zari Hem Border", "Tailored Mandarin V-Neckline", "Pure Elegance for Celebrations"]
    },
    {
        id: "dress-rani-green-collar",
        name: "Rani Checkered Kurti with Lime Cape Collar",
        category: "kurti",
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
            price: "₹40"
        },
        features: ["Grid Checkered Silk Texture", "Peaked Contrast Lime Collar Detail", "Puffed Statement Sleeve Cuffs", "High-Slit Tailored Silhouette"]
    },
    {
        id: "dress-rani-lotus",
        name: "Rani Pink Pichwai Lotus Kurti",
        category: "kurti",
        price: "₹2,899",
        originalPrice: "₹3,499",
        tag: "Bestseller",
        image: "/images/dresses/dress-rani-lotus.jpg",
        color: "Rani Lotus Pink",
        colorCode: "#E91E63",
        fabric: "Premium Raw Silk Blend & Cotton Lining",
        description: "An ode to Indian heritage craftsmanship. Features hand-painted Pichwai lotus flowers and a holy cow motif along the border, tailored in a flattering straight silhouette with puffed sleeves and V-neckline.",
        matchingAccessory: {
            name: "Handcrafted Satin Strawberry Blossom Clips",
            image: "/images/accessories/acc-satin-flower-clips.jpg",
            price: "₹100"
        },
        features: ["Pichwai Lotus & Sacred Cow Art", "Tailored V-Neck & Puffed Sleeves", "Breathable Premium Fabric", "Custom Sizing & Customization Available"]
    },
    {
        id: "dress-purple-lotus",
        name: "Amethyst Bloom Heritage Kurti",
        category: "kurti",
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
            price: "₹40"
        },
        features: ["Deep Royal Purple Palette", "Artisanal Lotus Floral Prints", "Comfort Straight Cut", "Custom Sizing Available"]
    },
    {
        id: "dress-emerald-fusion",
        name: "Cerulean Emerald Panel Brocade Kurti",
        category: "kurti",
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
            price: "₹40"
        },
        features: ["Brocade Center Floral Panel", "Keyhole Collar Detail", "Festive Gold Accents", "Tailored Fit Sizing"]
    },
    {
        id: "dress-cyan-lotus",
        name: "Cerulean Aqua Lotus Kurti",
        category: "kurti",
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
            price: "₹40"
        },
        features: ["Vibrant Aqua Cyan Colorway", "Hand-detailed Pichwai Art", "Soft Against Skin", "Made to Measure Available"]
    },

    // =========================================
    // 3. MAXI GOWNS & DRESSES
    // =========================================
    {
        id: "maxi-flamingo-blue",
        name: "Azure Blue Flamingo Print Maxi Gown",
        category: "maxi",
        price: "₹950",
        originalPrice: "₹1,200",
        tag: "Summer Fresh",
        image: "/images/gowns/maxi-flamingo-blue.jpg",
        color: "Azure Blue & Pink",
        colorCode: "#00B0FF",
        fabric: "Premium Georgette with Flare Hem",
        description: "A charming azure blue flared georgette maxi gown featuring playful pink flamingo patterns, perfect for casual outings or sunny afternoon events.",
        matchingAccessory: {
            name: "Handcrafted Satin Ribbon Tulip Bow Clips",
            image: "/images/accessories/acc-satin-tulip-bow-clips.jpg",
            price: "₹100"
        },
        features: ["Playful Flamingo Print", "Lightweight Flowy Georgette", "Vibrant Azure Blue Base", "Flared Floor-Length Style"]
    },
    {
        id: "maxi-elephant-maroon",
        name: "Wine Maroon Golden Elephant Print Maxi Gown",
        category: "maxi",
        price: "₹950",
        originalPrice: "₹1,200",
        tag: "Royal Heritage",
        image: "/images/gowns/maxi-elephant-maroon.jpg",
        color: "Wine Maroon & Gold",
        colorCode: "#800020",
        fabric: "Lightweight Cotton Silk Blend",
        description: "An elegant wine maroon cotton silk maxi gown decorated with traditional golden elephant block prints and short puff sleeves.",
        matchingAccessory: {
            name: "Plush Velvet Fur Tulip Hair Claws",
            image: "/images/accessories/acc-plush-tulip-claw-clips.jpg",
            price: "₹60"
        },
        features: ["Traditional Elephant Print", "Rich Wine Maroon Tone", "Soft Puff Sleeves", "Comfortable Regular Fit"]
    },
    {
        id: "maxi-floral-yellow",
        name: "Mustard Yellow Floral Line-Art Maxi Gown",
        category: "maxi",
        price: "₹950",
        originalPrice: "₹1,200",
        tag: "Boho Chic",
        image: "/images/gowns/maxi-floral-yellow.jpg",
        color: "Mustard Yellow & White",
        colorCode: "#FBC02D",
        fabric: "Artisanal Chanderi Silk Blend",
        description: "A sunny mustard yellow maxi gown accented with white line-art floral prints and elegant elbow-length flared sleeves.",
        matchingAccessory: {
            name: "Pastel Polka Bow & Daisy Mini Claws",
            image: "/images/accessories/acc-polka-bow-flower-claws.jpg",
            price: "₹40"
        },
        features: ["Line-Art Floral Print", "Mustard Yellow Base", "Flared Elbow Sleeves", "Flowy Maxi Silhouette"]
    },
    {
        id: "maxi-floral-pink",
        name: "Magenta Pink Floral Garden Maxi Gown",
        category: "maxi",
        price: "₹950",
        originalPrice: "₹1,200",
        tag: "Festive Vibe",
        image: "/images/gowns/maxi-floral-pink.jpg",
        color: "Magenta Pink & Red",
        colorCode: "#E91E63",
        fabric: "Soft Crepe Silk Georgette",
        description: "A striking magenta pink crepe silk maxi gown adorned with abstract red and orange floral leaf patterns, ideal for garden parties and resortwear.",
        matchingAccessory: {
            name: "Handcrafted Satin Strawberry Blossom Clips",
            image: "/images/accessories/acc-satin-flower-clips.jpg",
            price: "₹100"
        },
        features: ["Abstract Floral Print", "Vibrant Magenta Hue", "Breathable Crepe Georgette", "Flattering Flared Fit"]
    },
    {
        id: "maxi-floral-navy",
        name: "Navy Flora Stripe Tiered Maxi Gown",
        category: "maxi",
        price: "₹950",
        originalPrice: "₹1,200",
        tag: "Summer Classic",
        image: "/images/gowns/maxi-floral-navy.jpg",
        color: "Ink Blue & Multicolor",
        colorCode: "#1A237E",
        fabric: "Soft Breathable Cotton Georgette",
        description: "A charming navy blue tiered maxi gown adorned with colorful vertical flora stripe patterns, featuring comfortable short sleeves and a breezy flowing silhouette.",
        matchingAccessory: {
            name: "Geometric Open Rectangle Claws",
            image: "/images/accessories/acc-rect-frame-claws.jpg",
            price: "₹40"
        },
        features: ["Vertical Flora Stripe Patterns", "Soft Breathable Cotton Georgette", "Tiered Flared Hem", "Relaxed Short Sleeves"]
    },
    {
        id: "maxi-collar-mustard",
        name: "Golden Meadow Scalloped Collar Maxi Gown",
        category: "maxi",
        price: "₹1,250",
        originalPrice: "₹1,500",
        tag: "Collar Signature",
        image: "/images/gowns/maxi-collar-mustard.jpg",
        color: "Mustard Yellow & Cream",
        colorCode: "#D4AF37",
        fabric: "Premium Mulmul Cotton Silk",
        description: "An exquisite mustard yellow tiered maxi dress featuring a beautiful scalloped floral collar, soft puff sleeves, and a full flowing gathered skirt printed with cream meadow flowers.",
        matchingAccessory: {
            name: "Crown Crest Palace Cutout Claws",
            image: "/images/accessories/acc-crown-crest-claws.jpg",
            price: "₹40"
        },
        features: ["Scalloped Floral Collar Detail", "Premium Breathable Mulmul Cotton Silk", "Tiered Gathered Flowy Skirt", "Short Comfort Sleeves"]
    },
    {
        id: "maxi-floral-pink-square",
        name: "Blush Rose Meadow Square Neck Maxi Gown",
        category: "maxi",
        price: "₹899",
        originalPrice: "₹1,200",
        tag: "Spring Vibe",
        image: "/images/gowns/maxi-floral-pink-square.jpg",
        color: "Blush Pink & Rose",
        colorCode: "#FFCDD2",
        fabric: "Lightweight Soft Georgette",
        description: "A charming blush pink georgette maxi gown featuring a classic square neckline, gentle puff sleeves, and a tiered ruffle hem printed in sweet spring floral motifs.",
        matchingAccessory: {
            name: "Handcrafted Satin Strawberry Blossom Clips",
            image: "/images/accessories/acc-satin-flower-clips.jpg",
            price: "₹100"
        },
        features: ["Classic Square Neckline", "Sweet Floral Motif Print", "Soft Flowy Georgette Fabric", "Tiered Ruffle Hemline"]
    },
    {
        id: "maxi-leopard-brown",
        name: "Sahara Leopard Tiered Shirt Maxi Gown",
        category: "maxi",
        price: "₹999",
        originalPrice: "₹1,200",
        tag: "Safari Chic",
        image: "/images/gowns/maxi-leopard-brown.jpg",
        color: "Cocoa Black & Cream",
        colorCode: "#4E342E",
        fabric: "Soft Chanderi Cotton Blend",
        description: "A chic chocolate brown animal leopard print maxi gown styled with an elegant shirt collar, button-down bodice, and tiered flowing skirt.",
        matchingAccessory: {
            name: "Plush Velvet Fur Tulip Hair Claws",
            image: "/images/accessories/acc-plush-tulip-claw-clips.jpg",
            price: "₹60"
        },
        features: ["Classic Shirt Collar Style", "Sophisticated Leopard Print", "Tiered Flared Silhouette", "Comfortable Cotton Blend"]
    },

    // =========================================
    // AUTHENTIC HOUSE OF NIHARA SALWAR SUIT SETS
    // =========================================
    {
        id: "salwar-sage-fuchsia-floral",
        name: "Mint Sage English Floral & Rani Pink Salwar Set",
        category: "salwar",
        price: "₹1,899",
        originalPrice: "₹2,399",
        tag: "New Studio Arrival",
        image: "/images/salwar/salwar-sage-fuchsia-floral.jpg",
        color: "Mint Sage & Rani Pink",
        colorCode: "#26A69A",
        fabric: "Artisanal Chanderi Silk Kurta & Rani Zari Bottom with Matching Dupatta",
        description: "Unstitched 3-piece salwar suit set in pastel mint sage green adorned with English rose floral bouquets and golden button detailing. Accompanied by vibrant rani fuchsia trousers fabric woven with golden zari pin-stripes and a coordinating dupatta.",
        matchingAccessory: {
            name: "Handcrafted Satin Ribbon Tulip Bow Clips",
            image: "/images/accessories/acc-satin-tulip-bow-clips.jpg",
            price: "₹100"
        },
        features: ["3-Piece Salwar Suit Material (Kurta, Bottom, Dupatta)", "English Rose Garden Digital Print with Placket Buttons", "Rani Fuchsia Bottom with Golden Zari Pinstripes", "Custom Tailoring / Stitching Available on Request"]
    },
    {
        id: "salwar-beige-fuchsia-floral",
        name: "Earthy Flora & Fuchsia Silk Salwar Suit Set",
        category: "salwar",
        price: "₹1,899",
        originalPrice: "₹2,399",
        tag: "New Studio Arrival",
        image: "/images/salwar/salwar-beige-fuchsia-floral.jpg",
        color: "Earthy Beige & Fuchsia Pink",
        colorCode: "#E91E63",
        fabric: "Pure Chanderi Silk Kurta & Zari Bottom with Matching Dupatta",
        description: "Unstitched 3-piece salwar suit set featuring an earthy beige floral printed kurta detailed with handcrafted button placket, paired with vibrant rani pink trousers fabric woven with subtle golden zari pin-stripes and a coordinating dupatta.",
        matchingAccessory: {
            name: "Handcrafted Satin Strawberry Blossom Clips",
            image: "/images/accessories/acc-satin-flower-clips.jpg",
            price: "₹100"
        },
        features: ["3-Piece Salwar Suit Material (Kurta, Bottom, Dupatta)", "Floral Botanical Digital Print with Placket Buttons", "Fuchsia Bottom with Golden Zari Pinstripes", "Custom Tailoring / Stitching Available on Request"]
    },
    {
        id: "salwar-plum-slate-rose",
        name: "Vintage Plum Rose & Slate Blue Salwar Suit Set",
        category: "salwar",
        price: "₹1,899",
        originalPrice: "₹2,399",
        tag: "Heritage Floral",
        image: "/images/salwar/salwar-plum-slate-rose.jpg",
        color: "Royal Plum Wine & Slate Indigo",
        colorCode: "#6A1B9A",
        fabric: "Artisanal Silk Blend Kurta & Zari Woven Bottom with Dupatta",
        description: "Regal plum wine salwar suit set decorated with vintage dusty English rose botanical blooms. Accompanied by rich slate blue bottom fabric detailed with golden zari stripes and border trim.",
        matchingAccessory: {
            name: "Crown Crest Palace Cutout Claws",
            image: "/images/accessories/acc-crown-crest-claws.jpg",
            price: "₹40"
        },
        features: ["Vintage English Rose Floral Motif", "Decorative Buttoned Mandarin Placket", "Slate Blue Bottom with Golden Zari Weave", "Breathable Celebratory Festive Fabric"]
    },
    {
        id: "salwar-peach-violet-floral",
        name: "Sunburst Peach Coral & Royal Violet Salwar Set",
        category: "salwar",
        price: "₹1,899",
        originalPrice: "₹2,399",
        tag: "Festive Exclusive",
        image: "/images/salwar/salwar-peach-violet-floral.jpg",
        color: "Sunburst Peach Coral & Royal Violet",
        colorCode: "#FF7043",
        fabric: "Soft Chanderi Silk Kurta & Zari Bottom with Dupatta",
        description: "Luminous peach coral salwar set adorned with multi-tonal floral garden illustrations, paired with contrast royal violet bottom material featuring golden zari stripes.",
        matchingAccessory: {
            name: "Handcrafted Satin Ribbon Tulip Bow Clips",
            image: "/images/accessories/acc-satin-tulip-bow-clips.jpg",
            price: "₹100"
        },
        features: ["Luminous Pastel Peach & Violet Contrast", "Golden Zari Pinstripe Detailing on Bottom", "Fabric for Straight Kurti, Anarkali, or Pant Suit", "Includes Matching Border Trim"]
    },
    {
        id: "salwar-teal-lime-botanical",
        name: "Teal Aqua Botanical & Chartreuse Lime Salwar Set",
        category: "salwar",
        price: "₹1,899",
        originalPrice: "₹2,399",
        tag: "Trending Contrast",
        image: "/images/salwar/salwar-teal-lime-botanical.jpg",
        color: "Deep Teal Cyan & Chartreuse Lime",
        colorCode: "#00897B",
        fabric: "Premium Silk Blend Kurta & Lime Zari Bottom with Dupatta",
        description: "Striking deep teal aqua salwar suit set filled with botanical wild meadow blossoms. Complemented by chartreuse lime green bottom cloth with golden zari lines and floral border accents.",
        matchingAccessory: {
            name: "Translucent Starfish Jelly Hair Claws",
            image: "/images/accessories/acc-starfish-jelly-claws.jpg",
            price: "₹40"
        },
        features: ["Vibrant Jewel Tone Teal & Lime Contrast", "Hand-detailed Button Neckline Trim", "Zari Woven Bottom Material with Border", "Custom Tailoring Support on WhatsApp"]
    },
    {
        id: "salwar-lilac-magenta-peony",
        name: "Dusty Lilac Peony & Ruby Magenta Salwar Suit Set",
        category: "salwar",
        price: "₹1,899",
        originalPrice: "₹2,399",
        tag: "Designer Choice",
        image: "/images/salwar/salwar-lilac-magenta-peony.jpg",
        color: "Dusty Lilac Mauve & Ruby Magenta",
        colorCode: "#AB47BC",
        fabric: "Artisanal Raw Silk Blend & Magenta Zari Bottom with Dupatta",
        description: "Romantic pastel lilac salwar suit set featuring lush bouquet peony blooms and buttons, paired with a rich ruby magenta bottom fabric with woven golden pin-stripes.",
        matchingAccessory: {
            name: "Plush Velvet Fur Tulip Hair Claws",
            image: "/images/accessories/acc-plush-tulip-claw-clips.jpg",
            price: "₹60"
        },
        features: ["Lush Peony Garden Artwork", "Ruby Magenta Bottom Fabric with Zari Finish", "3-Piece Complete Salwar Material", "Tailoring & Measurement Assistance Available"]
    },

    // =========================================
    // AUTHENTIC HOUSE OF NIHARA HAIR ACCESSORIES
    // =========================================
    {
        id: "acc-satin-tulip-bow-clips",
        name: "Handcrafted Satin Ribbon Tulip Bow Clips",
        category: "accessories",
        price: "₹100",
        originalPrice: "₹150",
        tag: "New Arrival",
        image: "/images/accessories/acc-satin-tulip-bow-clips.jpg",
        color: "Pastel Sky, Mint Sage & Lilac",
        colorCode: "#81D4FA",
        fabric: "Handmade Organza Bow with Cascading Satin Tulip Buds",
        description: "Exquisite handcrafted bow hair clips featuring cascading twin satin tulip flower buds. Fashioned in sheer shimmer organza with satin green stems for romantic half-up and festive hairstyles.",
        features: ["Handcrafted Satin Dual Tulip Blooms", "Shimmer Organza Ribbon Bow Detail", "Firm Pinch Alligator Clip Grip", "Set of 3 Pastel Tones: Sky Blue, Mint & Lilac"]
    },
    {
        id: "acc-plush-tulip-claw-clips",
        name: "Plush Velvet Fur Tulip Hair Claws",
        category: "accessories",
        price: "₹60",
        originalPrice: "₹99",
        tag: "Trending Plush",
        image: "/images/accessories/acc-plush-tulip-claw-clips.jpg",
        color: "Cloud Blue, Rose Pink & Ivory",
        colorCode: "#F8BBD0",
        fabric: "Ultra-Soft Faux Fur Wrapped Claw with Satin Tulips",
        description: "Cozy plush faux fur claw clips embellished with double handcrafted satin tulip buds. Soft padded texture cushions hair to prevent breakage while delivering a firm, non-slip hold.",
        features: ["Plush Faux Fur Cushion Grip", "Handcrafted Double Satin Tulip Stems", "Gentle Anti-Snag Jaw Teeth", "Colors: Sky Blue, Rosy Pink, Pastel Peach & Cream Ivory"]
    },
    {
        id: "acc-polka-bow-flower-claws",
        name: "Pastel Polka Bow & Daisy Mini Claws",
        category: "accessories",
        price: "₹40",
        originalPrice: "₹70",
        tag: "New Arrival",
        image: "/images/accessories/acc-polka-bow-flower-claws.jpg",
        color: "Blush Pink, Butter Cream & Espresso",
        colorCode: "#F48FB1",
        fabric: "Embossed Dotted Texture Resin & Mini Flower Accent Clips",
        description: "Playful embossed dotted ribbon bow claw clips accompanied by miniature daisy floral clips. Lightweight and secure for styling side bangs, half-crowns, and festive braid accents.",
        features: ["Embossed Textured Polka Dot Bows", "Includes Matching Miniature Daisy Clips", "Non-Slip Interlocking Grip Teeth", "Colors: Pastel Pink, Buttercream & Matte Espresso"]
    },
    {
        id: "acc-rhinestone-crystal-comb-claws",
        name: "Crystal Rhinestone Curved Banana Claws",
        category: "accessories",
        price: "₹60",
        originalPrice: "₹99",
        tag: "Luxury Crystal",
        image: "/images/accessories/acc-rhinestone-crystal-comb-claws.jpg",
        color: "Rose Crystal, Champagne Gold & Diamond Clear",
        colorCode: "#FF80AB",
        fabric: "Faceted Gemstone Crystals on Curved Resin Base",
        description: "Glamorous curved banana combs encrusted with oversized shimmering crystal gems. Ergonomically contoured to grip high ponytails and party updos with radiant sparkle.",
        features: ["Faceted Shimmering Crystal Jewels", "Curved Head-Contour Comb Profile", "High-Tension Heavy Duty Spring", "Colors: Rose Quartz, Champagne Gold & Diamond Clear"]
    },
    {
        id: "acc-ikat-tribal-clips",
        name: "Ikat & Tribal Geometric Side Claws",
        category: "accessories",
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹60",
        originalPrice: "₹99",
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
        price: "₹30",
        originalPrice: "₹50",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹100",
        originalPrice: "₹150",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹40",
        originalPrice: "₹70",
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
        price: "₹30",
        originalPrice: "₹50",
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
        price: "₹30",
        originalPrice: "₹50",
        tag: "Party Sparkle",
        image: "/images/accessories/acc-glitter-triangle-claws.jpg",
        color: "Glitter Gemstone Hues",
        colorCode: "#FFD54F",
        fabric: "Embedded Fine Crystal Glitter & Clear Acrylic",
        description: "Dainty triangular claw clips infused with radiant fine glitter sparkle. Perfect for sectioning hair, accentuating braids, or adding celebratory sparkle to any outfit.",
        features: ["Embedded Non-Flaking Sparkle", "Compact Geometric Triangle Shape", "Firm Locking Teeth", "Colors: Emerald, Ruby, Gold, Topaz & Diamond"]
    },
    {
        id: "acc-amber-cream-blossom",
        name: "Crystal Amber & Cream Blossom Claws",
        category: "accessories",
        price: "₹60",
        originalPrice: "₹99",
        tag: "Elegant Glow",
        image: "/images/accessories/acc-amber-cream-blossom.jpg",
        color: "Amber Translucent & Cream",
        colorCode: "#D7CCC8",
        fabric: "Glossy Resin with Crystal Center Rhinestone",
        description: "Chic 5-petal flower claw clips featuring one crystal clear cream blossom and one warm translucent amber blossom, finished with a central brilliant rhinestone.",
        features: ["Translucent Resin & Glossy Finish", "Sparkling Center Rhinestone Detail", "Perfect for Half-Up Hairstyles", "Set of 2 Neutral Tone Flower Claws"]
    },
    {
        id: "acc-matte-floral-heart",
        name: "Matte Floral Heart Outline Claws",
        category: "accessories",
        price: "₹80",
        originalPrice: "₹120",
        tag: "Artisanal Loop",
        image: "/images/accessories/acc-matte-floral-heart.jpg",
        color: "Pastel Earth Tones",
        colorCode: "#8D6E63",
        fabric: "Premium Matte Resin with Open-Loop Heart Grip",
        description: "Unique open-loop heart-shaped claw clips composed of a border of tiny interlinked matte flowers, available in beautiful earthy colors.",
        features: ["Chic Open-Loop Heart Design", "Interlinked Miniature Flower Border", "Non-Slip Comfort Matte Texture", "Diverse Colors: Slate, Mint, Cream, & Cocoa"]
    },
    {
        id: "acc-noir-slate-plumeria",
        name: "Noir & Slate Matte Plumeria Claws",
        category: "accessories",
        price: "₹60",
        originalPrice: "₹99",
        tag: "Monochrome Chic",
        image: "/images/accessories/acc-noir-slate-plumeria.jpg",
        color: "Matte Noir Black & Slate Grey",
        colorCode: "#37474F",
        fabric: "Soft-Touch Matte Finish Acrylic",
        description: "Minimalist tropical plumeria claw clips featuring a classic 5-petal tropical bloom in monochrome matte black and cool slate grey tones.",
        features: ["Classic Matte 5-Petal Plumeria", "Minimalist Monochrome Colorway", "Firm Snag-Free Grip Teeth", "Set of 4 Plumeria Claws (Mixed Sizes)"]
    },
    {
        id: "acc-vibrant-matte-plumeria",
        name: "Vibrant Matte Plumeria Blossom Claws",
        category: "accessories",
        price: "₹80",
        originalPrice: "₹120",
        tag: "Tropical Splash",
        image: "/images/accessories/acc-vibrant-matte-plumeria.jpg",
        color: "Vibrant Multi-Color Tones",
        colorCode: "#FF8A80",
        fabric: "Soft-Touch Matte Finish Premium Acrylic",
        description: "Beautifully colored 5-petal plumeria blossom claw clips in a collection of rich tones, perfect for adding a tropical vibe to hairstyles.",
        features: ["Rich Tropical 5-Petal Flower Shape", "Non-Slip Velvet Matte Coating", "Vibrant Palette: Coral, Emerald, Indigo & Cocoa", "Set of 7 Colorful Claws"]
    },
    {
        id: "acc-sparkling-jelly-heart",
        name: "Sparkling Jelly Heart Bow Clips",
        category: "accessories",
        price: "₹60",
        originalPrice: "₹99",
        tag: "Sparkly Sweet",
        image: "/images/accessories/acc-sparkling-jelly-heart.jpg",
        color: "Pastel Glitter Jelly Tones",
        colorCode: "#F8BBD0",
        fabric: "Jelly Acrylic with Embedded Glitter",
        description: "Sweet dual heart hair clips on cards featuring a smooth pastel heart paired with a matching heart filled with sparkling holographic glitter.",
        features: ["Sweet Double-Heart Carded Design", "Embedded Hexagonal Sparkle Glitter", "Smooth Translucent Pastel Jelly Bottoms", "Firm Double-Claw Pinch Fit"]
    }
];

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
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [dynamicProducts, setDynamicProducts] = useState<Product[]>(products);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
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
        setSelectedSizes([]);
    }, [selectedProduct]);

    useEffect(() => {
        if (!GOOGLE_SHEET_ID || GOOGLE_SHEET_ID === "YOUR_SPREADSHEET_ID_HERE") {
            return;
        }

        const fetchGoogleSheetData = async () => {
            try {
                let csvUrl = "";
                if (GOOGLE_SHEET_ID.startsWith("http://") || GOOGLE_SHEET_ID.startsWith("https://")) {
                    csvUrl = GOOGLE_SHEET_ID;
                } else {
                    csvUrl = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv`;
                }
                const response = await fetch(csvUrl);
                if (!response.ok) throw new Error("Failed to fetch Google Sheet");
                const csvText = await response.text();

                const lines = csvText.split(/\r?\n/);
                if (lines.length < 2) return;

                const rows = lines.map(line => parseCSVLine(line));
                const headers = rows[0].map(h => h.toLowerCase());

                const idIdx = headers.indexOf("id");
                const nameIdx = headers.indexOf("name");
                const priceIdx = headers.indexOf("price");
                const originalPriceIdx = headers.indexOf("originalprice");
                const imageIdx = headers.indexOf("image");
                const descriptionIdx = headers.indexOf("description");
                const featuresIdx = headers.indexOf("features");

                if (idIdx === -1) return;

                const updatedProducts = products.map(prod => {
                    const matchingRow = rows.find(r => r[idIdx] === prod.id);
                    if (matchingRow) {
                        return {
                            ...prod,
                            name: nameIdx !== -1 && matchingRow[nameIdx] ? matchingRow[nameIdx] : prod.name,
                            price: priceIdx !== -1 && matchingRow[priceIdx] ? matchingRow[priceIdx] : prod.price,
                            originalPrice: originalPriceIdx !== -1 && matchingRow[originalPriceIdx] ? matchingRow[originalPriceIdx] : prod.originalPrice,
                            image: imageIdx !== -1 && matchingRow[imageIdx] ? convertGoogleDriveLink(matchingRow[imageIdx]) : prod.image,
                            description: descriptionIdx !== -1 && matchingRow[descriptionIdx] ? matchingRow[descriptionIdx] : prod.description,
                            features: featuresIdx !== -1 && matchingRow[featuresIdx]
                                ? matchingRow[featuresIdx].split(';').map(f => f.trim()).filter(Boolean)
                                : prod.features,
                        };
                    }
                    return prod;
                });

                setDynamicProducts(updatedProducts);
            } catch (error) {
                console.error("Error loading Google Sheet prices:", error);
            }
        };

        fetchGoogleSheetData();
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
                                    <span className="category-pill-micro">
                                        {getCategoryBadgeLabel(product.category)}
                                    </span>
                                </div>

                                <h3 className="card-product-title" onClick={() => setSelectedProduct(product)}>
                                    {product.name}
                                </h3>

                                <p className="card-fabric-tag">{product.fabric}</p>

                                {/* Natural Pair Suggestion */}
                                {product.matchingAccessory && (
                                    <div className="card-pairing-hint" onClick={() => {
                                        const match = dynamicProducts.find(p => p.name === product.matchingAccessory?.name);
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

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (product.category !== 'accessories') {
                                                setSelectedProduct(product);
                                                triggerToast(`Please select a size for the ${product.name}`);
                                            } else {
                                                const text = `Hello House of Nihara, I would like to order the ${product.name} (${product.price}).`;
                                                const waUrl = `https://wa.me/919342629717?text=${encodeURIComponent(text)}`;
                                                window.open(waUrl, '_blank', 'noopener,noreferrer');
                                            }
                                        }}
                                        className="card-order-btn"
                                        title="Order via WhatsApp"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        <span>Order</span>
                                    </button>
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

                                {/* Dress Sizes Option Checkboxes */}
                                {selectedProduct.category !== 'accessories' && (
                                    <div className="modal-size-selection">
                                        <h4>Select Sizes <span className="required-star">*</span></h4>
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
                                                const match = dynamicProducts.find(p => p.name === selectedProduct.matchingAccessory?.name);
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
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (selectedProduct.category !== 'accessories' && selectedSizes.length === 0) {
                                                triggerToast("Please select at least one size before placing your order.");
                                                return;
                                            }
                                            
                                            let text = `Hi House of Nihara, I'm interested in ordering the ${selectedProduct.name} (${selectedProduct.price})`;
                                            if (selectedProduct.category !== 'accessories') {
                                                text = `Hi House of Nihara, I'm interested in ordering the ${selectedProduct.name} (${selectedProduct.price}) in size(s): ${selectedSizes.join(', ')}.`;
                                            }
                                            
                                            const waUrl = `https://wa.me/919342629717?text=${encodeURIComponent(text)}`;
                                            window.open(waUrl, '_blank', 'noopener,noreferrer');
                                        }}
                                        className="modal-wa-btn"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        <span>Order on WhatsApp</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
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
