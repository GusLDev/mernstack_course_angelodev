require('dotenv').config() //WE NEED THIS BECAUSE IT HAS OUR .ENV CONFIGURATION

const app = require('./app')
require('./database')
//This is for run the server
async function main(){
    await app.listen(app.get('port'))
    console.log('THE SERVER IS RUNNING ON PORT: ', app.get('port'))
}

main();