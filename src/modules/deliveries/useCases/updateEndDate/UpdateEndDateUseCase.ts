import { prisma } from "../../../../database/prismaClient";

export class UpdateEndDateUseCase {
  async execute(id_deliveryman: string) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        AND: [
          {
            id_deliveryman,
          },
          {
            end_at: null,
          }
        ]
      },
      data: {
        end_at: new Date(),

      }
    })

    return delivery;
  }
};