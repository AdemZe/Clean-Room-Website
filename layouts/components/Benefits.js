import Image from 'next/image';
import React, { useState } from 'react';

// Données de l'accordéon
const accordionData = [
  {
    id: 1,
    title: "Gestion Complète par un Fournisseur Unique",
    content: "Nous prenons en charge la responsabilité globale de votre projet de salle blanche. De l'étude initiale à la mise en service, nous vous offrons une solution complète de A à Z. En tant qu'entrepreneur général unique, nous gérons l'intégralité du processus : consultation, conception, ingénierie, fabrication, installation et qualification. Un seul interlocuteur, une responsabilité unique, une tranquillité d'esprit totale pour vous concentrer sur votre cœur de métier." ,
    isDefaultOpen: true, // Pour que la première section soit ouverte par défaut comme sur la photo
    isMainTitle: true
  },
  {
    id: 2,
    title: "Salles Blanches 4.0 : Évolutives et Intelligentes",
    content: "Nous intégrons les technologies de pointe (Supervision 4.0, digitalisation, intelligence des locaux et traçabilité des données) pour garantir l'adaptabilité et l'amélioration continue de votre environnement de travail. CLEAN ROOM TUNISIE vous livre des systèmes conçus pour l'avenir."
  },
  {
    id: 3,
    title: "Conception",
    content: "Ce processus rigoureux garantit la création d'un environnement parfaitement conçu pour votre activité, assurant ainsi un flux de travail optimal et une performance opérationnelle maximale."
  },
  {
    id: 4,
    title: "Fabrication",
    content: "Grâce à un outil industriel de pointe, notre usine allie des capacités de production exceptionnelles à une flexibilité optimale. Nous gérons l'ensemble du projet : analyse des besoins, conception initiale et détaillée, fabrication et installation selon les normes les plus strictes, puis mise en service avec tests de qualité rigoureux pour garantir un fonctionnement optimal et la conformité aux performances requises."




  }
];

// Composant individuel pour un élément de l'accordéon
const AccordionItem = ({ item, activeId, setActiveId }) => {
  const isOpen = activeId === item.id;

  return (
    <div className="py-2 border-b border-gray-200">
      <button
        onClick={() => setActiveId(isOpen ? null : item.id)}
        className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-900 focus:outline-none"
      >
        <div className={`flex items-center gap-2 ${item.isMainTitle ? 'text-blue-700' : 'text-gray-900'}`}>
          <svg 
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
          {/* Le texte sur la photo est en bleu pour le titre principal */}
          <span className={`${item.isMainTitle ? 'text-blue-700' : 'text-gray-900'}`}>{item.title}</span>
        </div>
      </button>

      {/* Contenu déroulant */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <p className={`text-gray-600 pl-7 ${item.isMainTitle ? 'text-sm' : 'text-base'}`}>
          {item.content}
        </p>
      </div>
    </div>
  );
};

// Composant principal
const CleanRoomFeatures = () => {
  // Initialiser l'état avec l'ID de l'élément par défaut (id: 1)
  const [activeId, setActiveId] = useState(accordionData.find(item => item.isDefaultOpen)?.id || null);
  
  // URL de l'image (à remplacer par votre chemin local ou configuré)
  const imageUrl = "/images/benefit4.png";
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre Principal */}
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl pb-10">
          POURQUOI CHOISIR CLEAN ROOM TUNISIE
        </h2>
        <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Colonne Gauche : Image */}
          <div className="relative h-80 lg:h-[460px] overflow-hidden rounded-lg shadow-xl">
            {/* Utilisation du composant Image de Next.js */}
            <Image
              src={imageUrl}
              alt="Bureau de contrôle de salle blanche"
              layout="fill" // Remplit le conteneur div
              objectFit="cover" // Assure que l'image couvre l'espace sans déformation
            />
          </div>

          {/* Colonne Droite : Accordéon / Contenu */}
          <div className="pt-4 lg:pt-0">
            {accordionData.map((item) => (
              <AccordionItem 
                key={item.id} 
                item={item} 
                activeId={activeId} 
                setActiveId={setActiveId} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CleanRoomFeatures;