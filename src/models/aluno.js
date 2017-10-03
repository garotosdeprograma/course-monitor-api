import mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const alunoSchema = new Schema({
    
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

    sobrenome: {
        type: String, 
        required: [true, 'O campo sobrenome é obrigatório'],
        maxlength: [20, 'O campo sobrenome deve conter no máximo 20 caracteres.'],
        validate:{
            validator: containNumber(value),
            message: 'O campo sobrenome aceita somente letras !'
        }
    },

    email:{ 
        type: String, 
        required: [true, 'O campo email é obrigatório'],
        unique: [true, 'Email informado já cadastrado'],
        validate:{
            validator: emailValidator(value),
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

    data_cadastro: { 
        type: Date, 
        default: Date.now 
    },

    data_update: { 
        type: Date, 
        default: Date.now 
    },
    
    lista_turma: [String]

}, { collection:'aluno' })

const Aluno = mongoose.model('Aluno', alunoSchema);

export default Aluno;
