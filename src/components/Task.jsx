import { Empty, List, Spin } from "antd";
import React from "react";
import Title from "./Title";
import TaskItem from "./TaskItem";
import TotalTask from "./TotalTask";

const Task = ({
  listTask,
  onClick,
  isLoading,
  currentTask,
  totalTask,
  isLoadingMark,
  isSelected,
}) => {
  return (
    <div>
      <Title title={"Tasks"} />
      <List
        className="border rounded-lg border-slate-200 h-[500px] overflow-scroll"
        // Set dataSource to tasks list
        dataSource={listTask}
        // Customize the message when the list is empty
        locale={{
          emptyText: "No data",
        }}
        // Render each task item using the renderItem prop
        renderItem={(task) => (
          <TaskItem
            // Set isLoading to display a loading for the selected task
            isLoading={isSelected === task.id ? isLoadingMark : false}
            // Set key to uniquely identify each task item
            key={task.id}
            title={task.title}
            completed={task.completed}
            // Pass the onClick function to handle task completed
            onClick={() => onClick(task.id)}
          />
        )}
        loading={isLoading}
      />
      <TotalTask currentTask={currentTask} totalTask={totalTask} />
    </div>
  );
};

export default Task;
