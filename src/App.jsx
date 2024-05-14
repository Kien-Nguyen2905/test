import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import User from "./components/User";
import Task from "./components/Task";
import { getUser, patchUser } from "./services/servicesUser";
import { sortList } from "./utils/sortList";

const App = () => {
  const [user, setUser] = useState([]);
  const [listTask, setListTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMark, setIsLoadingMark] = useState(false);
  const [isSelected, setIsSelected] = useState();
  // Function to hanlde change when user selected
  const handleChange = async (userId) => {
    setIsLoading(true);
    try {
      // Call API get data tasks user by userId
      const dataTaskUser = await getUser(userId);
      setListTask(dataTaskUser);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // Function to hanlde mark done
  const handleMarkDone = async (taskId) => {
    setIsLoadingMark(true);
    try {
      // Save an element user selected
      setIsSelected(taskId);
      // Call API patch data tasks
      const response = await patchUser(taskId);
      // Update task list with the completed task
      const updatedTasks = listTask.map((task) => {
        if (task.id === response?.id) {
          return { ...task, completed: true };
        }
        return task;
      });
      // Sort the updated tasks based on completed
      const sortedTasks = sortList(updatedTasks);
      setListTask(sortedTasks);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingMark(false);
    }
  };
  // Fetch user data when component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataUser = await getUser();
        setUser(dataUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // Props object for passing to Task component
  const TaskProps = {
    totalTask: listTask?.length,
    //get sum current task when completed is true
    currentTask: listTask.filter((task) => task.completed).length,
    isLoading,
    isSelected,
    isLoadingMark,
    listTask: sortList(listTask),
    onClick: handleMarkDone,
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#f5f5f5]">
      <Header></Header>
      <div className="px-[50px] py-[60px]">
        <User userList={user} onChange={handleChange}></User>
        <Task {...TaskProps}></Task>
      </div>
    </div>
  );
};

export default App;
