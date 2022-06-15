import { Request, Response } from "express";
import { ShowAllAvailableDeliverymanUseCase } from "./ShowAllAvailableDeliverymanUseCase";

export class ShowAllAvailableDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {

    const showAllAvailableDeliverymanUseCase = new ShowAllAvailableDeliverymanUseCase()

    const result = await showAllAvailableDeliverymanUseCase.execute();

    return response.json(result);
  }
}