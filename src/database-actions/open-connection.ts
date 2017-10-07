// import mongoose from 'mongoose';
import * as mongoose from 'mongoose'; //import mongoose

import config from '../config/config';

let connection: mongoose.Connection = mongoose.createConnection(config.url);

// export default mongoose.connect(config.url, {
//     useMongoClient: true
// });

export default mongoose;