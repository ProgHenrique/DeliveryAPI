import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryDTO {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryUseCase {
  async execute({ id_client, item_name }: ICreateDeliveryDTO) {
    const delivery = await prisma.deliveries.create({
      data: {
        id_client,
        item_name
      }
    });

    return delivery
  }
};