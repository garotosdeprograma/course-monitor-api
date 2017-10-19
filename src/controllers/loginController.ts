import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { ERROR } from '../constant/errors';
import UserModel from '../models/user';
import { secret } from '../config/jwt';
import openConnection from '../database-actions/open-connection';

const router = express.Router();

router.route()

router.post('/login', function (req, res) {
    if (!req.body.email) {
        res.status(400).send(ERROR.EMAIL_OBRIGATORIO);
        return;
    }
    if (!req.body.senha) {
        res.status(400).send(ERROR.SENHA_OBRIGATORIO);
        return;
    }
    
    UserModel.findOne({ email: req.body.email }, function (err, user) {
        if (!user.comparePassword(req.body.senha)) {
            res.status(400).send(ERROR.USUARIO_NAO_AUTENTICADO);
        } else {
            return jwt.sign({ email: user.email }, secret);
        }
    });
});

export default router;
