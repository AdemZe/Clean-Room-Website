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

function VestiairePage() {
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
    "/images/vestaire3.jpg",
    "/images/vestaire4.jpg",
    "/images/vestaire1.jpg",
    "/images/vestaire2.jpg",
    "/images/vestaire5.jpg",
  ];

  // Configuration d'autoplay
  const autoplayConfig = {
    delay: 1700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Base title="Mobilier de sas et de vestiaires">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.jpg"
            alt="Mobilier de sas et de vestiaires - Header"
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
              Mobilier de sas et de vestiaires
            </h1>
            <p className="text-xl opacity-90">
              Solutions d&apos;agencement pour zones contrôlées
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
                Mobilier spécialisé pour zones contrôlées
              </h2>
              <p className="text-gray-600">Solutions d&apos;agencement sur mesure</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                Le sas est une zone de transit des flux entrants et/ou sortants assurant l&apos;isolement entre deux zones d&apos;environnements différents. Il participe à l&apos;efficacité globale des salles propres qu&apos;il dessert.
                <br /><br />
                Nous vous accompagnons dans l&apos;agencement de vos sas et de vos vestiaires, et vous proposons une gamme complète de mobilier adapté à vos besoins : rangements, bancs, lave-mains...
              </p>
            </div>
          </div>
        </section>

        {/* Images Grid Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Conception sur mesure
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/vestaire1.jpg"
                    alt="Vestiaire moderne avec rangements optimisés"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-white p-6">
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">Rangements personnalisés</h4>
                  <p className="text-gray-600">Solutions adaptées aux besoins spécifiques de chaque environnement contrôlé.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/vestaire2.jpg"
                    alt="Sas avec mobilier intégré"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-white p-6">
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">Design fonctionnel</h4>
                  <p className="text-gray-600">Mobilier conçu pour optimiser les flux et faciliter les procédures.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Normative References Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Références normatives
          </h3>
          <div className="space-y-6">
            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-semibold text-blue-600">
                NF EN ISO 14644-4
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                Préconise la séparation des flux d&apos;entrée et de sortie du personnel dans les salles propres en utilisant un sas. Cette séparation permet d&apos;éviter les croisements potentiellement contaminants. L&apos;entrée et la sortie peuvent être organisées à des moments distincts ou par la création de circuits physiquement indépendants.
              </p>
            </div>
            
            <div className="rounded-lg bg-green-50 p-6">
              <h4 className="mb-3 text-xl font-semibold text-green-600">
                Bonnes Pratiques de Fabrication (BPF)
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                Suggèrent l&apos;utilisation de vestiaires séparés pour l&apos;entrée et la sortie dans les zones à atmosphère contrôlée. Cette mesure vise à réduire les risques de contamination croisée et à renforcer le contrôle environnemental dans les zones critiques.
              </p>
            </div>
          </div>
        </section>

        {/* Personnel Sas Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Sas personnel et vestiaire
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-600">Sas personnel</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Permet d&apos;assurer la maîtrise des risques de contamination générés par les flux de personnel. Zone d&apos;entrée ou de sortie d&apos;environnement maîtrisé, il assure l&apos;isolation entre deux zones de classification différente.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-600">Vestiaire</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Pièce dans laquelle les personnes qui entrent dans une salle propre ou qui en sortent, revêtent ou retirent leurs tenues de salle propre. Fait généralement référence à des locaux non classés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Solutions de Mobilier
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
                          alt={`Solution de mobilier ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <p className="text-lg font-semibold">Solution {index + 1}</p>
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
                        alt={`Solution de mobilier ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-semibold">Solution {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Caractéristiques de nos mobiliers
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold">Rangements optimisés</h4>
                <p className="text-gray-600">Solutions de stockage adaptées aux tenues de protection et équipements individuels.</p>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold">Ergonomie</h4>
                <p className="text-gray-600">Bancs et installations conçus pour faciliter les procédures d&apos;habillage et de déshabillage.</p>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold">Hygiène garantie</h4>
                <p className="text-gray-600">Matériaux et finitions faciles à nettoyer et désinfecter pour maintenir les normes de propreté.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
}

export default VestiairePage;