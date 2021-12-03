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
  public nuevoIntegrante: IIntegrante ={nombre:"",rol:""};
  public integrantes:Array<IIntegrante>;
  public proyecto:IProyecto = { nombre: "", descripcion: "", estado: true, fecha_in: new Date(), fecha_fn: new Date(), jefe_proy: 0 , integrantes:[]};

  // prueba
  public objeto:Array<any>;


  constructor(private servicioUsuario:UsuarioService, private servicioProyecto:ProyectoService) { }

  ngOnInit() {
    //this.servicioProyecto.traerProyecto(1).subscribe(data => { this.integrantes = data.integrantes, this.proyecto = data})

    this.servicioUsuario.getUsuarios().subscribe(data => {this.usuarios = data})
  }

  public modificarNombre(evento){
    console.log(evento);
    this.nuevoIntegrante.nombre=evento.detail.value;
  }

  public agregar(){
    console.log(this.nuevoIntegrante);
    this.proyecto.integrantes.push(this.nuevoIntegrante)
    this.servicioProyecto.modificarProyecto(parseInt(window.localStorage.getItem("idProyecto")), this.proyecto).subscribe(data=>{return})
  }
}
