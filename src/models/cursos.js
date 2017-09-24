import mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const cursoSchema = new Schema({
    
    nome: {
        type: String, 
        trim: true,
        maxlength: [20, 'O campo nome deve conter no máximo 20 caracteres.'],
        required: [true, 'O campo nome é obrigatório'],
        validate:{
            validator: containNumber(value),
            message: 'O campo nome aceita somente letras !'
        }
    },
    
    lista_disciplina: [String],

    lista_notificacao: [Object],

    data_cadastro: { 
        type: Date, 
        default: Date.now 
    },

    data_update: { 
        type: Date,
        default: Date.now 
    },

}, { collection:'curso' })

const Curso = mongoose.model('Curso', cursoSchema);
