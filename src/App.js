import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React from "react";

//**STATE GETS PASSED DOWN, ACTIONS GET PASSED UP

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

  //DELETE TASK FUNC
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        //if the id matches, change the reminder!
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {/* Now tasks is a prop in our Task component! */}
      {/* If there are no tasks, show 'no tasks' */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
