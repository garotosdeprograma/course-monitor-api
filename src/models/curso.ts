import * as mongoose from 'mongoose'; //import mongoose
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const cursoSchema = new Schema({
    
    nome: {
        type: String, 
        trim: true,
        maxlength: [20, 'O campo nome deve conter no máximo 20 caracteres.'],
        required: [true, 'O campo nome é obrigatório'],
        validate:{
            validator: containNumber,
            message: 'O campo nome aceita somente letras !'
        }
    },
    
    disciplinas: [{ type: Schema.Types.ObjectId, ref: 'Disciplina' }],

    notificacoes: [{ type: Schema.Types.ObjectId, ref: 'Notificacao' }],

    data_update: { 
        type: Date,
        default: Date.now 
    },

}, { collection:'curso' })

const Curso = mongoose.model('Curso', cursoSchema);

export default Curso;
