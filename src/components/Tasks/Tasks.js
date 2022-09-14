import React from "react";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  let taskList = <p>No task is Added. Please Add a Task</p>;

  if (props.items.length > 0) {
    taskList = (
      <ul className="list-group list-group-flush">
        {props.items.map((task, i) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }
  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try Again</button>;
  }

  if (props.loading) {
    content = "Loading..........";
  }
  return (
    <Section>
      <div className="container">{content}</div>
    </Section>
  );
};

export default Tasks;
