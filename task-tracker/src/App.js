import Header from "./components/Header";
import { useState } from "react"
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors',
        day: 'Feb 5th at 2:30pm',
        reminder: true,

    },
    {
        id: 2,
        text: 'lunch',
        day: 'Feb 10th at 5:30pm',
        reminder: true,

    },
    {
        id: 3,
        text: 'Call',
        day: 'Feb 11h at 7:30pm',
        reminder: false,

    },
])

  //Delete Task
  const deleteTask = (id) => {
    console.log('del', id);
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}


export default App;
