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
  private usuario_log: string = "http://localhost:3000/usuario_log";

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

  public jefeProyecto(): Observable<IUsuario> {
    return this.client.get<IUsuario>(this.usuario_log, {
      headers:{
        "Content-type":"application/json"
      }
    });
  } 
}