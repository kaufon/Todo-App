import { TaskDto } from "../dto/task-dto";
import { ApiResponse, PaginationResponse } from "../responses";
export interface ITaskService {
  listTask(): Promise<ApiResponse<PaginationResponse<TaskDto>>>;
  deleteTask(taskID:string): Promise<ApiResponse<void>>;
}
