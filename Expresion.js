export default class Arbol{
  constructor(hIzquierda, hDerecha){
    this._hIzquierda = hIzquierda;
    this._hDerecha = hDerecha;
  }

  get hIzquierda(){
    return this._hIzquierda;
  }
  set hIzquierda(val){
    this._hIzquierda = val;
    return this._hIzquierda;
  }

  get hDerecha(){
    return this._hDerecha;
  }
  set hDerecha(val){
    this._hDerecha = val;
    return this._hDerecha;
  }
}
