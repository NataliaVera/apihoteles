import { modeloHabitacion } from "../models/modeloHabitacion.js";

export class ServicioHabitacion{

    constructor(){}

    async registrarHabitacion(datosHabitacion){

        let habitacionNueva = new modeloHabitacion(datosHabitacion)
        return await habitacionNueva.save()
    }

    async buscarTodas(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }

    async buscarPorID(idHabitacion){

        let habitacion = await modeloHabitacion.findById(idHabitacion)
        return habitacion
    }

    async editarHabitacion(idHabitacion, datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(idHabitacion, datosHabitacion)
    }

    async eliminarHabitacion(idHabitacion){
        return await modeloHabitacion.findByIdAndDelete(idHabitacion)
    }
}