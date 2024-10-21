import { UsertaskValidation } from "../../../../models/userModel";
import { createUserTask } from "./createUserTask";
import { Request, Response } from "express";



export class createUserTaskController {
  async handle(req: Request, res: Response) {

    UsertaskValidation.parse(req.body);
    const { idTasks, idUser, points, status, finishedAt } = req.body;
    const userId = idUser;
    //const userId = Number(req.params.userId); // Supondo que o ID do usuário vem da URL
    
    const CreateUserTask = new createUserTask();

    const userTasks = await CreateUserTask.create(userId, {
      idTasks,
      idUser,
      points,
      status,
      finishedAt,
    });

    return res.status(201).json(userTasks);
  }
}
