import * as jwt from 'jsonwebtoken';
import { ERROR } from '../../constant/errors';
import UserModel from '../../models/user';
import { secret } from '../../config/jwt';


export default {

    signIn(req, res, next) {
        if (!req.body.email) {
            res.status(400).send(ERROR.EMAIL_OBRIGATORIO);
            return;
        }
        if (!req.body.password) {
            res.status(400).send(ERROR.SENHA_OBRIGATORIO);
            return;
        }

        UserModel.findOne({email: req.body.email})
        .populate('student')
        .exec()
        .then(result => {
            if (!result) {
                return res.status(400).send(ERROR.USUARIO_NAO_ENCONTRADO);
            }
            if (!result.comparePassword(req.body.password)) {
                return res.status(400).send(ERROR.SENHA_INVALIDA);
            }

            return res.status(200).send({
                success: jwt.sign({ payload: result.student }, secret)
            });
        })
        .catch(err => {
            return res.status(500).send(ERROR.ERRO_SERVIDOR);
        });
    }

};

