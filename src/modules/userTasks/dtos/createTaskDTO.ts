import { Answer } from "@prisma/client";

export interface createTaskDTO {
  idUser: number;
  idTasks: number;
  points: number;
  status: Answer;
  finishedAt:Date
}

export interface IcreateTaskDTO {
  status: Answer;
}
