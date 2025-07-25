import React from "react";
import PageHeader from "../components/PageHeader";
import GridCard from "../components/GridCard";
import ProjectCard from "../components/cards/home/ProjectCard";

const projectGridConfig = [
  { id: "frames-by-ashwin", className: "col-span-7 row-span-6" },
  { id: "idbfiles", className: "col-span-5 row-span-4" },
  { id: "ashwinkumar-dev", className: "col-span-5 row-span-5" },
  { id: "the-record-room", className: "col-span-7 row-span-3" },
];

const Projects = () => {
  return (
    <>
      <PageHeader title="Projects" navTo="/" />
      {projectGridConfig.map(({ id, className }) => (
        <GridCard key={id} className={`${className} !p-0 overflow-hidden`}>
          <ProjectCard projectId={id} />
        </GridCard>
      ))}
    </>
  );
};

export default Projects;
