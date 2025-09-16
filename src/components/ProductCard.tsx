import React from 'react';
import { Star, Heart, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            SAVE ₨{product.originalPrice - product.price}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <span className="ml-auto text-xs text-emerald-600 font-medium">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-3">{product.unit}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₨{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₨{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
        
        {cartItem ? (
          <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-2">
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
              className="p-1 rounded-full hover:bg-emerald-200 transition-colors"
            >
              <Minus className="w-4 h-4 text-emerald-600" />
            </button>
            <span className="font-semibold text-emerald-800">{cartItem.quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
              className="p-1 rounded-full hover:bg-emerald-200 transition-colors"
            >
              <Plus className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;