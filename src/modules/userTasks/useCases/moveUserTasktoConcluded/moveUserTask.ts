import { appError } from "../../../../error/appError";
import { Prisma } from "../../../../prisma";
import { UserTasks } from "@prisma/client";
// import { IcreateTaskDTO } from "../../dtos/createTaskDTO";



export class moveUserTask {
  async editar(id: number): Promise<UserTasks> {
    try {
      //where:{id:userId}
      let task = await Prisma.userTasks.findFirst({ where: { id } });
      if (!task) {
        throw new appError("task assignment does not exists!", 400);
      }

      task = await Prisma.userTasks.update({
        where: {
          id,
        },
        data: {
          status:"CONCLUDE"
        },
      });
      return task;
    } catch (err) {
      throw new appError(`Erro ao concluir tarefa atribuída`, 500);
    }
  }
}
