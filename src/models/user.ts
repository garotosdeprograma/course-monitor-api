import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: [true, 'O campo email é obrigatório'],
        unique: [true, 'Email informado já cadastrado'],
        validate: {
            validator: emailValidator,
            message: 'O campo email é inválido!'
        }
    },

    salt: {
        type: String,
    },

    saltRounds: {
        type: Number,
    },

    student: {
        type: Schema.ObjectId , 
        ref: 'Student'
    },

    professor: {
        type: Schema.ObjectId , 
        ref: 'Professor'
    },

    password: {
        type: String,
        required: [true, 'O campo senha é obrigatório']
    },

    updated_at: {
        type: Date,
        default: Date.now
    },

}, { collection: 'user' })

userSchema.pre('save', function(next) {
    this.saltRounds = 10;
    this.salt = bcrypt.genSaltSync(this.saltRounds);
    this.password = bcrypt.hashSync(this.password, this.salt);
    next()
})

userSchema.methods.comparePassword = function (password) {
    const encrpt = bcrypt.compareSync(password, this.password);
    return encrpt;
}

userSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.password;
        return ret;
    }
});

export default mongoose.model('User', userSchema);


