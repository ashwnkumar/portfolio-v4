import React from "react";

const GridCard = ({ className, children, title }) => {
  return (
    <div
      className={`bg-card rounded-2xl shadow border border-border p-4 relative overflow-hidden ${className}`}
    >
      {title && <h3 className="text-2xl">{title}</h3>}
      {children}
    </div>
  );
};

export default GridCard;
