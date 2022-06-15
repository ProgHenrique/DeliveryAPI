import { Router } from 'express';
import { authenticateClientRoutes } from './client/authenticate.routes';
import { clientRoutes } from './client/clients.routes';
import { deliveryRoutes } from './deliveries/delivery.routes';
import { authenDeliverymanRoutes } from './deliveryman/authenticate.routes';
import { deliverymanRoutes } from './deliveryman/deliveryman.routes';

export const router = Router();


router.use(clientRoutes);
router.use(authenticateClientRoutes);
router.use(deliverymanRoutes);
router.use(authenDeliverymanRoutes);
router.use(deliveryRoutes);