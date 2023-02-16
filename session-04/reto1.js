
let cantDeIteraciones = 0
let axu = 0
let arrayFibo = []

//Formar texto fibonacci
const formarArray = (cantDeIteraciones) => {
    for (let index = 1; index <= cantDeIteraciones; index++) {
        if(index<=2)
            axu++
        else
            axu = arrayFibo[arrayFibo.length-1]  + arrayFibo[arrayFibo.length-2];
        arrayFibo.push(axu)
    }
    return arrayFibo.toString()
}

//Validar la candidad de iteracioens mayor o igual a 0
const mostrarFibo = (indice) => {
    if(indice>=0)
        return indice==0 ? 1 : formarArray(indice)        
    return "Ingresar # mayor o igual a 0"
}

//Cantidad de iteraciones
cantDeIteraciones = 4

let rta = mostrarFibo(cantDeIteraciones)
console.log(`\nCantidad de iteraciones: [${cantDeIteraciones}]`)
console.log(rta,`\n`)