import { UserDTO } from "../../dtos/createUserDTO";
import { User } from "@prisma/client";
import { hashSync} from "bcrypt";
import { appError } from "../../../../error/appError";
import { Prisma } from "../../../../prisma";

export class createUsecase{
    async create({name, password, role}:UserDTO):Promise<User>{
        let user = await Prisma.user.findFirst({ where: { name } });
        if (user) {
        throw  new appError("user already exists!", 400);
      }
     user = await Prisma.user.create({
        data: { name, password: hashSync(password, 10), role },
      });
      return user;
    }
}