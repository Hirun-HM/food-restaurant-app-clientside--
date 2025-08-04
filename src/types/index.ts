export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients: string[];
  allergens: string[];
  isVegetarian: boolean;
  isVegan: boolean;
  spicyLevel: number; // 0-3 scale
  preparationTime: number; // in minutes
  available: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  images: string[];
  cuisine: string[];
  rating: number;
  priceRange: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  customerInfo: {
    name: string;
    phone: string;
    email: string;
    address?: string;
  };
  orderType: 'dine-in' | 'takeaway' | 'delivery';
  orderTime: Date;
  estimatedTime?: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'restaurant' | 'food' | 'ambiance' | 'staff';
  caption?: string;
}
