import { Task } from "../../domain/entities";

type Request = {
  taskID: string;
};
export class deleteTaskUseCase {
  private _tasks: Task[];
  constructor(tasks: Task[]) {
    this._tasks = tasks;
  }
  public delete({ taskID }: Request): {isSucess:boolean,message:string} {
    const taskToBeRemoved = this._tasks.findIndex(
      (task) => task.getID === taskID,
    );
    if (taskToBeRemoved === -1) {
      return  {isSucess:false,message:"Essa tarefa não existe"}
      
    }
    this._tasks.splice(taskToBeRemoved,1)
    return {isSucess:true,message:"Tarefa removida com sucesso"}
  }
}
