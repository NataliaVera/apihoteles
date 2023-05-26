import {check} from 'express-validator';

export const validateCreate = [
    check('precioNoche')
    .notEmpty()
    .isNumeric(),
    check('cantidadMaxPersonas')
    .notEmpty()
    .isNumeric(),
    check('disponible')
    .exists()
    .isBoolean()
]
