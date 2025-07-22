import React from "react";
import GridCard from "../components/GridCard";
import { useGlobal } from "../contexts/GlobalContext";
import {
  ArrowUpRight,
  FileText,
  Github,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import AboutCard from "../components/cards/home/AboutCard";
import QuoteGenerator from "../components/cards/home/QuoteGenerator";
import WorkExpCard from "../components/cards/home/WorkExpCard";
import ThemeSwitcher from "../components/cards/home/ThemeSwitcher";
import TechStackCard from "../components/cards/home/TechStackCard";
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

  const linkedIn = admin.links.find((link) => link.title === "LinkedIn");
  const github = admin.links.find((link) => link.title === "Github");
  const instagram = admin.links.find((link) => link.title === "Instagram");

  return (
    <>
      <GridCard className="group  flex items-center justify-center !p-0 overflow-hidden">
        <div className="w-56 h-56  rounded-full">
          <img
            src={admin.home}
            alt="Profile"
            className="w-full h-full rounded-full object-cover "
          />
        </div>
      </GridCard>
      {/* About Card */}
      <GridCard className={"col-start-2 col-end-5"} navTo={"/about"}>
        <AboutCard />
      </GridCard>
      {/* Tech Stack Card */}
      <GridCard
        title={"Tech Stack:"}
        className={"col-start-5 col-end-6 row-start-1 row-end-3"}
      >
        <TechStackCard />
      </GridCard>
      {/* Theme Switcher */}
      <GridCard>
        <ThemeSwitcher />
      </GridCard>
      {/* Quote Card */}
      <GridCard className={"col-start-1 col-end-2"}>
        <QuoteGenerator />
      </GridCard>
      {/* Work Exp */}
      <GridCard title={"Work Experience:"} className="col-start-2 col-end-4">
        <WorkExpCard />
      </GridCard>
      <GridCard>
        <p>7</p>
      </GridCard>
      <GridCard>
        <p>8</p>
      </GridCard>
      <GridCard>
        <p>9</p>
      </GridCard>
      <GridCard>
        <p>10</p>
      </GridCard>
      <GridCard>
        <p>11</p>
      </GridCard>
      <GridCard>
        <p>12</p>
      </GridCard>
      <GridCard>
        <p>13</p>
      </GridCard>
    </>
  );
};

export default Home;
