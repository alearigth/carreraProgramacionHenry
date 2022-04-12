// suma de array

function sumaDeArrays(array) {
 let newArray = [];
 array.forEach((element) => {
   if(Array.isArray(element) && element.length === 2) {
     let sum = element[0]; + element[1];
     newArray.push(sum);
   } else if(typeof element === "object") {
     newArray.push(element);
   }
 })
 return newArray;
}

// print staff

function printStaff(objeto) {
 let newArray = [];
 for (const key in objeto.staff) {
   let nombre = objeto.staff[key].name;
   newArray.push("this " + key + "is " + nombre)
 }
 return newArray;
}

// isThere

function isThere(obj, value) {
  for (const key in obj) {
    if(obj[key] === value) return true
    if(typeof obj[key] === "object") {
      let aux = isThere(obj[key], value)
      if (aux) return true
    }
  }
  return false
}

// Linked List

function stringify(lista) {
 let data = []
 while (lista !== null) {
   data.push(lista.data) 
   lista = lista.next
 }
 data.push("null")
 return data.join(" -> ")
}

// Arboles

BinarySearchTree.prototype.cantidad = function () {
  // Debe devolver la cantidad de nodos que se encuentran en el arbol
  if(!this.left && !this.right) return 1
  else if(this.left && !this.right) {
    return 1 + this.left.cantidad()
  } else if(this.right && !this.left) {
    return 1 + this.right.cantidad()
  } else if(this.left && this.right) {
    return 1 + this.left.cantidad() + this.right.cantidad()
  }
}
