import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
function PortesPage() {
  const [showToTopButton, setShowToTopButton] = useState(false);

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="relative h-[470px] overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/PanneauHplHeader.jpg"
            alt=" salle blanche header Background"
            class="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 ml-10 flex h-full flex-col items-start justify-end text-center ">
          <h1 className="mb-4 font-serif text-5xl leading-tight   ">Portes</h1>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="mb-8 font-mono text-4xl">
            {" "}
            Portes de salles blanches{" "}
          </h1>
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
            <div>
              <div className="mb-1 h-2 w-24 bg-gray-400"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>
          <div>
            <p className="mb-15 text-lg leading-8">
              Les portes de salle blanche de CLEAN ROOM Tunisie peuvent être
              configurées en version simple ou double battant, ou encore en
              modèle coulissant horizontal, avec des options automatiques ou
              semi-automatiques. Les panneaux de porte sont assemblés avec les
              mêmes panneaux utilisés dans le système mural pour une intégration
              harmonieuse. Les portes escamotables pour salles blanches sont
              conçues pour s’adapter de chaque côté du système de panneaux
              muraux et sont disponibles dans une large gamme de dimensions.
              <br/><br/>
              Les cadres extérieurs sont fabriqués en profilés d’aluminium
              anodisé ou avec un revêtement époxy arrondi, intégrant des joints
              doubles pour une étanchéité optimale. Les attaches pour les
              charnières et les loquets peuvent être encastrées dans le cadre de
              la porte, tandis que les charnières standard permettent une
              rotation à 180° de la position ouverte à complètement fermée.
              <br/><br/>
              Les portes de salle blanche de CLEAN ROOM Tunisie sont également
              disponibles avec un profil d’interfaçage permettant une
              installation affleurante et simplifiée sur des murs existants.
              <ul className="ml-4 list-inside list-disc">
                <li>L’étanchéité à l’air</li>
                <li>Une grande variété de portes pharmaceutiques</li>
                <li>
                  Portes coulissantes semi-automatiques et entièrement
                  automatiques
                </li>
                <li>
                  Charnières uniques assurant une longue durée de vie et une
                  régulation à 3 axes
                </li>
                <li>
                  Compatibilité totale avec les produits chimiques utilisés pour
                  le nettoyage et la désinfection
                </li>
              </ul>
            </p>
          </div>
            <img src="/images/portesConception.png" alt=""/>
            <br/>
          <h4 className="mt-9"> Portes Roulantes </h4>
          <p className="mt-3 text-lg leading-8">
            Le succès mondial de ces portes repose sur leur grande fiabilité,
            leur prix compétitif et leur facilité d’entretien. CLEAN ROOM
            Tunisie a introduit cette qualité sur le marché en perfectionnant
            les portes enroulables commerciales, en intégrant des matériaux de
            haute performance et des systèmes d’étanchéité innovants.
          </p>
          <p className="mt-3 text-lg leading-8">
            <ul className="ml-4 list-inside list-disc">
              <li>Système d’étanchéité unique</li>
              <li>Haute résistance aux pressions différentielles</li>
              <li>Système d’enroulement à grande vitesse</li>
              <li>
                Construction et matériaux exposés résistant aux agents de
                nettoyage et d’assainissement
              </li>
              <li>Système unique de sécurité de barrière lumineuse</li>
              <li>Portes de salle blanche idéales</li>
            </ul>
          </p>

          <h4 className="mt-10"> Système d’interblocage</h4>
          <p className="mt-3 text-lg leading-8">
          CLEAN ROOM Tunisie fournit contrôles daccès du système de verrouillage à deux
            portes au plus au système très complexe:
          </p>
          <p className="mt-3 text-lg leading-8">
          <ul className="ml-4 list-inside list-disc">
              <li>Système de verrouillage magnétique et mécanique</li>
              <li>Flush aux murs et aux cadres de porte</li>
              <li>Système d’accès biométrique</li>
              <li>
              Affichage de l’état des salles blanches, statistiques et rapports du serveur central.
              </li>
              <li>Lecteurs de cartes</li>
              <li>Capteurs sans contact</li>
            </ul>
          </p>

          
        </div>

        {/* 'To Top' button */}
        {showToTopButton && (
          <button
            onClick={goToTop}
            title="Go To Top"
            className="fixed bottom-10 right-10 z-50 h-14 w-14 rounded-full border-0 bg-purple-600 p-3 text-lg font-semibold text-white shadow-md transition-colors duration-300 hover:bg-purple-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-7  "
            >
              <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
            </svg>
            <span className="sr-only">Go to top</span>
          </button>
        )}
      </div>

      <div className="pb-15  relative w-[75%] mx-48 p-11">
  <Swiper
    className="progress-slide-carousel"
    loop={true}
    autoplay={{
      delay: 1100,
      disableOnInteraction: false,
    }}
    pagination={{
      el: ".progress-slide-carousel .swiper-pagination",
      type: "progressbar",
    }}
  >
    <SwiperSlide>
      <div className="flex h-[630px] items-center justify-center rounded-2xl bg-indigo-50">
        <span className="text-3xl font-semibold text-indigo-600">
          <div className="relative h-full w-full">
            <img
              src="/images/portesSalle1.JPG"
              alt="salle blanche"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </span>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex h-[630px] items-center justify-center rounded-2xl bg-indigo-50">
        <img
          src="/images/portesSalle3.JPG"
          alt="salle blanche"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex h-[630px] items-center justify-center rounded-2xl bg-indigo-50">
        <img
          src="/images/portesSalle4.JPG"
          alt="salle blanche"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex h-[630px] items-center justify-center rounded-2xl bg-indigo-50">
        <img
          src="/images/portesSalle5.JPG"
          alt="salle blanche"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex h-[630px] items-center justify-center rounded-2xl bg-indigo-50">
        <img
          src="/images/portesSalle8.JPG"
          alt="salle blanche"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex h-[630px] items-center justify-center rounded-2xl bg-indigo-50">
        <img
          src="/images/portes9.JPG"
          alt="salle blanche"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </SwiperSlide>
  </Swiper>
  <div className="swiper-pagination !bottom-2 !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
</div>

    </div>
  );
}

export default PortesPage;
