import GridCard from "../components/GridCard";

import AboutCard from "../components/cards/home/AboutCard";
import QuoteGenerator from "../components/cards/home/QuoteGenerator";
import WorkExpCard from "../components/cards/home/WorkExpCard";
import ThemeSwitcher from "../components/cards/home/ThemeSwitcher";
import TechStackCard from "../components/cards/home/TechStackCard";
import SocialCard from "../components/cards/home/SocialCard";
import { admin } from "../data/admin";
import MusicCard from "../components/cards/home/MusicCard";
import TheRedButton from "../components/cards/home/TheRedButton";
import FooterCard from "../components/cards/home/FooterCard";
import PhotoCard from "../components/cards/home/PhotoCard";
import ProjectCard from "../components/cards/home/ProjectCard";
import ImageCard from "../components/cards/home/ImageCard";

const Home = () => {
  return (
    <>
      <GridCard
        className={
          "hidden  md:col-span-2 md:row-span-2 md:flex items-center justify-center group"
        }
      >
        <ImageCard />
      </GridCard>
      <GridCard className={"col-span-12  md:col-span-8 row-span-2"}>
        <AboutCard />
      </GridCard>
      {/* Mobile Card */}
      <GridCard
        className={
          "block md:hidden col-span-12 row-span-3 md:col-span-6 md:row-span-4"
        }
      >
        <WorkExpCard />
      </GridCard>
      {/* Mobile Card */}
      <GridCard
        className={
          "col-span-6 row-span-2 md:col-span-2 md:row-span-2 bg-dark border-0 !p-0"
        }
      >
        <ThemeSwitcher />
      </GridCard>
      <GridCard className={"col-span-6 row-span-4 md:col-span-3 md:row-span-6"}>
        <TechStackCard />
      </GridCard>
      <GridCard
        className={"col-span-6 row-span-2  md:col-span-3 md:row-span-3 !pb-2"}
      >
        <QuoteGenerator />
      </GridCard>
      {/* Desktop Card */}
      <GridCard
        className={
          "hidden md:block col-span-12 row-span-3 md:col-span-6 md:row-span-4"
        }
      >
        <WorkExpCard />
      </GridCard>
      {/* Desktop Card */}
      <GridCard
        className={
          "col-span-6 row-span-2 md:col-span-3 md:row-span-3 !p-0 overflow-hidden"
        }
      >
        <MusicCard />
      </GridCard>
      {/* Mobile Card */}
      <GridCard
        className={
          "block md:hidden col-span-6 row-span-2 md:col-span-6 md:row-span-3 !p-0 overflow-hidden"
        }
      >
        <PhotoCard />
      </GridCard>
      {/* Mobile Card */}
      <GridCard
        className={
          "col-span-12 row-span-3 md:col-span-6 md:row-span-3 !p-0 overflow-hidden"
        }
      >
        <ProjectCard projectId={"idbfiles"} />
      </GridCard>
      <GridCard
        className={
          "col-span-12 row-span-3 md:col-span-6 md:row-span-4 !p-0 overflow-hidden"
        }
      >
        <ProjectCard projectId={"frames-by-ashwin"} />
      </GridCard>
      {/* Desktop Card */}
      <GridCard
        className={
          "hidden md:block md:col-span-6 md:row-span-3 !p-0 overflow-hidden"
        }
      >
        <PhotoCard />
      </GridCard>
      {/* Desktop Card */}
    </>
  );
};

export default Home;
