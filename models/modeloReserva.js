import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Reserva = new Schema({
    nombreCliente: {
        type: String,
        require: true
    },
    apellidoCliente: {
        type: String,
        require: true
    },
    telefonoCliente: {
        type: Number,
        require: true
    },
    fechaInicioReserva: {
        type: Date,
        require: true
    },
    fechaFinReserva: {
        type: Date,
        require: true
    },
    numeroPersonas: {
        type: Number,
        require: true
    },
    idHabitacion: {
        type: Schema.ObjectId, ref: "habitacion",
        require: true 
    },
    costoReserva:{//Se calcula, es opcional. restar fechas en js 
        type: Number
    }
})

export const modeloReserva = mongoose.model('reserva', Reserva)