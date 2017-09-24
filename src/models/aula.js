import mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const aulaSchema = new Schema({
    
   numero_aula: {
        type: Number, 
        trim: true,
        required: [true, 'O campo nome é obrigatório'],
    },

    data_aula: { 
        type: Date,
        require: [true, 'O campo data aual é obrigatório'], 
    },

    data_cadastro: { 
        type: Date, 
        default: Date.now 
    },

    data_update: { 
        type: Date, 
        default: Date.now 
    },

    data_cancelamento: { 
        type: Date,
    },
    
    data_remarcacao: { 
        type: Date,
    }
//verificar exportação obj
}, { collection:'aluno' })

const Aula = mongoose.model('Aula', aulaSchema);
