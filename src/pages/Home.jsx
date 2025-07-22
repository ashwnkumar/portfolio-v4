import GridCard from "../components/GridCard";

import AboutCard from "../components/cards/home/AboutCard";
import QuoteGenerator from "../components/cards/home/QuoteGenerator";
import WorkExpCard from "../components/cards/home/WorkExpCard";
import ThemeSwitcher from "../components/cards/home/ThemeSwitcher";
import TechStackCard from "../components/cards/home/TechStackCard";
import SocialCard from "../components/cards/home/SocialCard";
import { admin } from "../data/admin";

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
      {/* <GridCard className="group  flex items-center justify-center !p-0 overflow-hidden">
        <div className="w-56 h-56  rounded-full">
          <img
            src={admin.home}
            alt="Profile"
            className="w-full h-full rounded-full object-cover "
          />
        </div>
      </GridCard>
      <GridCard className={"col-start-2 col-end-5"} navTo={"/about"}>
        <AboutCard />
      </GridCard>
      <GridCard
        title={"Tech Stack:"}
        className={"col-start-5 col-end-6 row-start-1 row-end-3"}
      >
        <TechStackCard />
      </GridCard>
      <GridCard>
        <ThemeSwitcher />
      </GridCard>
      <GridCard className={"col-start-6"}>
        <QuoteGenerator />
      </GridCard>
      <GridCard
        title={"Work Experience:"}
        className="col-start-3 col-end-5 row-start-2 row-end-3"
      >
        <WorkExpCard />
      </GridCard>
      <GridCard className="col-start-1 col-end-3 row-start-2 row-end-4">
        <p>7</p>
      </GridCard>
      <GridCard className="col-start-3 col-end-5 row-start-3 row-end-4">
        <p>7</p>
      </GridCard>
      <GridCard className="col-start-5 col-end-6 row-start-3 row-end-4">
        <p>7</p>
      </GridCard>
      <GridCard className="col-start-6  row-start-3 row-end-4">
      </GridCard> */}
      <GridCard className={"col-span-2  "}>
        <div className="flex items-center justify-center">
          <div className="w-52 h-52  rounded-full ">
            <img
              src={admin.homeImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover "
            />
          </div>
        </div>
      </GridCard>
      <GridCard className={"col-span-6 row-span-1"} title={"Who I Am:"}>
        <AboutCard />
      </GridCard>
      <GridCard className={"col-span-2 row-span-3"} title={"Tech Stack:"}>
        <TechStackCard />
      </GridCard>
      <GridCard
        title={"Customize the theme!"}
        className={"col-span-2 row-span-1 bg-dark border-0 !p-0"}
      >
        <ThemeSwitcher />
      </GridCard>
      <GridCard className={"col-span-2 row-span-4"} title={"4"} />
      <GridCard className={"col-span-2 row-span-3"} title={"5"} />
    </>
  );
};

export default Home;
