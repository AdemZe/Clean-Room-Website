import React from "react";

function ConceptionPage() {
  return (
    <section className="mx-auto w-full bg-gray-50 py-10 dark:text-white">
      <div className="; mx-4 mx-auto mt-6 w-fit rounded-md border-b-2 px-2 pb-1 text-2xl font-semibold	text-black ">
        Conception
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
            Exigences de conception d’une salle blanche{" "}
          </h2>
          <p className="text-md mt-4">
            Les exigences de la salle blanche sont définies dès le départ pour
            guider la phase de conception. La première priorité est le respect
            des réglementations en vigueur. Ensuite, la salle doit s’intégrer
            harmonieusement dans le flux des procédés de l’entreprise, en
            prenant en compte les machines, les opérateurs, les cycles de
            nettoyage, ainsi que l’entrée et la sortie des matériaux. L’objectif
            est de livrer une solution ` clé en main `, prête à l’emploi.
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
            Critères de conception{" "}
          </h2>
          <p className="text-md mt-4">
            Lors de la conception, le design, l’agencement (layout), et les
            caractéristiques de construction sont adaptés au secteur d’activité,
            notamment en ce qui concerne le choix des matériaux. D’autres
            critères essentiels sont également pris en compte :
            <ul>
              <li>Modularité : La disposition doit être flexible.</li>
              <li>Expansibilité : Possibilité d’agrandir la surface.</li>
              <li>
                Évolutivité : Capacité à ajuster le niveau de classification
                ISO.
              </li>
            </ul>
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Réglementations des salles blanches{" "}
          </h2>
          <p className="text-md mt-4">
            Tous les projets respectent les normes internationales, notamment
            l’UNI EN ISO 14644 pour les salles blanches. D’autres normes
            spécifiques peuvent aussi s’appliquer, comme la Federal Standard aux
            États-Unis ou les bonnes pratiques de fabrication (GMP) pour
            l’industrie pharmaceutique.
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

export default ConceptionPage;
