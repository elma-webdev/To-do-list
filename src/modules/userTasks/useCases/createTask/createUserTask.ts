import { createTaskDTO } from "./../../dtos/createTaskDTO";
import { appError } from "../../../../error/appError";
import { Prisma } from "../../../../prisma";
import { UserTasks } from "@prisma/client";
Error;
export class createUserTask {
  async create(
    userId: number,
    taskId: number,
    { idTasks, idUser, points, status }: createTaskDTO
  ): Promise<UserTasks> {
    try {
      const MAX_TASKS_PER_DAY = 3;

      // Step 1: Verify if the user exists
      const user = await Prisma.user.findUnique({
        where: { id: idUser },
      });

      if (!user) {
          console.error(appError);
        throw new appError("User not found", 400);
      }

      // Step 2: Verify if the task exists
      const task = await Prisma.tasks.findUnique({
        where: { id: idTasks },
      });

      if (!task) {
          console.error(appError);
        throw new appError("Task not found", 400);
      }

      const TaskWasBeingAssigmentToTheSameUser =
        await Prisma.userTasks.findFirst({
          where: {
            AND: [{ idUser: userId }, { idTasks: taskId }],
          },
        });

      //consultar se nao existe uma mesma tarefa atribuida mais de uma vez pro usuario
      if (TaskWasBeingAssigmentToTheSameUser) {
          console.error(appError);
        throw new appError("Task already assigned by the same user", 400);
      }

      // Consultar quantas tarefas já estão atribuídas ao usuário naquele dia
      const tarefasNoDia = await Prisma.userTasks.count({
        where: {
          idUser: userId,
          status: "PENDENT",
        },
      });

      if (tarefasNoDia >= MAX_TASKS_PER_DAY) {
          console.error(appError);
        throw new appError(
          "Task limit reached. Complete a task to add a new one.",
          400
        );
      }

      // Criar a nova tarefa
      const tarefa = await Prisma.userTasks.create({
        data: {
          idUser,
          idTasks,
          points,
          status,
        },
      });

      return tarefa;
    } catch (error) {
      // Tratamento de erro genérico
      console.error(error);
      throw new appError("Erro ao criar tarefa", 500);
    }
  }
}
