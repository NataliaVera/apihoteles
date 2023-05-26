import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva{

    constructor(){}

    async crearReserva(datosReserva){
        let reserva = new modeloReserva(datosReserva)
        return await reserva.save()
    }

    async buscarReservaId(idReserva){
        let reserva = await modeloReserva.findById(idReserva)
        return reserva
    }

    async buscarTodasReservas(){
        let reservas = await modeloReserva.find()
        return reservas
    }

    async editarReserva(idReserva, datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva, datosReserva)
    }

    async eliminarReserva(idReserva){
        return await modeloReserva.findByIdAndDelete(idReserva)
    }
}