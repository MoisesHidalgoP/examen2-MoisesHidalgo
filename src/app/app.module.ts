import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { ListaPorteroComponent } from './vistas/lista-portero/lista-portero.component';
import { DetallePorteroComponent } from './vistas/detalle-portero/detalle-portero.component';
import { FormularioPorteroComponent } from './vistas/formulario-portero/formulario-portero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ListaPorteroComponent,
    DetallePorteroComponent,
    FormularioPorteroComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
