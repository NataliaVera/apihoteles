import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { validationResult } from "express-validator";

export class ControladorHabitacion{

    constructor(){}

    async registrarHabitacion(peticion, respuesta){

        let datosHabitacion = peticion.body
        let servicioHabitacion = new ServicioHabitacion()

        try {
            const errores = validationResult(peticion)
            if (!errores.isEmpty()) {
                return respuesta.status(403).json({errores : errores.array()})
            }

            await servicioHabitacion.registrarHabitacion(datosHabitacion)
            respuesta.status(201).json({
                "mensaje": "Creado"
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
            
        }
    }

    async buscarTodasHabitaciones(peticion, respuesta){
        let servicioHabitacion = new ServicioHabitacion()

        try {
            respuesta.status(200).json({
                "mensaje": "Exito buscando todas las habitaciones",
                "habitaciones": await servicioHabitacion.buscarTodas()
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
        }
    }

    async buscarIdHabitacion(peticion, respuesta){
        let idHabitacion = peticion.params.idhabitacion
        let servicioHabitacion = new ServicioHabitacion()
        console.log("La habitación a buscar es: "+idHabitacion)

        try {
            respuesta.status(200).json({
                "mensaje": "Exito buscando por Id: "+idHabitacion,
                "habitacion": await servicioHabitacion.buscarPorID(idHabitacion)
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
            
        }
    }

    async actualizarHabitacion(peticion, respuesta){
        let idHabitacion = peticion.params.idhabitacion
        let datosNuevosHabitacion = peticion.body

        let servicioHabitacion = new ServicioHabitacion()

        try {
            await servicioHabitacion.editarHabitacion(idHabitacion, datosNuevosHabitacion)
            respuesta.status(200).json({
                "mensaje": "Actualizado"
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
            
        }
    }

    async eliminarHabitacion(peticion, respuesta){
        let idHabitacion = peticion.params.idhabitacion
        let servicioHabitacion = new ServicioHabitacion()

        try {
            respuesta.status(200).json({
                "mensaje": "Eliminado",
                "habitacion": await servicioHabitacion.eliminarHabitacion(idHabitacion)
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
            
        }
    }
}