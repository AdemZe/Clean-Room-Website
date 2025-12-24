import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Base from '@layouts/Baseof';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Base title="Qui sommes-nous">


      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aboutHeroSection2.jpg"
            alt="Background Image"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-end h-full pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Qui sommes-nous
            </h1>
          </div>
        </div>
      </div>

      {/* Barre de progression des étapes */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start max-md:flex-col gap-y-6 gap-x-3">
            <div className="w-full">
              <div className="w-full h-1 rounded-xl bg-blue-600"></div>
              <div className="mt-2 mr-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-blue-600" viewBox="0 0 24 24">
                  <g>
                    <path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" />
                    <path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" />
                  </g>
                </svg>
                <div className="ml-2">
                  <h6 className="text-base font-bold text-blue-600">Accueil</h6>
                  <p className="text-xs text-blue-600">Terminé</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full h-1 rounded-xl bg-blue-600"></div>
              <div className="mt-2 mr-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="shrink-0 fill-blue-600" viewBox="0 0 24 24">
                  <g>
                    <path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" />
                    <path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" />
                  </g>
                </svg>
                <div className="ml-2">
                  <h6 className="text-base font-bold text-blue-600">Qui sommes-nous</h6>
                  <p className="text-xs text-blue-600">Terminé</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full h-1 rounded-xl bg-gray-300"></div>
              <div className="mt-2">
                <h6 className="text-base font-bold text-gray-400">Solution</h6>
                <p className="text-xs text-gray-400">En attente</p>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full h-1 rounded-xl bg-gray-300"></div>
              <div className="mt-2">
                <h6 className="text-base font-bold text-gray-400">Produits</h6>
                <p className="text-xs text-gray-400">En attente</p>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full h-1 rounded-xl bg-gray-300"></div>
              <div className="mt-2">
                <h6 className="text-base font-bold text-gray-400">Projets</h6>
                <p className="text-xs text-gray-400">En attente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Société Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
              NOTRE SOCIÉTÉ
            </h2>
            <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/CRT.jpg"
                alt="Clean Room Tunisie"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Clean Room Tunisie est une entreprise spécialisée depuis 2004 dans la conception, préparation, et fabrication de panneaux modulaires en résine mélaminée et compactée pour la construction de salles propres et stériles destinées à l&apos;industrie pharmaceutique - électronique - agroalimentaire conforme aux normes internationales ISO 14644 et 14698, GMP et BPF appliquées aux salles propres et environnements contrôlés.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Nous fabriquons et installons des salles propres de haute qualité depuis l&apos;année 2004 avec un groupe performant de 25 techniciens spécialisés en conception, fabrication, installation, développement et aussi le suivi qui est assuré par notre personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision et Missions */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Chez CLEAN ROOM Tunisie, nous croyons que contribuer à la santé de tous (enfants, adultes, animaux) tout au long de la chaîne médicale (de la R&D jusqu&apos;à l&apos;acte de soin critique en passant par le médicament) est un enjeu majeur.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missions</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Pour concrétiser sa vision, Clean Room encourage son personnel à optimiser continuellement les processus, à renforcer les partenariats avec ses clients et ses fournisseurs, et reste ouvert aux alliances stratégiques avec ses concurrents pour mieux satisfaire les besoins de sa clientèle. Nous nous engageons à offrir aux professionnels de la santé et de l&apos;industrie pharmaceutique des solutions fiables et performantes, permettant de maîtriser les risques de contamination dans des environnements réglementés et sécurisés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
              NOS VALEURS
            </h2>
            <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Qualité */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qualité</h3>
              <p className="text-gray-600 leading-relaxed">
                Depuis sa création, CLEAN ROOM Tunisie s&apos;est bâtie sur une constante écoute de ses clients et sur une culture du compagnonnage inscrite en bureau d&apos;études, en usine et sur chantier ; la marque de fabrique d&apos;un niveau de qualité reconnu.
              </p>
            </div>

            {/* Confiance */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confiance</h3>
              <p className="text-gray-600 leading-relaxed">
                À l&apos;écoute de besoins spécifiques et capables d&apos;accompagner un projet de sa genèse à sa livraison, les équipes CLEAN ROOM Tunisie sont avant tout exigeantes envers elles-mêmes et considèrent le contrat confié comme un acte de confiance les liant au client.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                CLEAN ROOM Tunisie place l&apos;innovation au cœur de sa stratégie de développement pour une amélioration continue de votre environnement de travail.
              </p>
            </div>
          </div>

          {/* Image des valeurs */}
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/valeursAboutPage.png"
                alt="Nos valeurs"
                fill
                className="object-contain bg-white p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre équipe à votre service
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Doté d&apos;une usine de production, d&apos;équipes de pose, d&apos;une activité de veille et conformité réglementaires et d&apos;un bureau d&apos;études pluridisciplinaire, Clean Room Tunisie vous accompagne tout au long de votre projet, de l&apos;analyse du besoin et du risque, à la mise en service et la qualification de vos locaux.
              </p>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/equipeService.jpg"
                alt="Équipe de service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Un projet, <span className="text-blue-700">une question ?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Notre équipe est à votre écoute et vous répond sous 48h
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default AboutSection;