import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "House of Nihara - Handmade & Unique Collections",
  description: "House of Nihara offers premium handmade products and unique fashion collections. Shop now for stylish and elegant designs.",
  icons: {
    icon: [
      { url: '/images/logo-circle.png?v=3', type: 'image/png' },
      { url: '/favicon.ico?v=3', sizes: 'any' },
    ],
    shortcut: '/images/logo-circle.png?v=3',
    apple: '/images/logo-circle.png?v=3',
  },
  verification: {
    google: "XWHlBkgXblCZGA2XwO7VOvddLFz0swYzl7t2YXx4jzM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/images/logo-circle.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/images/logo-circle.png?v=3" />
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
