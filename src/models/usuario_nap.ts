// import mongoose from 'mongoose';
import mongoose = require('mongoose')
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const usuarioNapSchema = new Schema({
    
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

    senha: {
        type: String, 
        required: true
    },

    status: {
        type: Boolean,
        default: false
    },

    data_cadastro: { 
        type: Date, 
        default: Date.now 
    },

    data_update: { 
        type: Date, 
        default: Date.now 
    }

}, { collection:'usuario_nap' })

const UsuarioNap = mongoose.model('UsuarioNap', usuarioNapSchema);

export default UsuarioNap;
