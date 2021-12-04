import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private servicioUsuario:UsuarioService, private servicioProyecto:ProyectoService, private nav:Router) { }

  ngOnInit() {

    this.proyecto = { nombre: "", descripcion: "", estado: true, fecha_in: new Date(), fecha_fn: new Date(), jefe_proy: 0 , integrantes:[]};
    this.integrantes = []
    this.nuevoIntegrante = {nombre:"",rol:""}

    this.servicioProyecto.traerProyecto(parseInt(window.localStorage.getItem("idProyecto"))).subscribe(data => {this.proyecto = data})

    this.servicioUsuario.getUsuarios().subscribe(data => {this.usuarios = data})

    console.log(this.nuevoIntegrante);
    console.log(this.proyecto);
    console.log(this.integrantes);
  }

  public modificarNombre(evento){
    console.log(evento);
    this.nuevoIntegrante.nombre=evento.detail.value;
  }

  public agregar(){

    // console.log(this.nuevoIntegrante);
    // console.log(this.proyecto);
    // console.log(this.integrantes);

    // console.log(this.nuevoIntegrante);
    this.proyecto.integrantes.push(this.nuevoIntegrante)
    this.servicioProyecto.modificarProyecto(parseInt(window.localStorage.getItem("idProyecto")), this.proyecto).subscribe(data=>{return})

    this.nav.navigate(["integrantes"])
  }
}
