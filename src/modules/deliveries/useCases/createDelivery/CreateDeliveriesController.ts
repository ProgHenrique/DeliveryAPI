import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveriesUseCase";


export class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;

    const { id_client } = request

    const createDeliveriesUseCase = new CreateDeliveryUseCase()

    const result = await createDeliveriesUseCase.execute({ id_client, item_name });

    return response.json(result);
  }
};