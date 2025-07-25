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
          "col-span-1 md:col-span-2 md:row-span-2 flex items-center justify-center group"
        }
      >
        <ImageCard />
      </GridCard>
      <GridCard className={"col-span-8 row-span-2"}>
        <AboutCard />
      </GridCard>
      <GridCard className={"col-span-2 row-span-2 bg-dark border-0 !p-0"}>
        <ThemeSwitcher />
      </GridCard>
      <GridCard className={"col-span-3 row-span-6"}>
        <TechStackCard />
      </GridCard>
      <GridCard className={"col-span-3 row-span-3"}>
        <QuoteGenerator />
      </GridCard>
      <GridCard className={"col-span-6 row-span-4"}>
        <WorkExpCard />
      </GridCard>
      <GridCard className={"col-span-3 row-span-3 !p-0 overflow-hidden"}>
        <MusicCard />
      </GridCard>
      <GridCard className={"col-span-6 row-span-3 !p-0 overflow-hidden"}>
        <ProjectCard projectId={"idbfiles"} />
      </GridCard>
      <GridCard className={"col-span-6 row-span-4 !p-0 overflow-hidden"}>
        <ProjectCard projectId={"frames-by-ashwin"} />
      </GridCard>
      <GridCard className={"col-span-6 row-span-3 !p-0 overflow-hidden"}>
        <PhotoCard />
      </GridCard>
    </>
  );
};

export default Home;
