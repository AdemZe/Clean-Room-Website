import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Base from "@layouts/Baseof";

// Import des modules Swiper côté client seulement
const importSwiperModules = () => {
  return Promise.all([
    import("swiper/modules").then((mod) => mod.Autoplay),
    import("swiper/modules").then((mod) => mod.Pagination),
  ]);
};

function PassPlatPage() {
  const [showToTopButton, setShowToTopButton] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [swiperModules, setSwiperModules] = useState([]);
  const [Swiper, setSwiper] = useState(null);
  const [SwiperSlide, setSwiperSlide] = useState(null);

  useEffect(() => {
    setIsClient(true);
    
    // Charger Swiper uniquement côté client
    if (typeof window !== "undefined") {
      // Charger les styles CSS de Swiper (CRITIQUE!)
      import("swiper/css").then(() => {
        console.log("Swiper CSS chargé");
      });
      import("swiper/css/pagination").then(() => {
        console.log("Pagination CSS chargé");
      });
      import("swiper/css/autoplay").then(() => {
        console.log("Autoplay CSS chargé");
      });

      // Charger les composants Swiper
      import("swiper/react").then((swiperReact) => {
        setSwiper(() => swiperReact.Swiper);
        setSwiperSlide(() => swiperReact.SwiperSlide);
      });
      
      // Charger les modules Swiper
      importSwiperModules().then(([Autoplay, Pagination]) => {
        setSwiperModules([Autoplay, Pagination]);
      });
    }

    const handleScroll = () => {
      setShowToTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const carouselImages = [
    "/images/pass-plat5.webp",
    "/images/pass-plat6.webp",
    "/images/pass-plat1.JPG",
    "/images/pass-plat2.JPG",
  ];

  // Configuration d'autoplay
  const autoplayConfig = {
    delay: 1700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Base title="Pass Plat">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.jpg"
            alt="Pass Plat - Header"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Pass Plat (Pass Box)
            </h1>
            <p className="text-xl opacity-90">
              Transfert sécurisé entre zones de propreté
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        {/* Introduction Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Pass Plat
              </h2>
              <p className="text-gray-600">Sas de transfert sécurisé</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                Le passe-plat, aussi appelé sas de transfert, est un dispositif essentiel pour assurer le transfert sécurisé de matériel entre deux zones de niveaux de propreté ou de classes différentes dans les salles blanches. Nous proposons une gamme variée de passe-plats étanches, qu&apos;ils soient standards ou fabriqués sur mesure, avec plusieurs options : modèles à 2 ou 3 portes, verrouillage manuel ou électronique, et diverses dimensions et finitions selon vos besoins.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                Caractéristiques techniques
              </h3>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span><strong>Dimensions extérieures :</strong> 600 x 600 x 600 mm (autres dimensions disponibles sur demande)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span><strong>Matériaux :</strong> stratifié compact HPL ou fond en acier inoxydable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span><strong>Design :</strong> oculus bi-affleurant (full flush) et excellente résistance aux produits chimiques et désinfectants</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span><strong>Système de sécurité :</strong> équipé d&apos;un système d&apos;interlock intégré pour empêcher l&apos;ouverture simultanée des portes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span><strong>Ventilation :</strong> options de surpression ou dépression disponibles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span><strong>Fabrication :</strong> réalisé dans notre usine pour un contrôle qualité optimal</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations de Pass Plat
            </h3>
            
            <div className="relative">
              {isClient && Swiper && SwiperSlide && swiperModules.length > 0 ? (
                <Swiper
                  modules={swiperModules}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={autoplayConfig}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  }}
                  className="h-[500px]"
                >
                  {carouselImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                        <Image
                          src={src}
                          alt={`Pass Plat ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <p className="text-lg font-semibold">Modèle {index + 1}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {carouselImages.map((src, index) => (
                    <div key={index} className="relative h-[300px] overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={src}
                        alt={`Pass Plat ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-semibold">Modèle {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Avantages supplémentaires
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personnalisation</h4>
                    <p className="text-gray-600">Adapté à vos besoins spécifiques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Conformité</h4>
                    <p className="text-gray-600">Respect des normes en vigueur</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Installation</h4>
                    <p className="text-gray-600">Montage professionnel garanti</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Maintenance</h4>
                    <p className="text-gray-600">Service après-vente disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
}

export default PassPlatPage;