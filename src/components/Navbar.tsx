import React, { useState } from 'react';
import { MenuIcon, ShoppingCartIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold">
            Marjorie Dessane
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#gallery" className="text-gray-700 hover:text-black transition-colors">
            Galerie
          </a>
          <a href="#about" className="text-gray-700 hover:text-black transition-colors">
            À propos
          </a>
          <a href="#shop" className="text-gray-700 hover:text-black transition-colors">
            Boutique
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
            Contact
          </a>
          <button className="flex items-center text-gray-700 hover:text-black transition-colors">
            <ShoppingCartIcon size={20} />
            <span className="ml-1">0</span>
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-black transition-colors">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white px-4 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#gallery" className="text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
              Galerie
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
              À propos
            </a>
            <a href="#shop" className="text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
              Boutique
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <button className="flex items-center text-gray-700 hover:text-black transition-colors">
              <ShoppingCartIcon size={20} />
              <span className="ml-1">0</span>
            </button>
          </div>
        </nav>}
    </header>;
};