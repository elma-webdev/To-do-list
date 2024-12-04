import { Priority } from "@prisma/client";

export interface TaskDTO{
    title:string,
    description:string,
    priority:Priority,
    deadline: Date
}