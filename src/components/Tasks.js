import React from "react";
import Task from "./Task";

//Here we are 'catching' props from App.js
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        //this is called a 'list' and the items need unique keys!
        //we are making task the prop so we can output it in the Task component
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
