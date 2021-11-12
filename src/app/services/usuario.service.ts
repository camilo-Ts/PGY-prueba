import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/interfaces/IUsuario';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = "http://localhost:3000/usuario";

  constructor(private client: HttpClient) { }

  // Metodos

  /**
   * iniciarSesion
   */
  public iniciarSesion(usuario:string, contrasenia:string): Observable<Array<IUsuario>> {
    return this.client.get<Array<IUsuario>>(this.url+"/1", {
      headers:{
        "Content-type":"application/json"
      }
    });
    let usuarioNuevo: IUsuario;

    // return this.client.get<IUsuario>(this.url+"/1", {
    //   headers:{
    //     "Content-type":"application/json"
    //   }
    // });

    // return this.client.get<Observable<IUsuario>>(this.url+"/1");
  }

  // public agregarUsuario(nuevoUsuario:IUsuario){
  //   this.client.post(this.url,{
  //     "id": nuevoUsuario.id,
  //     "nombre": nuevoUsuario.nombre,
  //     "apellido": nuevoUsuario.apellido,
  //     "correo": nuevoUsuario.correo,
  //     "telefono": nuevoUsuario.telefono,
  //     "contrasenia": nuevoUsuario.contrasenia
  //   })

  public agregarUsuario(nuevoUsuario: IUsuario): Observable<IUsuario>{
    return this.client.post<IUsuario>(this.url, JSON.stringify(nuevoUsuario),{
      headers: {
        "Content-Type":"application/json"
      }
    })
  }
}