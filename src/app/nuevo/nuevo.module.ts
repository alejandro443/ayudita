import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';

import { PostsRoutingModule } from '../posts/posts-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { EditarProductoComponent } from '../pedido/pedido/editar-producto.component';

const routes: Routes = [      //poner esto
  {path:'',component:ListaComponent},

];//hata aqui


@NgModule({
  declarations: [
    ListaComponent

  ],
  imports: [
    CommonModule,[RouterModule.forChild(routes)],

    FormsModule
  ],exports:[ListaComponent]
})
export class NuevoModule { }


/*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePostComponent } from './presentation/pages/page-post/page-post.component';

const routes: Routes = [
  {path:'',component:PagePostComponent}
];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
 // exports: [RouterModule]
//})
//export class PostsRoutingModule { }
 */
