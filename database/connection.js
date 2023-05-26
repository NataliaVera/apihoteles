import mongoose from 'mongoose'

export async function establecerConexion(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("Conexion a base de datos.")
    } catch (error) {
        console.log(`Error al conectarse: ${error}`)
    }
}
