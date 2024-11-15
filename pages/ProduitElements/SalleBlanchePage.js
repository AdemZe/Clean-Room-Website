import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination]);

function SalleBlanchePage() {
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
    <div >
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 h-[470px] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/salle-blanche-header.jpg"
            alt=" salle blanche header Background"
            class="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-start justify-end text-center ml-10 ">
          <h1 className="mb-4 text-5xl font-bold leading-tight   ">
            Salle Blanche 
          </h1>


        </div>
      </div>

      <div>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="mb-8 text-4xl font-bold"> Salle blanche </h1>
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-400"></div>
            <div>
              <div className="mb-1 h-2 w-24 bg-gray-400"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>
          <div>
            <p className="mb-9 text-lg leading-8">
              Aujourd’hui, de nombreux secteurs doivent se protéger de la
              contamination extérieure ou maîtriser celle à l’intérieur de leurs
              espaces. Cela crée des besoins spécifiques pour différentes zones
              contrôlées, comme : les salles propres, salles blanches, zones à
              atmosphère contrôlée, ou laboratoires protégés. Une zone à
              contamination contrôlée se distingue par trois critères : elle est
              fermée et délimitée, elle dispose d’un accès sécurisé via des sas,
              et elle est équipée d’un système de traitement de l’air avec
              filtration, surpression ou dépression. Selon la norme ISO 14644-1,
              une salle contrôlée limite la concentration de particules et
              maîtrise aussi la température, l’humidité et la pression.
            </p>
          </div>

          <div>
            <p className=" mt-5  mb-15 text-lg leading-8">
              La classe d’empoussièrement traduit la qualité de l’air dans un
              volume donné en mesurant plus particulièrement la quantité et le
              dimensionnement des particules.La norme ISO est une norme relative
              notamment aux salles blanches qui exige une qualité d’air
              irréprochable. La concentration de particules est hautement
              contrôlée. Plusieurs classifications ISO existent concernant les
              salles blanches, elles sont en effet classées en fonction de leur
              degré de propreté de l’air. Celles-ci vont de la classe propreté
              la plus élevée ISO 1 à la classe ISO 9. Cette classification se
              rapporte donc aux concentrations maximums de particules en
              suspension par m3 d’air.
            </p>
            <div className="mb-2">
              <div className=" mt-9 p-2">
                <h3>Normes internationales ISO 14 644.1 </h3>
              </div>
              <br />

              <Image
                src="/images/Normes-ISO-particules-par-metre-cube.jpg"
                alt="Image"
                width={700} // specify width and height for optimization
                height={700}
                className="h-auto max-w-full rounded-md"
              />
            </div>
          </div>

          <h3 className="mb-4 mt-16"> Traitements de l’air </h3>
          <div>
            <p className=" text-lg leading-8">
              Le système aéraulique a pour fonction de maintenir l’air des
              salles blanches dans les conditions définies par les exigences :
            </p>
            <ul>
              <li>Du process</li>
              <li>Du produit</li>
              <li>Du personnel</li>
              <li>De l’environnement (rejet des effluents gazeux)</li>
            </ul>
            <p>Les 5 critères déterminants sont :</p>
            <ul>
              <li>La filtration de l’air</li>
              <li>La diffusion de l’air</li>
              <li>Le maintien en surpression ou en dépression</li>
              <li>Le taux de brassage (recyclage et/ou extraction)</li>
              <li>Le contrôle des conditions physiques de l’air</li>
            </ul>
            <br />
            <Image
              src="/images/sallePropreConception .png"
              alt="Image"
              width={1000} // specify width and height for optimization
              height={800}
              className="h-auto max-w-full rounded-md"
            />
          </div>

          <h3 className="mt-16"> Le matériel dans une salle blanche </h3>
          <p className="mt-8 text-lg leading-8">
          Dans une salle blanche, le matériel doit respecter des normes strictes d’hygiène, d’ergonomie et de performance. Conçu pour faciliter nettoyage et désinfection, il est adapté aux besoins des opérateurs, avec des matériaux résistants comme l’acier inoxydable, apprécié pour sa durabilité et son hygiène. Les équipements tels que placards, bancs, chaises et chariots contribuent à l’organisation et à la sécurité des opérations, garantissant un environnement de travail propre, confortable et ergonomique.
          </p>

          <h3 className="mt-16">
            {" "}
            Comment CLEAN ROOM TUNISE vous accompagne dans votre projet de salle
            propre ?{" "}
          </h3>
          <p className="mt-8 text-lg leading-8">
            <p>
              CLEAN ROOM TUNISE propose un accompagnement personnalisé pour la
              réalisation de votre salle propre. Notre démarche s’articule en
              plusieurs étapes, garantissant une qualité exemplaire tout au long
              du processus.
            </p>

            <h5 className="font-bold">Conseil : </h5>
            <p>
              Nos experts sont à votre disposition pour écouter vos besoins.
              Ensemble, nous analysons votre cahier des charges afin d’atteindre
              des résultats conformes à vos exigences.
            </p>

            <h5 className="font-bold">Étude :</h5>
            <p>
              Avant le lancement, votre projet est présenté sous forme de plans
              détaillés.
            </p>

            <h5 className="font-bold">Fabrication :</h5>
            <p>
              Nos processus industriels sont déployés avec flexibilité, tout en
              respectant les normes requises. Nous mettons un point d’honneur
              sur la réactivité et l’autocontrôle interne pour assurer le
              meilleur rapport rendement/qualité.
            </p>

            <h5 className="font-bold">Installation : </h5>
            <p>
              CLEAN ROOM TUNISE prend en charge la logistique dans son ensemble,
              jusqu’à l’installation finale. Des équipes qualifiées et
              organisées s’occupent de la partie technique, garantissant la
              sécurité et le respect des délais sur votre chantier.
            </p>

            <h5 className="font-bold">Service après-vente (SAV) : </h5>
            <p>
              Notre service après-vente est un élément clé de notre démarche
              qualité. Des équipes dédiées veillent à notre réactivité et à la
              connaissance approfondie de nos produits, offrant ainsi un service
              optimal, sur mesure et durable.
            </p>
          </p>

          <h3 className="mt-12">
            Des systèmes de salles propres évolutifs répondant à toutes les
            exigences
          </h3>
          <p className=" text-lg leading-8 mt-4 mb-5">
            Notre gamme de produits et de services a été soigneusement conçue
            pour répondre aux besoins spécifiques de l’univers des salles
            propres, en intégrant des éléments essentiels tels que la qualité,
            la maîtrise technique et la personnalisation.
          </p>

          <h5 className="font-bold ">Qualité des composants</h5>
          <p className=" text-lg leading-8 mt-4 mb-5">
          Nous collaborons avec des fournisseurs de qualité pour offrir des solutions de salle propre innovantes. Nous choisissons des matériaux résistants aux conditions extrêmes (corrosion, chocs, humidité) selon des critères stricts. Grâce à des contrôles rigoureux, la durabilité de nos produits est confirmée par leur performance continue chez nos clients fidèles.
          </p>

          <h5 className="font-bold">
            Fabrication sur mesure de salles propres
          </h5>

          <p className=" text-lg leading-8 mt-4 mb-5">
          Nous offrons une adaptation multivolume pour des salles propres de toutes tailles, assurant une maîtrise complète des configurations. Grâce à notre unité de fabrication flexible, nous répondons à des commandes variées et optimisons l’industrialisation en préparant les panneaux à l’avance, réduisant ainsi les interférences et accélérant l’installation. Les livraisons sont planifiées en phases, avec une approche « juste à temps » pour minimiser l’encombrement sur site et garantir efficacité et confort.
          </p>

          <h5 className="font-bold">Qualité de mise en œuvre</h5>
          <p className=" text-lg leading-8 mt-4 mb-5">
          Nous assurons la sécurité sur tous nos chantiers grâce à des équipes formées et certifiées, sous la supervision de chefs de chantier en coordination avec les conducteurs de travaux. Un contrôle rigoureux et des vérifications régulières garantissent la qualité de chaque installation. Les zones de stockage et de travail sont clairement définies pour une organisation optimale, et la propreté du site est maintenue quotidiennement. Enfin, nous respectons les délais grâce à une planification précise et un suivi réactif des phases d’installation.
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

      <div className="relative w-[70%] mx-60 p-11">
        <Swiper
          className="progress-slide-carousel"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".progress-slide-carousel .swiper-pagination",
            type: "progressbar",
          }}
        >
          <SwiperSlide   className="mt-0">
            <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
              <span className="text-3xl font-semibold text-indigo-600">
                <div className="relative h-full w-full " >
                <img  src="/images/salle-blanche-9.jpg"  alt="salle blanche"    
                className="h-full w-full object-cover rounded-2xl"
                />
                </div>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
            <img  src="/images/salle-blanche-13"  alt="salle blanche"   
            className="h-full w-full object-cover rounded-2xl"
            />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="flex h-[650px] items-center justify-center rounded-2xl bg-indigo-50">
            <img  src="/images/salle-blanche-6.jPG"  alt="salle blanche"   
            className="h-full w-full object-cover rounded-2xl"
            />

            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination !bottom-1 mt-4  !top-auto right-0 mx-auto !w-80 bg-gray-100"></div>
      </div>

      <section className="relative z-20 mt-0 overflow-hidden bg-white pb-12 pt-5 lg:pb-[90px] lg:pt-[120px]   ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <h2 className=" mb-4 mt-0 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                  Questions fréquentes autour de la salle blanche
                </h2>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="Qu'est-ce qu'une salle blanche ? "
                text="Une salle blanche est un environnement (une pièce) dans laquelle l’atmosphère est contrôlée en fonction de différents paramètres.

