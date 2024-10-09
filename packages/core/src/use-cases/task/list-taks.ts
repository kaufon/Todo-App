import { List } from "../../domain/abstracts/List";
import { Task } from "../../domain/entities";
import { PaginationResponse } from "../../responses/pagination-response";

export class listTasksUseCase {
  private _tasks: Task[];
  constructor(tasks: Task[]) {
    this._tasks = tasks;
  }
  public list() {
    const tasks = this._tasks;
    const TaskCount = this._tasks.length;

    return new PaginationResponse({
      items: tasks.map((task) => task.dto),
      itemCount: TaskCount,
    });
  }
}
