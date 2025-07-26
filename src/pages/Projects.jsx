import React from "react";
import PageHeader from "../components/PageHeader";
import GridCard from "../components/GridCard";
import ProjectCard from "../components/cards/home/ProjectCard";

const projectGridConfig = [
  { id: "frames-by-ashwin", className: " md:col-span-7 md:row-span-6" },
  { id: "idbfiles", className: " md:col-span-5 md:row-span-4" },
  { id: "ashwinkumar-dev", className: " md:col-span-5 md:row-span-5" },
];

const Projects = () => {
  return (
    <>
      <PageHeader title="Projects" navTo="/" />
      {projectGridConfig.map(({ id, className }) => (
        <GridCard
          key={id}
          className={`${className} col-span-12 row-span-3 !p-0 overflow-hidden`}
        >
          <ProjectCard projectId={id} />
        </GridCard>
      ))}
    </>
  );
};

export default Projects;
