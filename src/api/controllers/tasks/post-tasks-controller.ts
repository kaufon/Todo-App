import { Request, Response } from "express";
import { Task } from "../../../../core/domain/entities";
import { RegisterTaskUseCase } from "../../../../core/use-cases";
import { IHttp } from "../../../../core/interfaces";

type Body = {
  name: string;
  status?:boolean
};
export class PostTasksController {
  private readonly useCase: RegisterTaskUseCase;
  constructor(tasks: Task[]) {
    this.useCase = new RegisterTaskUseCase(tasks);
  }
  handle(http: IHttp): Response {
    const { name ,status} = http.getBody<Body>();
    const result = this.useCase.register(name,status);
    if (!result.isSucess) {
      return http.send(result.message, 400);
    }
    return http.send(result.message, 200);
  }
}
