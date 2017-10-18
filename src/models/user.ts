import * as mongoose from 'mongoose'; //import mongoose
import * as bcrypt from 'bcrypt';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: emailValidator
        }
    },

    senha: {
        type: String,
        required: true
    },

    data_update: {
        type: Date,
        default: Date.now
    },

}, { collection: 'usuario' })

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
}

export default mongoose.model('User', userSchema);