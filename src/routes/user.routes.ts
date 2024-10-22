import { UpdateUseController } from './../modules/users/useCases/updateUser/UpdateUseController';
import { Router } from "express";
import { createUseController } from "../modules/users/useCases/createUser/createUseController";
import { DeleteUseCaseController } from '../modules/users/useCases/deleteUser/DeleteUseController';
import { getUseCaseController } from '../modules/users/useCases/getUser/getUseCaseController';



export const userRoutes=Router()

 // sempre que uso classe, tenho que abstrai-la
const RoutecreateUseController=new createUseController;
const RouteupdateUseController =new UpdateUseController ;
const RoutedeleteUseCaseController=new DeleteUseCaseController
const RoutegetUseCaseController= new getUseCaseController

userRoutes.post('/', RoutecreateUseController.handle)
userRoutes.post("/updateUser/:id", RouteupdateUseController .handle);
userRoutes.delete("/deleteUser/:id",RoutedeleteUseCaseController.handle);
userRoutes.get("/getuser", RoutegetUseCaseController.execute);