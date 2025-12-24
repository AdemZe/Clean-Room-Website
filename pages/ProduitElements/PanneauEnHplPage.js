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

function PanneauEnHplPage() {
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
    "/images/panneauHpl2.JPG",
    "/images/panneauHpl3.JPG",
    "/images/panneauHpl5.JPG",
    "/images/panneauHpl6.JPG",
  ];

  // Configuration d'autoplay
  const autoplayConfig = {
    delay: 1700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <Base title="Panneau HPL">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/PanneauHplHeader.jpg"
            alt="Panneau HPL - Header"
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
              Panneau en HPL
            </h1>
            <p className="text-xl opacity-90">
              Solutions techniques pour locaux propres et stériles
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
                Panneau en HPL
              </h2>
              <p className="text-gray-600">Gamme compact HPL</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Gamme compact HPL
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Nous avons développé une gamme complète de panneaux et solutions
                de doublage en compact HPL. Le compact HPL répond parfaitement à
                la demande de performance, d&apos;ergonomie, de modularité et de
                longévité des locaux propres, stériles et confinés.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Panneaux
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Le panneau compact HPL est un complexe autoporteur fermé 4 bords
                par profil alu, composé de parements en compact HPL d&apos;une
                épaisseur de 4 mm collés sur une âme laine de roche (M0) ou
                polyuréthane (M1), conforme à la norme NF T54/324. Les panneaux
                permettent l&apos;intégration des terminaisons fonctionnelles et
                techniques en affleurement (prises de courants, fluides,
                écrans…) pour une intégrité parfaite et un niveau de propreté ou
                stérilité garanti.
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
                    src="/images/panneauHpl1.png"
                    alt="Détail technique panneau HPL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/panneauHpl5.png"
                    alt="Installation panneau HPL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Méthodes d&apos;assemblage
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-600">
              Liaison panneau / sol
            </h4>
            <p className="text-lg leading-relaxed text-gray-700">
              Le profil aluminium permet d&apos;assurer une parfaite liaison avec le
              sol grâce à une remontée du sol (PVC ou résine) de manière
              affleurante.
            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations en Panneau HPL
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
                      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src={src}
                          alt={`Projet panneau HPL ${index + 1}`}
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
                        alt={`Projet panneau HPL ${index + 1}`}
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

export default PanneauEnHplPage;