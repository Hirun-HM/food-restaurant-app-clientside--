'use client';

import React, { createContext, useContext, useReducer, ReactNode, useMemo, useCallback } from 'react';
import { CartItem, MenuItem } from '@/types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { menuItem: MenuItem; quantity?: number; specialInstructions?: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'UPDATE_INSTRUCTIONS'; payload: { id: string; instructions: string } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { menuItem, quantity = 1, specialInstructions } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.menuItem.id === menuItem.id && item.specialInstructions === specialInstructions
      );

      let newItems: CartItem[];
      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...state.items, { menuItem, quantity, specialInstructions }];
      }

      const total = newItems.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
      return { items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((_, index) => index.toString() !== action.payload);
      const total = newItems.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map((item, index) =>
        index.toString() === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      const total = newItems.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
      return { items: newItems, total };
    }

    case 'UPDATE_INSTRUCTIONS': {
      const newItems = state.items.map((item, index) =>
        index.toString() === action.payload.id
          ? { ...item, specialInstructions: action.payload.instructions }
          : item
      );
      return { ...state, items: newItems };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (menuItem: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeItem: (index: string) => void;
  updateQuantity: (index: string, quantity: number) => void;
  updateInstructions: (index: string, instructions: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { readonly children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = useCallback((menuItem: MenuItem, quantity = 1, specialInstructions?: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { menuItem, quantity, specialInstructions } });
  }, []);

  const removeItem = useCallback((index: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  }, []);

  const updateQuantity = useCallback((index: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: index, quantity } });
  }, []);

  const updateInstructions = useCallback((index: string, instructions: string) => {
    dispatch({ type: 'UPDATE_INSTRUCTIONS', payload: { id: index, instructions } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const getItemCount = useCallback(() => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  }, [state.items]);

  const contextValue = useMemo(() => ({
    state,
    addItem,
    removeItem,
    updateQuantity,
    updateInstructions,
    clearCart,
    getItemCount,
  }), [state, addItem, removeItem, updateQuantity, updateInstructions, clearCart, getItemCount]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
