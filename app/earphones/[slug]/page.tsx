// src/app/headphones/[slug]/page.tsx
// (Same pattern for speakers/[slug] and earphones/[slug])

"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Product Overview */}
      <div className="grid md:grid-cols-2 gap-16 mb-32">
        <div className="relative h-[560px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {product.new && (
            <p className="text-orange-500 text-sm font-bold tracking-widest">
              NEW PRODUCT
            </p>
          )}

          <h1 className="text-5xl font-bold uppercase">{product.name}</h1>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <p className="text-3xl font-bold">
            $ {product.price.toLocaleString()}
          </p>

          <div className="flex gap-4">
            <div className="flex items-center bg-gray-100">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:text-orange-500"
              >
                -
              </button>
              <span className="px-6 py-2 font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:text-orange-500"
              >
                +
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-16 mb-32">
        <div>
          <h2 className="text-3xl font-bold uppercase mb-8">Features</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {product.features}
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold uppercase mb-8">In the Box</h2>
          <ul className="space-y-2">
            {product.includes.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-orange-500 font-bold">
                  {item.quantity}x
                </span>
                <span className="text-gray-600">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 gap-4 mb-32">
        <Image
          src={product.gallery.first}
          alt="Gallery 1"
          width={445}
          height={280}
          className="rounded-lg"
        />
        <Image
          src={product.gallery.second}
          alt="Gallery 2"
          width={445}
          height={280}
          className="rounded-lg row-span-2"
        />
        <Image
          src={product.gallery.third}
          alt="Gallery 3"
          width={445}
          height={280}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
