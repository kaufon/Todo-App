import { Request, Response } from "express";
import { Task } from "../../../../core/domain/entities";
import { listTasksUseCase } from "../../../../core/use-cases";
import { IHttp } from "../../../../core/interfaces";

export class ListTasksController {
  private readonly useCase: listTasksUseCase;
  constructor(tasks: Task[]) {
    this.useCase = new listTasksUseCase(tasks);
  }
  handle(http: IHttp) {
    const tasks = this.useCase.list();
    return http.send(tasks, 200);
  }
}
