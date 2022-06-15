import { Deliveryman } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export class ShowAllAvailableDeliverymanUseCase {
  async execute(): Promise<Deliveryman[]> {
    const deliveriesMan = await prisma.deliveryman.findMany({
      where: {
        available: true
      }
    })

    return deliveriesMan
  }
}