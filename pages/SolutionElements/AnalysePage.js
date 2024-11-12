import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function AnalysePage() {
  return (
    <section className="mx-auto w-full bg-gray-50 py-10 dark:text-white">
      <div className="; mx-4 mx-auto mt-6 w-fit rounded-md border-b-2 px-2 pb-1 text-2xl font-semibold	text-black ">
        Analyse
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
            Analyse des besoins du client
          </h2>
          <p className="text-md mt-4">
            Chez Clean Room Tunisie, nous ne laissons rien au hasard.L`analyse
            des exigences du client est une étape essentielle. Nous nous
            concentrons sur la compréhension de son secteur d`activité, des
            réglementations en vigueur et du contexte dans lequel la salle
            blanche sera intégrée.
          </p>
          <h2 className="mt-10 text-3xl font-semibold text-gray-900 dark:text-white ">
            Consultation personnalisée{" "}
          </h2>
          <p className="text-md mt-4">
            Lors de la consultation, un de nos conseillers vous accompagne pour
            discuter de vos besoins. Il prend en compte tous les détails afin de
            préparer une offre adaptée, sans superflu, répondant parfaitement à
            votre entreprise.
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
            État des lieux
          </h2>
          <p className="text-md mt-4">
            Si nécessaire, nous effectuons une visite de vos locaux pour
            identifier d`éventuelles contraintes à considérer lors de la
            conception. Cette étape permet aussi de valider la faisabilité des
            solutions envisagées.
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Devis personnalisé
          </h2>
          <p className="text-md mt-4">
            Sur la base des informations collectées, nous vous proposons un
            devis sur mesure, en tenant compte des spécificités de votre projet.
            Notre objectif est de recommander la meilleure solution
            technologique pour répondre à vos besoins.{" "}
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

export default AnalysePage;
