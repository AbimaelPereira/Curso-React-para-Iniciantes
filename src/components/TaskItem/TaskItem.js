import React, { useState } from "react";
import "./taskitem.css";
import PropTypes from "prop-types";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onTaskDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChenge = (e) => {
    const newTitle = e.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onTaskStateChange = (newTaskState) => {
    onTaskUpdate(id, editableTitle, newTaskState);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onTaskDelete(id);
      }
    }
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChenge}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="task-item">
          <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
          <select
            onChange={(e) => onTaskStateChange(e.target.value)}
            value={taskState}
          >
            <option value="Pendente">Pendente</option>
            <option value="Fazendo">Fazendo</option>
            <option value="Concluída">Concluída</option>
          </select>
        </div>
      </>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
};
