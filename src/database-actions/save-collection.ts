import closeMongoConnection from './close-connection';
import * as mongoose from 'mongoose'; //import mongoose
import openConnection from './open-connection';
import config from '../config/config';

export default function (model, connection) {

    return model.save().then(result => {
        console.log(result);
        closeMongoConnection(connection);
        return result;
    })
    .catch(err => {
        console.error(err);
        closeMongoConnection(connection);        
    })
}
