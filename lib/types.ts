// src/lib/types.ts
export interface Product {
  id: string;
  slug: string;                    // URL-friendly name (e.g., "xx99-mark-ii")
  name: string;                    // Display name
  image: string;
  categoryImage: string;           // Image for category listing
  category: 'headphones' | 'speakers' | 'earphones';
  new: boolean;                    // Is this a new product?
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: string;
    second: string;
    third: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: 'e-money' | 'cash-on-delivery';
}

export interface Order {
  orderId: string;
  customer: CheckoutForm;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  createdAt: number;
  status: 'pending' | 'completed';
}