export class Persona {
  id?: number;
  nombre: string;
  dni: number;
  estado: string;
  m_apellidos: string;
  correo: string;
  p_apellidos:string;
  telefono:number;




  constructor(     nombre: string,
    correo: string,
    dni: number,
    estado: string,
    m_apellidos: string,

    p_apellidos:string,
    telefono:number) {

 this.nombre = nombre;
    this.correo = correo;
    this.dni = dni;
    this.estado = estado;
    this.m_apellidos = m_apellidos;

    this.p_apellidos = p_apellidos;
    this.telefono = telefono;
}
}
