import { Product } from '../types';

export const products: Product[] = [
  // Fresh Produce
  {
    id: 1,
    name: 'Fresh Coconut',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05CxaJp6gynJNsIBvIxmZTSey5SQsIhBMzg&s',
    category: 'Fresh Produce',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    unit: '1 piece',
    description: 'Fresh coconut from local farms, perfect for cooking and drinking.'
  },
  {
    id: 2,
    name: 'Fresh Curry Leaves',
    price: 45,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/388752190/NF/AI/CT/58653852/fresh-curry-leaves.jpg',
    category: 'Fresh Produce',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    unit: '50g',
    description: 'Aromatic curry leaves essential for Sri Lankan cuisine.'
  },
  {
    id: 3,
    name: 'Green Chilies',
    price: 80,
    image: 'https://www.alsothecrumbsplease.com/wp-content/uploads/2024/05/substitute-for-green-chilies-1-500x500.jpg',
    category: 'Fresh Produce',
    rating: 4.4,
    reviews: 45,
    inStock: true,
    unit: '250g',
    description: 'Fresh green chilies for that perfect spicy kick.'
  },
  {
    id: 4,
    name: 'Tomatoes',
    price: 150,
    originalPrice: 180,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Produce',
    rating: 4.3,
    reviews: 78,
    inStock: true,
    unit: '1kg',
    description: 'Fresh, ripe tomatoes perfect for curries and salads.'
  },
  {
    id: 5,
    name: 'Onions',
    price: 200,
    image: 'https://chefsmandala.com/wp-content/uploads/2018/03/Onion-Red.jpg',
    category: 'Fresh Produce',
    rating: 4.2,
    reviews: 92,
    inStock: true,
    unit: '1kg',
    description: 'Premium quality onions, essential for every kitchen.'
  },

  // Rice & Grains
  {
    id: 6,
    name: 'Basmati Rice',
    price: 450,
    originalPrice: 520,
    image: 'https://www.nextinlime.com/wp-content/uploads/2024/02/parboiled-basmati-rice.jpeg',
    category: 'Rice & Grains',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    unit: '1kg',
    description: 'Premium basmati rice with long grains and aromatic flavor.'
  },
  {
    id: 7,
    name: 'Red Rice',
    price: 380,
    originalPrice: 420,
    image: 'https://rayinfood.com/wp-content/uploads/2022/07/thumbnail_Untitled-1.jpg',
    category: 'Rice & Grains',
    rating: 4.7,
    reviews: 98,
    inStock: true,
    unit: '1kg',
    description: 'Nutritious red rice, a healthy choice for your family.'
  },
  {
    id: 8,
    name: 'Samba Rice',
    price: 320,
    image: 'https://erp.lakpura.com/images/LK94008454-03-E.JPG',
    category: 'Rice & Grains',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    unit: '1kg',
    description: 'Traditional Sri Lankan samba rice, perfect for daily meals.'
  },
  {
    id: 9,
    name: 'Wheat Flour',
    price: 180,
    image: 'https://swisslankacommodities.lk/wp-content/uploads/2022/05/Wheat-500x500.jpg',
    category: 'Rice & Grains',
    rating: 4.5,
    reviews: 87,
    inStock: true,
    unit: '1kg',
    description: 'Fine wheat flour for baking and cooking needs.'
  },
  {
    id: 10,
    name: 'Lentils (Parippu)',
    price: 280,
    image: 'https://www.keepingthepeas.com/wp-content/uploads/2022/11/red-lentils-in-wood-bowl-500x375.jpg',
    category: 'Rice & Grains',
    rating: 4.7,
    reviews: 134,
    inStock: true,
    unit: '500g',
    description: 'High-quality lentils, rich in protein and nutrients.'
  },

  // Beverages
  {
    id: 11,
    name: 'Ceylon Tea Leaves',
    price: 850,
    image: 'https://chaiwalacolombo.com/wp-content/uploads/2023/03/Ceylon-Tea.jpg',
    category: 'Beverages',
    rating: 4.9,
    reviews: 256,
    inStock: true,
    unit: '250g',
    description: 'Premium Ceylon tea leaves from the hill country.'
  },
  {
    id: 12,
    name: 'King Coconut Water',
    price: 120,
    image: 'https://adamjeelukmanjee.com/wp-content/uploads/2023/04/IMG_2118-scaled-e1680701701484.jpg',
    category: 'Beverages',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    unit: '350ml',
    description: 'Fresh king coconut water, naturally refreshing.'
  },
  {
    id: 13,
    name: 'Coffee Powder',
    price: 650,
    image: 'https://truesouth.in/cdn/shop/files/southindian2.jpg?v=1707477021',
    category: 'Beverages',
    rating: 4.7,
    reviews: 145,
    inStock: true,
    unit: '200g',
    description: 'Rich and aromatic coffee powder from local plantations.'
  },
  {
    id: 14,
    name: 'Herbal Tea Mix',
    price: 450,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    rating: 4.4,
    reviews: 67,
    inStock: true,
    unit: '100g',
    description: 'Traditional herbal tea blend with medicinal properties.'
  },
  {
    id: 15,
    name: 'Fresh Lime Juice',
    price: 180,
    image: 'https://media-cdn.tripadvisor.com/media/photo-p/12/de/35/d0/fresh-lime-juice.jpg',
    category: 'Beverages',
    rating: 4.3,
    reviews: 54,
    inStock: true,
    unit: '500ml',
    description: 'Freshly squeezed lime juice, perfect for drinks and cooking.'
  },

  // Cooking Essentials
  {
    id: 16,
    name: 'Coconut Oil',
    price: 650,
    image: 'https://www.verywellhealth.com/thmb/YU_4tvUI3VVmGHrD2Dvp7-0zqJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-8081649701-5b37f75946e0fb0037ce0001.jpg',
    category: 'Cooking Essentials',
    rating: 4.8,
    reviews: 189,
    inStock: true,
    unit: '500ml',
    description: 'Pure coconut oil extracted from fresh coconuts.'
  },
  {
    id: 17,
    name: 'Sea Salt',
    price: 85,
    image: 'https://www.cornishseasalt.co.uk/cdn/shop/files/sustainability.jpg?v=1738673892&width=1500',
    category: 'Cooking Essentials',
    rating: 4.5,
    reviews: 76,
    inStock: true,
    unit: '1kg',
    description: 'Natural sea salt harvested from Sri Lankan coasts.'
  },
  {
    id: 18,
    name: 'Jaggery',
    price: 320,
    image: 'https://justorganik.com/wp-content/uploads/2024/03/Organic-Jaggery-Making-your-sweet-treats-healthier.jpg',
    category: 'Cooking Essentials',
    rating: 4.6,
    reviews: 112,
    inStock: true,
    unit: '500g',
    description: 'Traditional jaggery made from coconut palm sap.'
  },

  // Dairy Products
  {
    id: 19,
    name: 'Fresh Milk',
    price: 180,
    image: 'https://www.freshfarms.com/wp-content/uploads/2023/04/Nutrition-Facts-In-Milk-What-You-Need-To-Know.png',
    category: 'Dairy Products',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    unit: '1L',
    description: 'Fresh pasteurized milk from local dairy farms.'
  },
  {
    id: 20,
    name: 'Curd',
    price: 120,
    image: 'https://www.cookingandme.com/wp-content/uploads/2012/12/8250569333_14ac1eb6e3_z.jpg',
    category: 'Dairy Products',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    unit: '400g',
    description: 'Traditional Sri Lankan curd, creamy and delicious.'
  },
  {
    id: 21,
    name: 'Butter',
    price: 450,
    image: 'https://www.bhg.com/thmb/-luCrhu9Eh1C2u-oZXseX5tKAbk=/3000x0/filters:no_upscale():strip_icc()/bhg-how-many-grams-are-in-one-stick-of-butter-03-2c71be43bb20474384f7483c3827f8e7.jpg',
    category: 'Dairy Products',
    rating: 4.5,
    reviews: 98,
    inStock: true,
    unit: '250g',
    description: 'Premium quality butter for cooking and baking.'
  },

  // Spices & Herbs
  {
    id: 25,
    name: 'Black Pepper',
    price: 850,
    image: 'https://assets.clevelandclinic.org/m/454641f6eb66f2a9/webimage-blackPepper-185067429-770x533-1_jpg.png',
    category: 'Spices & Herbs',
    rating: 4.7,
    reviews: 198,
    inStock: true,
    unit: '100g',
    description: 'Premium black pepper from Sri Lankan spice gardens.'
  },

  {
    id: 26,
    name: 'Curry Powder',
    price: 220,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDTZ0a9sPb0tpGVqlFKM1UDrRWZixU1treQ&s',
    category: 'Spices & Herbs',
    rating: 4.8,
    reviews: 189,
    inStock: true,
    unit: '250g',
    description: 'Authentic Sri Lankan curry powder blend.'
  }
];

export const categories = [
  'All Items',
  'Fresh Produce',
  'Rice & Grains',
  'Beverages',
  'Cooking Essentials',
  'Dairy Products',
  'Spices & Herbs'
];