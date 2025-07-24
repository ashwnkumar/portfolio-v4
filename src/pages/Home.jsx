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
    <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(100px,auto)] h-screen overflow-hidden p-5 ">

      <GridCard className={"col-span-2 row-span-1 flex items-center justify-center group"}>
        {/* <ImageCard/> */}
      </GridCard>
      <GridCard className={"col-span-6 row-span-1"}>
        <AboutCard />
      </GridCard>
      <GridCard className={"col-span-2 row-span-1"}>
        <QuoteGenerator />
      </GridCard>
      <GridCard className={"col-span-2 row-span-3"} >
        <TechStackCard />
      </GridCard>
      <GridCard
        className={"col-span-2 row-span-1 bg-dark border-0 !p-0"}
      >
        <ThemeSwitcher />
      </GridCard>
      <GridCard className={"col-span-3 row-span-4"} >
        <WorkExpCard />
      </GridCard>
      <GridCard className={"col-span-2 row-span-2 !p-0"} >
        <PhotoCard />
      </GridCard>
      <GridCard className={"col-span-3 row-span-2 !p-0 overflow-hidden"}>
        <ProjectCard projectId={"frames-by-ashwin"} />
      </GridCard>
      <GridCard className={"col-span-2 row-span-3 !p-0 overflow-hidden"} >
        <MusicCard />
      </GridCard>
      <GridCard className={"col-span-4 row-span-2 !p-0 overflow-hidden"} >
        <ProjectCard projectId={"idbfiles"} />
      </GridCard>
      <GridCard className={"col-span-3 row-span-2"}>
        <FooterCard />
      </GridCard>
    </div>
  );
};

export default Home;
