import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

class TaskService {
  getAllTasks() {
    return axios.get(API_URL);
  }

  createTask(task) {
    return axios.post(API_URL, task);
  }

  completeTask(id) {
    return axios.put(`${API_URL}/${id}/complete`);
  }

  deleteTask(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new TaskService();

