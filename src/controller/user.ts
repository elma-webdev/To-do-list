import {NextFunction, Request, Response} from 'express'
import { hashSync, compareSync} from 'bcrypt'
import { JWT_SECRET } from '../secret'
import * as jwt from 'jsonwebtoken'
import { Prisma } from '../prisma'



export const login=async(req:Request, res:Response)=>{

   
        const {name, password}=req.body
        if(!name|| !password){
            throw new Error("complete all the fields!")
        }
    let user=await Prisma.user.findFirst({where:{name}}) 
    if(user){
        if (compareSync(password, user.password)) {

            const token=jwt.sign({userId:user.id},JWT_SECRET)
            return res.json({ auth: true, token: token });
          //se a pass inserida for igual a pass existente, dê-me um token que me permite ter acesso a app a fim de que não precise me logar sempre

        } else {
          throw Error("user or password incorrect, try again");
        }
        

    }else{
        throw Error("user or password incorrect, try again")
    } 
    
   
}

export const updateUser=async (err:Error,req:Request, res:Response)=>{

    try {
      const user = req.body;
      const updateuser = await Prisma.user.update({
        where: {
          id: +req.params.id,
        },
        data: user,
      });
      res.json(updateuser);
    } catch (err) {
      console.log(err);
    }
}

export const listUser=async(req:Request, res:Response)=>{
        const allUsers=await Prisma.user.findMany({
           orderBy:{
            name:'desc'
           }   ,
           include:{
            myTasks:true
           }
            //para pegar 3 users>> take:3,
        })
        res.json(allUsers)
}

export const deleteUser=async(req:Request, res:Response)=>{
    Prisma.user.deleteMany({})
    try {
      const deleteUser = await Prisma.user.delete({
        where: {
          id: +req.params.id
        }
    })
    res.json("deleted")
    } catch (error: any){
        res.json(error)
    }
    }


    // este client envia pro server a fim de autorizar acesso a services
export const verifyJWT=async(req:Request, res:Response, next:NextFunction)=>{
   const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    try{
        const payload=jwt.verify(token, JWT_SECRET) as any
            const user=await Prisma.user.findFirst({where:{id:payload.userId}})
            if(!user){
                return res
                  .status(500)
                  .json({
                    auth: false,
                    message: "Failed to authenticate token, user does not exist",
                  });  
            }
           req.user=user as any
        next()
    }catch(err:any){
        console.log(err)
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.'});
    }
    
       
      

}
   
