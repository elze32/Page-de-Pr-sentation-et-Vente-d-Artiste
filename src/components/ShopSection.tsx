import React, { useState } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
export const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const products = [{
    id: 1,
    title: 'Rêverie en bleu',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 2800,
    category: 'original',
    dimensions: '80 x 100 cm',
    available: true
  }, {
    id: 2,
    title: "Harmonie d'automne",
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 2400,
    category: 'original',
    dimensions: '70 x 90 cm',
    available: true
  }, {
    id: 3,
    title: 'Éclat de lumière',
    image: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 120,
    category: 'print',
    dimensions: '40 x 50 cm',
    available: true
  }, {
    id: 4,
    title: 'Mélodie urbaine',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3a031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 90,
    category: 'print',
    dimensions: '30 x 40 cm',
    available: true
  }, {
    id: 5,
    title: "Reflets d'âme",
    image: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 3200,
    category: 'original',
    dimensions: '100 x 120 cm',
    available: false
  }, {
    id: 6,
    title: 'Vibrations dorées',
    image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 150,
    category: 'print',
    dimensions: '50 x 60 cm',
    available: true
  }];
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };
  return <section id="shop" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-center">
          Boutique
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Acquérez une œuvre originale ou une reproduction d'art de qualité pour
          embellir votre intérieur.
        </p>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button type="button" className={`px-4 py-2 text-sm font-medium rounded-l-lg ${selectedCategory === 'all' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border border-gray-200`} onClick={() => setSelectedCategory('all')}>
              Tous
            </button>
            <button type="button" className={`px-4 py-2 text-sm font-medium ${selectedCategory === 'original' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border-t border-b border-r border-gray-200`} onClick={() => setSelectedCategory('original')}>
              Œuvres originales
            </button>
            <button type="button" className={`px-4 py-2 text-sm font-medium rounded-r-lg ${selectedCategory === 'print' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border-t border-b border-r border-gray-200`} onClick={() => setSelectedCategory('print')}>
              Reproductions
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                {!product.available && <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <span className="text-white font-medium text-lg">
                      Vendu
                    </span>
                  </div>}
                <div className="absolute top-2 right-2">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${product.category === 'original' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                    {product.category === 'original' ? 'Original' : 'Reproduction'}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Dimensions: {product.dimensions}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">
                    {formatPrice(product.price)}
                  </span>
                  <button className={`flex items-center px-3 py-2 rounded ${product.available ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition-colors`} disabled={!product.available}>
                    <ShoppingCartIcon size={18} className="mr-1" />
                    {product.available ? 'Ajouter' : 'Vendu'}
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-medium mb-4">
            Informations sur les commandes
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Œuvres originales:</strong> Chaque œuvre est unique,
              signée par l'artiste et livrée avec un certificat d'authenticité.
            </p>
            <p>
              <strong>Reproductions:</strong> Imprimées sur papier d'art de
              haute qualité, numérotées et signées par l'artiste.
            </p>
            <p>
              <strong>Livraison:</strong> Les œuvres sont soigneusement
              emballées et expédiées dans le monde entier. Délai de livraison de
              5 à 10 jours ouvrables.
            </p>
            <p>
              <strong>Commandes spéciales:</strong> Pour toute demande de
              commission ou d'œuvre sur mesure, veuillez nous contacter
              directement.
            </p>
          </div>
        </div>
      </div>
    </section>;
};