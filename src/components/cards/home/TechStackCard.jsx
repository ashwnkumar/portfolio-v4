import { admin } from "../../../data/admin";


const TechStackCard = () => {


  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-4">
      <h3 className="text-2xl">Tech Stack:</h3>

      <div className="w-full h-full overflow-y-auto custom-scroll flex flex-col items-start justify-start gap-3 divide-y divide-border pr-2">
        {admin.stack.map((skill) => (
          <div key={skill.label} className="w-full flex items-center gap-3 pb-3 text-primary">
            <skill.icon size={28} strokeWidth={1.5} />
            <p className="text-lg">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
