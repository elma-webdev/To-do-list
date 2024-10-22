import express, {Express} from "express"
import "express-async-errors"
import { NextFunction, Request, Response} from "express";
import { PORT } from "./secret"
import {routes} from "./routes/routes"
import { appError } from "./error/appError";
const app:Express=express()

// app.use(cors());
app.use(express.json());
app.use(routes)


// middleware para tratar erros
app.use((error:Error,req:Request, res:Response, next:NextFunction)=>{
    // se um erro vier da api
    if (error instanceof appError){
      return res
        .status(error.statusCode)
        .json({ status: "error", message: error.message });
    }

    // se vier do server
    return res.status(500).json({
        status: "error",
        message: "Oops, internal server error!",
    }) 
})


    app.listen(PORT, ()=>{
    console.log("SERVER RUNNING")
    })

