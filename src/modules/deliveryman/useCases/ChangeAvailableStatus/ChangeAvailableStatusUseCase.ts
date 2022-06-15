import { Deliveryman } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export class ChangeAvailableStatusUseCase {
  async execute(id_deliveryman: string): Promise<Deliveryman> {

    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        id: id_deliveryman
      },
    })

    const deliverymanChange = await prisma.deliveryman.update({
      where: {
        id: id_deliveryman
      },

      data: {
        available:  deliveryman?.available === true ? false : true,
      }
    })

    return deliverymanChange;
  }
}