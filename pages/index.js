import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import Carsouel from "@layouts/components/Carousel";
import { Benefits } from  "@components/Benefits";
import { benefitsData } from "@components/BenefitsData";
import Video from "@components/Video";
import { SectionTitle } from "@layouts/components/SectionTitle";
import {Container} from "@components/Container";
import Blog from "@layouts/components/Blog"; 
import ScrollingLogo from "@layouts/components/ScrollingLogo";






const data = [
  {
    image: '2024_08_27_13_11_IMG_1949.JPG'
  },
  {
    image: 'HI.07-1024x768.jpg'
  },
  {
    image: 'SOF.07-1024x412.jpg'
  }
];





const Home = ({ frontmatter }) => {

  

  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Container>
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Carsouel data={data}/>

            </div>
          </div>
        </div>
      </section>


      
      
      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image 
                    className="mx-auto" 
                    //style={{ color : "#4dc3d7" }}
                    src={item.icon}
                    width={55}
                    height={55}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <SectionTitle
        preTitle=""
        title="Pourquoi choisir CLEAN ROOM TUNISIE "
      />
        
      

      <Benefits imgPos="right" data={benefitsData.benefitTwo} />
      <Benefits data={benefitsData.benefitOne} />

      <SectionTitle 
        preTitle=""
        title="Notre vidéo de présentation"
      />

      <Video videoId="fZ0D0cnR88E" />
      <br/>
      <Blog/>


      <ScrollingLogo/>
      


    

      {/* Cta */}
      <Cta cta={call_to_action} />

         
      
    </Base>
    </Container>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
