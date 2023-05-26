import {body, check} from 'express-validator';
import pkg from 'moment';

export const validateCreateBooking = [
    check('nombreCliente')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    check('apellidoCliente')
    .notEmpty()
    .withMessage('El apellido es obligatorio'),
    check('telefonoCliente')
    .notEmpty()
    .withMessage('El telefono es obligatorio'),
    check('fechaInicioReserva')
    .isDate()
    .custom((startDate, {req}) =>{
        if (!pkg(startDate).isBefore(req.body.fechaFinReserva)) {
            throw new Error('La fecha de inicio de reserva debe ser anterior a la fecha de finalización')
        }
        return true;
    }),
    check('fechaFinReserva')
    .isDate(),
    check('numeroPersonas')
    .notEmpty()
    .isNumeric(), 
    check('idHabitacion')
    .exists()
    .notEmpty()
    .withMessage('La habitación es requerida para la reserva')
]