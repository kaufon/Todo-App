import e, { Router } from "express";
import { Task } from "../../../core/domain/entities";
import { IServerApp } from "../../../core/interfaces/server-app";
import { TaskRoutes } from "../routes/tasks-routes";
import { RegisterTaskUseCase } from "../../../core/use-cases";
RegisterTaskUseCase;

export class ExpressApp implements IServerApp {
  private app: e.Application;
  private tasks: Task[];
  constructor() {
    this.app = e();
    this.tasks = [];
    this.middleWare();
    this.registerRoutes();
  }
  startServer(): void {
    this.app.listen(3333, () => {
      console.log("📟 Server running on port: http://localhost:3333");
    });
  }
  private middleWare(): void {
    this.app.use(e.json());
  }
  private registerRoutes(): void {
    this.app.use(TaskRoutes(this.tasks));
  }
}
