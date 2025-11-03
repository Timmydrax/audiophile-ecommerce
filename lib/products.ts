// src/lib/products.ts
import { Product } from "./types";

export const products: Product[] = [
  // HEADPHONES
  {
    id: "1",
    slug: "xx99-mark-ii",
    name: "XX99 Mark II Headphones",
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    categoryImage:
      "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
    category: "headphones",
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio...",
    features: "Featuring a genuine leather head strap and premium earcups...",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: {
      first:
        "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
      second:
        "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
      third:
        "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
    },
  },
  {
    id: "2",
    slug: "xx99-mark-i",
    name: "XX99 Mark I Headphones",
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    categoryImage:
      "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
    category: "headphones",
    new: false,
    price: 1750,
    description: "As the gold standard for headphones...",
    features: "As the headphones all others are measured against...",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: {
      first:
        "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
      second:
        "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
      third:
        "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
    },
  },
  {
    id: "3",
    slug: "xx59",
    name: "XX59 Headphones",
    image: "/assets/product-xx59-headphones/desktop/image-product.jpg",
    categoryImage:
      "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    category: "headphones",
    new: false,
    price: 899,
    description: "Enjoy your audio almost anywhere...",
    features: "These headphones have been created from durable...",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: {
      first: "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
      second: "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
      third: "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    },
  },

  // SPEAKERS
  {
    id: "4",
    slug: "zx9",
    name: "ZX9 Speaker",
    image: "/assets/product-zx9-speaker/desktop/image-product.jpg",
    categoryImage:
      "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    category: "speakers",
    new: true,
    price: 4500,
    description: "Upgrade your sound system with the all new ZX9...",
    features: "Connect via Bluetooth or nearly any wired source...",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 10m audio cable" },
      { quantity: 1, item: "10m optical cable" },
    ],
    gallery: {
      first: "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
      second: "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
      third: "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
    },
  },
  {
    id: "5",
    slug: "zx7",
    name: "ZX7 Speaker",
    image: "/assets/product-zx7-speaker/desktop/image-product.jpg",
    categoryImage:
      "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    category: "speakers",
    new: false,
    price: 3500,
    description: "Stream high quality sound wirelessly with minimal loss...",
    features: "Reap the advantages of a flat diaphragm tweeter cone...",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 7.5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" },
    ],
    gallery: {
      first: "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
      second: "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
      third: "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
    },
  },

  // EARPHONES
  {
    id: "6",
    slug: "yx1",
    name: "YX1 Wireless Earphones",
    image: "/assets/product-yx1-earphones/desktop/image-product.jpg",
    categoryImage:
      "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    category: "earphones",
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers...",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology...",
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" },
    ],
    gallery: {
      first: "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
      second: "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
      third: "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
    },
  },
];

// Helper functions
export function getProductsByCategory(
  category: "headphones" | "speakers" | "earphones"
) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
