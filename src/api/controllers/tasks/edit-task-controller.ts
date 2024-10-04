import { Task } from "@core/domain";
import { IHttp } from "@core/interfaces";
import { editTaskUseCase } from "@core/use-cases";

type RouteParams = {
  taskID: string;
};
type Body = {
  name: string;
  status?: boolean;
};
export class EditTaskControler {
  private readonly useCase: editTaskUseCase;
  constructor(tasks: Task[]) {
    this.useCase = new editTaskUseCase(tasks);
  }
  handle(http: IHttp) {
    const { taskID } = http.getRouteParams<RouteParams>();
    const { name, status } = http.getBody<Body>();
    const result = this.useCase.handle({ taskID, name, status });
    if (!result.isSucess) {
      return http.send("Oops deu erro", 400);
    }
    return http.send("Tarefa alterada com sucesso", 200);
  }
}
