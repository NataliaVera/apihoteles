import { ServicioUser } from "../services/ServicioUser.js"
import { validationResult } from "express-validator";

export class ControladorUser{

    constructor(){}

    async registerUser(request, response){
        let datosUsuario = request.body
        let servicioUser = new ServicioUser()

        try {
            const errores = validationResult(request)
            if(!errores.isEmpty()){
                return response.status(403).json({
                    errores: errores.array
                })
            }
            const existingUser = await servicioUser.getUserByUsername(username)

            if(existingUser){
                return response.status(400).json({
                    error: 'El nombre de usuaro ya esta en uso'
                })
            }

            await servicioUser.registerUser(datosUsuario)
            response.status(201).json({
                "mesaje":"Creado"
            })

        } catch (error) {
            response.status(400).json({
                "mensaje": error
            })
        }
    }
}