import { Role } from "@prisma/client";

export interface UserDTO{
    name:string,
    password:string,
    role:Role
}
export interface IUserDTO{
    password:string
}