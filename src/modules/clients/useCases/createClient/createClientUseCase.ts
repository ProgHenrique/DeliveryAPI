import { hash } from "bcrypt";
import { prisma } from '../../../../database/prismaClient'
import { ICreateClientDTO } from "../../../../dtos/ICreateClientDTO";

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO) {

    const client = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (client) {
      throw new Error("Username already exists!");
    }

    const passwordHash = await hash(password, 10)

    const clientCreated = await prisma.client.create({
      data: {
        username,
        password: passwordHash
      }
    })

    return clientCreated
  }
}