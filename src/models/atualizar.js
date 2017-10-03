import Update from '../database-actions/update';
import Aula from './aula';

export const update = (filter, load) => {
    Update(Aula, filter, load)
}