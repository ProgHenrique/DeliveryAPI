import { Request, Response } from "express";
import { ChangeAvailableStatusUseCase } from "./ChangeAvailableStatusUseCase";

export class ChangeAvailableStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;

    const changeAvailableStatusUseCase = new ChangeAvailableStatusUseCase()

    const result = await changeAvailableStatusUseCase.execute(id_deliveryman)

    return response.json(result);
  }
}