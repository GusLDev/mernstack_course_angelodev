const {Schema,model} = require('mongoose') //We are going to use two functionalities from moongose
const userSchema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    phone: Number,
    email: String
},
{
    timestamps: true
})
module.exports = model('User',userSchema) //THE MODEL IS CALLED User AND MODEL HAS A SCHEMA userSchema