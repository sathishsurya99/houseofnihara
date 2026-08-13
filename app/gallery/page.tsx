import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lookbook & Gallery | House of Nihara",
    description: "View the House of Nihara lookbook. Featuring handcrafted lotus kurtis, festive sets, and signature hair accessories.",
};

const lookbookItems = [
    {
        title: "Terracotta & Sage Geometric Flare Co-ord",
        category: "Studio Collection",
        subtitle: "Modernist geometric capsule motifs on flared silhouette with tailored trousers",
        image: "/images/dresses/dress-geometric-coord.jpg"
    },
    {
        title: "Seafoam Mint Scallop Floral Kurti",
        category: "Designer Couture",
        subtitle: "Hand-painted pink poppies on seafoam silk with sheer puff sleeves",
        image: "/images/dresses/dress-mint-floral-scallop.jpg"
    },
    {
        title: "Ruby Crimson Botanical Co-ord",
        category: "Festive Set",
        subtitle: "Notched lapel kurti with intricate botanical block prints & trousers",
        image: "/images/dresses/dress-ruby-crimson-coord.jpg"
    },
    {
        title: "Cerulean Blue & Canary Temple Panel",
        category: "Artisanal Weave",
        subtitle: "Royal cyan with woven canary yellow temple brocade insert",
        image: "/images/dresses/dress-cyan-yellow-panel.jpg"
    },
    {
        title: "Lilac Bloom Hand-Painted Silk Kurti",
        category: "Designer Couture",
        subtitle: "Pastel lilac raw silk with hand-painted flora and golden zari border",
        image: "/images/dresses/dress-lavender-floral-silk.jpg"
    },
    {
        title: "Rani Checkered Lime Cape Kurti",
        category: "Statement Couture",
        subtitle: "Grid checkered silk with peaked chartreuse lime cape collar",
        image: "/images/dresses/dress-rani-green-collar.jpg"
    },
    {
        title: "Rani Lotus Pichwai Kurti",
        category: "Signature Couture",
        subtitle: "Handcrafted Pichwai lotus blooms on fuchsia raw silk",
        image: "/images/dresses/dress-rani-lotus.jpg"
    },
    {
        title: "Amethyst Bloom Silk Set",
        category: "Signature Couture",
        subtitle: "Royal purple silhouette with floating lotus petals",
        image: "/images/dresses/dress-purple-lotus.jpg"
    },
    {
        title: "Sunlight Meadow Floral Co-ord",
        category: "Festive Set",
        subtitle: "Buttercup floral printed kurti with tailored pants",
        image: "/images/dresses/dress-yellow-floral.jpg"
    },
    {
        title: "Cerulean Emerald Panel Kurti",
        category: "Bespoke",
        subtitle: "Emerald green with woven floral brocade central insert",
        image: "/images/dresses/dress-emerald-fusion.jpg"
    },
    {
        title: "Cerulean Aqua Lotus Drapes",
        category: "Signature Couture",
        subtitle: "Aqua cyan silk accented with hand-painted Pichwai flora",
        image: "/images/dresses/dress-cyan-lotus.jpg"
    },
    {
        title: "Fuchsia Ikat Heritage Co-ord",
        category: "Festive Set",
        subtitle: "Collared button-down magenta Ikat silhouette",
        image: "/images/dresses/dress-ikat-pink.jpg"
    },
    // Salwar Suit Sets
    {
        title: "Mint Sage English Floral Salwar",
        category: "Salwar Couture",
        subtitle: "Mint green English rose garden silk with zari-striped rani pink bottom",
        image: "/images/salwar/salwar-sage-fuchsia-floral.jpg"
    },
    {
        title: "Earthy Flora & Fuchsia Salwar Set",
        category: "Salwar Couture",
        subtitle: "Beige botanical printed silk with zari-striped fuchsia bottom",
        image: "/images/salwar/salwar-beige-fuchsia-floral.jpg"
    },
    {
        title: "Vintage Plum Rose & Slate Blue Salwar",
        category: "Salwar Couture",
        subtitle: "Deep wine floral silk with zari-woven slate indigo bottom",
        image: "/images/salwar/salwar-plum-slate-rose.jpg"
    },
    {
        title: "Sunburst Peach & Royal Violet Salwar",
        category: "Salwar Couture",
        subtitle: "Peach coral wild floral garden with contrast purple zari bottom",
        image: "/images/salwar/salwar-peach-violet-floral.jpg"
    },
    {
        title: "Teal Aqua Botanical & Lime Salwar",
        category: "Salwar Couture",
        subtitle: "Deep teal floral with chartreuse lime zari pinstripe bottom",
        image: "/images/salwar/salwar-teal-lime-botanical.jpg"
    },
    {
        title: "Dusty Lilac Peony & Ruby Salwar",
        category: "Salwar Couture",
        subtitle: "Pastel lilac bouquet with rich ruby magenta zari bottom",
        image: "/images/salwar/salwar-lilac-magenta-peony.jpg"
    },
    // Hair accessories
    {
        title: "Satin Ribbon Tulip Bow Clips",
        category: "Handmade Floral",
        subtitle: "Pastel organza bow clips with cascading twin satin tulips",
        image: "/images/accessories/acc-satin-tulip-bow-clips.jpg"
    },
    {
        title: "Plush Velvet Fur Tulip Claws",
        category: "Plush Hair Adornment",
        subtitle: "Cozy faux fur wrapped claws adorned with satin tulip buds",
        image: "/images/accessories/acc-plush-tulip-claw-clips.jpg"
    },
    {
        title: "Pastel Polka Bow & Daisy Mini Claws",
        category: "Hair Adornment",
        subtitle: "Embossed polka dot bows with miniature daisy flower clips",
        image: "/images/accessories/acc-polka-bow-flower-claws.jpg"
    },
    {
        title: "Crystal Rhinestone Banana Claws",
        category: "Luxury Crystal",
        subtitle: "Faceted crystal gemstone curved banana combs for radiant updos",
        image: "/images/accessories/acc-rhinestone-crystal-comb-claws.jpg"
    },
    {
        title: "Ikat Tribal Side Claws",
        category: "Hair Adornment",
        subtitle: "Authentic geometric chevron & Ikat print hair claws",
        image: "/images/accessories/acc-ikat-tribal-clips.jpg"
    },
    {
        title: "CocoBee Curved Banana Combs",
        category: "Hair Adornment",
        subtitle: "Ergonomic head-contour deep tooth banana clips",
        image: "/images/accessories/acc-cocobee-banana-combs.jpg"
    },
    {
        title: "Matte Velvet Plumeria Clips",
        category: "Hair Adornment",
        subtitle: "Soft-touch velvet matte finish 5-petal flower clips",
        image: "/images/accessories/acc-matte-velvet-plumeria.jpg"
    },
    {
        title: "Starfish Jelly Hair Claws",
        category: "Hair Adornment",
        subtitle: "Translucent jewel-tone sculpted blossom claw clips",
        image: "/images/accessories/acc-starfish-jelly-claws.jpg"
    },
    {
        title: "Geometric Open Rectangle Claws",
        category: "Hair Adornment",
        subtitle: "Minimalist candy pastel cutout hair claws",
        image: "/images/accessories/acc-rect-frame-claws.jpg"
    },
    {
        title: "Crown Crest Palace Claws",
        category: "Hair Adornment",
        subtitle: "Intricately contoured palace arch hair claws in royal hues",
        image: "/images/accessories/acc-crown-crest-claws.jpg"
    },
    {
        title: "Circular Donut Ring Claws",
        category: "Hair Adornment",
        subtitle: "Snag-free round ring clips for effortless chic buns",
        image: "/images/accessories/acc-donut-ring-claws.jpg"
    },
    {
        title: "Vibrant Triangle Cutout Claws",
        category: "Hair Adornment",
        subtitle: "Warm sunset tone triangular open-frame clips",
        image: "/images/accessories/acc-triangle-matte-claws.jpg"
    },
    {
        title: "Satin Strawberry Blossom Clips",
        category: "Hair Adornment",
        subtitle: "Handcrafted satin petals with center pearl detail",
        image: "/images/accessories/acc-satin-flower-clips.jpg"
    },
    {
        title: "Scalloped Seashell Glossy Claws",
        category: "Hair Adornment",
        subtitle: "High-gloss vintage clam shell hair claw clips",
        image: "/images/accessories/acc-seashell-claws.jpg"
    },
    {
        title: "Glossy Petal Butterfly Claws",
        category: "Hair Adornment",
        subtitle: "Sculpted minimalist resin butterfly clips",
        image: "/images/accessories/acc-butterfly-petal-claws.jpg"
    },
    {
        title: "Double Plumeria Blossom Clips",
        category: "Hair Adornment",
        subtitle: "Vibrant gradient tropical floral hair clips",
        image: "/images/accessories/acc-plumeria-blossom-clips.jpg"
    },
    {
        title: "Shimmer Glitter Geometric Claws",
        category: "Hair Adornment",
        subtitle: "Sparkling crystal infused triangle hair claws",
        image: "/images/accessories/acc-glitter-triangle-claws.jpg"
    }
];

