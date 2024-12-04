import {z} from "zod"

export const userValidation = z.object({
  name: z.string(),
  password:z.string().trim().refine((password) => password.length >= 8, {
  message: 'A senha deve ter pelo menos 8 caracteres',
}).refine((password) => /[A-Z]/.test(password), {
  message: 'A senha deve ter pelo menos uma letra maiúscula',
}).refine((password) => /[a-z]/.test(password), {
  message: 'A senha deve ter pelo menos uma letra minúscula',
}).refine((password) => /\d/.test(password), {
  message: 'A senha deve ter pelo menos um número',
})

  
});

export const taskValidation = z.object({
  title: z.string(),
  description: z.string(),
  priority:z.enum(["URGENT", "IMPORTANT", "NONURGENT"]),
  deadline:z.coerce.date().min(new Date, {message:"the date cannot be under today"})
});

export const UsertaskValidation = z.object({
  idTasks: z.number(),
  idUser: z.number(),
  points: z.number(),
  status:z.enum(["PENDENT", "CONCLUDE", "QUIT"]),
});



export const passValidation = z.object({
  password: z
    .string()
    .trim()
    .refine((password) => password.length >= 8, {
      message: "A senha deve ter pelo menos 8 caracteres",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "A senha deve ter pelo menos uma letra maiúscula",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "A senha deve ter pelo menos uma letra minúscula",
    })
    .refine((password) => /\d/.test(password), {
      message: "A senha deve ter pelo menos um número",
    }),
});
