import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageLoginComponent } from "./core/presentation/pages/page-login/page-login.component";

const routes : Routes =[
    {path: '', component:PageLoginComponent},
    {path: 'users',
      loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
    },
    {path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)
  },
  {path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then((m) => m.RegistrarModule)
  },
  {path: 'pedido',
  loadChildren: () => import('./pedido/pedido.module').then((m) => m.PedidoModule)
},
  {path: 'nuevo',
    loadChildren: () => import('./nuevo/nuevo.module').then((m) => m.NuevoModule)
  },
    {path: '**', redirectTo:''},

  ]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{


}
