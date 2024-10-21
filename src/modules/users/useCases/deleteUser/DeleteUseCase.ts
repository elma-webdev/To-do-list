import { Prisma } from "../../../../prisma";
import { appError } from "../../../../error/appError";

export class  DeleteUseCase {
  async delete(id:number): Promise<void> {
    
       let user = await Prisma.user.findFirst({ where: { id } });
       if (!user) {
         throw new appError("user does not exists!", 400);
       }

   user = await Prisma.user.delete({
     where: {
       id
     }
   });
   
  }
}