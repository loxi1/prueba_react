const inquirer = require("inquirer");
require('colors')

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer',
        default: 'Usar las flechas',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} ${'Crear tarea'.white}`
            },
            {
                value: '2',
                name: `${'2.'.green} ${'Listar tareas'.white}`
            },
            {
                value: '3',
                name: `${'3.'.green} ${'Listar tareas'.white} completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} ${'Listar tareas'.white} pendientes`
            },
            {
                value: '5',
                name: `${'5'.green} ${'Completar tar'.white}eas`
            },
            {
                value: '6',
                name: `${'6.'.green} ${'Borrrar tarea'.white}`
            },
            {
                value: '0',
                name: `${'0.'.green} ${'Salir \n'.white}`
            }
        ]
    }
]

const optEnter = [
    {
        type: 'input',
        name: 'tecla',
        message: "Para continuar presione",
        default: "Enter"
    }
]

const inqMenu = async() => {
    console.log("===================".green)
    console.log("  Selecionar Menu")
    console.log("===================\n".green)

    const {option} = await inquirer.prompt(menuOpts)
    return option
}

const pausa = async() => {
    console.log('\n')
    await inquirer.prompt(optEnter)
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if( value.length ===0 ) 
                    return `Por favor ingresar un valor`
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inqMenu,
    pausa,
    leerInput
}