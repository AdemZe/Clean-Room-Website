function EntretienPage() {
  return (
    <section className="mx-auto w-full bg-gray-50 py-10 dark:text-white">
      <div className="; mx-4 mx-auto mt-6 w-fit rounded-md border-b-2 px-2 pb-1 text-2xl font-semibold	text-black ">
        Entretien
      </div>

      <div className="xs:w-[90%] xs:flex-col xs:gap-2 mx-auto mt-4 flex justify-center sm:w-[85%] md:flex-row md:items-center lg:items-stretch lg:gap-4 xl:w-[80%]">
        <div className="xs:w-full lg:w-[50%]">
          <img
            className="xs:rounded-sm sm:rounded-sm lg:rounded-t-lg"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="billboard image"
          />
        </div>
        <div className="xs:w-full xs:p-0 rounded-md  bg-[#71a3c1] sm:w-full md:p-4 lg:w-[50%] dark:text-gray-900">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Suivi des salles blanches{" "}
          </h2>
          <p className="text-md mt-4">
            Le suivi et l’entretien d’une salle blanche consistent à planifier
            des interventions régulières pour assurer son bon fonctionnement et
            prévenir les pannes ou les dysfonctionnements. Chez Clean Room
            Tunisie, nous proposons plusieurs services pour maintenir chaque
            salle blanche en parfaite condition.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Nos services d’entretien{" "}
          </h2>

          <p className="text-md mt-4">
            Nous offrons trois types de services d’entretien pour répondre aux
            besoins spécifiques de nos clients :
            <ul>
              <li>
                Assistance à la demande : Ce service flexible couvre les
                imprévus et dysfonctionnements inattendus.
              </li>
              <li>
                Assistance programmée : Il s’agit d’interventions planifiées à
                intervalles réguliers, le service le plus populaire, car il
                garantit un entretien préventif continu.{" "}
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="xs:w-[90%] xs:flex-col xs:gap-2 mx-auto mt-6 flex justify-center sm:w-[85%] md:flex-row md:items-center lg:items-stretch lg:gap-4 xl:w-[80%]">
        <div className="xs:block xs:w-full sm:block md:hidden">
          <img
            className="xs:rounded-sm sm:rounded-sm lg:rounded-t-lg"
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="billboard image"
          />
        </div>
        <div className="xs:w-full xs:p-0 rounded-md bg-[#71a3c1] md:p-4 lg:w-[50%] dark:text-gray-900">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Importance de l’entretien
          </h2>
          <p className="text-md mt-4">
            L’entretien régulier des salles blanches permet de réduire
            considérablement les coûts et les problèmes. En effectuant les
            contrôles nécessaires, nous prévenons les pannes qui pourraient
            entraîner l’arrêt de la production. Ainsi, la salle blanche reste
            toujours opérationnelle. Faire appel à Clean Room Tunisie permet
            également d’économiser sur les coûts liés à l’embauche d’un
            technicien interne, en s’appuyant sur un partenaire expert dans ce
            domaine.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Intervention rapide et ponctuelle
          </h2>
          <p className="text-md mt-4">
            Nos techniciens sont spécialement formés pour gérer tout type
            d’imprévu pouvant affecter une salle blanche. Dans la majorité des
            cas, nous pouvons résoudre les problèmes à distance. Si nécessaire,
            nous intervenons rapidement sur site pour assurer un retour à la
            normale dans les plus brefs délais.
          </p>
        </div>
        <div className="xs:hidden xs:w-full sm:hidden md:block lg:w-[50%]">
          <img
            className="xs:rounded-sm lg:rounded-t-lg"
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="billboard image"
          />
        </div>
      </div>
    </section>
  );
}

export default EntretienPage;
