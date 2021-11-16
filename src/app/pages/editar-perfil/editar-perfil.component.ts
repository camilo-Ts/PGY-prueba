import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit {

  public usuario: IUsuario={nombre:"", apellido:"", usuario:"", contrasenia:"",correo:"",telefono:0, perfil:{descripcion:"",proyectos:""}}

  private servicio:UsuarioService
    constructor(private servicioUsuario:UsuarioService, private navCtr:NavController) {
        this.servicio = servicioUsuario;
    }

    ngOnInit(){
        this.servicio.jefeProyecto().subscribe(data => {this.usuario = data, console.log(this.usuario)})
    }


    public editarPerfil(){
      this.servicio.editarPerfil(this.usuario).subscribe((dato:IUsuario) => {return})
      this.servicio.editarUsuarioLog(this.usuario).subscribe((dato)=>{console.log(this.navCtr.navigateForward("miPerfil"));
      })

    }
}
