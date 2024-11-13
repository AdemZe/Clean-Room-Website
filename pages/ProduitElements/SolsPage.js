import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

function SolsPage() {
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
            <h1 className="mb-4 font-serif text-5xl leading-tight   ">Revêtement Sol</h1>
          </div>
        </div>
  
        <div>
          <div className="mx-auto max-w-4xl p-8">
            <h1 className="mb-8 font-mono text-4xl">
              {" "}
              Revêtement Sol{" "}
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

              Le revêtement de sol est l’une des surfaces les plus sollicitées dans une salle propre, et sa sélection exige une expertise spécifique. CLEAN ROOM Tunisie bénéficie d’une vaste expérience dans l’intégration de différents types de revêtements de sol adaptés aux systèmes de cloisons et de portes.
                <br/><br/>
                Nous proposons des revêtements en PVC de haute qualité ou en résine époxy, conformes aux normes strictes des environnements contrôlés. Nos solutions incluent des remontées de sol soigneusement conçues pour s’adapter parfaitement aux revêtements sélectionnés, formant ainsi une couche monolithique sans joint apparent. Cette configuration garantit une surface lisse, facile à nettoyer et sans rebord, contribuant au maintien de la propreté et de l’intégrité des salles blanches. Le matériau de revêtement que nous proposons répond non seulement aux exigences des utilisateurs, mais les dépasse souvent, offrant une durabilité accrue et une résistance optimale pour un usage prolongé.
                <br/><br/>

              </p>
            </div>
            
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
  
        <div className="pb-15 relative w-[80%]  mx-40 p-11">
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
              <div className="flex h-[540px] items-center justify-center rounded-2xl bg-indigo-50">
                <span className="text-3xl font-semibold text-indigo-600">
                  <div className="relative h-fumm w-full ">
                    <img src="/images/Sol1.jpg" alt="salle blanche" 
                     className="h-full w-full object-cover rounded-2xl"/>
                  </div>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-[540px] items-center justify-center rounded-2xl bg-indigo-50">
                <img src="/images/Sol3.jpg" alt="salle blanche" 
                className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-[540px] items-center justify-center rounded-2xl bg-indigo-50">
                <img src="/images/salle-blanche-3.jPG" alt="salle blanche"
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

export default SolsPage;