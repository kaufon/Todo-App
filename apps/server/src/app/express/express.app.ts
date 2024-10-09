import e from "express";
import cors from "cors";

import { IServerApp } from "@core/interfaces";
import { TaskRoutes } from "../routes/tasks-routes";
import { Task } from "@core/domain";
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
    this.app.use(
      cors({
        origin: "http://localhost:3000",
      }),
    );

    this.app.use(e.json());
  }
  private registerRoutes(): void {
    this.app.use(TaskRoutes(this.tasks));
  }
}
