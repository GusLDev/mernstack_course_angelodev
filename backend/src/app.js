const express = require('express')
const cors = require('cors')
const app = express(); //Stores What express Has


//Configuration
app.set('port',process.env.PORT || 4000) //THIS IS FOR SAVE A VARIABLE CALLED PORT

module.exports = app;