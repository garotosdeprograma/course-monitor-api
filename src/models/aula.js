import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const aulaSchema = new Schema({

    numero_aula: {
        type: Number,
        trim: true,
        required: [true, 'O campo nome é obrigatório'],
    },

    data_aula: {
        type: Date,
        required: [true, 'O campo data aula é obrigatório']
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
    // TODO verificar a necessidade de criar collection
}, { collection: 'aula' })

const Aula = mongoose.model('Aula', aulaSchema);

export default Aula;
