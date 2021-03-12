import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { FormularioNoticiasComponent } from './componentes/formulario-noticias/formulario-noticias.component';
import { ListaNoticiasComponent } from './componentes/lista-noticias/lista-noticias.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  {
    path: 'listado', component: ListaNoticiasComponent,
    children: [
      {
        path: ':id', component: DetalleNoticiaComponent,
      },
    ]
  },
  { path: 'nuevo', component: FormularioNoticiasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
