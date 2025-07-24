import React from 'react'
import { Link, useParams } from 'react-router-dom';
import projectData from "../data/projects.json"
import GridCard from '../components/GridCard';
import TitleCard from '../components/cards/projectDetails/TitleCard';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find(project => project.id === projectId)
  console.log('project', project)
  return (
    <div className="w-full max-w-7xl h-screen grid grid-cols-12 auto-rows-[90px] gap-4 p-10">
      <GridCard className={"col-span-1 row-span-1 flex items-center justify-center group "} >
        <Link to={'/'} className='group-hover:-rotate-45 transition-all duration-300'>
          <ArrowUpLeft size={48} strokeWidth={1.5} />
        </Link>
      </GridCard>
      {/* Title Card */}
      <GridCard className={"col-span-11 row-span-1"} >
        <div className="w-full h-full flex flex-col items-start justify-center ">
          <h1 className='text-3xl font-medium text-primary'>{project.title}</h1>
          <h2 className='text-xl '>{project.subTitle}</h2>
        </div>
      </GridCard>
      {/* Images Card */}
      <GridCard className={"col-span-8 row-span-4"}></GridCard>
      {/* Link Cards */}
      {project.github && (
        <GridCard className={"col-span-2 row-span-2 flex flex-col items-start justify-between group"}>
          <p className='text-xl text-primary'>GitHub:</p>
          <Link className='self-end flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-border text-primary group-hover:bg-primary group-hover:text-dark active:translate-y-0.5 transition-all duration-300 group-hover:scale-105 whitespace-nowrap' to={project.github} target='_blank'>
            View Code
            <span className='group-hover:rotate-45 transition-all duration-500'>
              <ArrowUpRight />
            </span>
          </Link>
        </GridCard>
      )}
      {project.link && (
        <GridCard className={"col-span-2 row-span-2 flex flex-col items-start justify-between group"}>
          <p className='text-xl text-primary'>Project Link:</p>
          <Link className='self-end flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-border text-primary group-hover:bg-primary group-hover:text-dark active:translate-y-0.5 transition-all duration-300 group-hover:scale-105 whitespace-nowrap' to={project.link} target='_blank'>
            View Project
            <span className='group-hover:rotate-45 transition-all duration-500'>
              <ArrowUpRight />
            </span>
          </Link>
        </GridCard>

      )}
      <GridCard className={"col-span-4 row-span-2 flex flex-col items-start justify-start gap-2"}>
        <h3 className='text-2xl text-primary'>Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <div key={idx} className="bg-dark border border-border rounded-full px-4 py-1 text-primary ">
              {tech}
            </div>
          ))}
        </div>
      </GridCard>
      <GridCard className={"col-span-7 row-span-3 flex flex-col items-start justify-start gap-2"}>
        <p className='text-2xl text-primary'>About the Project:</p>
        <p>{project.description}</p>
      </GridCard>
      <GridCard className={"col-span-5 row-span-3 flex flex-col items-start justify-start gap-2"}>
        <h3 className='text-2xl text-primary'>Key Features:</h3>
        <ul className="list-disc list-inside overflow-y-auto custom-scroll ">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </GridCard>
    </div>

  )
}

export default ProjectDetails