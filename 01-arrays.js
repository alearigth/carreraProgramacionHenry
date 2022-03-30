
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"

    // psuedocodigo:
    // recorrer el arreglo, desde el final hacia adelante
    // verificar que el elemento no tenga mas de 1 digito
    // crear un array nuevo vacio
    // los elementos que pasen la condicion los agrego al nuevo array

    // [1,2,3,40]
    //         i
    // [3,2,1]

   let newArr = []

   for (let i = 0; i < array.length; i++) {
       if((array[i] < 10 && array[i] >= 0) || array[i].length < 2){
           newArr.unshift(array[i])
       }
       
   }
   return newArr
}




function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    // recorro los array
    // voy comparando elementos para ver si son iguales
    // lo guardo y lo retorno (si son iguales)

    // [1,2,3,4]
    //        i
    // [5,3,4,7]
    //      x
 let value;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.lenght; j ++) {
           if(array1[i] === array2[j]){
               if(!value) value = array1[i]
           }
            
        }
        
    }
    return value
}





function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

   let arrNew = []
   array.forEach((element) => {
       if(Array.isArray(element) && element.length === 2){
           let sum = element[0] + element[1]
           arrNew.push(sum)
       } else if (typeof element === "number"){
           arrNew.push(element)
       }
   })
   arrNew
}


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    // divisor es 4 --> [el,el,el,el]
    // numero / divisor !== entero --> return false
    // numero % divisor !== 0

    // 40 % 4 = 0
    // 10 % 3 = 1 -- 3.333333333....

if(numero % divisor !== 0) return false
let aux = numero / divisor
let verificator = 0
let arr = []

while (divisor > verificator){
    arr.push(aux)
    verificator ++
}

return arr



};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    // pseudocodigo
    // Ordenar el arreglo
    // Pushear el primero y el ultimo

 array.sort(function(a, b ){
     a - b 
 })
 return [array[0], array[array.length -1]]
}



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};