import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        AND: [
          {
            id_deliveryman,
          },
          {
            end_at: {
              not: null,

            }
          }
        ]
      },

    })
    return deliveries;
  }
}