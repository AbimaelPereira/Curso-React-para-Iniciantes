import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks([...tasks, newTask]);
  };

  const onTaskUpdate = (id, title, state) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Pendente")}
          onTaskUpdate={onTaskUpdate}
          taskState="Pendente"
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Fazendo")}
          onTaskUpdate={onTaskUpdate}
          taskState="Fazendo"
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Concluídas"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Concluída")}
          onTaskUpdate={onTaskUpdate}
          taskState="Concluída"
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}
