import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSummary from './components/CartSummary';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import OffersPage from './pages/OffersPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderReceiptPage from './pages/OrderReceiptPage';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  const handlePageChange = (page: PageType, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setOrderData(data);
    }
    setIsMenuOpen(false);
    // Reset search when changing pages
    if (page !== 'home' && page !== 'categories') {
      setSearchQuery('');
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );
      case 'categories':
        return (
          <CategoriesPage
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );
      case 'offers':
        return (
          <OffersPage 
            onPageChange={handlePageChange}
            onCategoryChange={setSelectedCategory}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'cart':
        return <CartPage onPageChange={handlePageChange} />;
      case 'checkout':
        return <CheckoutPage onPageChange={handlePageChange} />;
      case 'receipt':
        return <OrderReceiptPage onPageChange={handlePageChange} orderData={orderData} />;
      case 'login':
        return <LoginPage onPageChange={handlePageChange} />;
      case 'register':
        return <RegisterPage onPageChange={handlePageChange} />;
      default:
        return (
          <HomePage
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          {/* Only show header and footer for main pages, not login/register */}
          {currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'receipt' && (
            <Header
              currentPage={currentPage}
              onPageChange={handlePageChange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              isMenuOpen={isMenuOpen}
              onMenuToggle={handleMenuToggle}
            />
          )}

          <main>
            {renderPage()}
          </main>

          {/* Only show cart summary and footer for main pages */}
          {currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'cart' && currentPage !== 'checkout' && currentPage !== 'receipt' && (
            <>
              <CartSummary onPageChange={handlePageChange} />
              <Footer />
            </>
          )}

          {/* Show footer for cart and checkout pages */}
          {(currentPage === 'cart' || currentPage === 'checkout' || currentPage === 'receipt') && (
            <Footer />
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;