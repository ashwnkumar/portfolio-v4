import React from "react";

const GridCard = ({ className, children, title }) => {
  return (
    <div
      className={`bg-card rounded-xl shadow border border-border p-4 ${className}`}
    >
      {title && <h3 className="text-2xl">{title}</h3>}
      {children}
    </div>
  );
};

export default GridCard;
