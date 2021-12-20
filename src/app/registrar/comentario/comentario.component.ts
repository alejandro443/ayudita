import { Component, OnInit } from '@angular/core';
import { PedidoOracion } from 'src/app/models/pedidooracion';
import { PedidoOracionService } from 'src/app/service/pedido-oracion.service';
import swal from 'sweetalert2';
@Component({
  selector: 'adra-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  oracion:string='';
  f_pedido:string='';
    estado: string ='';
    f_respuesta:string='';

    respuesta:string='';
  constructor(private pedidoOracionservice: PedidoOracionService) { }

  ngOnInit(): void {
  }

onCreate(): void {
 const pedidooracion =new PedidoOracion(this.oracion,this.f_pedido,this.f_respuesta,
 this.estado,this.respuesta);
this.pedidoOracionservice.save(pedidooracion).subscribe(
)
    //alert('se reguistro')



    swal.fire('QUE TENGA UN GRAN DIA!');










}



}
