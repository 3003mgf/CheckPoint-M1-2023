const { BinarySearchTree } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

🔟 ***** EJERCICIO 10 - BINARYSEARCHTREE ***** - ingresar() 🔟

¡Atención! Está llegando nuestro primer cliente. Debemos venderle la entrada a la película que quiere ver. Para esto
tendrás que agregar al prototipo de "BinarySearchTree" un método llamado "ingresar". Este recibirá por parámetro un
arreglo de objetos en los que se encuentran los horarios y nombres de las películas.

Tendrás que recorre el árbol y agregar la propiedad "ticket" con el valor true en cada uno de los nodos que coincida 
con los elementos del arreglo que recibes por paráemtro. De esta forma podremos identificar qué tickets tienen dueño y 
cuántos quedan disponibles.


⛔️ IMPORTANTE ⛔️
1) Tanto los nodos del árbol como los elementos del array de objetos serán valores únicos.
2) Si el arreglo está vacío retornar false.


📝 EJEMPLO 📝
ÁRBOL
                           { nombre: "Chaplin", horario: 10 }
                             /                             \
       {nombre: "El Hobbit", horario: 7}     {nombre: "Masacre en Texas", horario: 22}
                         /                                       \
{nombre: "300", horario: 6}            {nombre: "Harry potter", horario: 23}


INPUT ---> [{ nombre: "Harry potter", horario: 23 }, { nombre: "300", horario: 6 }, { nombre: "El Hobbit", horario: 7 }];
OUTPUT -->
                           { nombre: "Chaplin", horario: 10 }
                             /                             \
       {nombre: "El Hobbit", horario: 7, ticket: true}     {nombre: "Masacre en Texas", horario: 22}
                         /                                       \
{nombre: "300", horario: 6, ticket: true}            {nombre: "Harry potter", horario: 23, ticket: true}
*/

BinarySearchTree.prototype.ingresar = function (arregloDePeliculas, arregloConTutti = []) {
  // Tu código aquí:
  if (arregloDePeliculas.length === 0){
    return false;
  }

  if (this.left) {
    arregloConTutti.push(this.left)
  }
  if (this.right){
    arregloConTutti.push(this.right)
  }

  for (var i= 0; i < arregloDePeliculas.length; i++) {
    if (arregloDePeliculas[i].nombre === this.value.nombre && arregloDePeliculas[i].horario === this.value.horario){
      this.value.ticket = true;
    }
  }
  
  if (arregloConTutti.length > 0){
    arregloConTutti.shift().ingresar(arregloDePeliculas,arregloConTutti)
  }
}



/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = BinarySearchTree;
