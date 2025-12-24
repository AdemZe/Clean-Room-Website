import React from "react";
import Base from '@layouts/Baseof';
import Link from "next/link";

function InstallationPage() {
  // Définir une classe Tailwind cohérente pour le conteneur principal des sections de contenu
  const contentContainerClasses = "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";

  return (
    <Base title="Installation">
      <section className="mx-auto w-full bg-white py-12 dark:bg-gray-900 dark:text-white">
        <br/>
        <br/>
        
        {/* Premier bloc */}
        <div className={`${contentContainerClasses} mt-4`}>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/installation2.webp"
                  alt="Salle blanche installation"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Installation d&apos;une salle blanche :
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    L&apos;installation d&apos;une salle blanche est une opération délicate qui peut impacter son bon fonctionnement. Nous avons développé des Protocoles Clean Process pour garantir une performance optimale et une mise en service rapide. Ces protocoles sont suivis par des équipes d&apos;installateurs spécialisés, tout en assurant une sécurité maximale tout au long du chantier.
                  </p>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Deuxième titre avec icône */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Protocole Clean Process
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Le Protocole Clean Process accélère la mise en service des salles blanches en fournissant des lignes directrices pour un nettoyage rigoureux lors de l&apos;installation. Adapté à chaque projet, il vise à éliminer la poussière pour réduire les risques et les coûts de nettoyages ultérieurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième bloc (ordre inversé) */}
        <div className={`${contentContainerClasses} mt-12`}>
          <div className="flex flex-col md:flex-row-reverse justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/installation7.jpg"
                  alt="Sécurité chantier"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/5 to-transparent"></div>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Installateurs spécialisés
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Nos équipes d&apos;installateurs sont formées pour suivre précisément les Protocoles Clean Process et les exigences de chaque projet. Ces professionnels hautement qualifiés suivent des pratiques rigoureuses, de la gestion du chantier jusqu&apos;aux tests de certification, en accord avec les standards élevés de Clean Room Tunisie.
                  </p>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Deuxième titre avec icône */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Sécurité sur le chantier
                    </h3>
                  </div>
                  <div className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    <p className="mb-3">
                      La sécurité est une priorité absolue sur nos chantiers, avec deux niveaux de contrôle :
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Opérationnel :</strong> Vérification que l&apos;installation respecte les plans et les protocoles, étape par étape.
                      </li>
                      <li>
                        <strong>Stratégique :</strong> Le chef de chantier et le project manager supervisent directement toutes les phases du projet, garantissant une sécurité et une efficacité maximales.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troisième bloc */}
        <div className={`${contentContainerClasses} mt-12`}>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/installation8.jpg"
                  alt="Service de qualification"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Service de qualification
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Nous offrons un service de qualification flexible qui peut être effectué de manière régulière ou ponctuelle, selon les demandes du client. Ce service est essentiel pour assurer le maintien des performances optimales de la salle blanche dans le temps.
                  </p>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Deuxième titre avec icône */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Lien avec la production
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    La qualification et validation sont une extension naturelle de notre processus de production personnalisé. En tant que producteurs directs, nous contrôlons chaque étape, depuis la conception sur mesure jusqu&apos;à l&apos;installation. Une fois la salle blanche installée, la qualification garantit que le produit livré répond aux normes les plus élevées et aux exigences spécifiques du client, renforçant ainsi notre engagement envers la qualité et la fiabilité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section d'étapes - 5 étapes (identique à AnalysePage) */}
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
              Prêt à concrétiser votre projet d&apos;installation ?
            </h3>
            <p className="mb-8 text-xl text-white/90">
              Contactez-nous pour une expertise gratuite de votre projet de salle blanche
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

export default InstallationPage;