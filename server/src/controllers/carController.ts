import { Request, Response } from 'express';
import Car, { ICar } from '../models/carModel';

class CarController {
    async createCar(req: Request, res: Response) {
        try {
            const { make, model, horsePower, manufactureYearStart, manufactureYearEnd, imageUrl } = req.body;
            const newCar: ICar = new Car({ make, model, horsePower, manufactureYearStart, manufactureYearEnd, imageUrl });
            await newCar.save();
            res.status(201).json(newCar);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error creating car' });
        }
    }

    async getAllCars(req: Request, res: Response) {
        try {
            const cars = await Car.find();
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving cars' });
        }
    }

    async getCarById(req: Request, res: Response) {
        try {
            const carId = req.params.carId;
            const car = await Car.findById(carId);
            if (!car) {
                return res.status(404).json({ error: 'Car not found' });
            }
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving car' });
        }
    }

    async updateCar(req: Request, res: Response) {
        try {
            const carId = req.params.carId;
            const { make, model, horsePower, manufactureYearStart, manufactureYearEnd, imageUrl } = req.body;
            const updatedCar = await Car.findByIdAndUpdate(
                carId,
                { make, model, horsePower, manufactureYearStart, manufactureYearEnd, imageUrl },
                { new: true }
            );
            if (!updatedCar) {
                return res.status(404).json({ error: 'Car not found' });
            }
            res.status(200).json(updatedCar);
        } catch (error) {
            res.status(500).json({ error: 'Error updating car' });
        }
    }

    async deleteCar(req: Request, res: Response) {
        try {
            const carId = req.params.carId;
            const deletedCar = await Car.findByIdAndDelete(carId);
            if (!deletedCar) {
                return res.status(404).json({ error: 'Car not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error deleting car' });
        }
    }
}

export default new CarController();