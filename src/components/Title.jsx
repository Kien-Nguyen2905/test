import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center gap-4 pb-4">
      <h2>{title}</h2>
      <div className="w-full h-[1px] bg-slate-200"></div>
    </div>
  );
};

export default Title;
