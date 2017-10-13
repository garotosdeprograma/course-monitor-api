// import closeMongoConnection from './close-connection';
// import openMongoConnection from './open-connection'
import * as mongoose from 'mongoose'; //import mongoose
import config from '../config/config';

export default (model, filter, load) => {
    const database = mongoose.connection;
    database.once('open', function () {
        model.update(filter, load, function (err) {
            if (err) {
                console.log(err)
                database.close(() => {
                    console.log("Connection Closed")
                });
                // closeMongoConnection(database);
            }
            else {
                console.log('sucess!');
                database.close(() => {
                    console.log("Connection Closed")
                });
                // closeMongoConnection(database);
            };
        });
    });
};