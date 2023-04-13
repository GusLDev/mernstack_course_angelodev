const express = require('express')
const cors = require('cors')
const app = express(); //Stores What express Has


//Configuration
app.set('port',process.env.PORT || 4000) //THIS IS FOR SAVE A VARIABLE CALLED PORT


//Middlewares
app.use(cors()) //This for get request for other servers that are not our backend server
app.use(express.json()) //This is for validate json's send and get
//Rutas
app.get('/',(req,res)=>{
    res.send('Bienvenido ami api rest full');
})
module.exports = app;