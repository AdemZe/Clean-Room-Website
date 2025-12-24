import Base from '@layouts/Baseof';
import Link from "next/link";

function EntretienPage() {
  // Définir une classe Tailwind cohérente pour le conteneur principal des sections de contenu
  const contentContainerClasses = "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";

  return (
    <Base title="Entretien">
      <section className="mx-auto w-full bg-white py-12 dark:bg-gray-900 dark:text-white">
        <br/>
        <br/>
        {/* Premier bloc - Suivi des salles blanches et Nos services d'entretien */}
        <div className={`${contentContainerClasses} mt-4`}>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/entretien2.jpg"
                  alt="Entretien des salles blanches"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent"></div>
              </div>
            </div>
            
            {/* Texte avec icônes */}
            <div className="w-full md:w-1/2 flex items-center rounded-xl bg-gradient-to-br from-[#71a3c1] to-[#5a8cab] shadow-xl text-white p-6 sm:p-8">
              <div className="py-2">
                
                {/* Premier titre avec icône - Suivi des salles blanches */}
                <div className="mb-6">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Suivi des salles blanches
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Le suivi et l&apos;entretien d&apos;une salle blanche consistent à planifier
                    des interventions régulières pour assurer son bon fonctionnement et
                    prévenir les pannes ou les dysfonctionnements. Chez Clean Room
                    Tunisie, nous proposons plusieurs services pour maintenir chaque
                    salle blanche en parfaite condition.
                  </p>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Deuxième titre avec icône - Nos services d'entretien */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Nos services d&apos;entretien
                    </h3>
                  </div>
                  <div className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Nous offrons trois types de services d&apos;entretien pour répondre aux
                    besoins spécifiques de nos clients :
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Assistance à la demande : Ce service flexible couvre les
                        imprévus et dysfonctionnements inattendus.
                      </li>
                      <li>
                        Assistance programmée : Il s&apos;agit d&apos;interventions planifiées à
                        intervalles réguliers, le service le plus populaire, car il
                        garantit un entretien préventif continu.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième bloc - Importance de l'entretien et Intervention rapide */}
        <div className={`${contentContainerClasses} mt-12`}>
          <div className="flex flex-col md:flex-row-reverse justify-center items-stretch gap-6 lg:gap-8">
            
            {/* Image avec effet */}
            <div className="w-full md:w-1/2 flex items-stretch min-h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/entretien1.jpg"
                  alt="Importance de l'entretien des salles blanches"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/5 to-transparent"></div>
              </div>
            </div>

            {/* Texte avec icônes */}
            <div className="w-full md:w-1/2 flex items-center rounded-xl bg-gradient-to-br from-[#71a3c1] to-[#5a8cab] shadow-xl text-white p-6 sm:p-8">
              <div className="py-2">
                
                {/* Premier titre avec icône - Importance de l'entretien */}
                <div className="mb-6">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Importance de l&apos;entretien
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    L&apos;entretien régulier des salles blanches permet de réduire
                    considérablement les coûts et les problèmes. En effectuant les
                    contrôles nécessaires, nous prévenons les pannes qui pourraient
                    entraîner l&apos;arrêt de la production. Ainsi, la salle blanche reste
                    toujours opérationnelle. Faire appel à Clean Room Tunisie permet
                    également d&apos;économiser sur les coûts liés à l&apos;embauche d&apos;un
                    technicien interne, en s&apos;appuyant sur un partenaire expert dans ce
                    domaine.
                  </p>
                </div>

                {/* Séparateur subtil */}
                <hr className="my-8 border-t border-white/30" />

                {/* Deuxième titre avec icône - Intervention rapide et ponctuelle */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      Intervention rapide et ponctuelle
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 ml-14">
                    Nos techniciens sont spécialement formés pour gérer tout type
                    d&apos;imprévu pouvant affecter une salle blanche. Dans la majorité des
                    cas, nous pouvons résoudre les problèmes à distance. Si nécessaire,
                    nous intervenons rapidement sur site pour assurer un retour à la
                    normale dans les plus brefs délais.
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
              Besoin d&apos;un entretien pour votre salle blanche ?
            </h3>
            <p className="mb-8 text-xl text-white/90">
              Contactez-nous pour un devis d&apos;entretien personnalisé
            </p>
            <Link
              href="/contact"
              className="rounded-full bg-white px-10 py-3 text-lg font-bold text-[#71a3c1] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 inline-block no-underline"
            >
              Demander un devis d&apos;entretien
            </Link>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default EntretienPage;