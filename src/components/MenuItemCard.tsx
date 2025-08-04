'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, Clock, Leaf, ChefHat } from 'lucide-react';
import { MenuItem } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { formatPrice, formatTime, getSpicyLevelEmoji } from '@/lib/utils';

interface MenuItemCardProps {
  readonly item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item, quantity, specialInstructions);
    setQuantity(1);
    setSpecialInstructions('');
    setShowDetails(false);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!item.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Currently Unavailable</span>
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          {item.isVegetarian && (
            <div className="bg-green-500 text-white p-1 rounded-full" title="Vegetarian">
              <Leaf className="h-4 w-4" />
            </div>
          )}
          {item.spicyLevel > 0 && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              {getSpicyLevelEmoji(item.spicyLevel)}
            </div>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="text-xl font-bold text-orange-600">{formatPrice(item.price)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formatTime(item.preparationTime)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChefHat className="h-4 w-4" />
            <span className="capitalize">{item.category}</span>
          </div>
        </div>

        {showDetails && (
          <div className="space-y-3 mb-4">
            <div>
              <h4 className="font-medium text-sm mb-1">Ingredients:</h4>
              <p className="text-xs text-gray-600">{item.ingredients.join(', ')}</p>
            </div>
            
            {item.allergens.length > 0 && (
              <div>
                <h4 className="font-medium text-sm mb-1 text-red-600">Allergens:</h4>
                <p className="text-xs text-red-600">{item.allergens.join(', ')}</p>
              </div>
            )}

            <div>
              <label htmlFor="special-instructions" className="block text-sm font-medium mb-1">
                Special Instructions:
              </label>
              <Input
                id="special-instructions"
                placeholder="Any special requests..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="text-sm"
              />
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col space-y-2">
        {!showDetails ? (
          <div className="flex w-full space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowDetails(true)}
              className="flex-1"
              disabled={!item.available}
            >
              Customize
            </Button>
            <Button
              onClick={() => addItem(item, 1)}
              className="flex-1"
              disabled={!item.available}
            >
              Add to Cart
            </Button>
          </div>
        ) : (
          <div className="flex w-full space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowDetails(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddToCart}
              className="flex-1"
            >
              Add {formatPrice(item.price * quantity)}
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
