import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PorteroService } from '../../modelos/portero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-portero',
  templateUrl: './formulario-portero.component.html',
  styleUrls: ['./formulario-portero.component.css']
})
export class FormularioPorteroComponent implements OnInit {
  //Formulario
  datosPortero = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    ciudad: ['', Validators.required],
    telefono: [0, Validators.required],
    email: ['', Validators.required],
    mesDisponible: ['', Validators.required],
  });

  nueva: boolean = false;
  documentId: any;
  coleccion:any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private porterosService: PorteroService,
    private ruta: ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    console.log('hola soy formulario portero');
    this.ruta.params.subscribe( params => {
      if(params['id']){
        this.documentId = String(params['id']);
        this.nueva = false;
        console.log('editar');
        // mostrar el portero en el formulario
        this.porterosService.conexion(this.documentId).subscribe(
          (resp: any) => {
            this.datosPortero.setValue(resp.payload.data());
          }
        )
      }else{
        console.log('nueva');
        this.nueva=true;
      }
    })
  }
  guardar() {
    if(this.nueva){
      // guardar datos con createPortero
      this.porterosService.createPortero(this.datosPortero.value).then(
        () => {
          alert('Portero creado, enhorabuena');
          this.cancel();
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }else{
      // llamar o invocar updatePortero
      this.porterosService.updatePortero(this.documentId,this.datosPortero.value).then(
        () => {
          alert('Portero actualizado');
          this.cancel();
        },
        (error: any) => {
          alert('Error: ' + error);
        }
      )
    }
  }
  cancel() {
    this.location.back();
  }
  //Llamar o inviocar deletePortero
  borrar(){
    this.porterosService.deletePortero(this.documentId).then(
      () => {
        alert('Portero borrado, enhorabuena');
        this.cancel();
      }, (error: any) => {
        alert("Error: " + error);
      }
    )
    
  }

}