La salle blanche a pour principaux objectifs de réguler la température, la pression et le taux d’humidité, mais aussi de limiter fortement la poussière, fumée, particule etc."
              />
              <AccordionItem
                header="Pourqoui sous-traiter mes opérations en salle blanche ? "
                text="L’externalisation des process en salle blanche est de plus en plus fréquente dans les industries pharmaceutique, cosmétique, médicale, semi-conducteurs etc. Il existe de nombreux avantages à externaliser ces process plutôt que de les effectuer en interne, notamment en termes de coûts, de flexibilité et de qualité."
              />
              <AccordionItem
                header="Quelles sont les normes en vigueur ?"
                text="Les normes en termes de salle blanche sont établies par la norme NF en ISO 14644-1 ."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="Quelles opération peut on réaliser en salle blanche ?"
                text="Dans une salle blanche, il est possible de réaliser toute opération qui nécessite un environnement contrôlé. Cela peut comprendre, l’assemblage, montage, soudure, contrôle qualité, conditionnement etc. "
              />
              <AccordionItem
                header="Quels secteurs d'activités nécessitent une salle blanche ?"
                text="De nombreux secteurs d’activités peuvent nécessiter l’utilisation de salle blanche les secteurs médicaux et pharmaceutiques, la cosmétique, aéronautique, informatique, agroalimentaire etc."
              />
              <AccordionItem
                header="Combien coute une salle blanche ?"
                text="Le coût d’une salle blanche varie en fonction de différents facteurs."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default SalleBlanchePage;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="dark:bg-dark-2 mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="text-body-color dark:text-dark-6 py-3 text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};
