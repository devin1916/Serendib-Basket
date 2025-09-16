export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  unit: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  discount: number;
  image: string;
  validUntil: string;
  category?: string;
  minPurchase?: number;
  code?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  deliveryAddress: string;
  deliveryFee: number;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  createdAt: string;
}

export interface DeliveryAddress {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  instructions?: string;
}

export type PageType = 'home' | 'categories' | 'offers' | 'about' | 'login' | 'register' | 'cart' | 'checkout' | 'receipt';