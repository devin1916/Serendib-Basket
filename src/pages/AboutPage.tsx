import React from 'react';
import { Heart, Users, Truck, Shield, Award, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Serendib Basket</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing the finest Sri Lankan groceries directly to your doorstep. 
            Our mission is to make quality, authentic ingredients accessible to every household across the island.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2023, Serendib Basket was born from a simple idea: every Sri Lankan family 
                  deserves access to fresh, authentic groceries without the hassle of traditional shopping.
                </p>
                <p>
                  We started as a small team of food enthusiasts who understood the challenges of finding 
                  quality ingredients, especially traditional Sri Lankan products. Today, we've grown into 
                  the island's most trusted online grocery platform.
                </p>
                <p>
                  Our name "Serendib" comes from the ancient name for Sri Lanka, reflecting our deep 
                  connection to the island's rich culinary heritage and our commitment to preserving 
                  traditional flavors for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sri Lankan groceries"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">50,000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing products to delivering them to your door
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">
                We source only the finest products from trusted suppliers and local farmers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Centric</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our priority. We listen, adapt, and continuously improve
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600 text-sm">
                Consistent, on-time delivery with careful handling of every order
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Safety</h3>
              <p className="text-gray-600 text-sm">
                Secure transactions and safe handling practices you can count on
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Serendib Basket?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're more than just a grocery delivery service - we're your trusted partner in bringing 
              authentic Sri Lankan flavors to your kitchen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 mb-4">
                Hand-picked products from the best suppliers across Sri Lanka. Every item meets our 
                strict quality standards before reaching your home.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fresh produce sourced daily</li>
                <li>• Authentic Sri Lankan brands</li>
                <li>• Quality guarantee on all items</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600 mb-4">
                Same-day delivery across Colombo and next-day delivery island-wide. 
                We ensure your groceries arrive fresh and on time.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Same-day delivery available</li>
                <li>• Island-wide coverage</li>
                <li>• Temperature-controlled transport</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h3>
              <p className="text-gray-600 mb-4">
                Our dedicated customer service team is always ready to help. 
                We're committed to making your shopping experience exceptional.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 customer support</li>
                <li>• Easy returns & refunds</li>
                <li>• Personal shopping assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Serendib Basket, working tirelessly to bring you the best grocery shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Samantha Perera',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Passionate about bringing authentic Sri Lankan groceries to every household.'
              },
              {
                name: 'Rajesh Fernando',
                role: 'Head of Operations',
                image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Ensures smooth operations and timely delivery across the island.'
              },
              {
                name: 'Priya Silva',
                role: 'Quality Manager',
                image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Maintains our high quality standards and supplier relationships.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Customer Service Hotline</p>
              <p className="text-emerald-600 font-medium">+94 11 234 5678</p>
              <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Send us your queries</p>
              <p className="text-blue-600 font-medium">hello@serendibbasket.lk</p>
              <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Head Office</p>
              <p className="text-orange-600 font-medium">123 Galle Road</p>
              <p className="text-sm text-gray-500 mt-1">Colombo 03, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;