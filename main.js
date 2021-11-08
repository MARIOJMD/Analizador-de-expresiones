import Arbol from "./Arbol.js";

let btn = document.querySelector("#btn");
btn.addEventListener("click", generar);

function generar(){
  let expresion = document.querySelector("#expresion").value;
  //descomponerExp(expresion);
  //impresion(expresion);
  //console.log("btn");
  /*let arbol = new Arbol();
  arbol.agregarArbol();*/
  let arbol = new Arbol();
  arbol.descomponer(expresion);
}

/*function impresion(expresion){
  let vec = expresion;
  console.log(vec);
}*/

/*function descomponerExp(expresion){
  //console.log(expresion);
  let arbol = new Arbol();
  arbol.descomponer(expresion);
}*/
