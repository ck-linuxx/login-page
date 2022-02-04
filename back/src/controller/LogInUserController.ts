import { prisma } from "../database/prismaClient";
import { Request, Response } from "express";

export class LogInUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if(user?.password !== password){
      return response.status(400).json({ error: "Email or password is wrong!" })
    }

    return response.json(user)
  }
}