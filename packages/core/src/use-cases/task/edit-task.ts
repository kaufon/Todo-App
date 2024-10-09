import { Task } from "../../domain/entities";
type Body = {
  taskID: string;
  name: string;
  status?: boolean;
};
export class editTaskUseCase {
  private tasks: Task[];
  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }
  public handle({ taskID, name, status }: Body): {
    isSucess: boolean;
    message: string;
  } {
    console.log(this.tasks);
    const task = this.tasks.find((task) => task.dto.id === taskID);
    if (!task) {
      return { isSucess: false, message: "Essa task não existe" };
    }
    if (
      this.tasks.some((task) => task.name === name && task.dto.id !== taskID)
    ) {
      return { isSucess: false, message: "Essa task ja existe" };
    }

    task.name = name ?? task.name
    task.status = status ?? task.status;
    return { isSucess: true, message: "Task alterada com sucesso" };
  }
}
