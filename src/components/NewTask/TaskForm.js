import { useRef } from "react";

const TaskForm = (props) => {
  const taskDataRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = taskDataRef.current.value;
    if (taskData.trim().length > 0) {
      props.onEnterTask(taskData);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={taskDataRef}
        className="form-control form-control-lg"
        type="text"
      />
      <button className="btn btn-success mt-3">
        {props.loading ? "Adding....." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
