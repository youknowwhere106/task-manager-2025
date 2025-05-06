import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <li className="task-item">
      <div className="task-info">
        <div className={`task-title ${task.is_completed ? 'completed' : ''}`}>
          {task.title}
        </div>
        <div className={`task-description ${task.is_completed ? 'completed' : ''}`}>
          {task.description}
        </div>
      </div>
      <div className="task-actions">
        {!task.is_completed && (
          <button 
            className="complete" 
            onClick={() => onComplete(task.id)}
          >
            Complete
          </button>
        )}
        <button 
          className="delete" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

