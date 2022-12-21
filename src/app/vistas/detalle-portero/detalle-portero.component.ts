import { Component, Input, OnInit } from '@angular/core';
import { Portero } from '../../modelos/portero';

@Component({
  selector: 'app-detalle-portero',
  templateUrl: './detalle-portero.component.html',
  styleUrls: ['./detalle-portero.component.css']
})
export class DetallePorteroComponent implements OnInit {
  @Input() portero?: Portero;
  constructor() { }

  ngOnInit(): void {
  }

}
