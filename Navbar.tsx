import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-serif">Febashi Limited</a>
        <div className="flex items-center gap-6">
          <a href="/cart" className="flex items-center gap-2">
            Cart (0)
            <ShoppingCart className="h-5 w-5" />
          </a>
          <button className="flex items-center gap-2 border rounded-full px-4 py-1">
            Menu
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}