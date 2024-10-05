import { List, Task } from "../../domain";
type Body = {
  status: boolean;
};
export class listByStatusUseCase {
  private tasks: Task[];
  constructor(task: Task[]) {
    this.tasks = task;
  }
  public list({ status }: Body): Task[] {
    let filteredTasks: Task[] = this.tasks.filter(
      (task) => task.status === status,
    );
    return filteredTasks;
  }
}
