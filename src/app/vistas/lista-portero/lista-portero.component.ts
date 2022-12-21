import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portero } from '../../modelos/portero';
import { PorteroService } from '../../modelos/portero.service';

@Component({
  selector: 'app-lista-portero',
  templateUrl: './lista-portero.component.html',
  styleUrls: ['./lista-portero.component.css']
})
export class ListaPorteroComponent implements OnInit {
  listaPorteros: Portero[] = [];
  selectedPortero?: Portero;


  constructor(
    private porterosService: PorteroService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.ruta.params.subscribe((params: any) => {
      if (params['mesDisponible']) {
        // LLamo a getMesDisponible
        this.getMesDisponible(params['mesDisponible']);
      } else {
        this.getAll();
      }
    });
  }
  
  getMesDisponible(mesDisponible: string) {
    this.porterosService.getMesDisponible(mesDisponible).subscribe((resp: any) => {
      this.cargaLista(resp);
    });
  }

  getPortero(portero: string) {
    this.porterosService.getPortero(portero).subscribe((resp: any) => {
      this.cargaLista(resp);
    });
  }

  getAll() {
    this.porterosService.getAll().subscribe((resp: any) => {
      this.cargaLista(resp);
    });
  }

  cargaLista(resp: any) {
    this.listaPorteros = [];
    resp.forEach((portero: any) => {
      this.listaPorteros.push({
        id: portero.payload.doc.id,
        data: portero.payload.doc.data(),
      });
    });
  }


  selectMascota(portero: Portero) {
    this.selectedPortero = portero;
  }
}


