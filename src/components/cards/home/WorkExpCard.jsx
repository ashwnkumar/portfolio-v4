import React, { useEffect, useState } from "react";
import { admin } from "../../../data/admin";

const WorkExpCard = () => {
  const [exp, setExp] = useState();

  console.log("exp", exp);

  useEffect(() => {
    setExp(admin.workExp);
  }, []);
  return (


    <div className="flex flex-col items-center justify-start divide-y w-full divide-border gap-3 mt-4">
      {exp?.map((item, idx) => (
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
  );
};

export default WorkExpCard;
