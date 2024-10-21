import { TaskDTO } from "../../dtos/createTaskDTO";
import { Prisma } from "../../../../prisma";
import { Tasks } from "@prisma/client";
import { appError } from "../../../../error/appError";


export class createTaskUsecase {
  async createMovie({ title, description, priority,deadline }: TaskDTO):Promise<Tasks>{

    const ifTaskExists=await Prisma.tasks.findFirst({
      where:{
        title
      }
    })
    if(ifTaskExists){
      throw new appError("This tasks already exists", 400)
    }
    let task = await Prisma.tasks.create({
      data: { title, description, priority,deadline }
    });
    return task
  }
}