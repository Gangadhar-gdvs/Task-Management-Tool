import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleUpdate = () => {
    onUpdate(task.id, text);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <div>
          <span>{task.text}</span>
        </div>
      )}
      <div className="action-icons">
        <span onClick={() => onDelete(task.id)} className="delete-symbol">&#10006;</span>
        <span onClick={() => setIsEditing(true)} className="edit-symbol">&#9998;</span>
      </div>
    </div>
  );
};

export default Task;
