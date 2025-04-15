import style from "./index.module.css";
import { Header } from "../../components/layout";
import { TaskCards } from "../../components";
import TasksService from "../../services/Tasks";
import { useEffect, useState } from "react";

function Home() {
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
        <body >
        <Header />
        <main>
            {tasks.length === 0 ? (
                <div>
                    <h2>Você não tem tarefas cadastradas</h2>
                </div>
            ) : (
                tasks.map((task) => (
                    <TaskCards key={task.id} task={task} />
                ))
            )}
        </main>
        </body>
    );
}

export default Home;
