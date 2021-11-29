import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
  selector: 'app-invitarUsuario',
  templateUrl: './invitarUsuario.component.html',
  styleUrls: ['./invitarUsuario.component.css']
})
export class InvitarUsuarioComponent implements OnInit {

  public usuarios:Array<IUsuario> =[]

  constructor(private servicioUsuario:UsuarioService, private servicioProyecto:ProyectoService) { }

  ngOnInit() {

    this.servicioUsuario.getUsuarios().subscribe(data => {this.usuarios = data})
  }

}
