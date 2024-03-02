// REQUIRED TO IMPORT
import { model, Schema, Document } from 'mongoose';
// Import interface
import { Pets } from '@interfaces/pets.interface';

const petsSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
});

const petsModel = model<Pets & Document>('Pets', petsSchema);

export default petsModel;
