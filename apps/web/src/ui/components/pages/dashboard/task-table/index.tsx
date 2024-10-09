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

type TaskTableProps = {
  isLoading: boolean;
  tasks: Task[];
};

export const TaskTable = ({ isLoading, tasks }: TaskTableProps) => {
  return (
    <>
      <Table aria-label="Task Table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
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
              <TableCell>{task.getID}</TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

