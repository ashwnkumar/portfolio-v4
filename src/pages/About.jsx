import React from "react";
import PageHeader from "../components/PageHeader";
import GridCard from "../components/GridCard";
import TechStackCard from "../components/cards/home/TechStackCard";
import WorkExpCard from "../components/cards/home/WorkExpCard";
import PhotoCard from "../components/cards/home/PhotoCard";
import LinksCard from "../components/cards/about/LinksCard";
import LocationCard from "../components/cards/about/LocationCard";
import AboutDetails from "../components/cards/about/AboutDetails";

const About = () => {
  return (
    <>
      <PageHeader title={"About the Developer"} navTo={"/"} />
      <GridCard
        className={"col-span-12 row-span-5 md:col-span-6 md:row-span-7 "}
      >
        <AboutDetails />
      </GridCard>
      <GridCard className={"block md:hidden col-span-12 row-span-3 md:col-span-6  md:row-span-3"}>
        <WorkExpCard />
      </GridCard>
      <GridCard
        className={
          "hidden md:block md:col-span-3  md:row-span-3 !bg-dark !p-0 !border-0"
        }
      >
        <LinksCard />
      </GridCard>
      <GridCard className={"col-span-6 row-span-4 md:col-span-3 md:row-span-6"}>
        <TechStackCard />
      </GridCard>
      <GridCard
        className={
          "block md:hidden col-span-6  row-span-2 md:col-span-3  md:row-span-3 !bg-dark !p-0 !border-0"
        }
      >
        <LinksCard />
      </GridCard>
      <GridCard
        className={
          "col-span-6 row-span-2 md:col-span-3  md:row-span-3 !p-0 overflow-hidden"
        }
      >
        <LocationCard />
      </GridCard>
      <GridCard className={"col-span-12 row-span-4 md:col-span-6  md:row-span-4"}>
        <PhotoCard />
      </GridCard>
      <GridCard className={"hidden md:block md:col-span-6  md:row-span-3"}>
        <WorkExpCard />
      </GridCard>
    </>
  );
};

export default About;
