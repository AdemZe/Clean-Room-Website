import React, { useEffect, useState } from "react";
import Image from "next/image";
import Base from "@layouts/Baseof";

// Import des modules Swiper côté client seulement
const importSwiperModules = () => {
  return Promise.all([
    import("swiper/modules").then((mod) => mod.Autoplay),
    import("swiper/modules").then((mod) => mod.Pagination),
  ]);
};

function SalleBlanchePage() {
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
    "/images/salle-blanche-9.jpg",
    "/images/salle-blanche--14.png",
    "/images/salle-blanche--15.png",
    "/images/salle-blanche-6.png",
  ];

  // Configuration d'autoplay pour votre carousel existant
  const autoplayConfig = {
    delay: 3000,
    disableOnInteraction: false,
  };

  return (
    <Base title="Salle Blanche">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/salle-blanche-header.jpg"
            alt="Salle blanche header"
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
              Salle Blanche
            </h1>
            <p className="text-xl opacity-90">
              Solutions d&apos;environnements contrôlés
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
                Expertise en Salle Blanche
              </h2>
              <p className="text-gray-600">Environnements contrôlés de haute technologie</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                De nombreux secteurs doivent aujourd&apos;hui maîtriser la contamination pour protéger leurs process. 
                Qu&apos;il s&apos;agisse de salles propres ou de laboratoires protégés, une zone contrôlée répond à trois critères : 
                un espace clos délimité, un accès sécurisé par sas, et un système de traitement d&apos;air performant (filtration, surpression/dépression). 
                Selon la norme <strong>ISO 14644-1</strong>, ces environnements régulent la concentration de particules ainsi que la température, l&apos;humidité et la pression.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                La classe d&apos;empoussièrement définit la qualité de l&apos;air selon la quantité et la taille des particules en suspension. 
                La norme ISO classe les salles de <strong>ISO 1 (pureté maximale) à ISO 9</strong>. Cette classification rigoureuse 
                garantit une atmosphère conforme aux exigences de sécurité et de précision les plus strictes.
              </p>
            </div>

            <div className="my-10">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Normes internationales ISO 14 644.1</h3>
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/Normes-ISO-particules-par-metre-cube.jpg"
                  alt="Tableau Normes ISO"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Traitement de l'air Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Traitement de l&apos;air
            </h3>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Le système aéraulique maintient l&apos;environnement selon les besoins du process, du produit, du personnel et de l&apos;environnement.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>Filtration et diffusion de l&apos;air</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>Maintien en surpression ou dépression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>Taux de brassage et recyclage</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>Contrôle des conditions physiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>Élimination des effluents gazeux</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/sallePropreConception .png"
                  alt="Schéma conception salle propre"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Matériel et Équipements Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Matériel et Équipements
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Le mobilier de salle blanche doit allier hygiène, ergonomie et durabilité. Nous privilégions l&apos;acier inoxydable pour sa résistance 
            aux désinfectants. Nos solutions (chariots, bancs, sas) optimisent l&apos;organisation et garantissent la sécurité des opérations 
            dans un environnement de travail confortable.
          </p>
        </section>

        {/* Carousel Section avec VOTRE carousel existant */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
            Conception et montage de votre salle blanche
              
            </h3>
            
            <div className="relative">
              {isClient && Swiper && SwiperSlide && swiperModules.length > 0 ? (
                <div className="progress-slide-carousel" suppressHydrationWarning>
                  <Swiper
                    modules={swiperModules}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={autoplayConfig}
                    pagination={{ 
                      el: ".progress-slide-carousel .swiper-pagination", 
                      type: "progressbar" 
                    }}
                    className="h-[500px] rounded-2xl"
                  >
                    {carouselImages.map((src, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-200 flex items-center justify-center">
                          <Image
                            src={src}
                            alt={`Salle blanche réalisation ${index + 1}`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-pagination !bottom-4 mt-4 !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {carouselImages.map((src, index) => (
                    <div key={index} className="relative h-[300px] overflow-hidden rounded-2xl shadow-2xl bg-gray-200 flex items-center justify-center">
                      <Image
                        src={src}
                        alt={`Salle blanche réalisation ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Accompagnement Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Accompagnement Clean Room Tunisie
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Nous proposons un suivi personnalisé pour garantir l&apos;excellence à chaque phase de votre projet.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">Conseil & Étude</h4>
                  <p className="text-gray-700">Analyse de votre cahier des charges et réalisation de plans détaillés avant lancement.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">Fabrication & Installation</h4>
                  <p className="text-gray-700">Production flexible aux normes et pose sécurisée par des équipes qualifiées respectant vos délais.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">SAV & Qualité</h4>
                  <p className="text-gray-700">Support réactif et matériaux certifiés résistants (corrosion, chocs) pour une performance durable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Évolutives Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Solutions Évolutives et Sur Mesure
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Grâce à notre unité de fabrication flexible, nous adaptons nos structures à tous les volumes. Notre approche 
              &quot;juste à temps&quot; et la pré-fabrication des panneaux réduisent l&apos;encombrement sur site et accélèrent l&apos;installation, 
              assurant une maîtrise complète de vos configurations.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
            Questions fréquentes
          </h3>
          
          <div className="space-y-6">
            <AccordionItem 
              header="Qu'est-ce qu'une salle blanche ?" 
              text="C'est un environnement contrôlé où la température, la pression, l'humidité et la concentration particulaire sont régulées pour protéger vos process." 
            />
            <AccordionItem 
              header="Pourquoi externaliser la conception ?" 
              text="L'externalisation permet de bénéficier d'une expertise normative, de réduire les coûts internes et d'assurer une flexibilité maximale." 
            />
            <AccordionItem 
              header="Quels sont les secteurs concernés ?" 
              text="Pharmaceutique, cosmétique, médical, électronique, agroalimentaire et aéronautique sont les principaux utilisateurs." 
            />
            <AccordionItem 
              header="Quel est le coût d'une installation ?" 
              text="Le coût dépend de la classification ISO souhaitée, de la surface et des contraintes techniques spécifiques de votre bâtiment." 
            />
          </div>
        </section>
      </main>
    </Base>
  );
}

export default SalleBlanchePage;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <button 
        className="flex w-full text-left items-center justify-between" 
        onClick={() => setActive(!active)}
      >
        <h4 className="text-lg font-semibold text-gray-900">{header}</h4>
        <div className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-transform ${active ? "rotate-180" : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${active ? "max-h-96 mt-4" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};