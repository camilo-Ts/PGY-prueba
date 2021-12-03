import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IIntegrante, IProyecto } from 'src/interfaces/IProyecto';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
  selector: 'app-invitarUsuario',
  templateUrl: './invitarUsuario.component.html',
  styleUrls: ['./invitarUsuario.component.css']
})
export class InvitarUsuarioComponent implements OnInit {

  public usuarios:Array<IUsuario> =[]
  public nuevoIntegrante: IIntegrante;;
  public integrantes:Array<IIntegrante>;
  public proyecto:IProyecto;

  // prueba
  public objeto:Array<any>;


  constructor(private servicioUsuario:UsuarioService, private servicioProyecto:ProyectoService) { }

  ngOnInit() {
    // this.servicioProyecto.traerProyecto(1).subscribe(data => { this.integrantes = data.integrantes, this.proyecto = data})

    // this.servicioUsuario.getUsuarios().subscribe(data => {this.usuarios = data})
  }

  public modificarNombre(evento){
    this.nuevoIntegrante.nombre=evento.detail.value;
  }

  public agregar(){
    console.log(this.nuevoIntegrante);
    // this.proyecto.integrantes.push(this.nuevoIntegrante)
    // this.servicioProyecto.modificarProyecto(1, this.proyecto).subscribe(data=>{return})
  }
}
