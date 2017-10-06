import mongoose = require('mongoose');
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const notificacaoSchema = new Schema({
    
   titulo: {
        type: String, 
        trim: true,
        required: [true, 'O campo título é obrigatório'],
    },

    descricao: {
        type: String, 
        trim: true,
        required: [true, 'O campo descrição é obrigatório'],
    },

    data_cadastro: { 
        type: Date, 
        default: Date.now 
    }
// TODO verificar exportação obj    
}, { collection:'aluno' })

const Notificacao = mongoose.model('Notificacao', notificacaoSchema);
