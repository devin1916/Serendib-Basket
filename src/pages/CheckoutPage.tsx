import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Building, Truck, MapPin, Phone, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PageType, DeliveryAddress } from '../types';

interface CheckoutPageProps {
  onPageChange: (page: PageType, orderData?: any) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onPageChange }) => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('bank-transfer');
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    fullName: user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : '',
    phone: user?.phone || '',
    address: '',
    city: user?.address || '',
    postalCode: '',
    instructions: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = getTotalPrice() >= 2000 ? 0 : 200;
  const finalTotal = getTotalPrice() + deliveryFee;

  const handleAddressChange = (field: keyof DeliveryAddress, value: string) => {
    setDeliveryAddress(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!deliveryAddress.fullName || !deliveryAddress.phone || !deliveryAddress.address || !deliveryAddress.city) {
      alert('Please fill in all required delivery information');
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate order ID
    const orderId = `SB${Date.now().toString().slice(-8)}`;
    const orderDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Prepare order data for receipt
    const orderData = {
      orderId,
      items: [...cart],
      subtotal: getTotalPrice(),
      deliveryFee,
      total: finalTotal,
      deliveryAddress,
      paymentMethod,
      orderDate
    };

    setIsProcessing(false);
    
    // Clear cart after successful order
    clearCart();
    
    // Navigate to receipt page with order data
    onPageChange('receipt', orderData);
  };

  if (cart.length === 0) {
    onPageChange('cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => onPageChange('cart')}
            className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600">Complete your order</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-emerald-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Delivery Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={deliveryAddress.fullName}
                      onChange={(e) => handleAddressChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Enter full name"
                    />
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={deliveryAddress.phone}
                      onChange={(e) => handleAddressChange('phone', e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="+94 77 123 4567"
                    />
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={deliveryAddress.address}
                      onChange={(e) => handleAddressChange('address', e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Street address, apartment, suite, etc."
                    />
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={deliveryAddress.city}
                    onChange={(e) => handleAddressChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Colombo, Kandy, Galle..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={deliveryAddress.postalCode}
                    onChange={(e) => handleAddressChange('postalCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="10100"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Instructions (Optional)
                  </label>
                  <textarea
                    value={deliveryAddress.instructions}
                    onChange={(e) => handleAddressChange('instructions', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Any special instructions for delivery..."
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="bank-transfer"
                      checked={paymentMethod === 'bank-transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Bank Transfer</p>
                        <p className="text-sm text-gray-600">Pay via online banking or mobile banking</p>
                      </div>
                    </div>
                  </label>
                  
                  {paymentMethod === 'bank-transfer' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Bank Details:</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Bank:</span> Commercial Bank of Ceylon</p>
                        <p><span className="font-medium">Account Name:</span> Serendib Basket (Pvt) Ltd</p>
                        <p><span className="font-medium">Account Number:</span> 8001234567</p>
                        <p><span className="font-medium">Branch:</span> Colombo 03</p>
                      </div>
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> Please use your phone number as the reference when making the transfer.
                          Your order will be confirmed once payment is received.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-lg p-4 opacity-50">
                  <label className="flex items-center space-x-3 cursor-not-allowed">
                    <input
                      type="radio"
                      name="payment"
                      value="cash-on-delivery"
                      disabled
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-500">Cash on Delivery</p>
                        <p className="text-sm text-gray-400">Coming soon</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-sm">₨{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                  <span className="font-semibold">₨{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₨${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-emerald-600">₨{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing Order...' : 'Place Order'}
              </button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By placing this order, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;