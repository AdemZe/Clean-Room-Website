import React, { useState, useEffect, useCallback } from "react";
import Base from '@layouts/Baseof';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router';

function Galerie() {
  const router = useRouter();
  
  // Données de la galerie
  const galleryImages = [
    { id: 1, src: "/images/HI.07-1024x768 copy.jpg", alt: "Salle blanche moderne", category: "Salles Blanches" },
    { id: 2, src: "/images/panneauHpl5.JPG", alt: "Laboratoire de recherche", category: "Panneaux" },
    { id: 3, src: "/images/panneauHpl2.JPG", alt: "Panneau HPL", category: "Panneaux" },
    { id: 4, src: "/images/PanneauHplHeader.JPG", alt: "Salle d'opération", category: "Salles Blanches" },
    { id: 5, src: "/images/panneauHpl3.JPG", alt: "Installation HPL", category: "Portes" },
    { id: 6, src: "/images/portesSalle8.JPG", alt: "Contrôle qualité", category: "Portes" },
    { id: 7, src: "/images/portesSalle62.JPG", alt: "Détails techniques", category: "Pass Pox" },
    { id: 8, src: "/images/vestaire3.jpg", alt: "Équipement spécialisé", category: "Vestiaires" },
    { id: 9, src: "/images/panneauHpl6.JPG", alt: "Finitions", category: "Salles Blanches" },
    { id: 10, src: "/images/IMG_4887.JPG", alt: "Analyse technique", category: "Salles Blanches" },
    { id: 11, src: "/images/plafond7.jpg.jpg", alt: "Consultation", category: "Plafonds" },
    { id: 12, src: "/images/portesSalle3.JPG", alt: "Maintenance", category: "Portes" },
    { id: 13, src: "/images/portes9.JPG", alt: "Contrôle régulier", category: "Portes" },
    { id: 14, src: "/images/plafond6.jpg", alt: "Projet complet", category: "Plafonds" },
    { id: 15, src: "/images/pass-plat5.webp", alt: "Installation finale", category: "Pass Pox" },
    { id: 16, src: "/images/salle-blanche.jpg", alt: "Installation finale", category: "Salles Blanches" },
    { id: 17, src: "/images/vestaire4.jpg", alt: "Installation finale", category: "Vestiaires" },
    { id: 18, src: "/images/saass.jpg", alt: "Installation finale", category: "Pass Pox" },
  ];

  const categories = ["Toutes", "Salles Blanches", "Panneaux", "Portes", "Pass Pox", "Vestiaires", "Plafonds"];

  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Empêcher le scroll quand la lightbox est ouverte
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  // Filtrer les images par catégorie
  const filteredImages = selectedCategory === "Toutes" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Ouvrir la lightbox
  const openLightbox = useCallback((image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  }, []);

  // Fermer la lightbox
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  // Navigation dans la lightbox
  const navigateImage = useCallback((direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  // Gestion des touches clavier pour la lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox, navigateImage]);

  return (
    <Base title="Galerie">
      <div className="galerie-page">
        <section className="min-h-screen bg-white py-12">
          {/* En-tête */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                Galerie
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez nos réalisations et notre expertise en salle blanche à travers notre galerie photo
              </p>
            </div>

            {/* Filtres par catégorie */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

            </div>

            {/* Grille de la galerie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 galerie-grid">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => openLightbox(image)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Container d'image avec effet de zoom */}
                  <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Image principale */}
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 6}
                      />
                    </div>

                    {/* Overlay avec informations */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold rounded-full mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-white text-lg font-bold truncate">
                          {image.alt}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Badge d'action */}
                  <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message si pas d'images */}
            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Aucune image trouvée</h3>
                <p className="text-gray-500">Essayez une autre catégorie</p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 text-center shadow-lg">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Vous avez un projet spécifique ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Consultez nos autres réalisations ou contactez-nous pour discuter de votre projet
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={(e) => {
                      if (router.pathname === "/contact") {
                        e.preventDefault();
                      }
                    }}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {isLightboxOpen && selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4 transition-all duration-300"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <div className="relative max-w-7xl w-full">
              {/* Bouton fermer */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                aria-label="Fermer"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image en grand */}
              <div className="relative h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Informations de l'image */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.alt}</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <span className="px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-300">
                    Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} sur {filteredImages.length}
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                aria-label="Image précédente"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                aria-label="Image suivante"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Téléchargement */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={selectedImage.src}
                  download={`${selectedImage.alt.replace(/\s+/g, '-')}.jpg`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Télécharger
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .galerie-grid > div {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Empêcher les animations d'affecter le footer */
        .galerie-page {
          isolation: isolate;
        }
      `}</style>
    </Base>
  );
}

export default Galerie;