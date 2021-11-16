import {Component} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector:'miPerfil-app',
    templateUrl: './miPerfil.component.html',
    styleUrls:['./miPerfil.component.css']
})

export class MiPerfilComponent {

    public usuario: IUsuario={nombre:"", apellido:"", usuario:"", contrasenia:"",correo:"",telefono:0, perfil:{descripcion:"",proyectos:""}}

    constructor(private servicio:UsuarioService) {
        
    }

    ngOnInit(){
        this.servicio.jefeProyecto().subscribe(data => {this.usuario = data, console.log(this.usuario)})
    }
}