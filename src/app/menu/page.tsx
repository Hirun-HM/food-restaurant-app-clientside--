'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { menuItems, categories } from '@/data/mockData';
import MenuItemCard from '@/components/MenuItemCard';

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterSpicyLevel, setFilterSpicyLevel] = useState('all');

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      // Search term filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.ingredients.some(ingredient => 
                             ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                           );

      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Vegetarian filter
      const matchesVegetarian = !filterVegetarian || item.isVegetarian;

      // Spicy level filter
      const matchesSpicyLevel = filterSpicyLevel === 'all' || 
                               item.spicyLevel.toString() === filterSpicyLevel;

      return matchesSearch && matchesCategory && matchesVegetarian && matchesSpicyLevel;
    });

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'prep-time':
          return a.preparationTime - b.preparationTime;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, filterVegetarian, filterSpicyLevel]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">Our Menu</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore our extensive collection of authentic Sri Lankan dishes, carefully crafted with traditional recipes and fresh ingredients.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium mb-2">
                    Search Menu
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search dishes, ingredients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory('all')}
                      className="w-full justify-start"
                    >
                      All Categories
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(category.id)}
                        className="w-full justify-start"
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <label htmlFor="sort" className="block text-sm font-medium mb-2">
                    Sort By
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="prep-time">Preparation Time</option>
                  </select>
                </div>

                {/* Dietary Filters */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Dietary Options</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filterVegetarian}
                        onChange={(e) => setFilterVegetarian(e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm">Vegetarian Only</span>
                    </label>
                  </div>
                </div>

                {/* Spicy Level Filter */}
                <div className="mb-6">
                  <label htmlFor="spicy" className="block text-sm font-medium mb-2">
                    Spicy Level
                  </label>
                  <select
                    id="spicy"
                    value={filterSpicyLevel}
                    onChange={(e) => setFilterSpicyLevel(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="all">All Levels</option>
                    <option value="0">Mild 🌶️</option>
                    <option value="1">Medium 🌶️🌶️</option>
                    <option value="2">Hot 🌶️🌶️🌶️</option>
                    <option value="3">Very Hot 🌶️🌶️🌶️🌶️</option>
                  </select>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSortBy('name');
                    setFilterVegetarian(false);
                    setFilterSpicyLevel('all');
                  }}
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Menu Items */}
          <main className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-gray-600 mb-2 sm:mb-0">
                Showing {filteredAndSortedItems.length} of {menuItems.length} items
              </p>
              <div className="text-sm text-gray-500">
                {selectedCategory !== 'all' && (
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full mr-2">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
                {filterVegetarian && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                    Vegetarian
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    &quot;{searchTerm}&quot;
                  </span>
                )}
              </div>
            </div>

            {filteredAndSortedItems.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
                  <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
