import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {


    public usuario:string;
    public contrasenia:string;

    constructor( private servicio:UsuarioService){

    }

    ngOnInit(){
        // console.log(this.servicio.iniciarSesion("hola","hola").subscribe((datos)=>{console.log(datos);
        // }));
        // console.log(this.servicio.iniciarSesion("hola","hola").subscribe(m=>{console.log(m);
        // }));
        
    }

    public iniciarSesion(){
        this.servicio.iniciarSesion(this.usuario, this.contrasenia);
    }
}