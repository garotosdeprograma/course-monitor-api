// import closeMongoConnection from './close-connection';
// import openMongoConnection from './open-connection'
// import * as mongoose from 'mongoose'; //import mongoose
// import config from '../config/config';

import closeConnection from './close-connection';
import openConnection from './open-connection';

export default (model, filter, load, connection) => {
    return model.update(filter, load).then(result => {
        closeConnection(connection);
        return result;
    })
    .catch(err => {
        console.error(err);
        closeConnection(connection);
    })
};
