import { Offer } from '../types';

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Fresh Produce Bundle',
    description: 'Get 25% off on all fresh vegetables and fruits. Perfect for healthy family meals!',
    discount: 25,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
    validUntil: '2025-02-15',
    category: 'Fresh Produce',
    minPurchase: 1000,
    code: 'FRESH25'
  },
  {
    id: 2,
    title: 'Rice & Grains Special',
    description: 'Buy 2kg rice and get 500g lentils absolutely free! Stock up your pantry.',
    discount: 30,
    image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=600',
    validUntil: '2025-02-20',
    category: 'Rice & Grains',
    minPurchase: 800,
    code: 'RICE30'
  },
  {
    id: 3,
    title: 'Ceylon Tea Festival',
    description: 'Premium Ceylon tea at 40% off! Experience the finest tea from Sri Lankan highlands.',
    discount: 40,
    image: 'https://srilankaembassy.fr/sites/default/files/files/users/user137/98979191_619303702008245_8647308745119891456_o.jpg',
    validUntil: '2025-02-28',
    category: 'Beverages',
    minPurchase: 500,
    code: 'TEA40'
  },
  {
    id: 4,
    title: 'Spice Master Deal',
    description: 'Get authentic Sri Lankan spices at 35% off. Enhance your cooking with premium spices!',
    discount: 35,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmeQLQBxmHXVpV3GCaTwZTboDQqpUSIV_eA&s',
    validUntil: '2025-02-25',
    category: 'Spices & Herbs',
    minPurchase: 600,
    code: 'SPICE35'
  },
  {
    id: 5,
    title: 'Dairy Delight Combo',
    description: 'Fresh dairy products combo - milk, curd, and butter at 20% off for healthy living.',
    discount: 20,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    validUntil: '2025-02-18',
    category: 'Dairy Products',
    minPurchase: 750,
    code: 'DAIRY20'
  },
  {
    id: 6,
    title: 'Cooking Essentials Pack',
    description: 'Complete cooking essentials bundle - coconut oil, salt, jaggery at 30% discount.',
    discount: 30,
    image: 'https://images.pexels.com/photos/4022087/pexels-photo-4022087.jpeg?auto=compress&cs=tinysrgb&w=600',
    validUntil: '2025-02-22',
    category: 'Cooking Essentials',
    minPurchase: 900,
    code: 'COOK30'
  },
  {
    id: 7,
    title: 'Weekend Mega Sale',
    description: 'Flat ₨500 off on orders above ₨3000. Valid only on weekends - Saturday & Sunday!',
    discount: 500,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
    validUntil: '2025-02-16',
    minPurchase: 3000,
    code: 'WEEKEND500'
  }
];