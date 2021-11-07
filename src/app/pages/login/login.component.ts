import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor( private servicio:UsuarioService){

    }

    ngOnInit(){
        // console.log(this.servicio.iniciarSesion("hola","hola").subscribe((datos)=>{console.log(datos);
        // }));
        console.log(this.servicio.iniciarSesion("hola","hola"));
        
    }
}