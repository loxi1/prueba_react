const fs = require('fs');
const archivo = './db/data.json';
const guardarDb = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}
const leerDB = () => {
    if( !fs.existsSync(archivo)) {
        return null
    }
    const rta = fs.readFileSync(archivo, { encoding: 'utf-8'} );
    const data = JSON.parse(rta)
    console.log(data);
    return data;
}

module.exports = {
    guardarDb,
    leerDB
}