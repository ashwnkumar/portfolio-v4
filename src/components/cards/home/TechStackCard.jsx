import React from 'react'
import { admin } from '../../../data/admin'

const TechStackCard = () => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-3 mt-4 divide-y divide-border ">
            {admin.techStack.map((skill) => (
                <div key={skill.label} className={`w-full flex items-center gap-3 pb-3 `}>
                    <skill.icon size={24} />
                    <p className="text-lg">{skill.label}</p>
                </div>
            ))}
        </div>
    )
}

export default TechStackCard