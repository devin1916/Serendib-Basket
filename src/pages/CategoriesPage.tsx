import React from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

interface CategoriesPageProps {
  searchQuery: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({
  searchQuery,
  selectedCategory,
  onCategoryChange
}) => {
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Items' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryDescription = (category: string) => {
    const descriptions: { [key: string]: string } = {
      'All Items': 'Browse our complete collection of premium Sri Lankan groceries',
      'Fresh Produce': 'Farm-fresh vegetables and fruits delivered daily',
      'Rice & Grains': 'Premium quality rice varieties and nutritious grains',
      'Beverages': 'Refreshing drinks including Ceylon tea and natural juices',
      'Cooking Essentials': 'Essential ingredients for authentic Sri Lankan cooking',
      'Dairy Products': 'Fresh dairy products from trusted local suppliers',
      'Spices & Herbs': 'Authentic Sri Lankan spices and aromatic herbs'
    };
    return descriptions[category] || '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our wide range of premium Sri Lankan groceries organized by category
          </p>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-white py-8 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCategory}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {getCategoryDescription(selectedCategory)}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredProducts.length} Products Found
            </h3>
            {searchQuery && (
              <p className="text-gray-600 mt-1">
                Showing results for "{searchQuery}"
              </p>
            )}
          </div>
          
          {/* Sort Options */}
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name: A to Z</option>
            <option>Rating: High to Low</option>
          </select>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-gray-400">📦</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? `No products match your search "${searchQuery}" in ${selectedCategory}`
                : `No products available in ${selectedCategory} category`
              }
            </p>
            <button
              onClick={() => onCategoryChange('All Items')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Products
            </button>
          </div>
        )}
      </main>

      {/* Category Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Farm Fresh</h3>
              <p className="text-gray-600">
                Sourced directly from local farms ensuring maximum freshness and quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery available for orders placed before 2 PM
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with regular discounts and special offers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;