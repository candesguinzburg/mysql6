import express from 'express'
const router = express.Router()
import { userCreate, userLogin } from '../controller/userController.mjs';
import {check} from 'express-validator'

router.get('/login', userLogin)
 

router.post('/create',
[
    check('nombre').isLength({min:4}),
    check('email').isEmail(),
    check('password').isLength({min:6}),
],
 userCreate);

 

export default router