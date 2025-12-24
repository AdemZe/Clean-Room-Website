import React, { useEffect, useState } from 'react';

const DataAboutSociete = () => {
  // State pour les animations de comptage
  const [counts, setCounts] = useState({
    surface: '0+',
    projects: '0+',
    experience: '0+',
  });

  useEffect(() => {
    const targets = [
      { key: 'surface', count: 70000, suffix: '+' },
      { key: 'projects', count: 400, suffix: '+' },
      { key: 'experience', count: 20, suffix: '+' },
    ];

    const animateCountUp = (key, targetCount, suffix) => {
      let currentCount = 0;
      const duration = 1500;
      const steps = 100;
      const increment = Math.ceil(targetCount / steps);
      
      let stepCount = 0;

      const interval = setInterval(() => {
        stepCount++;
        currentCount += increment;
        
        if (stepCount >= steps || currentCount >= targetCount) {
          clearInterval(interval);
          currentCount = targetCount;
        }

        const formattedCount = currentCount.toLocaleString('fr-FR');

        setCounts((prev) => ({
          ...prev,
          [key]: `${formattedCount}${suffix}`,
        }));
      }, duration / steps);
    };

    targets.forEach((target) => {
      animateCountUp(target.key, target.count, target.suffix);
    });
  }, []);

  return (
    <section className="py-2 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Texte / Introduction - Alignement et Style */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
            Chiffres clés
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>

          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="px-4 sm:px-0">
              <strong className="font-semibold text-gray-900">Depuis 2004</strong>, Clean Room Tunisie conçoit et installe des salles propres modulaires conformes aux normes internationales pour les industries pharmaceutiques, électroniques et agroalimentaires. Avec une équipe de plus de 22 techniciens, l&apos;entreprise garantit des solutions de haute qualité, alliant innovation, matériaux excellents et expertise, assurant ainsi la satisfaction des clients grâce à une efficacité et un suivi professionnel.
            </p>
          </div>
        </div>
        
        {/* Section Cartes de Chiffres - Espacement réduit */}
        <div className="max-w-5xl mx-auto mt-10">
          <dl className="grid grid-cols-1 gap-5 md:grid-cols-3">
            
            {/* Carte 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform border border-blue-100 hover:border-blue-500">
              <dd className="order-1 text-6xl font-extrabold text-blue-700 mb-2">
                {counts.surface}
              </dd>
              <dt className="order-2 text-lg font-semibold text-gray-600 mt-2 text-center">
                M² Surface totale de construction
              </dt>
            </div>
            
            {/* Carte 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform border border-blue-100 hover:border-blue-500">
              <dd className="order-1 text-6xl font-extrabold text-blue-700 mb-2">
                {counts.projects}
              </dd>
              <dt className="order-2 text-lg font-semibold text-gray-600 mt-2 text-center">
                Projets réalisés
              </dt>
            </div>
            
            {/* Carte 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform border border-blue-100 hover:border-blue-500">
              <dd className="order-1 text-6xl font-extrabold text-blue-700 mb-2">
                {counts.experience}
              </dd>
              <dt className="order-2 text-lg font-semibold text-gray-600 mt-2 text-center">
                Années d&apos;expérience
              </dt>
            </div>

          </dl>
        </div>
      </div>
    </section>
  );
};

export default DataAboutSociete;