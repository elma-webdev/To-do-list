import { User } from "@prisma/client";
import { Prisma } from "../../../../prisma";
import { IUserDTO } from "../../dtos/createUserDTO";
import { appError } from "../../../../error/appError";
import { hashSync} from "bcrypt";


export class  UpdateUseCase {
  async editar(id:number,{password}: IUserDTO): Promise<User> {

    try{
      //where:{id:userId}
      let user = await Prisma.user.findFirst({ where: { id } });
      if (!user) {
        throw new appError("user does not exists!", 400);
      }

      user = await Prisma.user.update({
        where: {
          id,
        },
        data: {
          password: hashSync(password, 10),
        },
      });
      return user;
    }
    catch(err){
           throw new appError(`Erro ao criar tarefa`, 500);
    }
    
  }
}