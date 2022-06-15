import { Router } from 'express';
import { ensureAuthenticateDeliveryman } from '../../middlewares/ensureAuthenticateDeliveryman';
import { ChangeAvailableStatusController } from '../../modules/deliveryman/useCases/ChangeAvailableStatus/ChangeAvailableStatusController';
import { CreateDeliverymanController } from '../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesController } from '../../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController';
import { ShowAllAvailableDeliverymanController } from '../../modules/deliveryman/useCases/ShowAllAvailableDeliveryman/ShowAllAvailableDeliverymanController';

export const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const showAllAvailableDeliverymanController = new ShowAllAvailableDeliverymanController();
const changeAvailableStatusController = new ChangeAvailableStatusController();

deliverymanRoutes.post('/deliveryman', createDeliverymanController.handle)
deliverymanRoutes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesController.handle)
deliverymanRoutes.get('/deliveryman', showAllAvailableDeliverymanController.handle)
deliverymanRoutes.patch('/deliveryman', ensureAuthenticateDeliveryman,changeAvailableStatusController.handle)