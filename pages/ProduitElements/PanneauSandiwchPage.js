import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

function PanneauSandiwchPage() {
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
          <h1 className="mb-4 text-5xl font-bold leading-tight   ">
            Panneau sandiwch
          </h1>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="mb-8 text-4xl font-bold"> Panneau sandiwch </h1>
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
            <div>
              <div className="mb-1 h-2 w-24 bg-gray-400"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>
          <div>
            <p className="mb-15 text-lg leading-8">
              Dans la construction des salles blanches, un panneau sandwich est
              un matériau composite utilisé pour créer des surfaces (murs,
              plafonds, cloisons, etc.) ayant des propriétés d’isolation et de
              propreté optimales. Un panneau sandwich est constitué de trois
              couches principales :
              <div>
                <h6 className="mt-4 font-bold ">
                  Deux couches externes rigides :
                </h6>{" "}
                généralement en tôle d’acier, en aluminium ou en stratifié haute
                pression (HPL), elles apportent la solidité et la résistance à
                la surface.

                <h6 className="mt-4 font-bold ">
                  Un noyau isolant central :
                </h6>{" "}
                souvent en matériaux légers et isolants, comme la mousse de
                polyuréthane, de polystyrène expansé (EPS), ou de laine
                minérale, pour offrir une isolation thermique et acoustique.
                <br/>
                <div>
                <Image
            src="/images/Panneauxsandiwch1.PNG"
            alt="Image"
            width={750} // specify width and height for optimization
            height={450}
            className="h-auto max-w-full rounded-md mt-4 "
          />
                </div>
                <br/>
                Fourniture de profilés d’angles horizontaux en PVC. Cela
                comprend aussi la fourniture et la pose de pièces coin de tous
                types au sol et au plafond compatibles avec les profiles
                linéaires de manière à avoir l’aspect règlementaire exigé par
                les standards des salles propres classe D.
              </div>
            </p>
          </div>

          <Image
            src="/images/panneausandiwch2.png"
            alt="Image"
            width={1100} // specify width and height for optimization
            height={900}
            className="h-auto max-w-full rounded-md mt-4 "
          />

          <p className="mt-8 text-lg leading-8">
          Les panneaux sandwich sont couramment utilisés dans les salles blanches car ils permettent :
            <div>
            <h6 className="mt-4 font-bold ">Un contrôle strict de la contamination :</h6> les surfaces lisses et hermétiques empêchent l’accumulation de particules et facilitent le nettoyage.
            <h6 className="mt-4 font-bold ">Une isolation thermique efficace :</h6> essentielle pour maintenir les conditions environnementales contrôlées nécessaires.
            <h6 className="mt-4 font-bold ">Une installation rapide et modulaire :</h6> les panneaux sandwich sont conçus pour être facilement assemblés, ce qui accélère le processus de construction.
            </div>
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

      <div className="pb-15 relative w-[73%] mx-56  p-11">
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
                <div className="relative h-[650px]  ">
                  <img src="/images/PanneauxSandiwch3.PNG.jpg" alt="salle blanche"
                  className="h-full w-full object-cover rounded-2xl"  />
                </div>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/PanneauxSandiwch6.PNG" alt="salle blanche"
              className="h-full w-full object-cover rounded-2xl" 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
  <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
    <img 
      src="/images/PanneauxSandiwch5.PNG" 
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
export default PanneauSandiwchPage;
