import { getTaskBy } from "./getTaskBy";
import { Request, Response} from "express";

export class getTaskByController{
    async handle(req:Request, res:Response){
    const getTasks = new getTaskBy();

        const result= await getTasks.execute()
        return res.status(201).json(result);
    }

}
