import React from "react";
import Base from "@layouts/Baseof";
import Carousel from "@layouts/components/Carousel";
import { CheckCircle, Lock, Shield, Settings, Award, Zap } from "lucide-react";

const slides = [
  { image: "portesSalle62.JPG", alt: "Portes spéciales pour salle blanche" },
  { image: "portesSalle5.JPG", alt: "Système de transfert de matériel sécurisé" },
  { image: "portesSalle8.JPG", alt: "Pass-through avec interverrouillage" },
];

const keyFeatures = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Interverrouillage Automatique",
    description: "Système de sécurité empêchant l'ouverture simultanée des portes pour éviter la contamination"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Conformité Normes",
    description: "Conception conforme aux exigences ISO 14644 et bonnes pratiques de fabrication"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Portes Affleurantes",
    description: "Installation de portes et pass-box sans joints apparents pour limiter les turbulences d'air"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Signalisation Intelligente",
    description: "Système lumineux indiquant le statut et l'accessibilité des sas de transfert"
  }
];

const projectDetails = [
  { label: "Type de projet", value: "Système de Transfert" },
  { label: "Normes appliquées", value: "ISO 14644, GMP" },
  { label: "Type de portes", value: "Affleurantes, étanches" },
  { label: "Sécurité", value: "Interverrouillage automatique" },
  { label: "Matériaux", value: "Acier inox, revêtements spéciaux" },
  { label: "Qualification", value: "Tests d'étanchéité inclus" },
];

const UniteIsolement = () => {
  return (
    <Base title="Système de Transfert de Matériel en Salle Blanche">
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
              Système de Transfert en <span className="text-blue-600">Salle Blanche</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Déploiement de sas et pass-through sécurisés pour garantir l&apos;intégrité des zones stériles.
              Notre système d&apos;interverrouillage intelligent réduit considérablement les risques de 
              contamination croisée lors des transferts de matériel.
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
                Nous avons conçu et installé un système de transfert de matériel hautement sécurisé pour les salles blanches. Ce système comprend des sas interverrouillés et des pass-box spécialement conçus pour garantir le maintien des conditions environnementales strictes requises dans les zones à contamination contrôlée.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                Chaque élément a été méticuleusement étudié pour minimiser les risques de contamination croisée : portes affleurantes pour limiter les turbulences d’air, systèmes d’interverrouillage automatique avec signalisation lumineuse, et revêtements compatibles avec les protocoles intensifs de désinfection. Toutes les installations ont subi des tests d’étanchéité rigoureux et une qualification complète des cycles d’ouverture. L’intégration de filtres HEPA dans certains modules de transfert renforce la pureté de l’air lors des manipulations sensibles. Enfin, une traçabilité complète des opérations de transfert a été mise en place afin de garantir un contrôle continu et une sécurité maximale du processus. Une maintenance préventive programmée a également été intégrée pour assurer la performance durable de l’ensemble du système de transfert.                </p>
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
                Découvrez les caractéristiques techniques qui font la différence dans nos systèmes de transfert
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
                      Portes et Pass-Box Affleurants
                    </h4>
                    <p className="text-gray-700">
                      Conception de portes et de systèmes de transfert (pass-box) sans joints apparents 
                      pour minimiser les turbulences d&apos;air et prévenir l&apos;accumulation de contaminants. 
                      Les surfaces lisses facilitent le nettoyage et la désinfection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                    ②
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Interverrouillage Automatique
                    </h4>
                    <p className="text-gray-700">
                      Système d&apos;interverrouillage électronique empêchant l&apos;ouverture simultanée des portes, 
                      accompagné d&apos;une signalisation lumineuse indiquant le statut du sas. Garantit 
                      l&apos;intégrité des zones contrôlées lors des transferts.
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
                      Revêtements Compatibles Désinfection
                    </h4>
                    <p className="text-gray-700">
                      Utilisation de matériaux et revêtements résistants aux agents chimiques de nettoyage 
                      intensif. Conçus pour supporter les protocoles de désinfection quotidiens sans 
                      altération de leurs propriétés.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                    ④
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Tests et Qualification
                    </h4>
                    <p className="text-gray-700">
                      Réalisation de tests d&apos;étanchéité complets et qualification rigoureuse des cycles 
                      d&apos;ouverture. Validation des performances pour garantir la conformité aux normes 
                      et la sécurité des opérations de transfert.
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
                Besoin d&apos;un Système de Transfert Sécurisé ?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour concevoir et installer un système de transfert 
                adapté à vos exigences spécifiques en matière de salle blanche.
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

export default UniteIsolement;