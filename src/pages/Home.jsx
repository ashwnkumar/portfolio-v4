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

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = admin.resume;
    link.download = "Ashwin-Kumar-Resume.pdf";
    link.click();
    link.remove();
    document.body.removeChild(link);
  };

  return (
    <>
      <GridCard className={"col-span-6 row-span-1"}>
        <AboutCard />
      </GridCard>
      <GridCard className={"col-span-2"}>
        <MusicCard />
      </GridCard>
      <GridCard className={"col-span-2 row-span-3"} >
        <TechStackCard />
      </GridCard>
      <GridCard
        className={"col-span-2 row-span-1 bg-dark border-0 !p-0"}
      >
        <ThemeSwitcher />
      </GridCard>
      {/* row1 end */}
      <GridCard className={"col-span-3 row-span-4"} >
        <WorkExpCard />
      </GridCard>
      <GridCard className={"col-span-2 row-span-2"} >
        <PhotoCard />
      </GridCard>
      <GridCard className={"col-span-3 row-span-2"} title={"6"}  >
      </GridCard>
      <GridCard className={"col-span-2 row-span-2"} >
        <QuoteGenerator />
      </GridCard>
      {/* row2 end */}
      <GridCard className={"col-span-4 row-span-2"} title={"8"} />
      <GridCard className={"col-span-2 row-span-2 !p-0 overflow-hidden"} >
        <TheRedButton />
      </GridCard>
      <GridCard className={"col-span-3 row-span-2"}>
        <FooterCard />
      </GridCard>
    </>
  );
};

export default Home;
