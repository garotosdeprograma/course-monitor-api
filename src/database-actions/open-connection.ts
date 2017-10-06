// import mongoose from 'mongoose';
import mongoose = require("mongoose"); //import mongoose

import config from '../config/config';

let connection: mongoose.Connection = mongoose.createConnection(config.url);

export default mongoose;
