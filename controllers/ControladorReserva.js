import { ServicioReserva } from "../services/ServicioReserva.js"
import { validationResult } from "express-validator";

export class ControladorReserva{

    constructor(){}

    async crearReserva(peticion, respuesta){
        let datosReserva = peticion.body 
        let servicioReserva = new ServicioReserva()

        try {
            const errores = validationResult(peticion)
            if(!errores.isEmpty()){
                return respuesta.status(403).json({errores : errores.array()})
            }

            await servicioReserva.crearReserva(datosReserva)  
            respuesta.status(201).json({
                "mensaje": "Creado"
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            }) 
        }
    }

    async buscarReservas(peticion, respuesta){
        let servicioReserva = new ServicioReserva()

        try {
            respuesta.status(200).json({
                "mensaje": "Exito buscando todas las reservas",
                "reserva": await servicioReserva.buscarTodasReservas()
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
        }
    }

    async buscarIdReserva(peticion, respuesta){
        let idReserva = peticion.params.idreserva
        let servicioReserva = new ServicioReserva()

        try {
            respuesta.status(200).json({
                "mensaje": "Exito buscando reserva por Id",
                "reserva": await servicioReserva.buscarReservaId(idReserva)
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })
        }
    }

    async actualizarReserva(peticion, respuesta){
        let idReserva = peticion.params.idReserva
        let datosNuevosReserva = peticion.body 

        let servicioReserva = new ServicioReserva()

        try {
            await servicioReserva.editarReserva(idReserva, datosNuevosReserva)
            respuesta.status(200).json({
                "mensaje": "Actualizado"
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })   
        }
    }

    async eliminarReserva(peticion, respuesta){
        let idReserva = peticion.params.idreserva
        let servicioReserva = new ServicioReserva()
        try {
            await servicioReserva.eliminarReserva(idReserva)
            respuesta.status(200).json({
                "mensaje": "Eliminado"
            })
            
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": error
            })    
        }
    }

}