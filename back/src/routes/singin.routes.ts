import { Router } from "express"
import { CreateUserController } from "../controller/CreateUserController"

export const singInRouter = Router()

const createUserController = new CreateUserController()

singInRouter.post("/", createUserController.handle)