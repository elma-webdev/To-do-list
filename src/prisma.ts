import { PrismaClient } from "@prisma/client";
import { userValidation } from "./models/userModel";


export const Prisma = new PrismaClient({
  log: ["query"],
}).$extends({
  query: {
    user: {
      create({ args, query }) {
        args.data = userValidation.parse(args.data);
        return query(args);
      },
    },
  },
});

