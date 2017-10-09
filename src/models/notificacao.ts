import mongoose = require('mongoose');
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const notificacaoSchema = new Schema({
    
    
    tipo: {
        type: String, 
        trim: true,
        required: [true, 'O campo tipo é obrigatório'],
    },
    
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

    professor: { type: Schema.Types.ObjectId, ref: 'Professor' },

    nap: { type: Schema.Types.ObjectId, ref: 'UsuarioNap' },

    data_update: { 
        type: Date, 
        default: Date.now 
    }
}, { collection:'notificacao' })

const Notificacao = mongoose.model('Notificacao', notificacaoSchema);
