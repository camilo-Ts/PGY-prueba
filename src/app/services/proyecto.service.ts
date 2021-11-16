import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProyecto } from 'src/interfaces/IProyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private header:any = {"Content-Type": "application/json"}

  private url: string = "http://localhost:3000/proyecto";

  constructor(private client: HttpClient) { }

  //Metodos
  public agregarProyecto(nuevoProyecto: IProyecto): Observable<IProyecto> {    
    return this.client.post<IProyecto>(this.url, JSON.stringify(nuevoProyecto), {
      headers: this.header
    })
  }

  /**
   * ListarProyectos
   */
  public listarProyectos() : Observable<Array<IProyecto>>{
    return this.client.get<Array<IProyecto>>(this.url, {
      headers: this.header
    })
  }

  public traerProyecto(id:number): Observable<IProyecto>{
    return this.client.get<IProyecto>(this.url+"/"+id,{
      headers:this.header
    })
  }

  /**
   * eliminarProyecto
   */
  public eliminarProyecto(id:number) {
    this.client.delete(this.url+"/"+id, {headers:this.header}).subscribe(()=> {return})

    // console.log(this.url+"/"+id);
    
  }
}