import { useApi } from "../../hooks/use-api";
import { TaskDto } from "@core/dto/task-dto";
import { useCache } from "../../hooks/use-cache";
import { CACHE } from "apps/web/src/constants";
import { Task } from "@core/domain";

export function useDashBoardPage() {
  const { taskService } = useApi();
  async function fetchTasks() {
    const response = await taskService.listTask();

    if (response.isFailure) {
      throw new Error(response.errorMessage);
    }
    return response.body;
  }
  const { data, isFetching, refetch } = useCache({
    fetcher: fetchTasks,
    key: CACHE.task.key,
  });
  const tasks = data ? data : []
  return {
    tasks,
    isFetching,
  };
}
