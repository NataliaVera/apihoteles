import express from 'express';
import cors from 'cors'
import {rutas} from './Routes/route.js';
import { establecerConexion } from './database/connection.js';

export class API{
    constructor(){
        this.app = express()
        this.conectarDB()
        this.atenderPeticiones()
    }

    levantarServidor(){
        this.app.listen(process.env.PORT,() => console.log("Servidor encendido."))
    }
    atenderPeticiones(){
        this.app.use(cors())
        this.app.use(express.json()) //Limitar los datos que recibo en el body
        this.app.use('/', rutas)
    }
    conectarDB(){
        establecerConexion()
    }

}