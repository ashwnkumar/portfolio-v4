import React from "react";
import {
  IconBrandBlender,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandReact,
} from "@tabler/icons-react";

const TechStackCard = () => {
  const stack = [
    { label: "ReactJS", icon: IconBrandReact },
    { label: "MongoDB", icon: IconBrandMongodb },
    { label: "ExpressJS", icon: IconBrandNpm },
    { label: "NodeJS", icon: IconBrandNodejs },
    { label: "HTML", icon: IconBrandHtml5 },
    { label: "CSS", icon: IconBrandCss3 },
    { label: "JavaScript", icon: IconBrandJavascript },
    { label: "Blender", icon: IconBrandBlender },
    { label: "Figma", icon: IconBrandFigma },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-3 mt-4 divide-y divide-border">
      {stack.map((skill) => (
        <div key={skill.label} className="w-full flex items-center gap-3 pb-3">
          <skill.icon size={28} strokeWidth={1.5} />
          <p className="text-lg">{skill.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStackCard;