export default function Gallery() {
    return (
        <div style={{ paddingBottom: '6rem' }}>
            <div className="editorial-page-header">
                <span className="section-badge">EDITORIAL LOOKBOOK</span>
                <h1 className="editorial-page-title">The Elegance Edit</h1>
                <p className="editorial-page-subtitle">
                    Immerse yourself in our curated visual gallery showcasing artisanal couture, handcrafted lotus motifs, and authentic signature hair adornments.
                </p>
            </div>

            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {lookbookItems.map((item, idx) => (
                        <div 
                            key={idx} 
                            style={{ 
                                position: 'relative', 
                                borderRadius: '14px', 
                                overflow: 'hidden', 
                                boxShadow: 'var(--shadow-md)', 
                                background: '#fff',
                                border: '1px solid var(--color-border)',
                                transition: 'all 0.35s ease'
                            }}
                        >
                            <div style={{ height: '380px', overflow: 'hidden', background: '#f7f4ef' }}>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    loading="lazy" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
                                />
                            </div>
                            <div style={{ padding: '1.4rem 1.6rem', background: '#fff' }}>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-rose)', fontWeight: 700 }}>
                                    {item.category}
                                </span>
                                <h3 style={{ fontSize: '1.2rem', margin: '0.3rem 0 0.2rem', color: 'var(--color-black)' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
