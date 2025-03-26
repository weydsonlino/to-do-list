import React from "react";

export default function TaskCards({ task }) {
  return (
    <>
      <section>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <span>{task.status}</span>
        <span>{task.priority}</span>
      </section>
    </>
  );
}
