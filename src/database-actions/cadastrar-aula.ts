import saveCollection from './save-collection';
import Aula from '../models/aula';

const aula = new Aula({
    numero_aula: 1,
    data_aula: Date.now()
});

export default () => {
    saveCollection(aula); 
}
