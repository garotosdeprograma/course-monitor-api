import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default new Schema({
    
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

    url: {
        type: String, 
        trim: true,
        required: [true, 'O campo url é obrigatório'],
    },

    data_update: { 
        type: Date,
        default: Date.now 
    },

}, { collection:'propaganda' })
