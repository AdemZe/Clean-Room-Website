"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import menu from "@config/menu.json"; 
import Logo from "@components/Logo"; 
import config from "@config/config.json";


const Navbarr = () => {
    const { main } = menu;
    const { logo } = config.site;
    const pathname = usePathname();

    // État pour le menu mobile
    const [navbarOpen, setNavbarOpen] = useState(false); 
    
    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleStickyNavbar = () => {
            if (window.scrollY >= 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleStickyNavbar);
            handleStickyNavbar();
        }
        
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", handleStickyNavbar);
            }
        }; 
    }, []);

    // Sous-menu handler pour mobile
    const [openIndex, setOpenIndex] = useState(-1);

    // État pour contrôler le rendu côté client
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true); 
    }, []);

    // Empêcher le scroll du body quand le menu mobile est ouvert
    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [navbarOpen]);
    
    // Référence pour gérer le survol du sous-menu
    const submenuTimeoutRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        if (submenuTimeoutRef.current) {
            clearTimeout(submenuTimeoutRef.current);
        }
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        submenuTimeoutRef.current = setTimeout(() => {
            setHoveredIndex(-1);
        }, 150);
    };

    if (!isClient) {
        return null; 
    }

    // Classes conditionnelles pour l'en-tête
    const headerClasses = `
        fixed top-0 left-0 z-50 w-full transition-all duration-300 pb-0
        ${sticky ? "bg-white/95 shadow-lg backdrop-blur-sm pt-4" : "bg-white pt-6"}
    `;

    return (
        <>
            <header className={headerClasses}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        
                        {/* Logo */}
                        <div className="flex-shrink-0 -translate-y-3 scale-105 md:scale-110">
                            <Link href="/" className="block no-underline">
                                <Logo src={logo} />
                            </Link>
                        </div>

                        {/* Menu Desktop (toujours visible sur grand écran) */}
                        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 2xl:space-x-12">
                            <ul className="flex items-center space-x-8 xl:space-x-10 2xl:space-x-12">
                                {main.map((menuItem, index) => (
                                    <li key={index} className="relative">
                                        {menuItem.path ? (
                                            <Link
                                                href={menuItem.path}
                                                className={`
                                                    flex items-center text-lg font-medium transition-colors duration-300 px-3 py-2 no-underline
                                                    ${pathname === menuItem.path
                                                        ? "text-blue-600 font-semibold" 
                                                        : "text-gray-800 hover:text-blue-600"
                                                    }
                                                `}
                                            >
                                                {menuItem.title}
                                            </Link>
                                        ) : menuItem.submenu ? (
                                            <div 
                                                className="relative"
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <div className="flex items-center cursor-pointer">
                                                    <span className="text-lg font-medium text-gray-800 px-3 py-2 hover:text-blue-600 transition-colors duration-300">
                                                        {menuItem.title}
                                                    </span>
                                                    <svg 
                                                        className="w-5 h-5 ml-1 text-gray-600 transition-transform duration-200" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                    
                                                    {/* Sous-menu Desktop (s'affiche au survol) */}
                                                    <div className={`
                                                        absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-lg py-3 z-50
                                                        transition-all duration-200 ease-out
                                                        ${hoveredIndex === index 
                                                            ? "opacity-100 scale-100 translate-y-0 visible" 
                                                            : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                                                        }
                                                    `}>
                                                        {menuItem.submenu.map((submenuItem, subIndex) => (
                                                            <Link
                                                                href={submenuItem.path}
                                                                key={subIndex}
                                                                className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 no-underline"
                                                            >
                                                                {submenuItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTA Desktop */}
                        <div className="hidden lg:flex items-center">
                            <Link
                                href="/contact"
                                className="ml-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl no-underline hover:no-underline"
                            >
                                Contactez-nous
                            </Link>
                        </div>

                        {/* Bouton Menu Mobile */}
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            aria-label="Toggle Mobile Menu"
                            aria-expanded={navbarOpen}
                            className="text-gray-900 focus:outline-none p-3 rounded-md hover:bg-gray-100 lg:hidden z-[51] relative"
                        >
                            {navbarOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Mobile Overlay - Déplacé en dehors du header pour éviter les conflits de z-index */}
            {navbarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden z-[100]"
                    onClick={() => setNavbarOpen(false)}
                >
                {/* Menu Mobile Panel */}
                <div 
                    className="absolute right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[101] translate-x-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 h-full overflow-y-auto">
                        {/* En-tête du menu mobile */}
                        <div className="flex justify-between items-center mb-10">
                            <div className="-translate-y-3 scale-105"><Logo src={logo} /></div>
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="text-gray-500 hover:text-gray-700 p-2"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Navigation mobile */}
                        <nav className="mb-10">
                            <ul className="space-y-1">
                                {main.map((menuItem, index) => (
                                    <li key={index}>
                                        {menuItem.path ? (
                                            <Link
                                                href={menuItem.path}
                                                className={`
                                                    block px-5 py-4 text-xl font-medium rounded-lg transition-colors no-underline
                                                    ${pathname === menuItem.path
                                                        ? "text-blue-600 bg-blue-50" 
                                                        : "text-gray-800 hover:bg-gray-100"
                                                    }
                                                `}
                                                onClick={() => setNavbarOpen(false)}
                                            >
                                                {menuItem.title}
                                            </Link>
                                        ) : menuItem.submenu ? (
                                            <div className="rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                                    className="flex items-center justify-between w-full px-5 py-4 text-xl font-medium text-gray-800 hover:bg-gray-100"
                                                >
                                                    {menuItem.title}
                                                    <svg 
                                                        className={`w-6 h-6 transition-transform duration-200 ${
                                                            openIndex === index ? "rotate-180" : ""
                                                        }`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </button>
                                                
                                                {/* Sous-menu mobile */}
                                                <div className={`
                                                    overflow-hidden transition-all duration-300
                                                    ${openIndex === index ? "max-h-96" : "max-h-0"}
                                                `}>
                                                    <div className="pl-6 pb-3 space-y-1">
                                                        {menuItem.submenu.map((submenuItem, subIndex) => (
                                                            <Link
                                                                href={submenuItem.path}
                                                                key={subIndex}
                                                                className="block px-5 py-3 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors no-underline"
                                                                onClick={() => setNavbarOpen(false)}
                                                            >
                                                                {submenuItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTA Mobile */}
                        <Link
                            href="/contact"
                            className="block w-full py-4 px-6 text-center text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md no-underline hover:no-underline"
                            onClick={() => setNavbarOpen(false)}
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </div>
                </div>
            )}
        </>
    );
};

export default Navbarr; 