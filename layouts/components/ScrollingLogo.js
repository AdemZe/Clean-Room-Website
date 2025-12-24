import Image from "next/image";
import React from "react";

// Augmenter les dimensions des logos dans le tableau :
const LOGOS = [
  { src: "/images/ClientLogo1.png", alt: "Client Logo 1", width: 225, height: 150 },
  { src: "/images/ClientLogo2.png", alt: "Client Logo 2", width: 450, height: 450 },
  { src: "/images/ClientLogo3.png", alt: "Client Logo 3", width: 300, height: 300 },
  { src: "/images/ClientLogo4.jpg", alt: "Client Logo 4", width: 450, height: 450 },
  { src: "/images/ClientLogo10.jpg", alt: "Client Logo 10", width: 450, height: 450 },
  { src: "/images/ClientLogo6.jpg", alt: "Client Logo 6", width: 450, height: 450 },
  { src: "/images/ClientLogo7.jpg", alt: "Client Logo 7", width: 225, height: 225 },
  { src: "/images/ClientLogo8.png", alt: "Client Logo 8", width: 225, height: 150 },
  { src: "/images/ClientLogo9.jpg", alt: "Client Logo 9", width: 225, height: 150 },
  { src: "/images/ClientLogo12.png", alt: "Client Logo 12", width: 225, height: 150 },
  { src: "/images/ClientLogo13.jpg", alt: "Client Logo 13", width: 225, height: 150 },
  { src: "/images/ClientLogo14.png", alt: "Client Logo 14", width: 225, height: 150 },
  { src: "/images/ClientLogo15.jpg", alt: "Client Logo 15", width: 225, height: 150 },
  { src: "/images/ClientLogo16.png", alt: "Client Logo 16", width: 225, height: 150 },
  { src: "/images/ClientLogo17.png", alt: "Client Logo 17", width: 225, height: 150 },
  { src: "/images/ClientLogo18.png", alt: "Client Logo 18", width: 225, height: 150 },
];

function ScrollingLogo() {
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre centré et ligne de séparation */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
            ILS NOUS FONT CONFIANCE
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
        </div>

        {/* Zone de défilement des logos */}
        <div className="group flex overflow-hidden py-2">
          <div className="group-hover:paused flex animate-loop-scroll space-x-8">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center px-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  className="max-w-none object-contain h-24 w-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingLogo;