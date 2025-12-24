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

function PlafondPage() {
  const [showToTopButton, setShowToTopButton] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [swiperModules, setSwiperModules] = useState([]);
  const [Swiper, setSwiper] = useState(null);
  const [SwiperSlide, setSwiperSlide] = useState(null);

  useEffect(() => {
    setIsClient(true);
    
    // Charger Swiper uniquement côté client
    if (typeof window !== "undefined") {
      // Charger les styles CSS de Swiper
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
    "/images/plafond10.jpg",
    "/images/plafond2.jpg.JPG",
    "/images/plafond8.jPG",
    "/images/plafond5.jpg",
    "/images/plafond6.jpg",
  ];

  // Configuration d'autoplay
  const autoplayConfig = {
    delay: 1700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Base title="Faux Plafond">
      {/* Header Section - Style moderne */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.jpg"
            alt="Faux Plafond - Header"
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
              Faux Plafond
            </h1>
            <p className="text-xl opacity-90">
              Solutions de plafond rigide marchable pour salles blanches
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
                Faux Plafond
              </h2>
              <p className="text-gray-600">Système de plafond rigide marchable</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                Les salles blanches CLEAN ROOM Tunisie sont conçues pour garantir
                une intégrité structurelle optimale, offrant un véritable système
                de plafond rigide marchable (Walk-On). Ce type de plafond est doté
                d&apos;une structure autoportante robuste qui permet d&apos;installer
                directement les équipements nécessaires et de faciliter la
                circulation sécurisée du personnel d&apos;entretien. Cette conception
                élimine le besoin de mezzanines, qui peuvent être coûteuses et
                encombrantes, tout en optimisant l&apos;espace disponible.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                L&apos;espace entre le plafond marchable et le plafond suspendu offre un
                accès simplifié aux équipements de contrôle et aux volets de
                répartition du système HVAC (chauffage, ventilation et
                climatisation). Ce design facilite également l&apos;entretien des
                systèmes d&apos;éclairage, permettant une intervention sans compromettre
                la propreté et la stérilité de la salle blanche.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                Nous proposons une gamme étendue de plafonds étanches et accessibles,
                conçus pour s&apos;adapter parfaitement aux configurations spécifiques de votre
                projet. Tous nos plafonds sont conformes aux normes de Bonnes
                Pratiques de Fabrication (GMP), assurant ainsi un environnement
                sécurisé et conforme aux exigences de qualité les plus strictes.
              </p>
            </div>
          </div>
        </section>

        {/* Panneau Types Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              Finitions disponibles
            </h3>
            <p className="mb-8 text-lg text-gray-700">
              Nos panneaux sont disponibles en plusieurs finitions pour répondre aux différents besoins d&apos;installation :
            </p>

            <div className="space-y-8">
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h4 className="mb-4 text-xl font-bold text-blue-700">
                  Panneaux faux plafond en HPL
                </h4>
                <p className="text-lg text-gray-700">
                  Équipés de profilés en aluminium fermés sur leurs quatre côtés, ces panneaux offrent une finition intérieure totalement affleurante pour un aspect lisse et hygiénique.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h4 className="mb-4 text-xl font-bold text-blue-700">
                  Panneaux faux plafond avec tolé laquée (Panneaux Sandwich)
                </h4>
                <p className="text-lg text-gray-700">
                  Ils permettent une finition intérieure semi-affleurante, assurant un assemblage net et facilement nettoyable.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                <p className="text-lg text-gray-700">
                  De plus, nos panneaux peuvent être découpés en usine pour intégrer des diffuseurs d&apos;air et des luminaires, avec un habillage en profilés d&apos;aluminium autour des cadres, offrant ainsi une solution esthétique et fonctionnelle pour chaque salle blanche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section - Version améliorée */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations de Faux Plafonds
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
                          alt={`Installation faux plafond ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <p className="text-lg font-semibold">Installation {index + 1}</p>
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
                        alt={`Installation faux plafond ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-semibold">Installation {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-lg">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-800">Conforme GMP</h4>
                <p className="text-gray-600">Normes de Bonnes Pratiques de Fabrication</p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-lg">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-800">Plafond Marchable</h4>
                <p className="text-gray-600">Structure autoportante robuste et sécurisée</p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-white p-6 text-center shadow-lg">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-800">Accès Facile</h4>
                <p className="text-gray-600">Accès simplifié aux systèmes HVAC et éclairage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Advantages Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
              Avantages Techniques
            </h3>
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Élimination des mezzanines coûteuses</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Optimisation de l&apos;espace disponible</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Intégration facile des diffuseurs d&apos;air et luminaires</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Finition hygiénique et facile à nettoyer</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-3 mt-1 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Conception modulaire adaptable à tous les projets</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
}

export default PlafondPage;