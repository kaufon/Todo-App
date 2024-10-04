import { request, Request,  response,  Response, Router } from "express";
import { Task } from "../../../core/domain/entities";
import { ExpressHttp } from "../express/express-http";
import {  DeleteTaskController, EditTaskControler, ListTasksController, PostTasksController } from "../../api/controllers/tasks";

export const TaskRoutes = (tasks: Task[]) => {
  const router = Router();
  const listTasksController = new ListTasksController(tasks);
  const deleteTaskController = new DeleteTaskController(tasks)
  const postTasksController = new PostTasksController(tasks);
  const editTaskController = new EditTaskControler(tasks)
  router.get('/tarefas',(request,response) => {
    const http = new ExpressHttp(request,response)
    listTasksController.handle(http)
  })
  router.post("/tarefas", (request,response) => {
    const http = new ExpressHttp(request,response)
    postTasksController.handle(http)
  });
  router.delete("/tarefas/:taskID", (request,response) => {
    const http = new ExpressHttp(request,response)
    deleteTaskController.handle(http)
  });
  router.put("/tarefas/:taskID",(request,response)=>{
    const http = new ExpressHttp(request,response)
    editTaskController.handle(http)
  })

  return router;
};
