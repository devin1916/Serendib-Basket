import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageType, CartItem, DeliveryAddress } from '../types';
import OrderReceipt from '../components/OrderReceipt';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface OrderReceiptPageProps {
  onPageChange: (page: PageType) => void;
  orderData: {
    orderId: string;
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
    deliveryAddress: DeliveryAddress;
    paymentMethod: string;
    orderDate: string;
  } | null;
}

const OrderReceiptPage: React.FC<OrderReceiptPageProps> = ({ onPageChange, orderData }) => {
  if (!orderData) {
    onPageChange('home');
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('order-receipt');
    if (!element) return;

    try {
      // Hide the action buttons temporarily
      const buttons = element.querySelector('.print\\:hidden') as HTMLElement;
      if (buttons) buttons.style.display = 'none';

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Show the buttons again
      if (buttons) buttons.style.display = 'block';

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Serendib-Basket-Receipt-${orderData.orderId}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8 print:hidden">
          <button
            onClick={() => onPageChange('home')}
            className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Order Receipt</h1>
            <p className="text-gray-600">Order #{orderData.orderId}</p>
          </div>
        </div>

        {/* Receipt */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <OrderReceipt
            orderId={orderData.orderId}
            items={orderData.items}
            subtotal={orderData.subtotal}
            deliveryFee={orderData.deliveryFee}
            total={orderData.total}
            deliveryAddress={orderData.deliveryAddress}
            paymentMethod={orderData.paymentMethod}
            orderDate={orderData.orderDate}
            onPrint={handlePrint}
            onDownloadPDF={handleDownloadPDF}
          />
        </div>
      </div>

      {/* Print Styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #order-receipt, #order-receipt * {
              visibility: visible;
            }
            #order-receipt {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .print\\:hidden {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OrderReceiptPage;