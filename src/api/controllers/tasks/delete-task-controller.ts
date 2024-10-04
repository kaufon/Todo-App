import { Task } from "@core/domain";
import { IHttp } from "@core/interfaces";
import { deleteTaskUseCase } from "@core/use-cases";

type RouteParams = {
  taskID: string;
};
export class DeleteTaskController {
  private readonly useCase: deleteTaskUseCase;
  constructor(tasks: Task[]) {
    this.useCase = new deleteTaskUseCase(tasks);
  }
  handle(http: IHttp) {
    const { taskID } = http.getRouteParams<RouteParams>();
    const result = this.useCase.delete({ taskID });
    if (!result.isSucess) {
      return http.send(result.message, 400);
    }
    return http.send(result.message, 200);
  }
}
