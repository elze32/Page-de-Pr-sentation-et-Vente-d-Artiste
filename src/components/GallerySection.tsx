import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const artworks = [{
    id: 1,
    title: 'Rêverie en bleu',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    year: '2023'
  }, {
    id: 2,
    title: "Harmonie d'automne",
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    year: '2022'
  }, {
    id: 3,
    title: 'Éclat de lumière',
    image: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    year: '2022'
  }, {
    id: 4,
    title: 'Mélodie urbaine',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3a031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    year: '2021'
  }, {
    id: 5,
    title: "Reflets d'âme",
    image: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    year: '2021'
  }, {
    id: 6,
    title: 'Vibrations dorées',
    image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    year: '2020'
  }];
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < artworks.length) {
      setSelectedImage(newIndex);
    }
  };
  return <section id="gallery" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-center">
          Galerie
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Découvrez une sélection des œuvres récentes de Claire Dubois, où
          chaque toile raconte une histoire unique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => <div key={artwork.id} className="cursor-pointer group" onClick={() => openLightbox(index)}>
              <div className="relative overflow-hidden rounded-lg">
                <img src={artwork.image} alt={artwork.title} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <p className="text-lg font-medium">{artwork.title}</p>
                    <p className="text-sm">{artwork.year}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium">{artwork.title}</h3>
                <p className="text-gray-600">{artwork.year}</p>
              </div>
            </div>)}
        </div>
      </div>
      {/* Lightbox */}
      {selectedImage !== null && <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors" onClick={closeLightbox}>
            <XIcon size={32} />
          </button>
          <button className="absolute left-4 text-white hover:text-gray-300 transition-colors" onClick={() => navigateImage(-1)} disabled={selectedImage === 0}>
            <ChevronLeftIcon size={40} className={selectedImage === 0 ? 'opacity-50 cursor-not-allowed' : ''} />
          </button>
          <div className="relative max-w-4xl max-h-full">
            <img src={artworks[selectedImage].image} alt={artworks[selectedImage].title} className="max-w-full max-h-[80vh] object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl font-medium">
                {artworks[selectedImage].title}
              </h3>
              <p>{artworks[selectedImage].year}</p>
            </div>
          </div>
          <button className="absolute right-4 text-white hover:text-gray-300 transition-colors" onClick={() => navigateImage(1)} disabled={selectedImage === artworks.length - 1}>
            <ChevronRightIcon size={40} className={selectedImage === artworks.length - 1 ? 'opacity-50 cursor-not-allowed' : ''} />
          </button>
        </div>}
    </section>;
};