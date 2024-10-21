import { Request, Response, NextFunction } from "express";
import { userValidation } from "../../../../models/userModel"
import { createUsecase } from "./createUsecase";


export class createUseController{

    async handle(req:Request, res:Response){
        
        userValidation.parse(req.body);
         const { name, password, role } = req.body

         // sempre que uso classe, tenho que abstrai-la
         const CreateUsecase=new createUsecase()

         const user=await CreateUsecase.create({role, name, password})

      
         return res.status(201).json(user);
    }
}