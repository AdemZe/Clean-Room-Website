import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {footer.map((col) => {
            return (
              <div className="mb-12   " key={col.name}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6 p-1 ">
                  {col?.menu.map((item) => (
                    <li className="mb-2 " key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 ">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
