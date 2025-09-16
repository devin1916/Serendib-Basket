import React from 'react';
import { Download, Printer, CheckCircle, Package, Calendar, MapPin, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface OrderReceiptProps {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  deliveryAddress: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
  orderDate: string;
  onPrint: () => void;
  onDownloadPDF: () => void;
}

const OrderReceipt: React.FC<OrderReceiptProps> = ({
  orderId,
  items,
  subtotal,
  deliveryFee,
  total,
  deliveryAddress,
  paymentMethod,
  orderDate,
  onPrint,
  onDownloadPDF
}) => {
  return (
    <div id="order-receipt" className="bg-white">
      {/* Receipt Header */}
      <div className="text-center border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center">
            <Package className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Serendib Basket</h1>
        </div>
        <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
          <CheckCircle className="w-6 h-6" />
          <span className="text-lg font-semibold">Order Confirmed</span>
        </div>
        <p className="text-gray-600">Thank you for your order!</p>
      </div>

      {/* Order Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Order Information
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-medium">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order Date:</span>
              <span className="font-medium">{orderDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Delivery Address
          </h3>
          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-900">{deliveryAddress.fullName}</p>
            <p>{deliveryAddress.phone}</p>
            <p>{deliveryAddress.address}</p>
            <p>{deliveryAddress.city} {deliveryAddress.postalCode}</p>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Method
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">{paymentMethod === 'bank-transfer' ? 'Bank Transfer' : paymentMethod}</p>
          {paymentMethod === 'bank-transfer' && (
            <div className="mt-3 text-sm text-gray-600">
              <p><strong>Bank:</strong> Commercial Bank of Ceylon</p>
              <p><strong>Account:</strong> Serendib Basket (Pvt) Ltd</p>
              <p><strong>Account Number:</strong> 8001234567</p>
              <p><strong>Reference:</strong> {deliveryAddress.phone}</p>
            </div>
          )}
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Item</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-900">Qty</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Price</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.unit}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">{item.quantity}</td>
                  <td className="px-4 py-3 text-right">₨{item.price.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right font-medium">₨{(item.price * item.quantity).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t border-gray-200 pt-6">
        <div className="max-w-sm ml-auto">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">₨{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee:</span>
              <span className="font-medium">
                {deliveryFee === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `₨${deliveryFee.toLocaleString()}`
                )}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-emerald-600">₨{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
        <p className="mb-2">Thank you for shopping with Serendib Basket!</p>
        <p>For any queries, contact us at +94 11 234 5678 or hello@serendibbasket.lk</p>
        <div className="mt-4 flex items-center justify-center space-x-4 text-xs">
          <span>123 Galle Road, Colombo 03, Sri Lanka</span>
          <span>•</span>
          <span>www.serendibbasket.lk</span>
        </div>
      </div>

      {/* Action Buttons - Only show when not printing */}
      <div className="mt-8 flex justify-center space-x-4 print:hidden">
        <button
          onClick={onPrint}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Printer className="w-5 h-5" />
          <span>Print Receipt</span>
        </button>
        <button
          onClick={onDownloadPDF}
          className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default OrderReceipt;