import { Router } from "express";
import { createTaskController } from "../modules/tasks/useCases/createTask/createTaskController";

export const taskRouter=Router()
const RoutecreateTaskController=new createTaskController;

taskRouter.post("/", RoutecreateTaskController.handle);
