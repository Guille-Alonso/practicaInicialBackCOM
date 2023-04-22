const {Schema, model, SchemaType} = require("mongoose");

const userSchema = new Schema(
    {
        nombre:{
            type: String,
            maxLength: [15,"Debe tener como maximo 15 caracteres"],
            minLength: [4,"Debe tener como minimo 4 caracteres"],
            required: [true,"El nombre es obligatorio"],
            uppercase: true
        },
        email:{
        type: String,
        unique: true
        },
        contraseña:{
            type: String,
            trim: true,
            required:[true,"La contraseña es obligatoria"]
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

userSchema.methods.toJSON = function (){
    const {contraseña, ...user} = this.toObject();
}

module.exports = model("User",userSchema);