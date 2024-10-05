import { Task } from "@core/domain";
import { Router } from "express";
import {
    DeleteTaskController,
    EditTaskControler,
    FilterByTaskStatusController,
    ListTasksController,
    PostTasksController,
} from "../../api/controllers/tasks";
import { ExpressHttp } from "../express/express-http";

export const TaskRoutes = (tasks: Task[]) => {
  const router = Router();
  const filterByStatusController = new FilterByTaskStatusController(tasks);
  const listTasksController = new ListTasksController(tasks);
  const deleteTaskController = new DeleteTaskController(tasks);
  const postTasksController = new PostTasksController(tasks);
  const editTaskController = new EditTaskControler(tasks);
  router.get("/tarefas", (request, response) => {
    const http = new ExpressHttp(request, response);
    const queryStatus = request.query.status;
    if (!queryStatus) {
      listTasksController.handle(http);
    } else {
      filterByStatusController.handle(http);
    }
  });
  router.post("/tarefas", (request, response) => {
    const http = new ExpressHttp(request, response);
    postTasksController.handle(http);
  });
  router.delete("/tarefas/:taskID", (request, response) => {
    const http = new ExpressHttp(request, response);
    deleteTaskController.handle(http);
  });
  router.put("/tarefas/:taskID", (request, response) => {
    const http = new ExpressHttp(request, response);
    editTaskController.handle(http);
  });

  return router;
};
