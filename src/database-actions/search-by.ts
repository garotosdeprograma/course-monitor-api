// import closeMongoConnection from './close-connection';
// import openMongoConnection from './open-connection'
import * as mongoose from 'mongoose'; //import mongoose
import config from '../config/config';

export default (model, filter) => {

    const database = mongoose.connection;

    database.once('open', function () {
        return model.find(filter, function (err, obj) {
            if (err) {
                console.log(err)
                database.close(() => {
                    console.log("Connection Closed")
                });
                // closeMongoConnection(database);
            }
            else {
                console.log(obj);
                database.close(() => {
                    console.log("Connection Closed")
                });
                // closeMongoConnection(database);
            };
        });
    });
};