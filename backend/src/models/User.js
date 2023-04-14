const {Schema,model} = require('mongoose') //We are going to use two functionalities from moongose
const userSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
},
{
    timestamps: true
})
module.exports = model('User',userSchema) //THE MODEL IS CALLED User AND MODEL HAS A SCHEMA userSchema