# Suddi Restaurant - Sri Lankan Cuisine Website

A modern, responsive restaurant website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a complete food ordering system, photo gallery, and restaurant information.

## 🌟 Features

### 🍽️ Restaurant Features
- **Complete Menu System** - Browse dishes by categories with detailed information
- **Food Ordering** - Add items to cart with quantity and special instructions
- **Photo Gallery** - Showcase restaurant ambiance, food, and staff photos
- **Restaurant Information** - About page, contact details, and opening hours
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### 🛍️ Ordering System
- **Smart Shopping Cart** - Persistent cart with quantity management
- **Menu Filtering** - Search, category filters, dietary options, and spice level filters
- **Order Customization** - Special instructions for each item
- **Multiple Order Types** - Dine-in, takeaway, and delivery options
- **Order Summary** - Complete breakdown with taxes and delivery fees

### 🎨 User Experience
- **Modern UI** - Clean, professional design with Sri Lankan color scheme
- **Fast Performance** - Optimized images and efficient React patterns
- **Accessibility** - Screen reader friendly and keyboard navigation
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **React Context** - State management for shopping cart
- **Radix UI** - Accessible UI components

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── cart/            # Shopping cart page
│   │   ├── contact/         # Contact & reservations
│   │   ├── gallery/         # Photo gallery
│   │   ├── menu/            # Menu browsing
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable components
│   │   ├── ui/              # UI components (Button, Card, etc.)
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── MenuItemCard.tsx # Menu item component
│   ├── context/             # React Context
│   │   └── CartContext.tsx  # Shopping cart state
│   ├── data/                # Mock data
│   │   └── mockData.ts      # Restaurant and menu data
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Common utilities
│   └── types/               # TypeScript types
│       └── index.ts         # Type definitions
├── public/                  # Static assets
│   └── images/              # Image folders (to be populated)
└── package.json             # Dependencies and scripts
```

**Enjoy exploring authentic Sri Lankan cuisine! 🇱🇰**
