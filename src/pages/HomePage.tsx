import React from 'react';
import { Search, Truck, Shield, Clock, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}) => {
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Items' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fresh Groceries Delivered to Your Door
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Premium quality Sri Lankan groceries with island-wide delivery. 
              Experience the convenience of shopping from home.
            </p>
            

            <div className="max-w-md mx-auto relative mb-8">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-4 pl-14 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <Search className="absolute left-5 top-4.5 w-6 h-6 text-gray-500" />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4">
                <Truck className="w-8 h-8" />
                <div className="text-left">
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-emerald-100">Orders above ₨2000</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4">
                <Clock className="w-8 h-8" />
                <div className="text-left">
                  <h3 className="font-semibold">Same Day Delivery</h3>
                  <p className="text-sm text-emerald-100">Order before 2 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4">
                <Shield className="w-8 h-8" />
                <div className="text-left">
                  <h3 className="font-semibold">Quality Guarantee</h3>
                  <p className="text-sm text-emerald-100">100% fresh products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium Sri Lankan groceries, 
            sourced directly from local farmers and trusted suppliers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'All Items' ? 'All Products' : selectedCategory}
          </h3>
          <p className="text-gray-600">{filteredProducts.length} items found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-gray-600">Join thousands of satisfied customers across Sri Lanka</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Fernando',
                location: 'Colombo',
                rating: 5,
                comment: 'Amazing quality products and super fast delivery! The vegetables are always fresh.'
              },
              {
                name: 'Kasun Silva',
                location: 'Kandy',
                rating: 5,
                comment: 'Best grocery delivery service in Sri Lanka. Great prices and excellent customer service.'
              },
              {
                name: 'Nimal Perera',
                location: 'Galle',
                rating: 5,
                comment: 'Love the variety of local products. Finally found authentic Sri Lankan spices online!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;