import { Request, Response} from "express";
import { UpdateUseCase} from "./UpdateUseCase";
import { passValidation } from "../../../../models/userModel";

export class UpdateUseController {
  async handle(req: Request, res: Response) {

    passValidation.parse(req.body)
  

    const { password} = req.body;
    const id = +req.params.id;

    const updateUseCase = new UpdateUseCase();

    const Editar = await updateUseCase.editar(id, { password});
    return res.status(200).json(Editar);
  }
}
