import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Modification ici
import Image from "next/image";
import Base from "@layouts/Baseof";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function PanneauSandwichPage() {
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
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
    "/images/PanneauxSandiwch7.PNG",
    "/images/PanneauxSandwich8.webp",
    "/images/panneauHpl4.JPG",
    "/images/HI.07-1024x768.jpg",
  ];

  return (
    <Base title="Panneau Sandwich">
      {/* Header Section */}
      <header className="relative h-[470px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="public/images/PanneauHplHeader.JPG"
            alt="Panneau Sandwich - Header"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Panneau Sandwich
            </h1>
            <p className="text-xl opacity-90">
              Matériaux composites pour salles blanches
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
                Panneau Sandwich
              </h2>
              <p className="text-gray-600">Matériau composite pour salles blanches</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Dans la construction des salles blanches, un panneau sandwich est
              un matériau composite utilisé pour créer des surfaces (murs,
              plafonds, cloisons, etc.) ayant des propriétés d&apos;isolation et de
              propreté optimales.
            </p>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Structure du Panneau Sandwich
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-blue-600">
                    Deux couches externes rigides
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Généralement en tôle d&apos;acier, en aluminium ou en stratifié haute
                    pression (HPL), elles apportent la solidité et la résistance à
                    la surface.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-xl font-semibold text-blue-600">
                    Un noyau isolant central
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Souvent en matériaux légers et isolants, comme la mousse de
                    polyuréthane, de polystyrène expansé (EPS), ou de laine
                    minérale, pour offrir une isolation thermique et acoustique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image Section */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-[500px]">
                <Image
                  src="public/images/PanneauxSandiwch1.PNG"
                  alt="Structure du panneau sandwich"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
            </div>
            
            <div className="mt-12 overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-[500px]">
                <Image
                  src="/images/panneausandiwch2.png"
                  alt="Application des panneaux sandwich"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Fourniture de profilés d&apos;angles horizontaux en PVC. Cela
                comprend aussi la fourniture et la pose de pièces coin de tous
                types au sol et au plafond compatibles avec les profiles
                linéaires de manière à avoir l&apos;aspect règlementaire exigé par
                les standards des salles propres classe D.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <h3 className="mb-8 text-2xl font-semibold text-gray-800">
            Avantages des Panneaux Sandwich
          </h3>
          
          <div className="space-y-6">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
              <h4 className="mb-2 text-xl font-semibold text-blue-700">
                Contrôle strict de la contamination
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                Les surfaces lisses et hermétiques empêchent l&apos;accumulation de
                particules et facilitent le nettoyage.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
              <h4 className="mb-2 text-xl font-semibold text-green-700">
                Isolation thermique efficace
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                Essentielle pour maintenir les conditions environnementales
                contrôlées nécessaires.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
              <h4 className="mb-2 text-xl font-semibold text-purple-700">
                Installation rapide et modulaire
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                Les panneaux sandwich sont conçus pour être facilement assemblés,
                ce qui accélère le processus de construction.
              </p>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Nos Réalisations en Panneau Sandwich
            </h3>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}

                breakpoints={{
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
                        alt={`Installation panneau sandwich ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-semibold">
                          Projet {index + 1}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="mt-8 flex justify-center">
                <div className="swiper-pagination !relative !bottom-0 !h-1 !w-64" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
}

export default PanneauSandwichPage;