import { Router } from "express";
import { LogInUserController } from "../controller/LogInUserController";

export const logInRouter = Router()

const logInUserController = new LogInUserController()

logInRouter.use("/", logInUserController.handle)