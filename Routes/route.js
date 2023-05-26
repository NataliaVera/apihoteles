import express from 'express';
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js';
import { ControladorReserva } from '../Controllers/ControladorReserva.js';
import {validateCreate} from '../validators/habitacion.js'
import { validateCreateBooking } from '../validators/booking.js';

let controladorHabitacion = new ControladorHabitacion
let controladorReserva = new ControladorReserva

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