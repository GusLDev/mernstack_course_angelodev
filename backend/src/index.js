const app = require('./app')

//This is for run the server
async function main(){
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto ', app.get('port'))
}

main();