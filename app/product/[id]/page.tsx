import { Metadata } from 'next';
import { products } from '@/lib/products';
import ProductDetailClient from '@/components/ProductDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) {
    return {
      title: "Product Not Found - House of Nihara",
      description: "The requested couture creation could not be found in our atelier collection."
    };
  }
  return {
    title: `${product.name} - House of Nihara`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  return <ProductDetailClient productId={id} />;
}
