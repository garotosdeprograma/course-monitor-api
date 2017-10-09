import SearchAll from './search-all';
import SearchBy from './search-by';
import Aula from '../models/aula';

export const searchAll = () => {
    SearchAll(Aula);
}

export const searchBy = (filter) => {
    SearchBy(Aula, filter)
}
