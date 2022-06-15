import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { ICreateClientDTO } from "../../../../dtos/ICreateClientDTO";


export class AuthenticateClientUseCase {
  async execute({ password, username }: ICreateClientDTO) {
    const client = await prisma.client.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    })

    if (!client) {
      throw new Error("Username or password incorrect!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password incorrect!");
    }

    const token = sign({ username }, 'd93fec5d576593621147654f94db68e2', {
      expiresIn: '1d',
      subject: client.id
    })

    return token
  }
}