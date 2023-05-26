import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Construimos el schema personalizando la informacion
const Habitacion = new Schema({
  nombreHabitacion: {
    type: String,
    require: true
  }, 
  foto: {
    type: [String],
    //require: true
  },
  descripcion:{
    type: String,
    require: true 
  },
  precioNoche: {
    type: Number, 
    require: true
  },
  cantidadMaxPersonas: {
    type: Number, 
    require: true
  }, 
  disponible: {
    type: Boolean, 
    require: true
  }

});

export const modeloHabitacion = mongoose.model('habitacion', Habitacion)