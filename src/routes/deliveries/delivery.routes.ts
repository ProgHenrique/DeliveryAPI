import { Router } from 'express';
import { ensureAuthenticateClient } from '../../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../../modules/deliveries/useCases/createDelivery/CreateDeliveriesController';
import { FindAllAvailableController } from '../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from '../../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndDateController } from '../../modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

export const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

deliveryRoutes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)
deliveryRoutes.put('/delivery/accept/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
deliveryRoutes.put('/delivered', ensureAuthenticateDeliveryman, updateEndDateController.handle)



