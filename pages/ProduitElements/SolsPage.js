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

function SolsPage() {
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
  }, []);

  const carouselImages = [
    "/images/Sol1.jpg",
    "/images/Soll5.jpg",
    "/images/salle-blanche-3.jPG",
  ];

  // Configuration d'autoplay
  const autoplayConfig = {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Base title="Revêtement Sol">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.JPG"
            alt="Revêtement Sol - Header"
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
              Revêtement Sol
            </h1>
            <p className="text-xl opacity-90">
              Solutions de sols pour environnements contrôlés
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
                Revêtement Sol
              </h2>
              <p className="text-gray-600">Solutions pour salles propres</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                Le revêtement de sol est l&apos;une des surfaces les plus sollicitées
                dans une salle propre, et sa sélection exige une expertise
                spécifique. CLEAN ROOM Tunisie bénéficie d&apos;une vaste expérience
                dans l&apos;intégration de différents types de revêtements de sol
                adaptés aux systèmes de cloisons et de portes.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Matériaux et Solutions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Nous proposons des revêtements en PVC de haute qualité ou en
                résine époxy, conformes aux normes strictes des environnements
                contrôlés. Nos solutions incluent des remontées de sol
                soigneusement conçues pour s&apos;adapter parfaitement aux
                revêtements sélectionnés, formant ainsi une couche monolithique
                sans joint apparent.
              </p>
            </div>
          </div>
        </section>

        {/* Images Grid */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/Sol1.jpg"
                    alt="Revêtement sol PVC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">PVC Haute Qualité</h4>
                  <p className="text-gray-600">Revêtement durable et facile d&apos;entretien</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/Sol3.jpg"
                    alt="Revêtement sol résine époxy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">Résine Époxy</h4>
                  <p className="text-gray-600">Surface parfaitement étanche et résistante</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Avantages des revêtements proposés
          </h3>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              Cette configuration garantit une surface lisse, facile à
              nettoyer et sans rebord, contribuant au maintien de la propreté
              et de l&apos;intégrité des salles blanches. Le matériau de
              revêtement que nous proposons répond non seulement aux
              exigences des utilisateurs, mais les dépasse souvent, offrant
              une durabilité accrue et une résistance optimale pour un usage
              prolongé.
            </p>
          </div>
        </section>

        {/* Materials Comparison Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
              Comparaison des Matériaux
            </h3>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    PVC Haute Qualité
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Résistance chimique élevée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Installation rapide et propre</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Confort acoustique</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                    <svg className="h-7 w-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Résine Époxy
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Surface parfaitement étanche</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Résistance mécanique exceptionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Adaptabilité aux formes complexes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations de Sols
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
                          alt={`Revêtement sol - Projet ${index + 1}`}
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
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {carouselImages.map((src, index) => (
                    <div key={index} className="relative h-[300px] overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={src}
                        alt={`Revêtement sol - Projet ${index + 1}`}
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

        {/* Additional Features Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
              Avantages Complémentaires
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-lg text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">
                  Surface Monolithique
                </h4>
                <p className="text-gray-600">
                  Sans joints apparents pour une étanchéité parfaite
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">
                  Facilité de Nettoyage
                </h4>
                <p className="text-gray-600">
                  Surface lisse et sans rebords pour un entretien optimal
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">
                  Durabilité Accrue
                </h4>
                <p className="text-gray-600">
                  Résistance optimale pour un usage prolongé
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
}

export default SolsPage;