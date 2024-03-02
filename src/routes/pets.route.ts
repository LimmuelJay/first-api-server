// REQUIRED TO IMPORT
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
// Import controller
import PetsController from '@/controllers/pets.controller';
// Import auth middleware
import authMiddleware from '@/middlewares/auth.middleware';

class PetsRoute implements Routes {
  public path = '/pets';
  public router = Router();
  public petsController = new PetsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.petsController.getPets);
    this.router.get(`${this.path}/get_pet_name/:name`, this.petsController.getPetsByName);
    this.router.get(`${this.path}/:id`, this.petsController.getPetsById);
    this.router.post(`${this.path}`, this.petsController.createPets);
    this.router.put(`${this.path}/:id`, this.petsController.updatePets);
    this.router.delete(`${this.path}/:id`, this.petsController.deletePets);
  }
}

export default PetsRoute;
