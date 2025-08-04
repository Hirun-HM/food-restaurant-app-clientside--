import React from 'react';
import Image from 'next/image';
import { Star, Users, Clock, Award, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { restaurantData } from '@/data/mockData';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Clock, label: 'Years of Experience', value: '20+' },
    { icon: Award, label: 'Awards Won', value: '15' },
    { icon: Star, label: 'Average Rating', value: '4.8/5' },
  ];

  const team = [
    {
      name: 'Chef Kumara Perera',
      position: 'Executive Chef',
      image: '/images/team/chef-kumara.jpg',
      description: 'With over 25 years of experience in Sri Lankan cuisine, Chef Kumara brings authentic flavors to every dish.',
    },
    {
      name: 'Shalini Fernando',
      position: 'Restaurant Manager',
      image: '/images/team/shalini.jpg',
      description: 'Shalini ensures every guest receives exceptional service and has a memorable dining experience.',
    },
    {
      name: 'Rohan Silva',
      position: 'Sous Chef',
      image: '/images/team/rohan.jpg',
      description: 'Specializing in traditional Sri Lankan sweets and desserts, Rohan adds the perfect finishing touch to our meals.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">About {restaurantData.name}</h1>
            <p className="text-xl leading-relaxed">
              Discover the story behind our passion for authentic Sri Lankan cuisine and our commitment to providing exceptional dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in 2004, {restaurantData.name} began as a small family restaurant with a simple mission: 
                  to share the authentic taste of Sri Lankan cuisine with our community. What started as a dream by 
                  our founder, Mr. Sunil Perera, has grown into one of the most beloved Sri Lankan restaurants in the city.
                </p>
                <p>
                  Our journey has been guided by the principle of authenticity. Every recipe we use has been passed down 
                  through generations, and we source our spices directly from Sri Lanka to ensure the most genuine flavors. 
                  We believe that food is not just about nourishment, but about bringing people together and creating lasting memories.
                </p>
                <p>
                  Over the years, we have served over 50,000 satisfied customers and have become a home away from home 
                  for many Sri Lankan families living abroad, as well as a gateway for locals to discover the rich 
                  culinary heritage of Sri Lanka.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="/images/restaurant/founder-story.jpg"
                alt="Restaurant founder and family"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These numbers represent the trust and satisfaction of our valued customers over the years.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  We preserve traditional Sri Lankan cooking methods and use authentic ingredients to deliver genuine flavors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
                <p className="text-gray-600">
                  We treat every guest as family, providing warm service and creating a welcoming atmosphere for all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We source the finest ingredients and maintain the highest standards in food preparation and service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of culinary professionals and service staff work together to create memorable dining experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-gray-600">We&apos;d love to welcome you to our restaurant family!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">{restaurantData.address}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">{restaurantData.phone}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">{restaurantData.email}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
