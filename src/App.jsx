import style from "./index.module.css";
import { Header } from "./components/layout";
import { TaskCards } from "./components";
import TasksService from "./services/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TasksService.getTasks();
        setTasks(response);
      } catch (error) {
        console.error("Erro ao buscar tasks:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </>
  );
}

export default App;
