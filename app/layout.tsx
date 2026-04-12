import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "House of Nihara | Elegance in Every Stitch",
  description: "Discover premium handcrafted women's fashion, evening gowns, and party wear at House of Nihara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollAnimation />
      </body>
    </html>
  );
}
