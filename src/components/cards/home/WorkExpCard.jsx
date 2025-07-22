import React, { useEffect, useState } from "react";
import { useGlobal } from "../../../contexts/GlobalContext";

const WorkExpCard = () => {
  const { admin } = useGlobal();
  const [exp, setExp] = useState();

  console.log("exp", exp);

  useEffect(() => {
    setExp(admin.workExp);
  }, [admin]);
  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
      <h3 className="text-2xl">Work Experience:</h3>
      <div className="flex flex-col items-center justify-start divide-y w-full divide-border gap-3 ">
        {exp.map((item, idx) => (
          <div className="w-full flex items-center justify-between pb-3">
            <div className="text-start">
              <p className="text-xl text-primary font-secondary font-medium">
                {item.position}
              </p>
              <p className="text-lg ">{item.company}</p>
            </div>
            <div className="text-end self-end">
              <p className="text-lg ">
                {item.from} - {item.to ? item.to : "Present"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExpCard;
