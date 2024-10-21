import { Priority } from "@prisma/client";


// const myDate: Date = new Date()
export interface TaskDTO{
    title:string,
    description:string,
    priority:Priority,
    deadline: Date
}