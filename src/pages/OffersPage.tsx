import React from 'react';
import { Calendar, Tag, ShoppingBag, Clock } from 'lucide-react';
import { offers } from '../data/offers';
import { PageType } from '../types';

interface OffersPageProps {
  onPageChange: (page: PageType) => void;
  onCategoryChange: (category: string) => void;
}

const OffersPage: React.FC<OffersPageProps> = ({ onPageChange, onCategoryChange }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isOfferExpiring = (dateString: string) => {
    const offerDate = new Date(dateString);
    const today = new Date();
    const diffTime = offerDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 3;
  };

  const handleShopNow = (offer: typeof offers[0]) => {
    if (offer.category && offer.category !== 'All Items') {
      onCategoryChange(offer.category);
      onPageChange('categories');
    } else {
      onPageChange('home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Don't miss out on these amazing deals! Save big on your favorite Sri Lankan groceries.
          </p>
          <div className="flex items-center justify-center space-x-6 text-orange-100">
            <div className="flex items-center space-x-2">
              <Tag className="w-5 h-5" />
              <span>Up to 40% Off</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Limited Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Offer Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {typeof offer.discount === 'number' && offer.discount > 100 
                      ? `₨${offer.discount} OFF`
                      : `${offer.discount}% OFF`
                    }
                  </div>
                </div>
                {isOfferExpiring(offer.validUntil) && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      ENDING SOON
                    </div>
                  </div>
                )}
              </div>

              {/* Offer Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {offer.title}
                  </h3>
                  {offer.category && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      {offer.category}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {offer.description}
                </p>

                {/* Offer Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Valid until {formatDate(offer.validUntil)}</span>
                  </div>
                  {offer.minPurchase && (
                    <div className="flex items-center text-sm text-gray-600">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      <span>Minimum purchase: ₨{offer.minPurchase.toLocaleString()}</span>
                    </div>
                  )}
                  {offer.code && (
                    <div className="flex items-center text-sm">
                      <Tag className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-green-600 font-medium">Code: {offer.code}</span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => handleShopNow(offer)}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all font-medium transform hover:scale-105"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* How to Use Offers */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use These Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to save money on your grocery shopping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Offer</h3>
              <p className="text-gray-600 text-sm">
                Browse through our amazing deals and select the one that suits your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add to Cart</h3>
              <p className="text-gray-600 text-sm">
                Add the qualifying products to your cart to meet the minimum purchase requirement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Code</h3>
              <p className="text-gray-600 text-sm">
                Enter the offer code at checkout to apply the discount to your order
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoy Savings</h3>
              <p className="text-gray-600 text-sm">
                Complete your purchase and enjoy great savings on premium groceries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Offer</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive deals, 
            new products, and special promotions.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-orange-600 text-white px-8 py-3 rounded-r-lg hover:bg-orange-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffersPage;