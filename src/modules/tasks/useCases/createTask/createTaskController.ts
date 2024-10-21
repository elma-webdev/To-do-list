import { taskValidation } from "../../../../models/userModel";
import { createTaskUsecase } from "./createTaskUsecase";
import { Request, Response, NextFunction } from "express";


export class createTaskController {

  async handle(req: Request, res: Response) {

     taskValidation.parse(req.body)
    const { title, description, priority, deadline } = req.body;

    const CreateUseTask = new createTaskUsecase();

    const task = await CreateUseTask.createMovie({
      title,
      description,
      priority,
      deadline,
    });

    return res.status(201).json(task);

  }
}