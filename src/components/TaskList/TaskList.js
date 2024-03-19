import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onTaskDelete,
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            taskState={task.state}
            onTaskUpdate={onTaskUpdate}
            onTaskDelete={onTaskDelete}
          />
        ))}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="add-task-button" onClick={addTask}>
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
