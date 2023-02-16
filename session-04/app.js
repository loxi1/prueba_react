require('colors');

const { guardarDb, leerDB } = require('./helpers/guardar_archivo');
const { inqMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./helpers/tarea');
const Tareas = require('./helpers/tareas');
const main = async() => {
    let laopt = '';
    let techa = ''
    //pausa();
    const tareas = new Tareas();
    const tareaDB = leerDB();
    if(tareaDB) {
        console.log(typeof tareaDB)
        tareas.cargarTareas(tareaDB)
    }
    
    do {
        // Imprimir el menu
        laopt = await inqMenu();

        switch (laopt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            
            case '2':
                const lista = tareas.getArray
                console.log(lista)
                break;
            
            case '3':
                break;
        
            case '3':
                break;
    
            case '4':
                break;

            case '5':
                break;

            case '6':
                break;

            case '0':
                break;
        
            default:
                break;
        }
        guardarDb(tareas.getArray);

        await pausa();

    } while (laopt !=='0');
}

main();