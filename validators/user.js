import {body, check} from 'express-validator'
import pkg from 'moment'

export const validateCreateUser =[
    check('username')
    .notEmpty()
    .trim()
    .withMessage('El usuario es obligatorio'),
    check('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    check('password')
    .notEmpty()
    .trim()
    .withMessage('La contraseña es obligatoria'),
    check('role')
    .notEmpty()
    .trim()
    .withMessage('El rol es obligatorio'), 
    check('reserword')
    .notEmpty()
    .withMessage('La palabra reservada es obligatoria')
]