import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

function ProfilesPage() {
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
            Les Profiles
          </h1>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="mb-8 font-mono text-4xl"> Profiles </h1>
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
            <div>
              <div className="mb-1 h-2 w-24 bg-gray-400"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>
          <div>
            <p className="mb-15 text-lg leading-8">
              Dans le contexte des salles blanches, les profils aluminium sont
              des éléments structurels et de finition utilisés pour assembler,
              renforcer et sceller les panneaux et autres composants des
              cloisons, plafonds, sols, et encadrements de portes et fenêtres.
              Ils jouent un rôle crucial dans la création d’un environnement
              étanche, stable et facilement nettoyable, ce qui est essentiel
              pour respecter les normes strictes de contrôle de la contamination
              dans une salle blanche.
            </p>
          </div>
          <Image
            src="/images/ProfilePicture.png"
            alt="Image"
            width={800} // specify width and height for optimization
            height={600}
            className="rounded-md mt-4 justify-items-center "
          />
          <p className="mt-5 text-lg leading-8">Voici les types de profils et leurs fonctions principales dans une salle blanche : </p>
          <h4 className="mt-7"> Profils de jonction </h4>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Fonction : </h6>
            </div>
            Connectent et maintiennent les panneaux entre eux (murs, plafonds ou
            cloisons).
          </p>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Détails : </h6>
            </div>
            Ils garantissent une jonction solide, stable et étanche entre les
            panneaux pour éviter toute infiltration d’air, de poussière ou de
            contaminants.
          </p>

          <h4 className="mt-10"> Profils d’angle</h4>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Fonction : </h6>
            </div>
            Joignent les panneaux aux coins et assurent une transition propre et
            arrondie, souvent entre murs, murs et plafonds, ou sols et murs.
          </p>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Détails : </h6>
            </div>
            Les angles sont souvent arrondis pour faciliter le
            nettoyage, empêchant l’saccumulation de particules et réduisant le
            risque de contamination.
          </p>



                
          <h4 className="mt-10"> Profils de finition </h4>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Fonction : </h6>
            </div>
            Servent à sceller et protéger les extrémités des panneaux et autres éléments visibles.
          </p>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Détails : </h6>
            </div>
            Ils offrent une apparence uniforme, en masquant les bordures des panneaux, tout en apportant une finition esthétique. Ils assurent aussi une surface lisse, sans recoins où des contaminants pourraient s’accumuler.
          </p>



<h4 className="mt-10"> Profils de plafond suspendu </h4>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Fonction : </h6>
            </div>
            Servent de support pour les panneaux de plafond et permettent l’intégration de filtres, d’éclairages et d’autres équipements sans compromettre l’étanchéité.
          </p>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Détails : </h6>
            </div>
            Ils offrent une structure modulaire qui facilite l’accès aux systèmes de ventilation et d’éclairage, souvent avec des systèmes de verrouillage pour éviter les fuites d’air.          </p>





            <h4 className="mt-10"> Profils pour portes et fenêtres </h4>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Fonction : </h6>
            </div>
            Assurent l’encadrement et l’étanchéité des ouvertures (portes, fenêtres).          </p>
          <p className="mt-3 text-lg leading-8">
            <div>
              <h6 className="font-bold"> Détails : </h6>
            </div>
            Ils créent une transition nette et permettent de maintenir les normes de propreté et d’étanchéité autour des points d’accès.</p>


            <p className="mt-5 text-lg leading-8">
          
            Les profils sont essentiels dans la conception et la maintenance des salles blanches, car ils garantissent non seulement la stabilité structurelle mais aussi le respect des normes d’hygiène et d’étanchéité nécessaires pour le contrôle de la contamination.</p>















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

      <div className="pb-15 relative w-[60%] mx-72  p-11">
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
                <div className="relative h-[700px] w-full ">
                  <img src="/images/profiles4.JPG" alt="salle blanche"
                  className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-[700px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/profiles5.JPG" alt="salle blanche"
                        className="h-full w-full object-cover rounded-2xl"

              />
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="flex h-[670px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/profiles3.JPG" alt="salle blanche"
                        className="h-full w-full object-cover rounded-2xl"

              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-[670px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/profiles2.JPG" alt="salle blanche"
                        className="h-full w-full object-cover rounded-2xl"

              />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="flex h-[670px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/profile1.jpg" alt="salle blanche"
                        className="h-full w-full object-cover rounded-2xl"

              />
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="flex h-[670px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/profile9.jpg" alt="salle blanche"
                        className="h-full w-full object-cover rounded-2xl"

              />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="flex h-[670px] items-center justify-center rounded-2xl bg-indigo-50">
              <img src="/images/profile7.jpg" alt="salle blanche"
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

export default ProfilesPage;
