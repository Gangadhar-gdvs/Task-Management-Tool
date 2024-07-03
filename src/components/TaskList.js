import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="task-list-container">
      <h2 className="list-title">Task List</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TaskList;
