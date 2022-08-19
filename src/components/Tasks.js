import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        //this is called a 'list' and the items need unique keys!
        //we are making task the prop so we can output it in the Task component
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
