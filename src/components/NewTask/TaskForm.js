import { useState } from "react";
import { useRef } from "react";

const TaskForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const taskDataRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = taskDataRef.current.value;
    if (taskData.trim() === "") {
      setIsValid(false);
      return;
    }

    if (taskData.trim().length > 0) {
      props.onEnterTask(taskData);
    }

    taskDataRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={taskDataRef}
        className="form-control form-control-lg"
        type="text"
      />
      {!isValid && <p className="text-danger">Input cannot be empty</p>}
      <button className="btn btn-success mt-3">
        {props.loading ? "Adding....." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
