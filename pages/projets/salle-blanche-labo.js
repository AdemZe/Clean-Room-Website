import React from "react";
import Base from "@layouts/Baseof";
import Carousel from "@layouts/components/Carousel";
import { CheckCircle, Shield, Users, Settings, Award, Zap } from "lucide-react";

const slides = [
  { image: "panneauHpl3.JPG", alt: "Panneau HPL dans une salle blanche de laboratoire" },
  { image: "panneauHpl2.JPG", alt: "Installation de panneaux HPL affleurants" },
  { image: "panneauHpl5.JPG", alt: "Vue d'ensemble d'une salle blanche pour laboratoire" },
];

const keyFeatures = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Conformité ISO 14644",
    description: "Environnement contrôlé répondant aux normes internationales les plus strictes"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Panneaux HPL Affleurants",
    description: "Finition hygiénique optimale pour un nettoyage facile et efficace"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Contrôle des Flux d'Air",
    description: "Gestion précise des pressions et filtration particulaire HEPA/ULPA"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Formation du Personnel",
    description: "Formation aux bonnes pratiques de maintenance et d'exploitation"
  }
];

const projectDetails = [
  { label: "Type de projet", value: "Salle Blanche Laboratoire" },
  { label: "Normes appliquées", value: "ISO 14644 Classe 7-8" },
  { label: "Surface", value: "Personnalisée selon besoins" },
  { label: "Délai de réalisation", value: "Sur mesure" },
  { label: "Zone de contrôle", value: "Particules, température, humidité" },
  { label: "Garantie", value: "Qualification opérationnelle incluse" },
];

const SalleBlancheLabo = () => {
  return (
    <Base title="Installation de Salles Blanches pour Laboratoire">
      <br/>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Projet Réalisé
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Installation de Salles Blanches pour <span className="text-blue-600">Laboratoire</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Conception et installation complète d&apos;un environnement contrôlé conforme aux normes ISO 14644,
              garantissant des analyses précises sans contamination pour vos applications critiques.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          
          {/* Carousel Section */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Carousel data={slides} />
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  Aperçu du Projet
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Notre équipe a réalisé l’installation complète de la salle blanche, de l’étude des besoins jusqu’à la qualification finale, en respectant strictement les normes ISO 14644. L’infrastructure a été conçue avec des panneaux HPL affleurants, des panneaux sandwich isolants, des profils en aluminium étanches et des portes spécialisées pour garantir le maintien des pressions. Le faux plafond intègre filtres HEPA/ULPA, éclairage LED et gestion des réseaux techniques. Le système HVAC assure un contrôle précis de l’air, de la température, de l’hygrométrie et des pressions différentielles. Nous avons également déployé un monitoring environnemental complet ainsi qu’un sol antistatique facilitant l’hygiène et la maîtrise de la contamination.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                Chaque étape de réalisation — installation des panneaux, pose des plafonds, raccordement HVAC, mise en place des filtres absolus, contrôle des fuites, tests de fumée, validation particulaire, essais de qualification QI/QO — a été exécutée avec une précision méticuleuse. Ce niveau d’exigence garantit un environnement sécurisé, stable et totalement maîtrisé, permettant la réalisation d’analyses sensibles dans des conditions optimales, sans risque de contamination
                .
                </p>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-7 h-7 text-blue-600 mr-3" />
                Détails du Projet
              </h3>
              <div className="space-y-6">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{detail.label}</span>
                      <span className="text-gray-900 font-semibold">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Points Clés du Projet
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Découvrez les caractéristiques techniques qui font la différence dans nos installations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Features */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Caractéristiques Techniques Détaillées
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                    ①
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Panneaux HPL Affleurants
                    </h4>
                    <p className="text-gray-700">
                      Intégration de panneaux en stratifié haute pression (HPL) avec joints affleurants 
                      pour une finition hygiénique parfaite, facilitant le nettoyage et éliminant les 
                      zones de rétention de contaminants.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                    ②
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Contrôle des Particules
                    </h4>
                    <p className="text-gray-700">
                      Système de filtration HEPA/ULPA avancé avec gestion intelligente des flux d&apos;air 
                      en pression positive pour maintenir une qualité d&apos;air optimale selon les classes 
                      de propreté requises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                    ③
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Sécurisation des Accès
                    </h4>
                    <p className="text-gray-700">
                      Mise en place de sas interverrouillés avec vitrages double sécurité, permettant 
                      un passage sécurisé des matériaux et du personnel tout en préservant l&apos;intégrité 
                      de l&apos;environnement contrôlé.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                    ④
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Formation et Support
                    </h4>
                    <p className="text-gray-700">
                      Formation complète du personnel aux bonnes pratiques de maintenance, d&apos;exploitation 
                      et de surveillance, accompagnée d&apos;un support technique continu pour garantir 
                      la pérennité de l&apos;installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">
                Intéressé par une Installation Similaire ?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Notre équipe est disponible pour étudier votre projet et vous proposer 
                une solution sur mesure répondant à vos exigences spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Contacter-Nous
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default SalleBlancheLabo;