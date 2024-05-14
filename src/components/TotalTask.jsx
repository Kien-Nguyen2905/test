import React from "react";

const TotalTask = ({ totalTask, currentTask }) => {
  return <div className="pt-4">{`Done ${currentTask}/${totalTask} tasks`}</div>;
};

export default TotalTask;
