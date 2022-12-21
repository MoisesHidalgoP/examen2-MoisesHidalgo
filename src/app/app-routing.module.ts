import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorteroComponent } from './vistas/lista-portero/lista-portero.component';
import { FormularioPorteroComponent } from './vistas/formulario-portero/formulario-portero.component';

const routes: Routes = [
  { path: '', component: ListaPorteroComponent },
  { path: 'nuevoPortero', component: FormularioPorteroComponent },
  { path: 'edit/:id', component: FormularioPorteroComponent },
  { path: 'borrar/:id', component: FormularioPorteroComponent },
  { path: 'lista/:mesDisponible', component: ListaPorteroComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
