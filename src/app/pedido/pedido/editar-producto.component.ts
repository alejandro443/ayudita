import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoOracion } from 'src/app/models/pedidooracion';

import { PedidoOracionService } from 'src/app/service/pedido-oracion.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  pedido=<PedidoOracion>{}; /// sale error buscar solucion


  constructor(
    private pedidoOracionservice: PedidoOracionService,
    private activatedRoute: ActivatedRoute,

    private router: Router


  ) { }

 // ngOnInit(): void {
  //   const id =this.activatedRoute.snapshot.params.id;
   //  alert(id);
  // }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.pedidoOracionservice.detail(id).subscribe(
      data => {
        this.pedido = data;
        console.log(this.pedido);
      },
      err => {
        console.log(err);
      }

    );
  }



  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.pedidoOracionservice.update(id, this.pedido).subscribe(

    );
  }



}
