// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          audiophile
        </Link>

        <div className="flex gap-8">
          <Link href="/" className="hover:text-orange-500 transition">
            HOME
          </Link>
          <Link href="/headphones" className="hover:text-orange-500 transition">
            HEADPHONES
          </Link>
          <Link href="/speakers" className="hover:text-orange-500 transition">
            SPEAKERS
          </Link>
          <Link href="/earphones" className="hover:text-orange-500 transition">
            EARPHONES
          </Link>
        </div>

        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
