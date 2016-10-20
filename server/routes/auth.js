/**
 * Created by User on 10/19/2016.
 */

import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
//import bcrypt from 'bcrypt';
//import validateInput from '../shared/validations/login';

let router = express.Router();

router.post('/', (req, res) => {
    const { identifier, password } = req.body;

    if (identifier === 'me@gmail.com') {
        if (password === '123456') {
            const token = jwt.sign({
                id: '123456789',
                username: 'Mehul',
                email: 'identifier'
            }, config.jwtSecret);
            res.json({token});
        } else {
            res.status(401).json({form: 'Invalid credentials'});
        }
    } else {
        res.status(401).json({form: 'Invalid credentials'});
    }
});

export default router;