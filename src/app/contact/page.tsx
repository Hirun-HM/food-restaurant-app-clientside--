'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { restaurantData } from '@/data/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reservationDate: '',
    reservationTime: '',
    guests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'reservation'>('contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(activeTab === 'contact' ? 'Message sent successfully!' : 'Reservation request submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      reservationDate: '',
      reservationTime: '',
      guests: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: restaurantData.address,
      action: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: restaurantData.phone,
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email',
      content: restaurantData.email,
      action: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Mon-Sun: 11:00 AM - 10:00 PM',
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message or make a reservation and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-600 mb-2">{info.content}</p>
                      {info.action && (
                        <Button variant="outline" size="sm">
                          {info.action}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">
                      {restaurantData.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex space-x-1">
                  <Button
                    variant={activeTab === 'contact' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('contact')}
                    className="flex-1"
                  >
                    Send Message
                  </Button>
                  <Button
                    variant={activeTab === 'reservation' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('reservation')}
                    className="flex-1"
                  >
                    Make Reservation
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Common Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>

                  {activeTab === 'contact' ? (
                    <>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this about?"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us how we can help you..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="reservationDate" className="block text-sm font-medium mb-1">
                            Date *
                          </label>
                          <Input
                            id="reservationDate"
                            name="reservationDate"
                            type="date"
                            required
                            value={formData.reservationDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <label htmlFor="reservationTime" className="block text-sm font-medium mb-1">
                            Time *
                          </label>
                          <select
                            id="reservationTime"
                            name="reservationTime"
                            required
                            value={formData.reservationTime}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="">Select time</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="guests" className="block text-sm font-medium mb-1">
                            Guests *
                          </label>
                          <select
                            id="guests"
                            name="guests"
                            required
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="">Number of guests</option>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                              <option key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Special Requests
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any special requests or dietary requirements..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {activeTab === 'contact' ? 'Send Message' : 'Submit Reservation'}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
