import React from "react";

function ScrollingLogos() {
  const logos = [
    "/images/ClientLogo1.png",
    "/images/ClientLogo2.png",
    "/images/ClientLogo3.png",
    "/images/ClientLogo4.jpg",
    "/images/ClientLogo10.jpg",
    "/images/ClientLogo6.jpg",
    "/images/ClientLogo7.jpg",
    "/images/ClientLogo8.png",
    "/images/ClientLogo9.jpg",
    "/images/ClientLogo12.png",
    "/images/ClientLogo13.jpg",
    "/images/ClientLogo14.png",
    "/images/ClientLogo15.jpg",
    "/images/ClientLogo16.png",
    "/images/ClientLogo17.png",
    "/images/ClientLogo18.png",
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-loop-scroll space-x-16 whitespace-nowrap">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="group">
            <img
              loading="lazy"
              src={logo}
              className="max-w-none object-contain rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105"
              alt={`Logo ${index + 1}`}
              width={250} // Ajustez la taille si nécessaire
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollingLogos;
