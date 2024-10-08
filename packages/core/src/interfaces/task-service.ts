import { Task } from "../domain/entities/Task";
import { TaskDto } from "../dto/task-dto";
import { ApiResponse, PaginationResponse } from "../responses";
export interface ITaskService {
  listTask(): Promise<ApiResponse<PaginationResponse<TaskDto>>>;
  deleteTask(taskID:string): Promise<ApiResponse<void>>;
  registerTask(task:Task): Promise<ApiResponse<void>>;
  updateTask(task:Partial<TaskDto>, taskID:string): Promise<ApiResponse<void>>;
}
