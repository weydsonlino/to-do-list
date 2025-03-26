import { ITasks } from "../../types/tasks";
import api from "../../configs/api/";

interface IGetTasksParams {
  id: number;
}

class TasksService {
  async getTasks(params: IGetTasksParams) {
    const response = await api.get<ITasks[]>("/tasks", { params });
    return response.data;
  }
}

export default new TasksService();
