import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Base from "@layouts/Baseof";

// Import dynamique pour éviter les problèmes SSR
const SwiperComponent = dynamic(() => import("swiper/react"), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-gray-100 rounded-2xl animate-pulse"></div>,
});

function PortesPage() {
  const [showToTopButton, setShowToTopButton] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [Swiper, setSwiper] = useState(null);
  const [SwiperSlide, setSwiperSlide] = useState(null);
  const [swiperModules, setSwiperModules] = useState({});
  const [swiperKey, setSwiperKey] = useState(0); // Clé pour forcer le re-render
  const swiperRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    
    // Charger Swiper uniquement côté client
    if (typeof window !== "undefined") {
      // Importer les styles Swiper
      import("swiper/css");
      import("swiper/css/pagination");
      import("swiper/css/autoplay");
      
      // Charger les composants Swiper
      Promise.all([
        import("swiper/react"),
        import("swiper/modules")
      ]).then(([swiperReact, swiperModules]) => {
        setSwiper(() => swiperReact.Swiper);
        setSwiperSlide(() => swiperReact.SwiperSlide);
        setSwiperModules({
          Autoplay: swiperModules.Autoplay,
          Pagination: swiperModules.Pagination
        });
        // Forcer un re-render après chargement
        setSwiperKey(prev => prev + 1);
      }).catch(error => {
        console.error("Error loading Swiper:", error);
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
    "/images/portesSalle1.JPG",
    "/images/portesSalle3.JPG",
    "/images/portesSalle4.JPG",
    "/images/portesSalle5.JPG",
    "/images/portesSalle8.JPG",
    "/images/portes9.JPG",
  ];

  return (
    <Base title="Portes de Salles Blanches">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.jpg"
            alt="Portes de Salles Blanches - Header"
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
              Portes de Salles Blanches
            </h1>
            <p className="text-xl opacity-90">
              Solutions d&apos;accès pour environnements contrôlés
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        {/* Introduction Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Portes de Salles Blanches
              </h2>
              <p className="text-gray-600">
                Solutions intégrées pour environnements contrôlés
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                Les portes de salle blanche de CLEAN ROOM Tunisie peuvent être
                configurées en version simple ou double battant, ou encore en
                modèle coulissant horizontal, avec des options automatiques ou
                semi-automatiques. Les panneaux de porte sont assemblés avec les
                mêmes panneaux utilisés dans le système mural pour une intégration
                harmonieuse.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Les portes escamotables pour salles blanches sont conçues pour
                s&apos;adapter de chaque côté du système de panneaux muraux et sont
                disponibles dans une large gamme de dimensions.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Caractéristiques Techniques
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Les cadres extérieurs sont fabriqués en profilés d&apos;aluminium
                anodisé ou avec un revêtement époxy arrondi, intégrant des joints
                doubles pour une étanchéité optimale. Les attaches pour les
                charnières et les loquets peuvent être encastrées dans le cadre de
                la porte, tandis que les charnières standard permettent une
                rotation à 180° de la position ouverte à complètement fermée.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Compatibilité et Installation
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Les portes de salle blanche de CLEAN ROOM Tunisie sont également
                disponibles avec un profil d&apos;interfaçage permettant une
                installation affleurante et simplifiée sur des murs existants.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
              Avantages Clés
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">L&apos;étanchéité à l&apos;air</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Une grande variété de portes pharmaceutiques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Portes coulissantes semi-automatiques et entièrement automatiques</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Charnières uniques assurant une longue durée de vie et une régulation à 3 axes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Compatibilité totale avec les produits chimiques utilisés pour le nettoyage et la désinfection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-[500px]">
              <Image
                src="/images/portesConception.png"
                alt="Conception technique des portes de salles blanches"
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        </section>

        {/* Rolling Doors Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Portes Roulantes
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Le succès mondial de ces portes repose sur leur grande fiabilité,
                leur prix compétitif et leur facilité d&apos;entretien. CLEAN ROOM
                Tunisie a introduit cette qualité sur le marché en perfectionnant
                les portes enroulables commerciales, en intégrant des matériaux de
                haute performance et des systèmes d&apos;étanchéité innovants.
              </p>

              <div className="rounded-xl bg-white p-6 shadow-lg">
                <ul className="grid gap-3 md:grid-cols-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Système d&apos;étanchéité unique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Haute résistance aux pressions différentielles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Système d&apos;enroulement à grande vitesse</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Construction et matériaux exposés résistant aux agents de nettoyage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Système unique de sécurité de barrière lumineuse</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Portes de salle blanche idéales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interlock System Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Système d&apos;Interblocage
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              CLEAN ROOM Tunisie fournit des systèmes de contrôle d&apos;accès, du
              système de verrouillage à deux portes au système très complexe.
            </p>

            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Système de verrouillage magnétique et mécanique</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Flush aux murs et aux cadres de porte</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Système d&apos;accès biométrique</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Affichage de l&apos;état des salles blanches, statistiques et rapports du serveur central</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Lecteurs de cartes</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Capteurs sans contact</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Carousel Section - Version optimisée */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations de Portes
            </h3>
            
            <div className="relative">
              {isClient && Swiper && SwiperSlide && swiperModules.Autoplay && swiperModules.Pagination ? (
                <div key={swiperKey} className="relative">
                  <Swiper
                    ref={swiperRef}
                    modules={[swiperModules.Autoplay, swiperModules.Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
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
                    style={{
                      '--swiper-pagination-color': '#2563eb',
                      '--swiper-pagination-bullet-inactive-color': '#999999',
                      '--swiper-pagination-bullet-inactive-opacity': '1',
                      '--swiper-pagination-bullet-size': '8px',
                      '--swiper-pagination-bullet-horizontal-gap': '4px'
                    }}
                  >
                    {carouselImages.map((src, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                          <Image
                            src={src}
                            alt={`Porte de salle blanche - Projet ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-lg font-semibold">Projet {index + 1}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Pagination personnalisée */}
                  <div className="mt-8 flex justify-center">
                    <div className="swiper-pagination !relative !bottom-0 !h-1 !w-64 rounded-full bg-gray-200 overflow-hidden">
                      <div className="swiper-pagination-progressbar-fill !bg-blue-600"></div>
                    </div>
                  </div>
                </div>
              ) : (
                // Fallback pour SSR
                <div className="grid gap-6 md:grid-cols-2">
                  {carouselImages.slice(0, 4).map((src, index) => (
                    <div key={index} className="relative h-[300px] overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={src}
                        alt={`Porte de salle blanche - Projet ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-semibold">Projet {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
}

export default PortesPage;