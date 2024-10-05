import { Register } from "../../domain/abstracts/Register";
import { Task } from "../../domain/entities/Task";
export class RegisterTaskUseCase extends Register {
  private tasks: Task[];
  constructor(tasks: Task[]) {
    super();
    this.tasks = tasks;
  }
  public register(
    taskName: string,
    isActivated?: boolean,
  ): { isSucess: boolean; message: string } {
    if (!taskName || taskName.trim() === "") {
      return { isSucess: false, message: "A tarefa necessita ter nome!" };
    }
    const taskExists = this.tasks.some((task) => task.name === taskName);
    if (taskExists) {
      return { isSucess: false, message: "Essa tarefa ja existe!" };
    }
    const newTask = new Task({ name: taskName,status:isActivated});
    this.tasks.push(newTask);
    return { isSucess: true, message: "Tarefa registrada com sucesso" };
  }
}
