export const Aula = {
    init: function(numero,data,data_cadastro,data_update){
      this.numero = numero;
      this.data = data;
      this.data_cadastro = data_cadastro;
      this.data_update = data_update;
      return this;
    }
  }

// import mongoose from 'mongoose';
import mongoose = require("mongoose"); //import mongoose
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
//TODO verificar exportação obj
}, { collection:'aluno' })

// const Aula = mongoose.model('Aula', aulaSchema);