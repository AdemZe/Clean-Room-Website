import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

function PassPlatPage() {
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
            <h1 className="mb-4 font-serif text-5xl leading-tight   ">Pass Plat (Pass Box)</h1>
          </div>
        </div>
  
        <div>
          <div className="mx-auto max-w-4xl p-8">
            <h1 className="mb-8 font-mono text-4xl">
              {" "}
              Pass Plat{" "}
            </h1>
            <div className="mb-6 flex items-center">
              <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
              <div>
                <div className="mb-1 h-2 w-24 bg-gray-400"></div>
                <div className="h-2 w-16 bg-gray-400"></div>
              </div>
            </div>
            <div>
              <p className="mt-3 text-lg leading-8">

              Le passe-plat, aussi appelé sas de transfert, est un dispositif essentiel pour assurer le transfert sécurisé de matériel entre deux zones de niveaux de propreté ou de classes différentes dans les salles blanches. Nous proposons une gamme variée de passe-plats étanches, qu’ils soient standards ou fabriqués sur mesure, avec plusieurs options : modèles à 2 ou 3 portes, verrouillage manuel ou électronique, et diverses dimensions et finitions selon vos besoins.                
                <br/><br/>

              </p>
            </div>

            <div>
            <h3> Caractéristiques techniques </h3>
            <p className="mb-15 text-lg leading-8">
            <ul className="ml-4 list-inside list-disc">
                <li>Dimensions extérieures : 600 x 600 x 600 mm (autres dimensions disponibles sur demande) </li>
                <li>Matériaux : stratifié compact HPL ou fond en acier inoxydable </li>
                <li>Design : oculus bi-affleurant (full flush) et excellente résistance aux produits chimiques et désinfectants </li>
                <li>Système de sécurité : équipé d’un système d’interlock intégré pour empêcher l’ouverture simultanée des portes</li>
                <li>Ventilation : options de surpression ou dépression disponibles</li>
                <li>Fabrication : réalisé dans notre usine pour un contrôle qualité optimal                </li>
            </ul>
            </p>
            </div>
            <br/>




            
            
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
  
        <div className="pb-15 relative w-[70%] mx-56  p-11">
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
              <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
                <span className="text-3xl font-semibold text-indigo-600">
                  <div className="relative h-full w-full ">
                    <img src="/images/pass-plat5.webp" alt="salle blanche" 
                    className="h-full w-full object-cover rounded-2xl"  
                    
                    />
                  </div>  
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
              <div className="relative h-full w-full ">
                <img src="/images/pass-plat6.webp" alt="salle blanche" 
                className="h-full w-full object-cover rounded-2xl" 
                />
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
              <div className="relative h-full w-full ">
                <img src="/images/passbox.jpg" alt="salle blanche" 
                className="h-full w-full object-cover rounded-2xl" 
                />
                </div>
              </div>
            </SwiperSlide>


      </Swiper>
          <div className="swiper-pagination !bottom-2 !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
        </div>
      </div>
    );
  }
export default PassPlatPage;