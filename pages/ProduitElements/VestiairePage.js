import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
function VestiairePage() {
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
            <h1 className="mb-4 font-serif text-5xl leading-tight   "> Mobilier de sas et de vestiaires </h1>
          </div>
        </div>
  
        <div>
          <div className="mx-auto max-w-4xl p-8">
            <h1 className="mb-8 font-mono text-4xl">
              {" "}
              {" "}
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

              Le sas est une zone de transit des flux entrants et/ou sortants assurant l’isolement entre deux zones d’environnements différents. Il participe à l’efficacité globale des salles propres qu’il dessert.

Nous vous accompagnons dans l’agencement de vos sas et de vos vestiaires, et vous proposons une gamme complète de mobilier adapté à vos besoins : rangements, bancs, lave-mains…                <br/><br/>

              </p>
            </div>

            <div>
            <h3 className="" > Références normatives </h3>
            <p className="mt-3 text-lg leading-8">
            Les normes NF EN ISO 14644-4 préconisent de séparer les flux d’entrée et de sortie du personnel dans les salles propres en utilisant un sas. Cette séparation permet d’éviter les croisements potentiellement contaminants. Pour ce faire, l’entrée et la sortie peuvent être organisées à des moments distincts ou bien par la création de circuits physiquement indépendants, garantissant ainsi une gestion optimisée des flux de personnel et de la propreté des zones sensibles.
           <br/><br/>
De plus, les Bonnes Pratiques de Fabrication (BPF) suggèrent que l’utilisation de vestiaires séparés pour l’entrée et la sortie dans les zones à atmosphère contrôlée peut être préférable. Cette mesure vise à réduire les risques de contamination croisée et à renforcer le contrôle environnemental dans les zones critiques, contribuant ainsi au maintien d’un haut niveau de propreté.
            </p>
            </div>



            <br/>

 <div>
            <h3 className="" > Sas personnel et vestiaire            </h3>
            <p className="mt-3 text-lg leading-8">
            Le sas personnel permet d’assurer la maîtrise des risques de contamination générés par les flux de personnel.

Le vestiaire quant à lui est une pièce dans laquelle les personnes qui entrent dans une salle propre ou qui en sortent, revêtent ou retirent leurs tenues de salle propre.           <br/><br/>
Le terme vestiaire fait en général référence à des locaux non classés alors que celui de sas personnel fait référence à une zone d’entrée ou de sortie d’environnement maîtrisé.            </p>
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
  
        <div className="pb-15 relative w-full   p-11">
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
              <div className="flex h-96 items-center justify-center rounded-2xl bg-indigo-50">
                <span className="text-3xl font-semibold text-indigo-600">
                  <div className="relative h-96 w-full ">
                    <img src="/images/salle-blanche-1.jpg" alt="salle blanche" />
                  </div>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center rounded-2xl bg-indigo-50">
                <img src="/images/salle-blanche-2.jpg" alt="salle blanche" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center rounded-2xl bg-indigo-50">
                <img src="/images/salle-blanche-3.jPG" alt="salle blanche" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center rounded-2xl bg-indigo-50">
                <img src="/images/salle-blanche-4.jPG" alt="salle blanche" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center rounded-2xl bg-indigo-50">
                <img src="/images/salle-blanche-6.jPG" alt="salle blanche" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination !bottom-2 !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
        </div>
      </div>
    );
  }

export default VestiairePage