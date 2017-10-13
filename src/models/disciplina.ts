import * as mongoose from 'mongoose'; //import mongoose
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

export default new Schema({
    
    nome: {
        type: String, 
        trim: true,
        required: [true, 'O campo nome é obrigatório'],
    },

    semestre: String,
    
    turmas: [{ type: Schema.Types.ObjectId, ref: 'Turma' }],

    data_update: { 
        type: Date,
        default: Date.now 
    },

}, { collection:'disciplina' })
