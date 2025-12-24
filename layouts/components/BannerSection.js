import Link from "next/link";
import { markdownify } from "@lib/utils/textConverter";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const BannerSection = ({ banner, data = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoScrollSpeed, setAutoScrollSpeed] = useState(3000);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  // Phrases inspirées du style de l'image 4.png (transparent/glass effect)
  const slideTexts = [
    {
      title: "Votre partenaire de confiance pour des solutions de salles blanches en Tunisie",
      subtitle: "Des solutions sur mesure pour l'industrie pharmaceutique, électronique et agroalimentaire",
      animation: "fadeInUp",
      position: "left"
    },
    {
      title: "Excellence et précision pour une qualité irréprochable",
      subtitle: "Conformité totale aux normes internationales les plus strictes",
      animation: "slideInLeft",
      position: "center"
    },
    {
      title: "Innovation technologique au service de vos projets",
      subtitle: "Équipements de pointe et expertise technique certifiée",
      animation: "zoomIn",
      position: "right"
    }
  ];

  // Fonction pour passer à la slide suivante
  const nextSlide = useCallback(() => {
    if (!data.length) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % data.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [data.length]);

  // Fonction pour passer à la slide précédente
  const prevSlide = useCallback(() => {
    if (!data.length) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [data.length]);

  // Gestion du swipe tactile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !data.length) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Fonction pour démarrer l'auto-scroll
  const startAutoPlay = useCallback(() => {
    if (!data.length) return;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, autoScrollSpeed);
  }, [data.length, nextSlide, autoScrollSpeed]);

  // Fonction pour arrêter l'auto-scroll
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Fonction pour réinitialiser l'auto-scroll
  const resetAutoPlay = useCallback(() => {
    stopAutoPlay();
    startAutoPlay();
  }, [stopAutoPlay, startAutoPlay]);

  // Fonction pour aller à une slide spécifique
  const goToSlide = useCallback((index) => {
    if (!data.length || index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
    resetAutoPlay(); // Réinitialiser l'auto-play après interaction manuelle
  }, [data.length, currentSlide, isTransitioning, resetAutoPlay]);

  // Auto-play du carrousel (démarre automatiquement et ne s'arrête jamais)
  useEffect(() => {
    if (!data.length) return;

    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay, data.length]);

  // Navigation au clavier
  useEffect(() => {
    if (!data.length) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
        resetAutoPlay();
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide();
        resetAutoPlay();
      }
      if (e.key >= "1" && e.key <= "9") {
        const index = parseInt(e.key) - 1;
        if (index < data.length) {
          goToSlide(index);
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, goToSlide, data.length, resetAutoPlay]);

  // Préchargement des images adjacentes
  useEffect(() => {
    if (!data.length) return;

    const preloadImages = () => {
      const nextIndex = (currentSlide + 1) % data.length;
      const prevIndex = (currentSlide - 1 + data.length) % data.length;
      
      const imageUrls = [
        data[currentSlide]?.image,
        data[nextIndex]?.image,
        data[prevIndex]?.image,
      ].filter(Boolean);

      imageUrls.forEach((image) => {
        const img = new window.Image();
        img.src = `/images/${image}`;
      });
    };

    preloadImages();
  }, [currentSlide, data]);

  if (!banner) return null;

  // Si pas de données, afficher un état par défaut
  if (!data.length) {
    return (
      <section className="relative h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="text-center text-white/60">
            <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg">Aucune image disponible</p>
          </div>
        </div>
        
        <header className="relative z-30 flex items-center justify-between px-6 py-4 md:px-12 bg-white/90 backdrop-blur-sm">
          {/* Header content same as before */}
        </header>
      </section>
    );
  }

  // Obtenir le texte de la slide actuelle
  const currentTextIndex = currentSlide % slideTexts.length;
  const currentText = slideTexts[currentTextIndex];

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden font-sans select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Carrousel en arrière-plan (Plein écran) */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {data.map((item, index) => (
            <div
              key={item.id || index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 z-10 scale-100" 
                  : "opacity-0 z-0 scale-105"
              } ${
                isTransitioning ? "transitioning" : ""
              }`}
            >
              <Image
                src={`/images/${item.image}`}
                alt={item.alt || `Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={index <= 1}
                quality={90}
                placeholder={item.placeholder ? "blur" : "empty"}
                blurDataURL={item.placeholder}
              />
              {/* Overlay gradient plus léger pour mieux voir le texte */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Texte Superposé - Style inspiré de l'image 4.png (effet transparent/blur) */}
      <div className="absolute inset-0 z-20 flex items-center px-4 md:px-8 lg:px-12">
        <div className={`max-w-4xl transition-all duration-700 ease-out ${
          currentText.position === "center" ? "mx-auto text-center" :
          currentText.position === "right" ? "ml-auto text-right" :
          "mr-auto text-left"
        }`}>
          {/* Conteneur avec effet glass/transparent inspiré de l'image 4.png */}
          <div className={`bg-gradient-to-r from-black/40 via-black/30 to-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl animate-${currentText.animation}`}>
            {/* Titre principal - Style similaire à "La confiance des agriculteurs" */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
              {currentText.title}
            </h1>
            
            {/* Sous-titre - Style similaire à "C'est notre fierté..." */}
            <div className="border-l-4 border-white/50 pl-4 md:pl-6 my-4 md:my-6">
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed drop-shadow-lg">
                {currentText.subtitle}
              </p>
            </div>
            
            {/* Bouton d'action - Optionnel mais cohérent avec le design */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/30 hover:shadow-lg active:scale-95 border border-white/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Demander un devis
              </Link>
              
              <Link 
                href="/solutions" 
                className="inline-flex items-center gap-2 rounded-lg bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:shadow-lg active:scale-95 border border-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Nos solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Indicateurs de diapositives (points en bas) */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center">
        {/* Points indicateurs avec numéro */}
        <div className="flex items-center space-x-2 mb-3 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
          <div className="flex space-x-2 md:space-x-3">
            {data.map((_, index) => {
              const textIndex = index % slideTexts.length;
              const slideText = slideTexts[textIndex];
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-white scale-125 shadow-lg" 
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Aller à la diapositive ${index + 1}: ${slideText.title.substring(0, 30)}...`}
                  disabled={isTransitioning}
                >
                  {index === currentSlide && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-shadow">
                      {index + 1} / {data.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Indicateur de défilement amélioré */}
        <div className="flex flex-col items-center">
          <span className="mb-1 md:mb-2 text-[10px] uppercase tracking-[0.3em] text-white/60">
            Défilement automatique
          </span>
          <div className="relative h-8 md:h-12 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white to-white/20"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* 5. Contrôles de navigation du carrousel */}
      <button 
        onClick={() => {
          prevSlide();
          resetAutoPlay();
        }}
        disabled={isTransitioning}
        className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 md:p-3 text-white backdrop-blur-md hover:bg-black/40 transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Diapositive précédente"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => {
          nextSlide();
          resetAutoPlay();
        }}
        disabled={isTransitioning}
        className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 md:p-3 text-white backdrop-blur-md hover:bg-black/40 transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Diapositive suivante"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 7. Indicateur de chargement */}
      {isTransitioning && (
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <div className="w-10 h-10 md:w-12 md:h-12 border-3 md:border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* 8. Instructions pour mobile */}
      <div className="absolute bottom-20 left-4 z-20 md:hidden">
        <div className="flex items-center gap-2 text-white/50 text-xs bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          <span>Swipe pour naviguer</span>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-zoomIn {
          animation: zoomIn 0.8s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .drop-shadow-2xl {
          filter: drop-shadow(0 10px 8px rgba(0,0,0,0.4)) drop-shadow(0 4px 3px rgba(0,0,0,0.3));
        }
        
        /* Réduire l'animation sur mobile pour économiser la batterie */
        @media (prefers-reduced-motion: reduce) {
          .animate-bounce,
          .animate-pulse,
          .animate-spin,
          .animate-fadeInUp,
          .animate-slideInLeft,
          .animate-zoomIn {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default BannerSection;