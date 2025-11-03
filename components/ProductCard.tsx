// src/components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={product.categoryImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        {product.new && (
          <p className="text-orange-500 text-sm font-bold tracking-widest">
            NEW PRODUCT
          </p>
        )}

        <h2 className="text-4xl font-bold uppercase">{product.name}</h2>

        <p className="text-gray-600">{product.description}</p>

        <Link href={`/${product.category}/${product.slug}`}>
          <Button className="bg-orange-500 hover:bg-orange-600">
            SEE PRODUCT
          </Button>
        </Link>
      </div>
    </div>
  );
}
