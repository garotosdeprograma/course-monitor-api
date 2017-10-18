import { ERROR } from '../constant/errors';

export default (model) => {

    return model.save().then(result => {
        return result;
    })
    .catch(err => {
        throw new Error(ERROR.USUARIO_NAO_AUTENTICADO);
    });
}