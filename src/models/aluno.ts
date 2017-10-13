import * as mongoose from 'mongoose'; //import mongoose
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

export default new Schema({
    
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

    sobrenome: {
        type: String, 
        required: [true, 'O campo sobrenome é obrigatório'],
        maxlength: [20, 'O campo sobrenome deve conter no máximo 20 caracteres.'],
        validate:{
            validator: containNumber,
            message: 'O campo sobrenome aceita somente letras !'
        }
    },

    email:{ 
        type: String, 
        required: [true, 'O campo email é obrigatório'],
        unique: [true, 'Email informado já cadastrado'],
        validate:{
            validator: emailValidator,
            message: 'O campo email é inválido!'
        }
    },
    
    // TODO Adicionar atributo semestre corrente

    senha: {
        type: String, 
        required: [true, 'O campo senha é obrigatório']
    },

    matricula: Number,

    curso: {
        type: String, 
        required: [true, 'O campo curso é obrigatório']
    },
    
    data_update: { 
        type: Date, 
        default: Date.now 
    },
    
    turmas: [{ type: Schema.Types.ObjectId, ref: 'Turma' }]

}, { collection:'aluno' })

// const Aluno = mongoose.model('Aluno', alunoSchema);

// export default Aluno;
