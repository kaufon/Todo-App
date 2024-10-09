import { TaskDto } from "@core/dto/task-dto";
import {Task} from "@core/domain"
import { IapiClient, ITaskService } from "@core/interfaces";
import { PaginationResponse } from "@core/responses";

export const TaskService = (apiClient: IapiClient): ITaskService => {
  return {
    async listTask() {
      return await apiClient.get<PaginationResponse<TaskDto>>("/tarefas");
    },
    async deleteTask(taskID: string) {
      return await apiClient.delete(`/tarefas/${taskID}`);
    },
    async registerTask(task:Task){
      return await apiClient.post('/tarefas',task.dto)

    },
    async updateTask(task:Partial<TaskDto>,taskID:string){
      return await apiClient.put(`/tarefas/${taskID}`,task)
  }
  };
};
