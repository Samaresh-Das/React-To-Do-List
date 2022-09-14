import React from "react";

const TaskItem = (props) => {
  return <li className="list-group-item">{props.children}</li>;
};

export default TaskItem;
