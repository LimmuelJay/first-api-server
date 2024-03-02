// REQUIRED TO IMPORT
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
// Import the interface
import { Pets } from '@/interfaces/pets.interface';
// Import the model
import petsModel from '@/models/pets.model';

class PetsService {
  public pets = petsModel;

  public async findAllPets(): Promise<Pets[]> {
    const pets: Pets[] = await this.pets.find();
    return pets;
  }

  public async findPetsById(PetsId: string): Promise<Pets> {
    if (isEmpty(PetsId)) throw new HttpException(400, 'PetsId is empty');

    const findPets: Pets = await this.pets.findOne({ _id: PetsId });
    if (!findPets) throw new HttpException(409, "Pets doesn't exist");

    return findPets;
  }

  public async findPetsByName(PetsName: string): Promise<Pets> {
    if (isEmpty(PetsName)) throw new HttpException(400, 'Name is empty');

    const findPets: Pets = await this.pets.findOne({ name: PetsName });
    if (!findPets) throw new HttpException(409, "Pets doesn't exist");

    return findPets;
  }

  public async createPets(Pets: Object): Promise<Pets> {
    if (isEmpty(Pets)) throw new HttpException(400, 'Pets is empty');

    const createUserPets: Pets = await this.pets.create({ ...Pets });

    return createUserPets;
  }

  public async updatePets(PetsId: string, Pets: Object): Promise<Pets> {
    if (isEmpty(Pets)) throw new HttpException(400, 'Pets is empty');

    const updatePetsById: Pets = await this.pets.findByIdAndUpdate(PetsId, Pets, { new: true });
    if (!updatePetsById) throw new HttpException(409, "Pets doesn't exist");

    return updatePetsById;
  }

  public async deletePets(PetsId: string): Promise<Pets> {
    const deletePetsById: Pets = await this.pets.findByIdAndDelete(PetsId);
    if (!deletePetsById) throw new HttpException(409, "Pets doesn't exist");

    return deletePetsById;
  }
}

export default PetsService;
