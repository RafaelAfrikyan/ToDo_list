import React from "react";
import Input_task from "./Input_task.jsx";
import Tasks from "./Tasks.jsx";

export default function Main() {
  return (
    <div className="main">
      <div>To do list</div>
      <Input_task />
      <Tasks />
    </div>
  );
}
