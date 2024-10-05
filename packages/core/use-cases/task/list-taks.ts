import { List } from "../../domain/abstracts/List";
import { Task } from "../../domain/entities";

export class listTasksUseCase extends List{
  private _tasks: Task[]
  constructor(tasks: Task[]){
    super()
    this._tasks = tasks
  }
  public list(): Task[] {
     return this._tasks 
  }
}
