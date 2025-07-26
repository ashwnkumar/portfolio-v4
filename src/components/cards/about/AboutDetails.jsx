import React from 'react'

const AboutBlock = ({ title, children, body, highlight }) => {
    const formatText = (body, highlight) => {
        // Sort highlights by length to avoid partial matches first
        const sortedHighlights = [...highlight].sort((a, b) => b.length - a.length);

        let parts = [body];

        sortedHighlights.forEach(term => {
            parts = parts.flatMap(part =>
                typeof part === "string"
                    ? part.split(new RegExp(`(${term})`, "gi")).map((subPart, i) =>
                        subPart.toLowerCase() === term.toLowerCase()
                            ? <span key={term + i} className="text-primary font-secondary font-[375]">{subPart}</span>
                            : subPart
                    )
                    : part
            );
        });

        return parts;
    };


    return (
        <div className="flex flex-col items-start justify-center ">
            <h4 className='text-lg md:text-xl uppercase text-primary'>{title}</h4>
            <p className='text-md md:text-lg'>
                {formatText(body, highlight)}
            </p>
        </div>
    )
}

const AboutDetails = () => {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6 overflow-y-auto custom-scroll">
            <AboutBlock
                title={"Who Am I?"}
                body={"Hey! I'm Ashwin Kumar. I'm a MERN stack developer based in Pune, India. I love creating web apps that are both functional and fun to use. I'm especially drawn to the frontend; I enjoy bringing designs to life and making sure everything feels smooth and intuitive. I also work with the backend side of things, setting up servers, databases, and APIs to keep everything running well behind the scenes. I like being able to contribute to the full picture."}
                highlight={["Ashwin Kumar", "MERN Stack Developer", "Pune", "web apps", "frontend", "intuitive", "responsive", "UI", "backend", "servers", "databases", "APIs", "functional"]}
            />
            <AboutBlock
                title={"Background"}
                body={"I'm a Computer Engineer with over a year of experience building web apps; a mix of professional work and passion projects. Along the way, I’ve picked up the basics of UI design and taught myself enough Figma to whip up quick prototypes when needed. I also have a brief experience with Game Development and 3D modelling using Blender. I’m always looking for ways to sharpen my skills, learn new tools, and improve both the way I code and the experiences I create."}
                highlight={["Computer Engineer", "web apps", "UI design", "Figma", "prototyping", "creative eye", "user experiences", "prototypes", "learn", "improve", "Game Development", "3D modelling", "Blender"]}
            />
            <AboutBlock
                title={"Life outside of work"}
                body={"When I'm not coding,  I’m probably lost in a playlist, halfway through a movie, or trying to beat one more level in a game. I love being the 'guy behind the camera', capturing stories through frames. Basically, show me anything that involves creativity and has an artistic side to to, chances are I'll get hooked to it."}
                highlight={["music", "movies", "video games", "creativity", "artistic", "'guy behind the camera'"]}
            />

        </div >
    )
}

export default AboutDetails