import { Request, Response } from "express";
import { moveUserTask } from "./moveUserTask";

export class UpdateMoveTaskController {
  async handle(req: Request, res: Response) {

    const id = +req.params.id;

    const updateStatus = new moveUserTask();

    const toMove = await updateStatus.editar(id);
    return res.status(200).json(toMove);
  }
}
