import React from 'react';
export const AboutSection = () => {
  return <section id="about" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marjorie Dessane, artiste peintre" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              À propos de l'artiste
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Marjorie Dessane est une artiste contemporaine dont le travail
                explore les thèmes de la nature, de l'émotion humaine et de la
                connexion entre les deux. Née à Lyon en 1985, elle a étudié les
                beaux-arts à Paris avant de développer son style unique qui
                mélange techniques traditionnelles et approches innovantes.
              </p>
              <p>
                Son travail se caractérise par des coups de pinceau expressifs,
                une palette de couleurs vibrantes et une attention particulière
                aux textures. Chaque œuvre raconte une histoire personnelle tout
                en invitant le spectateur à y projeter ses propres expériences
                et émotions.
              </p>
              <p>
                "Je cherche à capturer non pas ce que l'œil voit, mais ce que
                l'âme ressent," explique Marjorie. "Mon art est un dialogue
                entre mon monde intérieur et le monde qui m'entoure."
              </p>
              <p>
                Ses œuvres ont été exposées dans des galeries à travers l'Europe
                et font partie de collections privées dans le monde entier.
                Marjorie travaille actuellement depuis son atelier à la
                campagne, où la nature environnante continue d'inspirer son art.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Expositions récentes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>2023 - "Résonances" - Galerie Moderne, Paris</li>
                <li>
                  2022 - "Lumières Intérieures" - Centre d'Art Contemporain,
                  Lyon
                </li>
                <li>
                  2021 - "Nature et Âme" - Festival International des Arts,
                  Marseille
                </li>
                <li>2020 - "Expressions" - Exposition collective, Berlin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};