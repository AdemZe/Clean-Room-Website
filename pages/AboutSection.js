import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
function AboutSection() {


  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const winHeight = window.innerHeight || document.documentElement.clientHeight;
      const docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      const scrollPercent = (scrollY / (docHeight - winHeight)) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

<div>








<div className="relative bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden h-[470px] ">
  <div className="absolute inset-0     ">
    <img src="/images/aboutHeroSection2.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-end items-start h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4 px-6  ">Qui sommes-nous</h1>
  </div>
</div>







<div className="flex items-start max-md:flex-col gap-y-6 gap-x-3 max-w-screen-lg mx-auto px-4 font-[sans-serif] mt-20  ">
  <div className="w-full">
    <div className="w-full h-1 rounded-xl bg-green-500"></div>
    <div className="mt-2 mr-4 flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-green-500" viewBox="0 0 24 24">
        <g>
          <path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" />
          <path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" />
        </g>
      </svg>
      <div className="ml-2">
        <h6 className="text-base font-bold text-green-500">Acueil</h6>
        <p className="text-xs text-green-500">Terminé</p>
      </div>
    </div>
  </div>

  <div className="w-full">
    <div className="w-full h-1 rounded-xl bg-green-500"></div>
    <div className="mt-2 mr-4 flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-green-500" viewBox="0 0 24 24">
        <g>
          <path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" />
          <path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" />
        </g>
      </svg>
      <div className="ml-2">
        <h6 className="text-base font-bold text-green-500"> Qui sommes-nous </h6>
        <p className="text-xs text-green-500">Terminé</p>
      </div>
    </div>
  </div>

  <div className="w-full">
    <div className="w-full h-1 rounded-xl bg-gray-300"></div>
    <div className="mt-2">
      <h6 className="text-base font-bold text-gray-400"> Solution </h6>
      <p className="text-xs text-gray-400">En attente</p>
    </div>
  </div>

  <div className="w-full">
    <div className="w-full h-1 rounded-xl bg-gray-300"></div>
    <div className="mt-2">
      <h6 className="text-base font-bold text-gray-400"> Produits </h6>
      <p className="text-xs text-gray-400">En attente</p>
    </div>
  </div>

  <div className="w-full">
    <div className="w-full h-1 rounded-xl bg-gray-300"></div>
    <div className="mt-2">
      <h6 className="text-base font-bold text-gray-400"> Projets </h6>
      <p className="text-xs text-gray-400">En attente</p>
    </div>
  </div>



</div>

















 
    <section>
  <div className="mx-auto max-w-screen-xl px-4  pt-5 pb-1 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      NOTRE SOCIETE
      </h2>
    </div>
    <br/>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="/images/CRT.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16  ">
        <article className="space-y-6 text-lg font-secondary " >
          <p>
          Clean Room Tunisie est une entreprise spécialisée depuis 2004 dans la conception, préparation, et fabrication de panneaux modulaires en résine mélaminée et compactée pour la construction et salles propres et stériles destinées à l’industrie pharmaceutique - électronique - agroalimentaire conforme aux   normes internationales ISO 14644 et 14698, GMP et BPF appliquées aux salles propres et environnements contrôlé. 
          </p>

          <p>
          Nous Fabriquons et installons Des Salles Propres des Haute qualité depuis l’année 2004 avec une Groupes performantes de 25 techniciens spécialiser en Conception, fabrication , installation , développement  et aussi la Suivi qu’il est assures par notre personnels .
          </p>
        </article>
      </div>
    </div>
  </div>
</section>











<div className='mt-0'  >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-300">
        <div className="h-full bg-blue-500" id="readingProgress" style={{ width: `${scrollWidth}%` }}></div>
      </div>

      {/* Sample article */}
      <div>
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8">  </h1>
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 rounded-full bg-gray-400 mr-4"></div>
            <div>
              <div className="h-2 w-24 bg-gray-400 mb-1"></div>
              <div className="h-2 w-16 bg-gray-400"></div>
            </div>
          </div>


          <p className="text-lg leading-8 ">
          Chez CLEAN ROOM Tunisie, nous croyons que contribuer à la santé de tous (enfants, adultes, animaux) tout au long de la chaîne médicale (de la R&D jusqu’à l’acte de soin critique en passant par le médicament) est un enjeu majeur.
          </p>
          <h6 className="text-2xl font-semibold text-gray-750  mt-8 ">
          Missions:
          </h6>

          <p className="text-lg leading-8">

          Pour concrétiser sa vision, Clean Room encourage son personnel à optimiser continuellement les processus, à renforcer les partenariats avec ses clients et ses fournisseurs, et reste ouvert aux alliances stratégiques avec ses concurrents pour mieux satisfaire les besoins de sa clientèle. Nous nous engageons à offrir aux professionnels de la santé et de l’industrie pharmaceutique des solutions fiables et performantes, permettant de maîtriser les risques de contamination dans des environnements réglementés et sécurisés.          </p>


          <h6 className="text-2xl font-semibold text-gray-750  mt-8 ">
          Nos valeurs :
          </h6>
          <br/>
          <div className='mt-6 mb-3 justify-center px-7 ' >
          <img src="/images/valeursAboutPage.png" alt="salle blanche" 
           />
          
          </div>
        </div>


      <div className='mt-0 mb-8'>
      <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-4 mx-auto  ">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl text-center  ">  <span className="underline decoration-blue-500 justify-center "></span></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
                <span className="inline-block text-blue-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize "> Qualité    </h1>

                <p class="text-gray-500 ">
                Depuis sa création, CLEAN ROOM Tunisie s’est bâtie sur une constante écoute de ses clients et sur une culture du compagnonnage inscrite en bureau d’études, en usine et sur chantier ; la marque de fabrique d’un niveau de qualité reconnu.                 </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100   hover:underline hover:text-blue-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
                <span className="inline-block text-blue-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Confiance</h1>

                <p className="text-gray-500 ">
                A l’écoute de besoins spécifiques et capables d’accompagner un projet de sa genèse à sa livraison, les équipes CLEAN ROOM Tunisie sont avant tout exigeantes envers elles-mêmes et considèrent le contrat confié comme un acte de confiance les liant au client.                </p>
           

                <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100   hover:underline hover:text-blue-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
                <span class="inline-block text-blue-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Innovation        </h1>

                <p className="text-gray-500 ">
                CLEAN ROOM Tunisie place l’innovation au cœur de sa stratégie de développement pour une amélioration continue de votre environnement de travail.
                </p>
                <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100   hover:underline hover:text-blue-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
      </div>






      </div>
    </div>
















    <section>
  <div className="mx-auto max-w-screen-xl px-4 pt-5 pb-1 sm:px-6 sm:py-24 lg:px-8 mb-10   ">
    <div className="max-w-3xl">

    </div>

    {/* Deux colonnes : une pour le texte, l'autre pour l'image */}
    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      
      {/* Première colonne : Texte */}
      <div className="lg:py-16">
        <article className="space-y-6 text-lg font-secondary">
        <h2 className="text-3xl font-bold sm:text-4xl">
        Notre équipe à votre service
      </h2>
          <br/>
        
          <p>
            Doté d’une usine de production, d’équipes de pose, d’une activité de veille et conformité réglementaires et d’un bureau d’études pluridisciplinaire, Clean Room Tunisie vous accompagne tout au long de votre projet, de l’analyse du besoin et du risque, à la mise en service et la qualification de vos locaux.
          </p>
        </article>
      </div>

      {/* Deuxième colonne : Image */}
      <div className="overflow-hidden">
        <img
          alt="Équipe de service"
          src="/images/equipeService.jpg"
          className="h-auto w-auto object-cover"
        />
      </div>
      
    </div>
  </div>
</section>



    <section class="bg-slate-400 ">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
        Un projet, <span class="text-blue-700"> une question ?</span>
        </h2>

        <p class=" text-2xl  font-bold max-w-4xl mt-6 text-center text-gray-950  ">
        Notre équipe est à votre écoute et vous répond sous 48h
        </p>

        <div class="inline-flex w-full mt-6 sm:w-auto">
            <a href="#" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 no-underline ">
            NOUS CONTACTER
            </a>
        </div>
    </div>
</section>











</div>




  );
}


  


export default AboutSection ;
