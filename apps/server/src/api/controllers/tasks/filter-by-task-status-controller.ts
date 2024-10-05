import { Task } from "@core/domain";
import { IHttp } from "@core/interfaces";
import { listByStatusUseCase } from "@core/use-cases";
type QueryParams = {
  status: string;
};
export class FilterByTaskStatusController {
  private readonly useCase: listByStatusUseCase;
  constructor(tasks: Task[]) {
    this.useCase = new listByStatusUseCase(tasks);
  }
  handle(http: IHttp) {
    const { status } = http.getQueryParams<QueryParams>();
    const parsedStatus = status === 'true'
    const tasks = this.useCase.list({ status:parsedStatus });
    return http.send(tasks,200)
  }
}
