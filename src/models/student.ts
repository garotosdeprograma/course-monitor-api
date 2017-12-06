import * as mongoose from 'mongoose'; // import mongoose
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';
import handleE11000 from '../middleware/handleE11000';

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    firstName: {
        type: String,
        trim: true,
        maxlength: [20, 'O campo nome deve conter no máximo 20 caracteres.'],
        required: [true, 'O campo nome é obrigatório'],
        validate: {
            validator: containNumber,
            message: 'O campo nome aceita somente letras !'
        }
    },

    lastName: {
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

    password: {
        type: String,
        required: [true, 'O campo senha é obrigatório'],
        select: false
    },

    // tODO Adicionar atributo semestre corrente

    matricula: {
        type: Number
    },

    degree: {
        type: String,
        required: [true, 'O campo curso é obrigatório']
    },

    updated_at: {
        type: Date,
        default: Date.now
    },

    token: {
        type: String,
    },

    classes: [{ type: Schema.Types.ObjectId, ref: 'classe' }]

}, { collection: 'student' });

// tslint:disable-next-line:variable-name
const Student = mongoose.model('Student', studentSchema);

studentSchema.post('save', handleE11000);

studentSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.password;
        return ret;
    }
});

export default Student;
