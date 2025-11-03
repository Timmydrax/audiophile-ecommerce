// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-black text-white px-6 py-6">
        <nav className="bg-black text-white">
          <div className="container mx-auto flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              audiophile
            </Link>

            {/* Desktop and Tablet */}
            <div className="hidden md:flex items-center uppercase text-sm gap-8">
              <Link href="/" className="hover:text-orange-500 transition">
                HOME
              </Link>
              <Link
                href="/headphones"
                className="hover:text-orange-500 transition"
              >
                HEADPHONES
              </Link>
              <Link
                href="/speakers"
                className="hover:text-orange-500 transition"
              >
                SPEAKERS
              </Link>
              <Link
                href="/earphones"
                className="hover:text-orange-500 transition"
              >
                EARPHONES
              </Link>
            </div>

            {/* Cart icon */}
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white text-black px-6 py-8 space-y-6">
            <ul className="uppercase tracking-widest text-sm space-y-4">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/headphones" onClick={() => setMenuOpen(false)}>
                  Headphones
                </Link>
              </li>
              <li>
                <Link href="/speakers" onClick={() => setMenuOpen(false)}>
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/earphones" onClick={() => setMenuOpen(false)}>
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
