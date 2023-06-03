import { modeloUser } from "../models/modeloUser.js";

export class ServicioUser{
    
    constructor(){}

    async registerUser(datosUsuario) {
        let usuarioNuevo = new modeloUser(datosUsuario)
        return await usuarioNuevo.save()
    }

    async getUserByUsername(username){
        const user = await modeloUser.findOne({username})
        return user
    }
}