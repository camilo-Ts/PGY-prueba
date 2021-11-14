import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector: 'register-app',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
public usuario: IUsuario={nombre:"", apellido:"", contrasenia:"",correo:"",telefono:0}
public contrasenia2:""
private usuarioService:UsuarioService
constructor(private servicio:UsuarioService){
    this.usuarioService = servicio;
}

private estado:boolean=false;

public registrarUsuario(){
    if (this.usuario.contrasenia===this.contrasenia2){
        this.usuarioService.agregarUsuario(this.usuario).subscribe((respuesta)=>{ console.log(respuesta);});
        alert ("USUARIO REGISTRADO")
        this.estado=true;
        
    }
    else{console.log("error",this.contrasenia2,this.usuario.contrasenia)}

}

// public registrarUsuario(){
//     let nuevoUsuario: IUsuario={
//         id:0,
//         nombre:this.nombre,
//         apellido:this.apellido,
//         contrasenia: this.contrasenia,
//         correo: this.correo,
//         telefono: 12345
//     }
//     this.servicio.agregarUsuario(nuevoUsuario)
//     console.log(nuevoUsuario)
// }
}