import "./App.css";
import Main from "./toDo_list/Main.jsx";
import { Route, Routes } from "react-router-dom";
import Task from "./toDo_list/Task";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
