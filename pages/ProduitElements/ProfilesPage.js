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

function ProfilesPage() {
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
    "/images/profiles4.JPG",
    "/images/profiles5.JPG",
    "/images/profiles3.JPG",
    "/images/profiles2.JPG",
    "/images/profile1.jpg",
    "/images/profile9.jpg",
    "/images/profile7.jpg",
  ];

  // Configuration d'autoplay
  const autoplayConfig = {
    delay: 1700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  const profileTypes = [
    {
      title: "Profils de jonction",
      function: "Connectent et maintiennent les panneaux entre eux (murs, plafonds ou cloisons)",
      details: "Ils garantissent une jonction solide, stable et étanche entre les panneaux pour éviter toute infiltration d'air, de poussière ou de contaminants."
    },
    {
      title: "Profils d'angle",
      function: "Joignent les panneaux aux coins et assurent une transition propre et arrondie",
      details: "Les angles sont souvent arrondis pour faciliter le nettoyage, empêchant l'accumulation de particules et réduisant le risque de contamination."
    },
    {
      title: "Profils de finition",
      function: "Servent à sceller et protéger les extrémités des panneaux et autres éléments visibles",
      details: "Ils offrent une apparence uniforme, en masquant les bordures des panneaux, tout en apportant une finition esthétique et une surface lisse sans recoins."
    },
    {
      title: "Profils de plafond suspendu",
      function: "Servent de support pour les panneaux de plafond et permettent l'intégration d'équipements",
      details: "Ils offrent une structure modulaire qui facilite l'accès aux systèmes de ventilation et d'éclairage, avec des systèmes de verrouillage pour éviter les fuites d'air."
    },
    {
      title: "Profils pour portes et fenêtres",
      function: "Assurent l'encadrement et l'étanchéité des ouvertures (portes, fenêtres)",
      details: "Ils créent une transition nette et permettent de maintenir les normes de propreté et d'étanchéité autour des points d'accès."
    }
  ];

  return (
    <Base title="Les Profils">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.jpg"
            alt="Profils aluminium - Header"
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
              Les Profils Aluminium
            </h1>
            <p className="text-xl opacity-90">
              Éléments structuraux essentiels pour salles blanches
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
                Profils Aluminium
              </h2>
              <p className="text-gray-600">Systèmes de jonction et de finition</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Dans le contexte des salles blanches, les profils aluminium sont
              des éléments structurels et de finition utilisés pour assembler,
              renforcer et sceller les panneaux et autres composants des
              cloisons, plafonds, sols, et encadrements de portes et fenêtres.
              Ils jouent un rôle crucial dans la création d&apos;un environnement
              étanche, stable et facilement nettoyable, ce qui est essentiel
              pour respecter les normes strictes de contrôle de la contamination.
            </p>
          </div>
        </section>

        {/* Main Image Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-[500px]">
                <Image
                  src="/images/ProfilePicture.png"
                  alt="Types de profils aluminium"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg font-semibold text-gray-800">
                Voici les types de profils et leurs fonctions principales dans une salle blanche :
              </p>
            </div>
          </div>
        </section>

        {/* Profile Types Section */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {profileTypes.map((profile, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <h3 className="mb-4 text-xl font-bold text-blue-700">
                  {profile.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Fonction
                    </h4>
                    <p className="text-gray-700">
                      {profile.function}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Détails
                    </h4>
                    <p className="text-gray-700">
                      {profile.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Les profils sont essentiels dans la conception et la maintenance des salles blanches, 
              car ils garantissent non seulement la stabilité structurelle mais aussi le respect 
              des normes d&apos;hygiène et d&apos;étanchéité nécessaires pour le contrôle de la contamination.
            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations avec Profils Aluminium
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
                          alt={`Application profil aluminium ${index + 1}`}
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
                        alt={`Application profil aluminium ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-semibold">Application {index + 1}</p>
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

export default ProfilesPage;