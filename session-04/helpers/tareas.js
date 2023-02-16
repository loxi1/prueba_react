const Tarea = require('./tarea');

class Tareas {
    __listado = {}

    constructor() {
        this.__listado = {};
    }

    get getArray() {
        const listado = [];
        Object.keys(this.__listado).forEach(key => {
            listado.push(this.__listado[key])
        });
        return listado;
    }

    crearTarea(desc = '')
    {
        const tarea = new Tarea(desc);
        this.__listado[tarea.id] = tarea;
    }

    cargarTareas(tare = [])
    {
        let obj = {};
        console.log('----------------')
        /*for(const x of tare) {
            this.__listado[x.id] = x
        }*/
        tare.forEach((tarea) => {
            this.__listado[tarea.id] = tarea
        })

        console.log('----------------')
    }
}

module.exports = Tareas