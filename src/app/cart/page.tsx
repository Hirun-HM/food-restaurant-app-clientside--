'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { state, updateQuantity, removeItem, updateInstructions, clearCart } = useCart();
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway' | 'delivery'>('dine-in');

  const handleQuantityChange = (index: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(index);
    } else {
      updateQuantity(index, newQuantity);
    }
  };

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout process
    alert(`Order placed for ${orderType}! Total: ${formatPrice(state.total)}`);
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link href="/menu">
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Menu
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Order</h1>
          <Link href="/menu">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Cart Items ({state.items.length})</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((cartItem, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
                    <div className="relative w-full sm:w-24 h-24 flex-shrink-0">
                      <Image
                        src={cartItem.menuItem.image}
                        alt={cartItem.menuItem.name}
                        fill
                        className="object-cover rounded-md"
                        sizes="96px"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg">{cartItem.menuItem.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {cartItem.menuItem.description}
                      </p>
                      <p className="text-orange-600 font-semibold">
                        {formatPrice(cartItem.menuItem.price)}
                      </p>
                      
                      {cartItem.specialInstructions && (
                        <div className="mt-2">
                          <label htmlFor={`instructions-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                            Special Instructions:
                          </label>
                          <Input
                            id={`instructions-${index}`}
                            value={cartItem.specialInstructions}
                            onChange={(e) => updateInstructions(index.toString(), e.target.value)}
                            placeholder="Add special instructions..."
                            className="text-sm"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(index.toString(), cartItem.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{cartItem.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(index.toString(), cartItem.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">
                          {formatPrice(cartItem.menuItem.price * cartItem.quantity)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(index.toString())}
                          className="text-red-600 hover:text-red-700 h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {(['dine-in', 'takeaway', 'delivery'] as const).map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="orderType"
                      value={type}
                      checked={orderType === type}
                      onChange={(e) => setOrderType(e.target.value as typeof orderType)}
                      className="text-orange-600"
                    />
                    <span className="capitalize">
                      {type.replace('-', ' ')}
                      {type === 'delivery' && ' (+Rs. 200)'}
                    </span>
                  </label>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>{formatPrice(200)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Service Charge (10%)</span>
                    <span>{formatPrice(state.total * 0.1)}</span>
                  </div>
                  
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-orange-600">
                        {formatPrice(
                          state.total + 
                          (orderType === 'delivery' ? 200 : 0) + 
                          (state.total * 0.1)
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                >
                  Place Order
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By placing this order, you agree to our terms and conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Estimated Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">
                  {orderType === 'dine-in' ? '20-30 minutes' : 
                   orderType === 'takeaway' ? '15-25 minutes' : 
                   '35-45 minutes'}
                </p>
                <p className="text-sm text-gray-600">
                  We&apos;ll notify you when your order is ready!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
