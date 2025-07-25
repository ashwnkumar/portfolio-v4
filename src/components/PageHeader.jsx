import React from 'react'
import GridCard from './GridCard'
import { Link } from 'react-router-dom'
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'

const PageHeader = ({ title, desc, navTo, isProjectDetails }) => {
    return (
        <>
            <GridCard className={"col-span-1 row-span-1 flex items-center justify-center group !p-0 "} >
                <Link to={navTo} className='group-hover:-rotate-45 transition-all duration-300 w-full h-full flex items-center justify-center'>
                    <ArrowUpLeft size={48} strokeWidth={1.5} />
                </Link>
            </GridCard>

            <GridCard className={`row-span-1 ${isProjectDetails ? 'col-span-9' : 'col-span-11'}`} >
                <div className="w-full h-full flex flex-col items-start justify-center ">
                    <h1 className='text-3xl font-medium text-primary'>{title}</h1>
                    {desc && (

                        <h2 className='text-xl '>{desc}</h2>
                    )}
                </div>
            </GridCard>
            {isProjectDetails && (
                <GridCard className={"col-span-2 row-span-1 flex items-center justify-center group "} >
                    <Link to={"/projects"} className='flex items-center gap-2 group group-hover:text-primary group-hover:scale-105 transition-all duration-300'>
                        View All Projects
                        <span className='group-hover:rotate-45 transition-all duration-300 '>
                            <ArrowUpRight />
                        </span>
                    </Link>
                </GridCard>
            )}
        </>
    )
}

export default PageHeader