let arrayParrafo = [], arrayReverso = [], tipoTexto = []
let axu = '', esTexto = false, _palabraTexto = '', texto = ''

const convertirMinusculas = (texto) => texto.toLowerCase()

const quitarEspacios = (texto) => texto.replace(/\s+/g, '')

let quitarTides = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

let quitarSignos = (texto) => texto.replace(/[¿!¡;,:\.\?#@()~"]/g,"")

let esTextoPoliformico = (texto) => {
    aux = convertirMinusculas(texto)
    aux = quitarEspacios(aux)
    aux = quitarTides(aux)
    aux = quitarSignos(aux)

    arrayParrafo = aux.split('')
    arrayReverso = aux.split('').reverse()
    
    arrayParrafo.every((_letra, _indc) => {
        if(_letra != arrayReverso[_indc])
        {
            esTexto = true
            return false
        }
    })
    
    tipoTexto[0] = texto.includes(' ') ? 'La Frase' : 'La Palabra'
    tipoTexto[1] = esTexto ? 'no' : 'si'
    tipoTexto[2] = 'es un palíndromo'
    
    return tipoTexto.join(' ')
}
texto = '¿Acaso hubo búhos acá?'
_palabraTexto = esTextoPoliformico(texto)
console.log(`\nLa palabra:\n ${texto} \n ${_palabraTexto}\n`)