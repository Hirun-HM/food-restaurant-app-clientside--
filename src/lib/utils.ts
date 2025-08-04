import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toFixed(2)}`;
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

export function getSpicyLevelText(level: number): string {
  const levels = ['Mild', 'Medium', 'Hot', 'Very Hot'];
  return levels[level] || 'Mild';
}

export function getSpicyLevelEmoji(level: number): string {
  const emojis = ['🌶️', '🌶️🌶️', '🌶️🌶️🌶️', '🌶️🌶️🌶️🌶️'];
  return emojis[level] || '🌶️';
}
