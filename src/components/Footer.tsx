import React from 'react';
export const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-serif font-bold">Marjorie Dessane</h2>
            <p className="text-gray-400 text-sm">Artiste contemporaine</p>
          </div>
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
              Galerie
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              À propos
            </a>
            <a href="#shop" className="text-gray-300 hover:text-white transition-colors">
              Boutique
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Marjorie Dessane. Tous droits
            réservés.
          </div>
        </div>
      </div>
    </footer>;
};