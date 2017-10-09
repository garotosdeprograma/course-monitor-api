import Update from './update';
import Aula from '../models/aula';

export const update = (filter, load) => {
    Update(Aula, filter, load)
}