import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Video({ videoId, localSrc = "/images/video-corporate-clean-room.mp4" }) {
  const [playVideo, setPlayVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isAvi = typeof localSrc === 'string' && localSrc.toLowerCase().endsWith('.avi');
  // don't attempt autoplay for .avi since it's often unsupported; let user click play
  const allowAutoPlay = !isAvi;

  const thumbnailUrl = "/images/CRT.jpg"; 
  const titleText = "Notre vidéo de présentation";

  // Note: using a local video in `public/` such as `/images/video-corporate-clean-room.mp4`.
  // Browsers have limited support for .avi; convert to MP4/WebM for best compatibility.


  const handleClick = () => {
    setPlayVideo(true);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (playVideo && videoRef.current) {
      const v = videoRef.current;
      // Try to play; handle autoplay being blocked gracefully
      const playPromise = v.play && v.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // Autoplay might be blocked — user can click play after controls appear
        });
      }
    }
  }, [playVideo]);

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre centré et ligne de séparation - exactement comme les autres sections */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-10">
            {titleText}
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-700 mb-12"></div>
        </div>

        {/* Conteneur de la Vidéo - centré et avec largeur maximale */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            {/* Conteneur avec ratio 16:9 */}
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              {/* Si playVideo est false, on affiche la miniature */}
              {!playVideo ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={handleClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Image de la miniature avec overlay au survol */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={thumbnailUrl}
                      alt="Miniature de la vidéo de présentation Clean Room Tunisie"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  
                  {/* Overlay sombre au survol */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Bouton de lecture au centre */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Effet de pulse autour du bouton */}
                      <div className={`absolute inset-0 rounded-full bg-blue-600/30 transition-all duration-500 ${
                        isHovered ? 'animate-ping scale-125 opacity-70' : 'scale-100 opacity-0'
                      }`}></div>
                      
                      {/* Bouton principal de lecture */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                        {/* Triangle de lecture */}
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-transparent border-l-blue-700 ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Texte en bas de la miniature */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Cliquez pour regarder la vidéo
                    </p>
                  </div>
                </div>
              ) : (
                // Local HTML5 video player. Keep MP4/WebM sources for browser support; AVI fallback included but not recommended.
                <video
                  ref={videoRef}
                  className={`absolute inset-0 w-full h-full object-cover object-center block bg-transparent transition-transform duration-300 ${playVideo ? 'scale-105' : 'scale-100'}`}
                  controls
                  autoPlay={allowAutoPlay}
                  muted={allowAutoPlay}
                  playsInline
                  poster={thumbnailUrl}
                  onEnded={() => setPlayVideo(false)}
                >
                  {/* Primary source: MP4 (recommended). Add a .webm fallback if available. */}
                  <source src={localSrc} type="video/mp4" />
                  <source src={localSrc.replace(/\.mp4$/, ".webm")} type="video/webm" />
                  {/* Fallback for the provided AVI file (not widely supported in browsers) */}
                  <source src="/images/video-corporate-clean-room.avi" type="video/avi" />
                  Votre navigateur ne supporte pas la vidéo HTML5. Vous pouvez <a href={localSrc}>télécharger la vidéo</a>.
                </video>
              )}
            </div>
          </div>

          {/* Description sous la vidéo */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}