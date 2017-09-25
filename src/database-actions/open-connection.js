import mongoose from 'mongoose';
import config from '../config/config';

mongoose.connect(config.url, {
    useMongoClient: true
});

export default mongoose;
