//import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido/pedido.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { EditarProductoComponent } from './pedido/editar-producto.component';

const routes: Routes = [      //poner esto
  {path:'',component:PedidoComponent},
{path:'editar/:id',component:EditarProductoComponent},
 // {path: 'editar', component: ListaPedidoComponent},
  //{path:'pedido',component:ListaPedidoComponent}
  {path: '**', redirectTo: '', pathMatch: 'full'}
];//hata aqui


@NgModule({
  declarations: [
    PedidoComponent,EditarProductoComponent

  ],
  imports: [
    CommonModule,[RouterModule.forChild(routes)],
  ],exports:[PedidoComponent,EditarProductoComponent]
})
export class PedidoModule { }
