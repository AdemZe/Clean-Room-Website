import React from "react";
import Base from "@layouts/Baseof";
import Carousel from "@layouts/components/Carousel";
import { CheckCircle, Settings, Users, Award, Zap, Shield } from "lucide-react";

const slides = [
  { image: "production1.png", alt: "Ligne de production en salle propre" },
  { image: "production2.jpg", alt: "Chaine de conditionnement automatisée" },
  { image: "production3.jpg", alt: "Zone de conditionnement et emballage" },
];

const keyFeatures = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Lignes de Production GMP",
    description: "Process automatisés conformes aux Bonnes Pratiques de Fabrication pour une production fiable"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Contrôle Qualité Intégré",
    description: "Contrôles en ligne et laboratoires de contrôle qualité pour chaque lot"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Flux et Ergonomie",
    description: "Agencement optimisé des lignes pour réduire les risques de contamination et améliorer la productivité"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Maintenance Préventive",
    description: "Programmes de maintenance et diagnostics pour garantir la disponibilité des équipements"
  }
];

const projectDetails = [
  { label: "Type de projet", value: "Unité de Fabrication et Conditionnement" },
  { label: "Normes appliquées", value: "GMP, ISO 14644" },
  { label: "Surface", value: "Selon cahier des charges" },
  { label: "Délai de réalisation", value: "Sur demande" },
  { label: "Équipements", value: "Lignes automatisées, zones aseptiques" },
  { label: "Qualification", value: "IQ/OQ/PQ inclus" },
];

const UniteFabrication = () => {
  return (
    <Base title="Unité de Fabrication et Conditionnement">
      <br />
      <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Projet Réalisé
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unité de <span className="text-blue-600">Fabrication & Conditionnement</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Conception et réalisation d&apos;unités de fabrication conformes aux exigences réglementaires et opérationnelles des industries pharmaceutiques et cosmétiques.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Carousel data={slides} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  Aperçu du Projet
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Nous avons conçu une unité complète de fabrication et conditionnement intégrant zones aseptiques, lignes d&apos;emballage automatisées, et systèmes de contrôle qualité. L&apos;organisation des flux et la sélection des matériaux assurent une conformité durable aux exigences GMP.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Les prestations couvrent l&apos;étude de conception, la fourniture et l&apos;nstallation des équipements, la qualification (IQ/OQ/PQ), ainsi que la formation des opérateurs et la mise en place des procédures qualité.
                </p>
              </div>
            </div>

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

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Points Clés du Projet</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Conception modulaire et solutions clé en main pour des lignes de production conformes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Besoin d&apos;un Système de Production ?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Contactez notre équipe pour une étude et une solution sur mesure adaptée à votre process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Contacter-Nous</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default UniteFabrication;
