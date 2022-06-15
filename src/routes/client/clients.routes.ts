import { Router } from "express";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";
import { CreateClientController } from "../../modules/clients/useCases/createClient/createClientController";
import { FindAllDeliveriesController } from "../../modules/clients/useCases/deliveries/FindAllDeliveriesController";

export const clientRoutes = Router();

const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientRoutes.post('/client/', createClientController.handle);
clientRoutes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle);
