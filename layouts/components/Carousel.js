'use client'
import Image from 'next/image'
import React, { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icônes modernes

// --- Configuration ---
const SLIDE_INTERVAL = 5000; // Intervalle de défilement automatique en ms (5 secondes)
const CAROUSEL_HEIGHT_MD = 'h-[400px]'; // Hauteur sur écran moyen
const CAROUSEL_HEIGHT_LG = 'h-[600px]'; // Hauteur sur grand écran

const Carousel = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = data.length;

    // Fonction pour passer à la slide suivante/précédente
    const goToSlide = useCallback((index) => {
        if (index < 0) {
            setCurrentSlide(totalSlides - 1);
        } else if (index >= totalSlides) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(index);
        }
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 1);
    }, [currentSlide, goToSlide]);

    // Gestion du défilement automatique
    useEffect(() => {
        const interval = setInterval(nextSlide, SLIDE_INTERVAL);
        
        // Nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(interval);
    }, [nextSlide]);


    if (!data || data.length === 0) {
        return <div className="text-center p-10 bg-gray-100">Aucune donnée de carrousel disponible.</div>;
    }

    return (
        <div className={`relative w-full overflow-hidden ${CAROUSEL_HEIGHT_MD} md:${CAROUSEL_HEIGHT_LG}`}>

            {/* --- CONTENEUR DES SLIDES --- */}
            <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 w-full relative h-full"
                        aria-hidden={index !== currentSlide}
                    >
                        {/* Image Next.js */}
                        <Image
                            src={`/images/${item.image}`}
                            alt={`Slide ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 
                                   (max-width: 1200px) 100vw, 
                                   100vw"
                            style={{ objectFit: 'cover' }}
                            priority={index === 0} // Charge la première image en priorité
                        />

                        {/* Overlay Attirant (Noir semi-transparent) */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* Contenu du Carrousel (Titre/Description) */}
                        {(item.title || item.description) && (
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                                <div className="max-w-3xl bg-black/50 p-6 sm:p-8 rounded-xl backdrop-blur-sm shadow-2xl">
                                    {/* Utilisation conditionnelle des props si elles existent dans 'item' */}
                                    {item.title && (
                                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
                                            {item.title}
                                        </h2>
                                    )}
                                    {item.description && (
                                        <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md hidden sm:block">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* --- CONTRÔLES DE NAVIGATION (Flèches) --- */}
            
            {/* Flèche Précédent */}
            <button
                type="button"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition duration-300 text-white z-10"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Flèche Suivant */}
            <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition duration-300 text-white z-10"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* --- INDICATEURS (Points) --- */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {data.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full transition duration-300 ${
                            index === currentSlide 
                            ? 'bg-white scale-110 shadow-lg' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}

export default Carousel;