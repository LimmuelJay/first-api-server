// REQUIRED TO IMPORT
import { NextFunction, Request, Response } from 'express';
// Import the interface
import { Pets } from '@/interfaces/pets.interface';
// Import the service
import petsService from '@/services/pets.service';

class PetsController {
  public petsService = new petsService();

  public getPets = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPets: Pets[] = await this.petsService.findAllPets();

      res.status(200).json({ data: findAllPets, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPetsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PetsId: string = req.params.id;
      const findPets: Pets = await this.petsService.findPetsById(PetsId);

      res.status(200).json({ data: findPets, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getPetsByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PetsName: string = req.params.name;
      const findPetsName: Pets = await this.petsService.findPetsByName(PetsName);

      res.status(200).json({ data: findPetsName, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPets = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Pets: Object = req.body;
      const createPets: Pets = await this.petsService.createPets(Pets);

      res.status(201).json({ data: createPets, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePets = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PetsId: string = req.params.id;
      const Pets: Object = req.body;
      const updatePets: Pets = await this.petsService.updatePets(PetsId, Pets);

      res.status(200).json({ data: updatePets, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
  
  public deletePets = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const PetsId: string = req.params.id;
      const deletePets: Pets = await this.petsService.deletePets(PetsId);

      res.status(200).json({ data: deletePets, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PetsController;
