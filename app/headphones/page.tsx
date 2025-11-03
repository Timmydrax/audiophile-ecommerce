// src/app/headphones/page.tsx
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";

export default function HeadphonesPage() {
  const headphones = getProductsByCategory("headphones");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase">
        Headphones
      </h1>

      <div className="space-y-16">
        {headphones.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
