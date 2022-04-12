const { LinkedList, Node } = require("../estructuras");
//agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
if(!this.head) return false;
let current = this.head
let contador = 1
while(current.next) {
  contador ++ 
  current = current.next
}
return contador
};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
if(!this.head) return false;
let newArr = [];
let current = this.head
while(current) {
  newArr.push(current.value);
  current = current.next
}
newArr.sort((a, b ) => b- a)
this.head = null;
this.len = 0
for (let i = 0; i < newArr.length; i++) {
  this.add(newArr[i])
  
}
}

  
  


//agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
//tomar el head como posicion 1

LinkedList.prototype.insert = function (data, pos) {
if(this.len < pos) return this.add(data);
let newArr = new Set(data);
if( pos === 1 ) {
  newArr.next = this.head
  this.head = newArr
  this.len ++
}
let current = this.head
let cuenta = 1
while(cuenta < pos) {
  current = current.next
  cuenta ++
}
newArr.next = current.next
current.next = newArr
this.len ++

};

module.exports = {
  LinkedList,
};
