import React from 'react';
import { useCart } from '../context/CartContext';
import { PageType } from '../types';

interface CartSummaryProps {
  onPageChange: (page: PageType) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onPageChange }) => {
  const { cart, getTotalItems, getTotalPrice } = useCart();

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{getTotalItems()} items</p>
          <p className="text-lg font-bold text-gray-900">₨{getTotalPrice().toLocaleString()}</p>
        </div>
        <button 
          onClick={() => onPageChange('cart')}
          className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
        >
          View Cart & Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;