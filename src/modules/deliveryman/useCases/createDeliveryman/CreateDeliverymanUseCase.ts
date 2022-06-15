import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt";
import { ICreateDeliverymanDTO } from "../../../../dtos/ICreateDeliverymanDTO";


export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanDTO) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (deliveryman) {
      throw new Error("Username already exists!");
    }

    const passwordHash = await hash(password, 10);

    const deliverymanCreated = await prisma.deliveryman.create({
      data: {
        username,
        password: passwordHash
      }
    })

    return deliverymanCreated;
  }
}