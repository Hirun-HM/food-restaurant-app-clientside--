import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { restaurantData, menuItems, categories } from '@/data/mockData';
import MenuItemCard from '@/components/MenuItemCard';

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to {restaurantData.name}
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              {restaurantData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  View Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Book a Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Us</h3>
                <p className="text-gray-600">{restaurantData.address}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">{restaurantData.phone}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular dishes, carefully crafted with authentic Sri Lankan flavors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg">
                View Full Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For over two decades, Suddi Restaurant has been serving authentic Sri Lankan cuisine
                with a passion for preserving traditional flavors while embracing modern culinary techniques.
                Our chefs use only the finest ingredients and time-honored recipes passed down through generations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From our signature rice and curry combinations to our famous kottu and hoppers,
                every dish tells a story of Sri Lankan heritage and culinary excellence.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">{restaurantData.rating}/5</span>
                <span className="text-gray-600">(1,234 reviews)</span>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/restaurant/chef-cooking.jpg"
                alt="Our chef preparing traditional Sri Lankan dishes"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Menu Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of authentic Sri Lankan dishes across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/menu?category=${category.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🍽️</span>
                    </div>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}