import { Task } from "@core/domain";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Tag } from "../../../commons/tag";

type TaskTableProps = {
  isLoading: boolean;
  tasks: Task[];
};

export const TaskTable = ({ isLoading, tasks }: TaskTableProps) => {
  return (
    <>
      <Table
        aria-label="Task Table"
        color="default"
        className="w-1/2 h-full"
        selectionMode="single"
      >
        <TableHeader>
          <TableColumn>Nome</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Ações</TableColumn>
        </TableHeader>
        <TableBody
          items={tasks}
          isLoading={isLoading}
          loadingContent={<Spinner size="lg" />}
          emptyContent={"Nenhuma tarefa criada"}
        >
          {(task) => (
            <TableRow key={task.getID}>
              <TableCell>{task.name}</TableCell>
              <TableCell>
                {task.status ? (
                  <Tag type="sucess">Ativado</Tag>
                ) : (
                  <Tag type="danger">Desativado</Tag>
                )}
              </TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
