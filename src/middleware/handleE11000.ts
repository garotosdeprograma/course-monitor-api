// didi q fez isso abaixo
import customErro from '../models/customErro';

export default (error, res, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new customErro('Email informado já cadastrado'));
  } else {
    next();
  }
};