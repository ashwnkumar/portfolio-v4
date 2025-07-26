import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../data/projects.json";
import GridCard from "../components/GridCard";
import TitleCard from "../components/cards/projectDetails/TitleCard";
import {
  ArrowUpLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };
  const project = projectData.find((project) => project.id === projectId);
  console.log("project", project);
  return (
    <>
      <PageHeader
        title={project.title}
        // desc={project.subTitle}
        navTo={"/"}
        isProjectDetails
      />
      {/* Images Card */}
      <GridCard className="col-span-12 row-span-3 md:col-span-8 md:row-span-4 relative overflow-hidden group !p-0">
        <div className="w-full h-full relative">
          <img
            src={project.images[currentImage].src}
            alt={project.images[currentImage].alt}
            className="w-full h-full object-cover rounded-xl transition-all duration-500"
          />
          {/* Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-dark bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-dark bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full ${
                      currentImage === idx ? "bg-primary" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </GridCard>

      <GridCard
        className={
          "md:hidden flex col-span-12 row-span-3 md:col-span-7 md:row-span-3  flex-col items-start justify-start gap-2 "
        }
      >
        <p className="text-2xl text-primary">About the Project:</p>
        <p className="overflow-y-auto">{project.description}</p>
      </GridCard>
      {/* Link Cards */}
      {project.github && (
        <GridCard
          className={
            "col-span-6 row-span-2 md:col-span-2 md:row-span-2 flex flex-col items-start justify-between group"
          }
        >
          <p className="text-lg group-hover:text-primary group-hover:scale-105 transition-all duration-300">
            GitHub:
          </p>
          <Link
            className="self-end flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-border text-primary group-hover:bg-primary group-hover:text-dark active:translate-y-0.5 transition-all duration-300 group-hover:scale-105 whitespace-nowrap"
            to={project.github}
            target="_blank"
          >
            View Code
            <span className="group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight />
            </span>
          </Link>
        </GridCard>
      )}
      {project.link && (
        <GridCard
          className={
            "col-span-6 row-span-2 md:col-span-2 md:row-span-2 flex flex-col items-start justify-between group"
          }
        >
          <p className="text-lg group-hover:text-primary group-hover:scale-105 transition-all duration-300">
            Project Link:
          </p>
          <Link
            className="self-end flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-border text-primary group-hover:bg-primary group-hover:text-dark active:translate-y-0.5 transition-all duration-300 group-hover:scale-105 whitespace-nowrap"
            to={project.link}
            target="_blank"
          >
            View Project
            <span className="group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight />
            </span>
          </Link>
        </GridCard>
      )}
      <GridCard
        className={
          "col-span-12 row-span-2 md:col-span-4 md:row-span-2 flex flex-col items-start justify-start gap-2"
        }
      >
        <h3 className="text-2xl text-primary">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-dark border border-border rounded-full px-4 py-1 text-primary "
            >
              {tech}
            </div>
          ))}
        </div>
      </GridCard>
      <GridCard
        className={
          "hidden md:flex col-span-12 row-span-3 md:col-span-7 md:row-span-3  flex-col items-start justify-start gap-2"
        }
      >
        <p className="text-2xl text-primary">About the Project:</p>
        <p className="overflow-y-auto">{project.description}</p>
      </GridCard>
      <GridCard
        className={
          "col-span-12 row-span-3 md:col-span-5 md:row-span-3 flex flex-col items-start justify-start gap-2"
        }
      >
        <h3 className="text-2xl text-primary">Key Features:</h3>
        <ul className="list-disc list-inside overflow-y-auto custom-scroll ">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </GridCard>
    </>
  );
};

export default ProjectDetails;
