import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination]);
function PanneauEnHplPage() {
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
            Panneau en HPL
          </h1>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="mb-8 text-4xl font-bold"> Panneau en HPL </h1>
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
            <div>
              <div className="mb-1 h-2 w-24 bg-gray-400"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>
          <div>
            <h3> Gamme compact HPL </h3>
            <p className="mb-15 text-lg leading-8">
              Nous avons développé une gamme complète de panneaux et solutions
              de doublage en compact HPL. Le compact HPL répond parfaitement à
              la demande de performance, d’ergonomie, de modularité et de
              longévité des locaux propres, stériles et confinés.
            </p>
            <div className="mb-2">
              <div className=" mt-9 p-2">
                <h3> Panneaux </h3>
              </div>
              <br />
            </div>
          </div>

          <div>
            <p className=" text-lg leading-8">
              Le panneau compact HPL est un complexe autoporteur fermé 4 bords
              par profil alu, composé de parements en compact HPL d’une
              épaisseur de 4 mm collés sur une âme laine de roche (M0) ,
              Polyuréthane (M1), conforme à la norme NF T54/324. Les panneaux
              permettent l’intégration des terminaisons fonctionnelles et
              techniques en affleurement (prises de courants, fluides, écrans…)
              pour une intégrité parfaite et un niveau de propreté ou stérilité
              garanti.
            </p>


          </div>

          <h3 className="mt-16"> Méthodes d’assemblage </h3>
          <p className="mt-8 text-lg leading-8">
            <div>
                <h5 className="font-bold"> Liaison panneau / sol</h5>
            </div>
            Le profil aluminium permet d’assurer une parfaite liaison avec le sol grâce à une remontée du sol (PVC ou résine) de manière affleurante.  
          </p>

        </div>
        <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center  ">
          <img src="/images/panneauHpl1.png" alt="panneau hpl" class="md:w-1/3 w-full rounded-lg object-cover p-10  " /> 
          <img src="/images/panneauHpl5.png" alt="panneau hpl" class="md:w-1/2 w-full rounded-lg object-cover p-10 " />


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

      <div className="relative w-[75%] p-11 mx-44 pb-15">
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
            <div className="flex h-[620px] items-center justify-center rounded-2xl bg-indigo-50">
              <span className="text-3xl font-semibold text-indigo-600">
                <div className="relative h-[620px] w-full ">
                  <img src="/images/panneauHpl2.JPG" alt="salle blanche" />
                </div>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[620px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/panneauHpl3.JPG" alt="salle blanche" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[620px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/panneauHpl5.JPG" alt="salle blanche" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[620px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/panneauHpl6.JPG" alt="salle blanche" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination !bottom-2 !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
      </div>

      
    </div>
  );
}

export default PanneauEnHplPage;
