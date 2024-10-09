"use client";
import { Table, TableCell, TableHeader } from "@nextui-org/table";
import { useDashBoardPage } from "./use-dashboard";
import { TaskTable } from "./task-table";
export const DashboardPage = () => {
  const {deleteTasks, tasks, isFetching } = useDashBoardPage();
  return (
    <>
      <div className="flex items-center justify-center">
        <TaskTable onDeleteTask={deleteTasks} tasks={tasks} isLoading={isFetching} />
      </div>
    </>
  );
};
