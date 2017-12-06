import * as mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';
import { permissions } from '../constant/permissions';

const Schema = mongoose.Schema;

const professorSchema = new Schema({

    nome: {
        type: String,
        trim: true,
        maxlength: [20, 'O campo nome deve conter no máximo 20 caracteres.'],
        required: [true, 'O campo nome é obrigatório'],
        validate: {
            validator: containNumber,
            message: 'O campo nome aceita somente letras !'
        }
    },

    sobrenome: {
        type: String,
        required: [true, 'O campo sobrenome é obrigatório'],
        maxlength: [20, 'O campo sobrenome deve conter no máximo 20 caracteres.'],
        validate: {
            validator: containNumber,
            message: 'O campo sobrenome aceita somente letras !'
        }
    },

    email: {
        type: String,
        required: [true, 'O campo email é obrigatório'],
        unique: [true, 'Email informado já cadastrado'],
        validate: {
            validator: emailValidator,
            message: 'O campo email é inválido!'
        }
    },

    coordenador: {
        type: Boolean,
        default: false
    },

    status: {
        type: Boolean,
        default: false
    },

    senha: {
        type: String,
        required: true
    },

    permissoes: {
        type: Array,
        default: [  permissions.CADASTRAR_NOTIFICACAO,
                    permissions.DELETAR_NOTIFICACAO,
                    permissions.EDITAR_NOTIFICACAO,
                    permissions.EDITAR_PROFESSOR,
                    permissions.VISUALIZAR_PROFESSOR]
    },

    data_update: {
        type: Date,
        default: Date.now
    },

    turmas: [{ type: Schema.Types.ObjectId, ref: 'Turma' }]

}, { collection: 'professor' });

export default mongoose.model('Professor', professorSchema);
