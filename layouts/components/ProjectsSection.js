import React from 'react';

// --- DONNÉES DES PROJETS ---
const projectsData = [
  {
    id: 1,
    title: "Installation de Salles Blanches",
    description: "Installation de salle blanche offrant un environnement contrôlé et sécurisé pour assurer des analyses précises et sans contamination.",
    imageSrc: "/images/panneauHpl3.JPG",
    link: "/projets/salle-blanche-labo"
  },
  {
    id: 2,
    title: "Atelier de Fabrication et Conditionnement de Médicaments",
    description: "Unités de fabrication et conditionnement pharmaceutique conformes aux BPF.",
    imageSrc: "/images/IMG_4887.JPG",
    link: "/projets/unite-fabrication"
  },
  {
    id: 3,
    title: "Système de Transfert de Matériel en Salle Blanche",
    description: "Système de sas et pass-through sécurisés assurant l'intégrité de la zone stérile.",
    imageSrc: "/images/portesSalle62.JPG",
    link: "/projets/unite-isolement"
  },
  {
    id: 4,
    title: "Un Espace Contrôlé pour l'Analyse Microbiologique",
    description: "Mise en œuvre et installation d'une salle blanche dédiée aux analyses microbiologiques.",
    imageSrc: "/images/SOF.07-1024x412.jpg",
    link: "/projets/installation-pharma"
  },
];

// --- COMPOSANT INTERMÉDIAIRE: CARTE DE PROJET ---
const ProjectCard = ({ project }) => {
  return (
    <div
      className="block bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 group cursor-pointer h-full flex flex-col"
      onClick={() => window.location.href = project.link}
    >
      {/* Conteneur de l'image avec hauteur fixe */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.imageSrc})` }}
          aria-label={`Image du projet : ${project.title}`}
        />
      </div>

      {/* Corps du texte de la carte avec flex-grow pour occuper l'espace restant */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Titre du projet */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 transition-colors duration-200 group-hover:text-blue-700">
          {project.title}
        </h3>

        {/* Description qui prend l'espace disponible */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Bouton "Lire la suite" toujours aligné en bas */}
        <div className="mt-auto">
          <button
            type="button"
            className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg transition-all duration-300 group-hover:bg-blue-800 w-full"
          >
            Lire la suite
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL: SECTION PROJETS ---
const ProjectsSection = () => {
  return (
    <section className="py-0 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre centré et ligne de séparation */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
            NOS PROJETS COMPLÉTÉS
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
        </div>

        {/* Grille des projets avec espace réduit entre les cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;