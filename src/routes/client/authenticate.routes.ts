import { Router } from "express";
import { AuthenticateClientController } from "../../modules/account/useCases/authenticateClient/AuthenticateClientController";

export const authenticateClientRoutes = Router();

const authenticateClientController = new AuthenticateClientController();

authenticateClientRoutes.post('/client/authenticate', authenticateClientController.handle);