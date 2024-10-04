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
    const task = this.tasks.find((task) => task.getID === taskID);
    if (!task) {
      return { isSucess: false, message: "Essa task não existe" };
    }
    task.name = name
    task.status = status ? status : false
    return {isSucess:true,message:"Task alterada com sucesso"}
  }
}
