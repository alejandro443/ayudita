export class oracion{

id_perso: number;
  nombre: string;
   f_pedido:Date;
  oracion:string;


  constructor( id_perso: number,
    nombre: string,
     f_pedido:Date,
    oracion:string,) {

    this.f_pedido = f_pedido;
     this.nombre = nombre;
this.id_perso = id_perso;
    this.oracion = oracion;


}

}
