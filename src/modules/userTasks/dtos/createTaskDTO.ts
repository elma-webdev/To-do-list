import { Answer } from "@prisma/client";

export interface createTaskDTO {
  idUser: number;
  idTasks: number;
  points: number;
  status: Answer;
}