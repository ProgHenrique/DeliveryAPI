import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";


export class UpdateEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const result = await updateEndDateUseCase.execute(id_deliveryman);

    return response.json(result);
  }
}