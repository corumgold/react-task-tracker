import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        //this is called a 'list' and the items need unique keys!
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
