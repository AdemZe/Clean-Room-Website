import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/navbar.module.scss"; // Importation du fichier CSS Module

const Navbar = () => {
  const router = useRouter();
  const { main } = menu;
  const [navOpen, setNavOpen] = useState(false);
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;



  return (
    <nav className="${styles.navbar} flex items-center justify-between p-4 bg-gray-800 flex-wrap "> {/* Utilisation de la classe CSS Module */}
    
      <div className="{styles.logo} flex-shrink-0"> {/* Utilisation de la classe CSS Module */}
        <Logo src={logo} />
      </div>

      <button
        id="show-button"
        className={`${styles['navbar-toggler']} order-2 flex cursor-pointer items-center md:hidden md:order-1`} // Utilisation de la classe CSS Module
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? (
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            />
          </svg>
        ) : (
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
          </svg>
        )}
      </button>

      <div
        id="nav-menu"
       // className={`order-3 md:order-1 ${navOpen ? "max-h-[1000px]" : "max-h-0"}`}
       className=" hidden md:flex space-x-8 flex-grow "
      >
        <ul className="navbar-nav flex items-center space-x-4 flex-wrap">
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className={`${styles['nav-item']}  nav-item inline-flex`}>
                  <span className={`${styles['nav-link']} nav-link inline-flex items-center`}>
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className={`${styles['nav-dropdown-list']} nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100`}>
                    {menu.children.map((child, i) => (
                      <li className=" nav-item inline-flex " key={`children-${i}`}>
                        <Link
                          href={child.url}
                          className={`${styles['nav-dropdown-link']} nav-dropdown-link `}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item  inline-flex">
                  <Link href={menu.url} onClick={() => setNavOpen(false)} className={`${styles['nav-link']} nav-link inline-flex ${router.asPath === menu.url ? styles['nav-link-active'] : ""}`}>
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {enable && (
            <li className="md:hidden">
              <Link
                className={`${styles['btn']} btn btn-primary z-0 py-[14px]`}
                href={link}
                rel=""
              >
                {label}
              </Link>
            </li>
          )}
        </ul>
      </div>
      {enable && (
        //<div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
        <div className="flex-shrink-0">   
          <Link className={`${styles['btn']} btn btn-primary z-0 py-[14px]`} href={link} rel="">
            {label}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

