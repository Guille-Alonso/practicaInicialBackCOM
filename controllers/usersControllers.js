const User = require("../models/User");
const bcrypt = require("bcryptjs");


const addUser = async (req,res) =>{
    try {
        const {nombre, email, contraseña} = req.body;

        const salt = await bcrypt.genSalt(10);
        const contraseñaEncriptada = await bcrypt.hash(contraseña,salt);

        const nuevoUsuario = new User({
            nombre,
            email,
            contraseña: contraseñaEncriptada
        })
       await nuevoUsuario.save();
       res.status(200).json({message:"usuario registrado con exito"});
    } catch (error) {
        if(error.code === 11000){
            res.status(409).json({message: error.message})
        }
        res.status(error.code || 500).json({message:"hubo un problema.."})
       
    }
}

module.exports={
    addUser

}