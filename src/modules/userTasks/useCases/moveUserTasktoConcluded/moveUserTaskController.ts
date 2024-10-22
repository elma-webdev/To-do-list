import { Request, Response } from "express";
import { moveUserTask } from "./moveUserTask";
import { finishedAtValidation } from "../../../../models/userModel";

export class UpdateMoveTaskController {
  async handle(req: Request, res: Response) {

    // finishedAtValidation.parse(req.body)
    const id = +req.params.id;
    const { finishedAt }=req.body;
    
    const updateStatus = new moveUserTask();

    const toMove = await updateStatus.editar(id);
    return res.status(200).json(toMove);
  }
}
