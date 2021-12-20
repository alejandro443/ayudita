export class PedidoOracion {
  id_pedido?: number;
    oracion:string;
  f_pedido:string;
  estado: string;
  f_respuesta:string;

  respuesta:string

  constructor(
      oracion:string,f_pedido:string,
    estado: string,
    f_respuesta:string,

    respuesta:string,) {

this.oracion = oracion;
    this.f_pedido = f_pedido;

     this.estado = estado;
    this.f_respuesta = f_respuesta;

    this.respuesta = respuesta;

}

}
