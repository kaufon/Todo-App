"use client"
import { Table, TableCell, TableHeader } from "@nextui-org/table"
import { useDashBoardPage } from "./use-dashboard";
import { TaskTable } from "./task-table";
export const DashboardPage = () => {
  const {tasks,isFetching} = useDashBoardPage()
  return (
    <>
      <TaskTable tasks={tasks} isLoading={isFetching}/>
    </>
  );
};
