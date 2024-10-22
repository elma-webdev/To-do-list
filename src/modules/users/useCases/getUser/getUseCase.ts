import { User } from "@prisma/client";
import { Prisma } from "../../../../prisma";

export class getUseCase {
  async handle(){
    const getUsers = Prisma.user.findMany({
      orderBy: {
        name: "asc"
      },
      select:{
        name:true,
        role:true
        
      }
    });

    return getUsers;
  }
}
