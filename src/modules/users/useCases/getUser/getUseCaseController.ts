import { getUseCase } from "./getUseCase";
import { Request, Response } from "express";
export class getUseCaseController{

    async execute(req:Request, res:Response){

        const GetUseCase =new getUseCase
        const getUser = await GetUseCase.handle()
        return res.status(200).json(getUser);
    }

}
