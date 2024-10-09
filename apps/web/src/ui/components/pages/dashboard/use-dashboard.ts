import { Task } from "@core/domain";
import { CACHE } from "apps/web/src/constants";
import { useApi } from "../../../hooks/use-api";
import { useCache } from "../../../hooks/use-cache";

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
  const tasks = data ? data.items.map(Task.create) : []
  return {
    tasks,
    isFetching,
  };
}
