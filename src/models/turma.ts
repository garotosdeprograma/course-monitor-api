import * as mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const turmaSchema = new Schema({

    codigo: {
        type: String,
        trim: true,
        required: [true, 'O campo codigo é obrigatório'],
    },

    curso: {
        type: String,
        required: true
    },

    nome_disciplina: {
        type: String,
        trim: true,
        maxlength: [20, 'O campo nome disciplina deve conter no máximo 20 caracteres.'],
        required: [true, 'O campo nome disciplina é obrigatório'],
    },

    ativo: {
        type: Boolean,
        default: true
    },

    turno: {
        type: String,
        required: true
    },

    data_cadastro: {
        type: Date,
        default: Date.now
    },

    data_update: {
        type: Date,
        default: Date.now
    },

    aulas: [{ type: Schema.Types.ObjectId, ref: 'Aula' }],

    notificacoes: [{ type: Schema.Types.ObjectId, ref: 'Notificacao' }]

}, { collection: 'turma' });

export default mongoose.model('Turma', turmaSchema);
