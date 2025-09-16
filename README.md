# 🛒 Serendib Basket - Sri Lankan Grocery Ordering App

A modern, premium online grocery ordering platform specifically designed for the Sri Lankan market. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful user interface and comprehensive shopping experience.

![Serendib Basket](https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800)

## ✨ Features

### 🔐 User Authentication
- **User Registration**: Complete account creation with email/username
- **Secure Login**: Authentication with demo credentials
- **Profile Management**: User profile with personal information
- **Session Management**: Persistent login state

### 🛍️ Shopping Experience
- **Product Catalog**: 30+ authentic Sri Lankan grocery items
- **Smart Search**: Real-time product search functionality
- **Category Filtering**: 6 main categories with 5+ items each
- **Interactive Cart**: Add, remove, and modify quantities
- **Wishlist**: Save favorite products for later

### 📱 Multiple Pages
- **Home Page**: Hero section, featured products, testimonials
- **Categories Page**: Organized product browsing with filters
- **Offers Page**: 7+ special deals and promotions
- **About Page**: Company information and team details
- **Cart Page**: Complete shopping cart management
- **Checkout Page**: Secure order placement process

### 💳 Payment & Delivery
- **Bank Transfer**: Integrated payment with real bank details
- **Home Delivery**: Complete address collection and validation
- **Delivery Fees**: Free delivery over ₨2000, ₨200 below
- **Order Tracking**: Unique order IDs and status tracking

### 🧾 Order Management
- **Order Receipt**: Professional receipt generation
- **Print Functionality**: One-click receipt printing
- **PDF Download**: High-quality PDF receipt generation
- **Order History**: Track previous purchases

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Product display card
│   ├── CartSummary.tsx # Cart summary widget
│   └── OrderReceipt.tsx# Receipt component
├── pages/              # Main application pages
│   ├── HomePage.tsx    # Landing page
│   ├── CategoriesPage.tsx # Product categories
│   ├── OffersPage.tsx  # Special offers
│   ├── AboutPage.tsx   # Company information
│   ├── LoginPage.tsx   # User authentication
│   ├── RegisterPage.tsx# User registration
│   ├── CartPage.tsx    # Shopping cart
│   ├── CheckoutPage.tsx# Order placement
│   └── OrderReceiptPage.tsx # Order receipt
├── context/            # React Context providers
│   ├── AuthContext.tsx # Authentication state
│   └── CartContext.tsx # Shopping cart state
├── data/               # Static data files
│   ├── products.ts     # Product catalog
│   └── offers.ts       # Special offers
├── types/              # TypeScript definitions
│   └── index.ts        # Type definitions
└── App.tsx             # Main application component
```

## 🛒 Product Categories

### 🥬 Fresh Produce
- Fresh Coconut, Curry Leaves, Green Chilies, Tomatoes, Onions

### 🌾 Rice & Grains
- Basmati Rice, Red Rice, Samba Rice, Wheat Flour, Lentils

### 🍵 Beverages
- Ceylon Tea Leaves, King Coconut Water, Coffee Powder, Herbal Tea, Lime Juice

### 🥄 Cooking Essentials
- Coconut Oil, Sea Salt, Jaggery, Tamarind Paste, Vinegar

### 🥛 Dairy Products
- Fresh Milk, Curd, Butter, Cheese, Condensed Milk

### 🌶️ Spices & Herbs
- Cinnamon Sticks, Cardamom, Black Pepper, Turmeric Powder, Curry Powder

## 🎯 Special Offers

1. **Fresh Produce Bundle** - 25% off all vegetables and fruits
2. **Rice & Grains Special** - Buy 2kg rice, get 500g lentils free
3. **Ceylon Tea Festival** - 40% off premium Ceylon tea
4. **Spice Master Deal** - 35% off authentic Sri Lankan spices
5. **Dairy Delight Combo** - 20% off fresh dairy products
6. **Cooking Essentials Pack** - 30% off essential ingredients
7. **Weekend Mega Sale** - ₨500 off orders above ₨3000

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devin1916/serendib-basket.git
   cd serendib-basket
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **jsPDF** - PDF generation for receipts
- **html2canvas** - HTML to canvas conversion

## 💰 Currency & Pricing

All prices are displayed in Sri Lankan Rupees (₨) with proper formatting:
- Products range from ₨45 to ₨1200
- Free delivery on orders above ₨2000
- Delivery fee: ₨200 for orders below ₨2000

## 🎨 Design Features

### Color Palette
- **Primary**: Emerald Green (#059669) - Trust and freshness
- **Secondary**: Orange (#EA580C) - Energy and warmth
- **Accent**: Blue (#1D4ED8) - Reliability and professionalism

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable with proper contrast
- **Pricing**: Emphasized with color coding

### Layout
- **Responsive Design**: Mobile-first approach
- **Card-based UI**: Modern, clean layouts
- **8px Grid System**: Consistent spacing
- **Smooth Animations**: Enhanced user experience

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced for tablets (768px+)
- **Desktop**: Full experience (1024px+)
- **Large Screens**: Optimized for large displays (1280px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Highlights

- **Sri Lankan Focus**: Authentic products and cultural design
- **Premium UI/UX**: Modern, intuitive interface
- **Complete E-commerce**: Full shopping cart to checkout flow
- **Mobile Optimized**: Perfect mobile shopping experience
- **Print & PDF**: Professional order receipts
- **Bank Integration**: Real payment processing setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
