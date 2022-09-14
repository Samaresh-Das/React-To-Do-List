import React from "react";
import useRequest from "../hooks/request";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, newRequest: sendRequest } = useRequest();

  const createTask = (taskDetails, taskData) => {
    const taskId = taskData.name;
    const tasksData = { id: taskId, text: taskDetails };

    props.onAddTask(tasksData);
  };

  const enterTaskHandler = async (taskData) => {
    sendRequest(
      {
        url: "https://tasklist-1ef9e-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: { text: taskData },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskData)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
