import React from "react";
import Base from '@layouts/Baseof';
import Link from 'next/link';

function ConceptionPage() {
  // Définir une classe Tailwind cohérente pour le conteneur principal des sections de contenu
  const contentContainerClasses = "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";

  return (
    <Base title="Conception">
      <section className="mx-auto w-full bg-white py-12 dark:bg-gray-900 dark:text-white">
        <br/>
        <br/>
        {/* Suppression du titre principal - on commence directement avec le contenu */}
        <div className={`${contentContainerClasses} mt-4`}>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/conception1.webp"
                  alt="Exigences de conception salle blanche"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent"></div>
              </div>
            </div>
            
            {/* Texte avec icônes */}
            <div className="w-full md:w-1/2 flex items-center rounded-xl bg-gradient-to-br from-[#71a3c1] to-[#5a8cab] shadow-xl text-white p-6 sm:p-8">
              <div className="py-2">
                
                {/* Premier titre avec icône */}
                <div className="mb-6">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Exigences de conception d&apos;une salle blanche
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Les exigences de la salle blanche sont définies dès le départ pour guider la phase de conception. La première priorité est le respect des réglementations en vigueur. Ensuite, la salle doit s&apos;intégrer harmonieusement dans le flux des procédés de l&apos;entreprise, en prenant en compte les machines, les opérateurs, les cycles de nettoyage, ainsi que l&apos;entrée et la sortie des matériaux. L&apos;objectif est de livrer une solution prête à l&apos;emploi.
                  </p>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Deuxième titre avec icône */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Critères de conception
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Lors de la conception, le design, l&apos;agencement, et les caractéristiques de construction sont adaptés au secteur d&apos;activité, notamment en ce qui concerne le choix des matériaux. D&apos;autres critères essentiels sont également pris en compte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième bloc */}
        <div className={`${contentContainerClasses} mt-12`}>
          <div className="flex flex-col md:flex-row-reverse justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/conception2.jpeg"
                  alt="Critères et réglementations conception"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/5 to-transparent"></div>
              </div>
            </div>

            {/* Texte avec icônes */}
            <div className="w-full md:w-1/2 flex items-center rounded-xl bg-gradient-to-br from-[#71a3c1] to-[#5a8cab] shadow-xl text-white p-6 sm:p-8">
              <div className="py-2">
                
                {/* Critères détaillés avec icône */}
                <div className="mb-6">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Critères essentiels
                    </h2>
                  </div>
                  <ul className="text-base sm:text-lg leading-relaxed text-white/90 ml-14 space-y-2 list-none">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Modularité : La disposition doit être flexible.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Expansibilité : Possibilité d&apos;agrandir la surface.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Évolutivité : Capacité à ajuster le niveau de classification ISO.</span>
                    </li>
                  </ul>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Réglementations avec icône */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Réglementations des salles blanches
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Tous les projets respectent les normes internationales, notamment l&apos;UNI EN ISO 14644 pour les salles blanches. D&apos;autres normes spécifiques peuvent aussi s&apos;appliquer, comme la Federal Standard aux États-Unis ou les bonnes pratiques de fabrication (GMP) pour l&apos;industrie pharmaceutique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section d'étapes améliorée - 5 étapes */}
        <div className={`${contentContainerClasses} mt-20`}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Notre Processus en 5 Étapes
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 font-medium">
              Des solutions complètes, de la conception à la maintenance durable
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { 
                number: "01", 
                title: "Analyse", 
                desc: "Étude approfondie de vos besoins et contraintes", 
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              { 
                number: "02", 
                title: "Conception", 
                desc: "Développement de solutions adaptées à votre contexte", 
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                number: "03", 
                title: "Production", 
                desc: "Fabrication avec des matériaux de haute qualité", 
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              { 
                number: "04", 
                title: "Installation", 
                desc: "Mise en œuvre par nos équipes spécialisées", 
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                number: "05", 
                title: "Entretien", 
                desc: "Suivi et maintenance pour une performance durable", 
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
            ].map((step, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="absolute -right-3 -top-3 text-7xl font-extrabold text-blue-100 opacity-20 transition-all duration-500 group-hover:opacity-30 dark:text-gray-700">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#71a3c1] to-[#5a8cab] text-white shadow-lg">
                    {step.icon}
                  </div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${contentContainerClasses} mt-20`}>
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-[#71a3c1] to-[#5a8cab] p-8 sm:p-10 text-center shadow-2xl">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="mb-4 text-3xl font-extrabold text-white">
              Prêt à concrétiser votre projet ?
            </h3>
            <p className="mb-8 text-xl text-white/90">
              Contactez-nous pour une conception personnalisée de votre salle blanche
            </p>
            <Link
              href="/contact"
              className="rounded-full bg-white px-10 py-3 text-lg font-bold text-[#71a3c1] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 inline-block no-underline"
            >
              Demander une consultation
            </Link>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default ConceptionPage;