import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" className="add-button">+</button>
    </form>
  );
};

export default TaskForm;
