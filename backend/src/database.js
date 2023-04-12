const mongoose = require('mongoose')

//CONECTION -->
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/dbtest'

//If database doesnt exist it will create that db in enviroment file

mongoose.connect(URI)
const connection = mongoose.connection;
console.log('Llega A la moongose conection')
console.log(URI)
connection.once('open',()=>{
    console.log('La base de datos ha sido conectada: ',URI);
})