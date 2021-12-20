import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { oracion } from 'src/app/models/oracion';
import { PedidoOracion } from 'src/app/models/pedidooracion';
import { PedidoOracionService } from 'src/app/service/pedido-oracion.service';
import { PersonaService } from 'src/app/service/persona.service';
import swal from 'sweetalert2';
@Component({
  selector: 'adra-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  ora: oracion[]=[];
  pedi:PedidoOracion[]=[];

  constructor(private pedidoOracionservice: PedidoOracionService ,private personaService: PersonaService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.cargar()
     this.carga()




  }

  cargar(): void {
    this.pedidoOracionservice.lis().subscribe(
      data => {
        this.ora = data;
        console.log(this.ora);
      },
      err => {
        console.log(err);
      }
    );
}

carga(): void {
  this.pedidoOracionservice.lista().subscribe(
    data => {
      this.pedi = data;
      console.log(this.pedi);
    },
    err => {
      console.log(err);
    }
  );
  }





 borra( id: number | undefined | any ){//poner este | undefined ="un dato no definido" para poder optener el id
  // alert('borrar  el ' + id); probamos si funcionapor un alert
  this.pedidoOracionservice.delete(id).subscribe(

  );
  swal.fire('Se elimino el pedido');
 }




}
