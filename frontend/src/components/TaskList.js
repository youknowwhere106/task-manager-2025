import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add a task to get started!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onComplete={onCompleteTask} 
          onDelete={onDeleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;

