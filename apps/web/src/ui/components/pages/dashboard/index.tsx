"use client";
import { Table, TableCell, TableHeader } from "@nextui-org/table";
import { useDashBoardPage } from "./use-dashboard";
import { TaskTable } from "./task-table";
import { RegisterTaskForm } from "../dashboard/register-task-form/register-task-form";
import { Drawer } from "../../commons/drawer";
import { Button } from "@nextui-org/button";
export const DashboardPage = () => {
  const { deleteTasks, tasks, isFetching, handleRegisterFormSubmit } =
    useDashBoardPage();
  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <TaskTable
          onDeleteTask={deleteTasks}
          tasks={tasks}
          isLoading={isFetching}
        />
        <Drawer
          trigger={
            <Button variant="solid" color="primary">
              Adicionar produto
            </Button>
          }
        >
          {(closeDrawer) => (
            <RegisterTaskForm
              onSubmit={async () => {
                await handleRegisterFormSubmit();
                closeDrawer();
              }}
              onCancel={closeDrawer}
            />
          )}
        </Drawer>
      </div>
    </>
  );
};
