import React from 'react';
export const HeroSection = () => {
  return <section className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Marjorie Dessane
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Artiste contemporaine
          </h2>
          <p className="text-gray-700 mb-8">
            Explorez un univers où la couleur et la texture se rencontrent pour
            créer des œuvres uniques qui racontent des histoires et évoquent des
            émotions profondes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#gallery" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-center">
              Découvrir les œuvres
            </a>
            <a href="#shop" className="border border-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
              Acheter un tableau
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marjorie Dessane dans son atelier" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>;
};