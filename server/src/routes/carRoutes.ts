import express from 'express'
import CarController from '../controllers/carController'
import { authenticate } from '../middlewares/authentication';

const router = express.Router();

router.use(authenticate)

router.post('/', CarController.createCar);
router.get('/', CarController.getAllCars);
router.put('/:carId', CarController.updateCar);
router.get('/:carId', CarController.getCarById);
router.delete('/:carId', CarController.deleteCar);

export default router;