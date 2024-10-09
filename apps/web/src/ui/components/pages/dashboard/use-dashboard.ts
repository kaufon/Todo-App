import { Task } from "@core/domain";
import { CACHE } from "apps/web/src/constants";
import { useApi } from "../../../hooks/use-api";
import { useCache } from "../../../hooks/use-cache";
import { useState } from "react";
import { useToast } from "../../../hooks/use-toast";

export function useDashBoardPage() {
  const { taskService } = useApi();
  const { showSucess, showError } = useToast();

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
    refreshInterval: 3000,
  });
  async function deleteTasks(taskID: string) {
    const response = await taskService.deleteTask(taskID);
    if (response.isFailure) {
      showError(response.errorMessage);
    }
    if (response.isSucess) {
      showSucess("Tarefa deletada com sucesso");
      refetch();
    }
  }
   async function handleRegisterFormSubmit(){
    refetch()
  } 

  const tasks = data ? data.items.map(Task.create) : [];
  return {
    tasks,
    isFetching,
    deleteTasks,
    handleRegisterFormSubmit,
  };
}
