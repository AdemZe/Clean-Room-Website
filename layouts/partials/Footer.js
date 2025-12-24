import Link from "next/link";

// --- DONNÉES DU PIED DE PAGE ---
const footerData = {
  explorer: {
    title: "Explorer",
    links: [
      { name: "Page d'accueil", href: "/" },
      { name: "Notre Société", href: "/AboutSection" },
      { name: "Galerie", href: "/secteurs" },
      { name: "Contactez-nous", href: "/contact" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Analyse", href: "/SolutionElements/AnalysePage" },
      { name: "Conception", href: "/SolutionElements/ConceptionPage" },
      { name: "Production", href: "/SolutionElements/ProductionPage" },
      { name: "Installation", href: "/SolutionElements/InstallationPage" },
      { name: "Entretien", href: "/SolutionElements/EntretienPage" },
    ],
  },
  contact: {
    title: "Contact",
    email: "zaouech.rami@gmail.com",
    phone: "+216 58 863 703",
    social: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="w-4 h-4">
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        ),
        href: "https://www.facebook.com/profile.php?id=61574854334597",
        bg: "hover:bg-[#4267B2]",
        label: "Facebook",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        ),
        href: "https://www.linkedin.com/company/clean-room-tunisie/?viewAsMember=true",
        bg: "hover:bg-[#0077B5]",
        label: "LinkedIn",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        ),
        href: "URL_INSTAGRAM",
        bg: "hover:bg-gradient-to-r from-[#E1306C] to-[#F77737]",
        label: "Instagram",
      },
    ],
  },
  adresse: {
    title: "Notre siège",
    location: "Béni khalled - Nabeul\nTunisie",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.484389908032!2d10.590103299999999!3d36.6526192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd59004f2d9fb9%3A0xa7e3202e8d951f84!2sClean%20Room%20Tunisie!5e1!3m2!1sen!2stn!4v1764855563459!5m2!1sen!2stn",
    mapLink: "https://goo.gl/maps/example",
  },
  copyright: {
    year: new Date().getFullYear(),
    languages: [
      { code: "fr", name: "Français", flag: "🇫🇷" },
      { code: "en", name: "English", flag: "🇬🇧" },
    ],
    poweredBy: {
      text: "Propulsé par",
      logoSrc: "/bizip-logo.png",
      tagline: "We help you grow",
    },
  },
};

// Composant pour les liens de navigation
const FooterLinkColumn = ({ title, links }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-bold text-[#F5F5F5] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#4FC3F7]">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-[#E0E0E0] hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm no-underline hover:no-underline"
          >
            <span className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300"></span>
            {link.name}
          </Link>
          {/* Affichage du paragraphe sous "Contactez-nous" */}
          {link.description && (
            <p className="text-[#B0B0B0] text-xs mt-2 ml-5 mb-2 italic whitespace-pre-line leading-relaxed">
              {link.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

// Composant principal du Footer
const Footer = () => {
  const { explorer, services, contact, adresse, copyright } = footerData;

  return (
    <footer className="bg-[#3a3a3a] relative text-white overflow-hidden">
      {/* SECTION PRINCIPALE */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Colonne 1 & 2 : Explorer et Services */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <FooterLinkColumn title={explorer.title} links={explorer.links} />
            <FooterLinkColumn title={services.title} links={services.links} />
          </div>

          {/* Colonne 3 : Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-[#F5F5F5] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#4FC3F7]">
              {contact.title}
            </h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#424242] rounded-lg flex items-center justify-center group-hover:bg-[#4a4a4a] transition-all duration-300">
                  <svg className="w-5 h-5 text-[#4FC3F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#B0B0B0]">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-[#F5F5F5] hover:text-[#4FC3F7] transition-colors duration-300 font-medium no-underline hover:no-underline">
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#424242] rounded-lg flex items-center justify-center group-hover:bg-[#4a4a4a] transition-all duration-300">
                  <svg className="w-5 h-5 text-[#4FC3F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#B0B0B0]">Téléphone</p>
                  <a href={`tel:${contact.phone}`} className="text-[#F5F5F5] hover:text-[#4FC3F7] transition-colors duration-300 font-medium no-underline hover:no-underline">
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm text-[#B0B0B0] mb-3">Suivez-nous</p>
                <div className="flex space-x-3">
                  {contact.social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-[#424242] rounded-lg flex items-center justify-center text-[#F5F5F5] ${item.bg} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Carte */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-[#F5F5F5] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#4FC3F7]">
              {adresse.title}
            </h3>
            
            <div className="bg-[#424242] rounded-xl p-4 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#4FC3F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-[#E0E0E0] text-sm whitespace-pre-line">{adresse.location}</p>
              </div>

              {/* Carte */}
              <div className="relative rounded-lg overflow-hidden aspect-video border border-[#5a5a5a]">
                <iframe
                  src={adresse.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Localisation de Pharma Clean Room"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a3a]/30 to-transparent"></div>
                <a
                  href={adresse.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-[#4FC3F7] hover:bg-[#29B6F6] text-[#1a1a1a] text-xs font-medium px-3 py-1.5 rounded-md transition-colors duration-300 shadow-lg"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION COPYRIGHT */}
      <div className="relative z-10 border-t border-[#5a5a5a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright et Langues */}
            <div className="flex items-center space-x-6 flex-wrap">
              <p className="text-[#B0B0B0] text-sm">
                © {copyright.year} Clean Room Tunisie. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-[#5a5a5a] text-sm">|</span>
                {copyright.languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-1.5 text-[#B0B0B0] hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#4FC3F7] hover:bg-[#29B6F6] text-[#1a1a1a] rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Retour en haut"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;