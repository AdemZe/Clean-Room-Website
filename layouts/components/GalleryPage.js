import Image from 'next/image';
import React from 'react';

// Tableau des images de la galerie
const galleryImages = [
  { src: "/images/image 2/analyse2.jpg", alt: "Intérieur salle blanche avec éclairage LED" },
  { src: "/images/image 2/portesSalle3.JPG", alt: "Détail de la jonction mur-plafond dans une salle blanche, finition impeccable" },
  { src: "/images/image 2/vestaire3.jpg", alt: "Couloir de salle blanche avec plusieurs portes jaunes et sol orange" },
  { src: "/images/image 2/portesSalle6.JPG", alt: "Grande salle blanche avec de larges baies vitrées donnant sur un couloir, sol orange" },
  { src: "/images/image 2/PanneauHplHeader.JPG", alt: "Couloir de salle blanche avec deux portes marron foncées et murs blancs" },
  { src: "/images/image 2/pass-plat5.webp", alt: "Enceinte de test ou équipement spécifique avec hublot dans une salle blanche" },
  { src: "/images/image 2/Sol2.jpg", alt: "Unité de traitement d'air (CTA) et tuyauterie technique dans un local annexe" },
  { src: "/images/image 2/portesSalle8.JPG", alt: "Long couloir de salle blanche avec des portes marron s'éloignant vers le fond" },
  // Ajoutez d'autres images ici en suivant le même format
];

const GalleryPage = () => {
  return (
    <section className="py-10 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre "GALERIE" avec espacement ajusté */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
            GALERIE
          </h1>
          {/* La ligne bleue sous le titre avec espacement ajusté */}
          <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-video w-full overflow-hidden rounded-sm shadow-md transition-transform duration-300 hover:scale-[1.01]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus de projets" qui redirige vers la galerie */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = "/Galerie"}
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Voir plus de projets dans la galerie"
          >
            Voir la galerie
          </button>
        </div>

        {/* Bouton de retour en haut de page (flèche bleue) - positionné en bas à droite */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white shadow-lg transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Retour en haut de page"
          >
            <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default GalleryPage;