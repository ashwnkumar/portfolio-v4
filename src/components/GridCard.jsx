import React from "react";

const GridCard = ({ className, children }) => {
  return (
    <div
      className={`bg-card rounded-xl shadow border border-border p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridCard;
