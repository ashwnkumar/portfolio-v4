import React from 'react'

const TitleCard = ({ project }) => {
    return (
        <div className="w-full h-full flex flex-col items-start justify-center ">
            <h1 className='text-3xl font-medium text-primary'>{project.title}</h1>
            <h2 className='text-xl '>{project.subTitle}</h2>
        </div>
    )
}

export default TitleCard