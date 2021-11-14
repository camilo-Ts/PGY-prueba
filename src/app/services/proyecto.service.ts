import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProyecto } from 'src/interfaces/IProyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url: string = "http://localhost:3000/proyecto";

  constructor(private client: HttpClient) { }

  //Metodos
  public agregarProyecto(nuevoProyecto: IProyecto): Observable<IProyecto> {
    return this.client.post<IProyecto>(this.url, JSON.stringify(nuevoProyecto), {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

}


//public agregarUsuario(nuevoUsuario: IUsuario): Observable<IUsuario>{
  //return this.client.post<IUsuario>(this.url, JSON.stringify(nuevoUsuario),{
    //headers: {
      //"Content-Type":"application/json"
    //}