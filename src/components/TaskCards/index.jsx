import style from "./index.module.css";
import {Link} from "react-router";

export default function TaskCards({ task }) {
  return (
    <>
      <section className={style.taskCard}>
        <h1 className={style.taskTitle}>{task.title}</h1>
        <p>Descrição: {task.description}</p>
        <span>Status: {task.status}</span><br/>
        <span>Prioridade: {task.priority}</span>
          <Link to={`task/${task.id}`}> Ver detalhes</Link>
      </section>
    </>
  );
}
