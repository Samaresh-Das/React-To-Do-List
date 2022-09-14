import { useEffect } from "react";
import { useState, Fragment } from "react";
import useRequest from "./components/hooks/request";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, newRequest: fetchTask } = useRequest();

  useEffect(() => {
    const convertTasks = (taskObj) => {
      const loadedTasks = [];

      for (let taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTask(
      {
        url: "https://tasklist-1ef9e-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      convertTasks
    );
  }, [fetchTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTask}
      />
    </Fragment>
  );
}

export default App;
