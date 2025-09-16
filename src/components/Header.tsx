import React from 'react';
import { ShoppingCart, Search, User, Menu, X, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
  searchQuery,
  onSearchChange,
  isMenuOpen,
  onMenuToggle
}) => {
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', page: 'home' as PageType },
    { name: 'Categories', page: 'categories' as PageType },
    { name: 'Offers', page: 'offers' as PageType },
    { name: 'About', page: 'about' as PageType }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Serendib Basket</h1>
              <p className="text-xs text-emerald-600 font-medium">Fresh • Fast • Convenient</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => onPageChange(item.page)}
                className={`font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - only show on home and categories pages */}
            {(currentPage === 'home' || currentPage === 'categories') && (
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            )}

            {/* User Menu */}
            <div className="relative">
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="hidden sm:block text-sm text-gray-700">
                  </span>
                  <button
                    onClick={logout}
                    className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                    title="Logout"
                  >
                    <User className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => onPageChange('login')}
                  className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  title="Login"
                >
                  <User className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={onMenuToggle}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onPageChange(item.page);
                  onMenuToggle();
                }}
                className={`block w-full text-left py-2 font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Search */}
            {(currentPage === 'home' || currentPage === 'categories') && (
              <div className="pt-3 border-t border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;