import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {


    public usuario:string;
    public contrasenia:string;

    constructor( private servicio:UsuarioService, private navCtr:NavController){

    }

    ngOnInit(){
        // console.log(this.servicio.iniciarSesion("hola","hola").subscribe((datos)=>{console.log(datos);
        // }));
        // console.log(this.servicio.iniciarSesion("hola","hola").subscribe(m=>{console.log(m);
        // }));
        console.log(this.servicio.comprobarLogueo());
        
        this.servicio.comprobarLogueo();
        
    }

    public iniciarSesion(){
        let estado:boolean = false;

        estado = this.servicio.iniciarSesion(this.usuario, this.contrasenia);
        
        if (estado) {
            this.navCtr.navigateForward('home');
        }
        
    }
}