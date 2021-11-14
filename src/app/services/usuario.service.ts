import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/interfaces/IUsuario';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Array<IUsuario> = [];

  private header: any = { "Content-Type": "application/json" }

  private url: string = "http://localhost:3000/usuario";
  private usuario_log: string = "http://localhost:3000/usuario_log";

  constructor(private client: HttpClient) { 
    this.listarUsuarios(); 
  }
  // Metodos

  /**
   * iniciarSesion
   */
  public iniciarSesion(usuario: string, contrasenia: string) {
    let miUsuario: Array<IUsuario>;

    // console.log(this.usuarios);

    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario == usuario && this.usuarios[i].contrasenia == contrasenia) {
        console.log(this.usuarios[i]);
        this.guardarUsuarioLogueado(this.usuarios[i]).subscribe(dato => {return})
        
      }
      
      
    }
  }

  private guardarUsuarioLogueado(usuarioLog:IUsuario) {
    return this.client.post<IUsuario>(this.usuario_log, JSON.stringify(usuarioLog), {
      headers: this.header
    })
  }

  /**
   * listarUsuarios
   */
  public listarUsuarios() {
    return this.client.get<Array<IUsuario>>(this.url, {
      headers: this.header
    }).subscribe((datos: Array<IUsuario>) => { this.usuarios = datos })
  }
  public jefeProyecto(): Observable<IUsuario> {
    return this.client.get<IUsuario>(this.usuario_log, {
      headers: {
        "Content-type": "application/json"
      }
    });
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