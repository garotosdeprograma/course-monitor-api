import saveCollection from '../database-actions/save-collection';
import Aula from './aula';

const aula = new Aula({
    numero_aula: 8,
    data_aula: Date.now()
});

export default () => {
    saveCollection(aula); 
}