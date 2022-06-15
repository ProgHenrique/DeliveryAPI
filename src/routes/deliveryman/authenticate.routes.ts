import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';

export const authenDeliverymanRoutes = Router();

const authenticateDeliverymanController = new AuthenticateDeliverymanController()

authenDeliverymanRoutes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);