import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { ICreateDeliverymanDTO } from "../../../../dtos/ICreateDeliverymanDTO";


export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanDTO) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if (!deliveryman) {
      throw new Error("Username or password incorrect!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password incorrect!");
    }

    const token = sign({ username }, '589beaff4a1fe045f44812a39b00abad', {
      subject: deliveryman.id,
      expiresIn: '1d'
    })

    return token;
  }
}