"use client";

import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-14 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        {/* Logo + Nav */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center mb-8 border-b border-white/10 pb-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            audiophile
          </Link>
          <ul className="flex flex-col md:flex-row gap-6 mt-8 md:mt-0 uppercase tracking-widest text-sm font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/headphones">Headphones</Link>
            </li>
            <li>
              <Link href="/speakers">Speakers</Link>
            </li>
            <li>
              <Link href="/earphones">Earphones</Link>
            </li>
          </ul>
        </div>

        {/* About Text */}
        <p className="text-white/60 leading-7 max-w-2xl mb-10">
          Audiophile is an all-in-one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility — we’re open 7 days a week.
        </p>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Audiophile. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
