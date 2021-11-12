import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector: 'register-app',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
nombre:string;
apellido:string;
contrasenia:string;
correo:string;
telefono:number;

constructor(private servicio:UsuarioService){
    
}

public registrarUsuario(){
    let nuevoUsuario: IUsuario={
        id:0,
        nombre:this.nombre,
        apellido:this.apellido,
        contrasenia: this.contrasenia,
        correo: this.correo,
        telefono: 12345
    }
    this.servicio.agregarUsuario(nuevoUsuario)
    console.log(nuevoUsuario)
}
}