import mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const disciplinaSchema = new Schema({
    
    nome: {
        type: String, 
        trim: true,
        required: [true, 'O campo nome é obrigatório'],
    },

    semestre: String,
    
    // TODO verificar se deve existir
    lista_turma: [String],

    data_cadastro: { 
        type: Date, 
        default: Date.now 
    },

    data_update: { 
        type: Date,
        default: Date.now 
    },

}, { collection:'disciplina' })

const Disciplina = mongoose.model('Disciplina', disciplinaSchema);

export default Disciplina;
