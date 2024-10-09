import { Task } from "@core/domain";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Pen, Trash2, X } from "lucide-react";
import { Tag } from "../../../commons/tag";
import { Drawer } from "../../../commons/drawer";
import { UpdateTaskForm } from "../update-task-form";
import { useTaskTable } from "./use-task-table";
import { useRef } from "react";
import { DrawerRef } from "../../../commons/drawer/types/drawer-ref";

type TaskTableProps = {
  isLoading: boolean;
  tasks: Task[];
  onDeleteTask: (taskID: string) => Promise<void>;
  onUpdateTask: VoidFunction;
};

export const TaskTable = ({
  isLoading,
  tasks,
  onUpdateTask,
  onDeleteTask,
}: TaskTableProps) => {
  const drawerRef = useRef<DrawerRef>(null);
  const {
    handleCancelEditting,
    taskBeingEdited,
    handleEdiTaskButtonClick,
    handleDrawerClose,
    handleUpdateTaskFormSubmit,
  } = useTaskTable({ tasks, drawerRef, onUpdateTask });
  return (
    <>
      <Table
        aria-label="Task Table"
        color="default"
        className="w-1/2 h-full"
        selectionMode="single"
      >
        <TableHeader>
          <TableColumn className="text-zinc-400 text-xl">Nome</TableColumn>
          <TableColumn className="text-zinc-400 text-xl">Status</TableColumn>
          <TableColumn>{null}</TableColumn>
        </TableHeader>
        <TableBody
          items={tasks}
          isLoading={isLoading}
          loadingContent={<Spinner size="lg" />}
          emptyContent={"Nenhuma tarefa criada"}
        >
          {(task) => (
            <TableRow key={task.getID}>
              <TableCell className="text-zinc-600 text-lg">
                {task.name}
              </TableCell>
              <TableCell>
                {task.status ? (
                  <Tag type="sucess">Ativado</Tag>
                ) : (
                  <Tag type="danger">Desativado</Tag>
                )}
              </TableCell>
              <TableCell className="flex items-center justify-center gap-3">
                <Tooltip aria-label="delete task" content="Deletar tarefa">
                  <X
                    className="size-5 text-zinc-400"
                    onClick={() => onDeleteTask(task.getID)}
                  />
                </Tooltip>
                <Tooltip aria-label="edit task" content="Editar tarefa">
                  <Pen
                    className="text-zinc-400"
                    onClick={() => handleEdiTaskButtonClick(task)}
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Drawer ref={drawerRef} trigger={null} onClose={handleDrawerClose}>
        {() =>
          taskBeingEdited && (
            <UpdateTaskForm
              task={taskBeingEdited}
              onSubmit={handleUpdateTaskFormSubmit}
              onCancel={handleCancelEditting}
            />
          )
        }
      </Drawer>
    </>
  );
};
