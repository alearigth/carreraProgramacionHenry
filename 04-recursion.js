// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  // [ 1 , 2 , 5]
 if(array.length === 0) return 1
 return array.shift() * producto(array)
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//    prop2:{value:5}
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }

const isThere = function (obj, value) {
  //escribe aqui tu codigo
 for (const key in obj) {
   if(obj[key] === value) return true
   if( typeof obj[key] === "object") {
     let aux = isThere(obj[key], value)
     if (aux) return true
   }
 }
 return false
};
module.exports = { producto, isThere };
