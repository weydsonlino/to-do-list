import { ITasks } from "../../types";
import api from "../../configs/api/";

interface IGetTasksParams {
  id: number;
}

class TasksService {
  async getTasks() {
    const response = await api.get<ITasks[]>("/tasks");
    return response.data;
  }
  async createTask(task: ITasks) {
    const response = await api.post<ITasks>("/tasks", task);
    return response.data;
  }
  async updateTask(task: ITasks, id: number) {
    const response = await api.put<ITasks>(`/tasks/${id}`, task);
    return response.data;
  }
  async deleteTask(id: number) {
    const response = await api.delete<ITasks>(`/tasks/${id}`);
    return response.data;
  }
  async getTaskById(id) {
    const response = await api.get<ITasks>(`/tasks/${id}`);
    return response.data;
  }
}

export default new TasksService();
