import { Request, Response } from "express"
import { prisma } from "../database/prismaClient"

export class CreateUserController {

  async handle(request: Request, response:Response) {
    const { name, email, password } = request.body

    const emailAlredyExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if(emailAlredyExists){
      return response.status(400).json({ error: "Email already exists!" })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    })

    return response.json(user)
  }
}