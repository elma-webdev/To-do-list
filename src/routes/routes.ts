import { Router} from "express";
import { userRoutes } from "./user.routes";
import { taskRouter } from "./task.routes";
import { userTaskRoutes } from "./userTasks.routes";
userTaskRoutes
export const routes:Router=Router()
routes.use('/user', userRoutes)
routes.use("/task", taskRouter);
routes.use('/usertask', userTaskRoutes)

