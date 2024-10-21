import { Request, Response} from "express";
import { DeleteUseCase} from "./DeleteUseCase";


export class DeleteUseCaseController {
  async handle(req: Request, res: Response) {
   
    const id = +req.params.id;
    

    const deleteUseCase = new DeleteUseCase();

    const deleted = await deleteUseCase.delete(id);
    return res.status(204).json("deleted");
  }
}
