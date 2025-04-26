import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ShopSection } from './components/ShopSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <ShopSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}