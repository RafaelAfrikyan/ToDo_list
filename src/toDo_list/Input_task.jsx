import React from "react";
import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../state/state";
import { useState } from "react";

export default function Input_task() {
  const [taskTitle, setTasktitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const dispatch = useDispatch();
  const addButton = () => {
    if (taskDate && taskTitle) {
      dispatch({
        type: ACTION_TYPES.ADD_TASK,
        payload: {
          title: taskTitle,
          date: taskDate,
          id: Math.random(),
        },
      });
      setTasktitle("");
      setTaskDate("");
    }
  };
  const addTaskTitle = (e) => {
    setTasktitle(e.target.value);
  };
  const addTaskDate = (evt) => {
    setTaskDate(evt.target.value);
  };
  return (
    <div className="inputTask">
      <input
        onChange={addTaskTitle}
        type="text"
        value={taskTitle}
        placeholder="Type here"
      />
      <input value={taskDate} onChange={addTaskDate} type="date" />
      <button className="addButton" onClick={addButton}>Add</button>
    </div>
  );
}
