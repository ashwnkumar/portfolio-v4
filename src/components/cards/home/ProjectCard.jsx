import React from 'react'
import projectList from "../../../data/projects.json"
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ projectId }) => {
    const project = projectList.find(project => project.id === projectId)
    console.log('projectList from project card', projectList)
    console.log('project from project card', project)
    if (!project) {
        return <div>Project not found</div>;
    }
    const cover = project.images[0]
    return (
        <div className="group w-full h-full  flex items-center justify-center text-gray-200">
            <img src={cover.src} alt={cover.alt} className='absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out saturate-0 group-hover:saturate-100' />
            <h4 className='w-full z-10 text-2xl absolute top-0 p-2 bg-gradient-to-b from-black '>Project: {project.title}</h4>
            <div className="w-full bg-gradient-to-t from-black  flex justify-between absolute bottom-0 p-4 pt-6 md:translate-y-20 md:group-hover:translate-y-0 transition-all duration-300">
                <p className='text-lg text-gray-200 font-medium'>{project.subTitle}</p>
                <Link to={`/projects/${project.id}`} className='flex items-center gap-2 px-3 py-2 rounded-full bg-primary text-dark active:translate-y-0.5 transition-all duration-300 hover:scale-105 whitespace-nowrap'>
                    View Project
                    <span className='group-hover:rotate-45 transition-all duration-700'>
                        <ArrowUpRight />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard