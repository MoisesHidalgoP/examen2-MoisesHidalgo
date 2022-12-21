import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PorteroService {
  conexion: any = this.firebase.collection('porteros');

  constructor(private firebase: AngularFirestore) { }

  //Metodo que recoge todos los porteros
  getAll() {
    return this.conexion.snapshotChanges();
  }

  //Metodo que filtra por mes
  getMesDisponible(mesDisponible: string) {
    return this.firebase.collection('porteros',
           ref => ref.where('mesDisponible','==', mesDisponible))
           .snapshotChanges();
  }

  //Metodo que recoge un portero
  getPortero(documentId: string) {
    return this.conexion.doc(documentId).snapshotChanges();
  }

  //Metodo que crear un portero
  createPortero(data: any) {
    return this.conexion.add(data);
  }

  //Metodo que actualiza un portero
  updatePortero(documentId: string, data: any) {
    return this.conexion.doc(documentId).update(data);
  }
  
  //Metodo que borra un portero
  deletePortero(documentId: string){
    return this.conexion.doc(documentId).delete();
  }

 

}
