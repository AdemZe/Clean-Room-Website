import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

function PlafondPage() {
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
          <h1 className="mb-4 font-serif text-5xl leading-tight   ">
            Faux Plafond
          </h1>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="mb-8 font-mono text-4xl"> Faux Plafond </h1>
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
            <div>
              <div className="mb-1 h-2 w-24 bg-gray-400"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>
          <div>
            <p className="mb-15 text-lg leading-8">
              Les salles blanches CLEAN ROOM Tunisie sont conçues pour garantir
              une intégrité structurelle optimale, offrant un véritable système
              de plafond rigide marchable (Walk-On). Ce type de plafond est doté
              d’une structure autoportante robuste qui permet d’installer
              directement les équipements nécessaires et de faciliter la
              circulation sécurisée du personnel d’entretien. Cette conception
              élimine le besoin de mezzanines, qui peuvent être coûteuses et
              encombrantes, tout en optimisant l’espace disponible.
            </p>
          </div>
          <p className="mt-4 text-lg leading-8">
            L’espace entre le plafond marchable et le plafond suspendu offre un
            accès simplifié aux équipements de contrôle et aux volets de
            répartition du système HVAC (chauffage, ventilation et
            climatisation). Ce design facilite également l’entretien des
            systèmes d’éclairage, permettant une intervention sans compromettre
            la propreté et la stérilité de la salle blanche. Nous proposons une
            gamme étendue de plafonds étanches et accessibles, conçus pour
            s’adapter parfaitement aux configurations spécifiques de votre
            projet. Tous nos plafonds sont conformes aux normes de Bonnes
            Pratiques de Fabrication (GMP), assurant ainsi un environnement
            sécurisé et conforme aux exigences de qualité les plus strictes.{" "}
          </p>
          
          <p className="mt-6 text-lg leading-8">
            <div>
              
            </div>
            Nos panneaux sont disponibles en plusieurs finitions pour répondre aux différents besoins d’installation :
          </p>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Panneaux faux plafond en HPL: </h6>
            </div>
            Équipés de profilés en aluminium fermés sur leurs quatre côtés, ces panneaux offrent une finition intérieure totalement affleurante pour un aspect lisse et hygiénique.
          </p>

          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Panneaux faux plafond avec tolé laquée( Panneaux Sandwich ): </h6>
            </div>
            Ils permettent une finition intérieure semi-affleurante, assurant un assemblage net et facilement nettoyable.
          </p>
          



          <p className="mt-3 text-lg leading-8">
          De plus, nos panneaux peuvent être découpés en usine pour intégrer des diffuseurs d’air et des luminaires, avec un habillage en profilés d’aluminium autour des cadres, offrant ainsi une solution esthétique et fonctionnelle pour chaque salle blanche.
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

      <div className="pb-15 relative w-full mx-56 w-[74%] p-11">
        <Swiper
          className="progress-slide-carousel"
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".progress-slide-carousel .swiper-pagination",
            type: "progressbar",
          }}
        >
          <SwiperSlide>
            <div className="flex h-[700px] items-center justify-center rounded-2xl bg-indigo-50">
              <span className="text-3xl font-semibold text-indigo-600">
                <div className="relative h-full w-full ">
                  <img src="/images/plafond10.jpg" alt="salle blanche" 
                  className="h-full w-full object-cover rounded-2xl" 
                  />
                </div>
              </span>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="flex h-[700px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/plafond2.jpg.JPG" alt="salle blanche"
                 className="h-full w-full object-cover rounded-2xl"  />
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="flex h-[700px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/plafond8.jPG" alt="salle blanche"
              className="h-full w-full object-cover rounded-2xl" 
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-[700px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/plafond5.jpg" alt="salle blanche"
              className="h-full w-full object-cover rounded-2xl" 
              />
            </div>
          </SwiperSlide>




          <SwiperSlide>
            <div className="flex h-[700px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/plafond6.jpg" alt="salle blanche"
                 className="h-full w-full object-cover rounded-2xl"  />
            </div>
          </SwiperSlide>


        </Swiper>
        <div className="swiper-pagination !bottom-2 !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
      </div>
    </div>
  );
}

export default PlafondPage;
