import { UserTasks } from "@prisma/client";
import { Prisma } from "../../../../prisma";


export class getTaskBy{
    
    async execute(){
     
         const hoje = new Date().toISOString().split("T")[0];
         const inicioDoDia = new Date(`${hoje}T00:00:00`);
         const fimDoDia = new Date(`${hoje}T23:59:59`);

        const userId = 1; // ID do usuário que você deseja verificar

        // Conta o número de tarefas associadas ao usuário no dia de hj
        const tasksCount = await Prisma.userTasks.count({
          where: {
            idUser: userId,
            task: {
              createdAt: {
                gte: inicioDoDia, // Data a partir do início do dia
                lte: fimDoDia,
              },
            },
          },
        });
      
          return tasksCount
        
        
    
    }
}