import { Router } from "express";
import { createUserTaskController } from "../modules/userTasks/useCases/createTask/createUserTaskController";
import { getTaskByController } from "../modules/userTasks/useCases/getUserTask/getTaskByController";
import { UpdateMoveTaskController } from "../modules/userTasks/useCases/moveUserTasktoConcluded/moveUserTaskController";

export const userTaskRoutes=Router()

const UserTaskController=new createUserTaskController

const GetTaskByController = new getTaskByController;

const MoveTasks=new UpdateMoveTaskController;

userTaskRoutes.post("/", UserTaskController.handle);

userTaskRoutes.get("/my", GetTaskByController.handle);

userTaskRoutes.post('/conclude/:id', MoveTasks.handle)