import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import taskService from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskService.getAllTasks();
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again later.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      await taskService.createTask(newTask);
      fetchTasks();
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error('Error adding task:', err);
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await taskService.completeTask(id);
      fetchTasks();
    } catch (err) {
      setError('Failed to complete task. Please try again.');
      console.error('Error completing task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      fetchTasks();
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      
      <TaskForm onAddTask={handleAddTask} />
      
      {error && <div className="error-message">{error}</div>}
      
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList 
          tasks={tasks} 
          onCompleteTask={handleCompleteTask} 
          onDeleteTask={handleDeleteTask} 
        />
      )}
    </div>
  );
}

export default App;

