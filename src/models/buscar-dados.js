import SearchAll from '../database-actions/search-all';
import SearchBy from '../database-actions/search-by';
import Aula from './aula';

export const searchAll = () => {
    SearchAll(Aula);
}

export const searchBy = (filter) => {
    SearchBy(Aula, filter)
}
