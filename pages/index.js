import config from "@config/config.json";
import Base from "@layouts/Baseof";
import "swiper/css";
import { getListPage } from "../lib/contentParser";
import CleanRoomFeatures from  "@layouts/components/Benefits";
import Video from "@components/Video";
import {Container} from "@components/Container";
import ScrollingLogo from "@layouts/components/ScrollingLogo";
import GalleryPage from "@layouts/components/GalleryPage";
import SecteurActiviter from "@layouts/components/SecteurActiviter";
import DataAboutSociete from "@layouts/components/DataAboutSociete";
import ProjectsSection from "@layouts/components/ProjectsSection";
import BannerSection from "@layouts/components/BannerSection";





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

  

  const { banner, feature } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <BannerSection banner={banner} data={data} />
      </div>
      <Container fluid>
      <SecteurActiviter feature={feature} />
      <CleanRoomFeatures/>
      <Video videoId="fZ0D0cnR88E" />
      <ProjectsSection/>
      <GalleryPage/>
      <DataAboutSociete/>
      <ScrollingLogo/>
      </Container>
    </Base>
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

