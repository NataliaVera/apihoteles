import express from 'express';
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js';
import { ControladorReserva } from '../controllers/ControladorReserva.js';
import {ControladorUser} from '../controllers/ControladorUser.js'
import {validateCreate} from '../validators/habitacion.js'
import { validateCreateBooking } from '../validators/booking.js';
import { validateCreateUser } from '../validators/user.js';

let controladorHabitacion = new ControladorHabitacion
let controladorReserva = new ControladorReserva
let controladorUser = new ControladorUser

//Separar las rutas de la logica de negocio 

export let rutas = express.Router()

rutas.post('/registrarhabitacion', validateCreate ,controladorHabitacion.registrarHabitacion)
rutas.get('/buscarhabitaciones', controladorHabitacion.buscarTodasHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion', controladorHabitacion.buscarIdHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion', controladorHabitacion.actualizarHabitacion)
rutas.delete('/eliminarhabitacion/:idhabitacion', controladorHabitacion.eliminarHabitacion)

rutas.post('/crearreserva', validateCreateBooking ,controladorReserva.crearReserva)
rutas.get('/buscarreservas', controladorReserva.buscarReservas)
rutas.get('/buscarreservaId/:idreserva', controladorReserva.buscarIdReserva)
rutas.put('/actualizarreserva/:idreserva', controladorReserva.actualizarReserva)
rutas.delete('/eliminarreserva/:idreserva', controladorReserva.eliminarReserva)

rutas.post('/register', validateCreateUser, controladorUser.registerUser)