import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario/comentario.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { PedidoComponent } from '../pedido/pedido/pedido.component';
const routes: Routes = [      //poner esto
  {path:'',component:ComentarioComponent}
  //{path:'pedido',component:ListaPedidoComponent}
//  {path: '**', redirectTo: '', pathMatch: 'full'}
];//hata aqui



@NgModule({
  declarations: [
    ComentarioComponent
  ],
  imports: [
    CommonModule,[RouterModule.forChild(routes)],   FormsModule
  ],exports:[ComentarioComponent  ]
})
export class RegistrarModule { }
