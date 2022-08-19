import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React from "react";

function App() {
  //we want to 'use state' with these tasks
  //state is immutable, so we need to use setTasks to change
  //This is in our GLOBAL STATE
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: "Doc Appt",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 6th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      {/* Now tasks is a prop in our Task component! */}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
