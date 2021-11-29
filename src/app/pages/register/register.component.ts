import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector: 'register-app',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    public usuario: IUsuario = { nombre: "", apellido: "", usuario: "", contrasenia: "", correo: "", telefono: 0, perfil: { descripcion: "", proyectos: "" } }

    public contrasenia2: ""
    private usuarioService: UsuarioService
    private estado: boolean = false;
    
    constructor(private servicio: UsuarioService, private navCtr: NavController, private menuCtr:MenuController) {
        this.usuarioService = servicio;
    }

    ngOnInit(){
        this.menuCtr.enable(false, "first");
    }


    public registrarUsuario() {
        if (this.usuario.contrasenia === this.contrasenia2) {

            this.usuarioService.agregarUsuario(this.usuario).subscribe((respuesta) => { console.log(respuesta); });
            this.estado = true;
            this.servicio.listarUsuarios();
            this.navCtr.navigateForward('')

        }
        else { console.log("error", this.contrasenia2, this.usuario.contrasenia) }

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