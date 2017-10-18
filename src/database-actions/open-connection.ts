import * as mongoose from 'mongoose'; //import mongoose
import config from '../config/config';

mongoose.Promise = global.Promise;

export default () => {
    return mongoose.connect(config.url, {
        useMongoClient: true
    });
}
