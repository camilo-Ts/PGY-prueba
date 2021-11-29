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

  public getUsuarios():Observable<Array<IUsuario>>{
    return this.client.get<Array<IUsuario>>(this.url,{
      headers:this.header
    })
  }

  /**
   * iniciarSesion
   */
  public iniciarSesion(usuario: string, contrasenia: string) :boolean{
    let miUsuario: Array<IUsuario>;
    let estado: boolean = false;

    // console.log(this.usuarios);

    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario == usuario && this.usuarios[i].contrasenia == contrasenia) {
        console.log(this.usuarios[i]);
        this.guardarUsuarioLogueado(this.usuarios[i]).subscribe(dato => {return})
        estado = true;
      }
      
    }
    return estado;
  }

  public guardarUsuarioLogueado(usuarioLog:IUsuario) {
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
      headers: this.header
    });
  }


  /**
   * cerrarSesion
   */
  public cerrarSesion() {
    let cerrarCuenta:any = {};

    return this.client.post(this.usuario_log, JSON.stringify(cerrarCuenta),{
      headers: this.header
    })
  }

  public agregarUsuario(nuevoUsuario: IUsuario): Observable<IUsuario>{
    return this.client.post<IUsuario>(this.url, JSON.stringify(nuevoUsuario),{
      headers: {
        "Content-Type":"application/json"
      }
    })
  }


  /**
   * comprobarLogueo
   */
  public comprobarLogueo(): boolean{
    let estado:boolean = false;

    this.jefeProyecto().subscribe(dato => {
      
      // console.log(Object.keys(dato).length)
      if (Object.keys(dato).length > 0) {
        estado = true;
      }
    
    });

    // if (Object.keys(usuarioLog).length > 0) {
    //   estado = true;
    // }
    console.log(estado);
    return estado;
  }


  /**
   * editarPerfil
   */
  public editarPerfil(usuario:IUsuario):Observable<IUsuario> {
    console.log(this.url+'/'+usuario.id);

    return this.client.put<IUsuario>(this.url+'/'+usuario.id, usuario, {
      headers:this.header
    })
  }

  /**
   * editarUsuarioLog
   */
  public editarUsuarioLog(usuario:IUsuario):Observable<IUsuario> {
    return this.client.put<IUsuario>(this.usuario_log, usuario, {
      headers:this.header
    })
  }
}