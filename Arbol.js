import Expresion from "./Expresion.js";
let expresion = new Expresion();

export default class Arbol{
  constructor(){
    this._raiz = null;
    this._hoja = null;
  }

  get raiz(){
    return this._raiz;
  }
  set raiz(val){
    this._raiz = val;
    return this._raiz;
  }

  get hoja(){
    return this._hoja;
  }
  set hoja(val){
    this._hoja = val;
    return this._nodo;
  }

  agregar(separar){
    if (this._raiz == null) {
      this._raiz = separar;
    }else {
      if (separar < this._raiz) {
        expresion.hIzquierda = separar;
      }else {
        expresion.hDerecha = separar;
      }
    }
  console.log(separar);
}

  descomponer(expresion){
    let separador = " ";
    let separar = expresion.split(separador);
    console.log(separar);

    agregar(separar);
  }

  preOrder(){ //expresion
		console.log(producto.codigo);
		if (producto.hIzquierda) {
			this.preOrder(producto.hIzquierda);
		}
		if (producto.hDerecha) {
			this.preOrder(producto.hDerecha);
		}
	}

	postOrder(){//expresion
		if (producto.hIzquierda) {
			this.postOrder(producto.hIzquierda);
		}
		if (producto.hDerecha) {
			this.postOrder(producto.hDerecha);
		}
		console.log(producto.codigo);
	}
}
