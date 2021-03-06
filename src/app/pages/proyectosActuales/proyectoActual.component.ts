import {Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IProyecto } from 'src/interfaces/IProyecto';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector:'proyectoActual-app',
    templateUrl: './proyectoActual.component.html',
    styleUrls:['./proyectoActual.component.css']
})

export class ProyectoActualComponent {
    public proyectos: Array<IProyecto> = [];

    public usuario: IUsuario = { id: 0, nombre: "", apellido: "", usuario: "", contrasenia: "", correo: "", telefono: 0, perfil: { descripcion: "", proyectos: "" } }
    constructor(private servicio: ProyectoService, private servicioUsuario: UsuarioService, private navCtr: NavController) {

    }

    ngOnInit() {
        this.servicioUsuario.jefeProyecto().subscribe(dato => { this.usuario = dato })
        this.servicio.listarProyectos().subscribe((datos: Array<IProyecto>) => { this.proyectos = datos })
        // console.log(this.usuario.id);

    }

    public abrirProyecto(id:number){
        window.localStorage.setItem("idProyecto",""+id)
        this.navCtr.navigateForward("proyectoMenu/"+id);
    }

    /**
     * eliminarProyecto
     */
    public eliminarProyecto(id:number) {
        console.log("Borraste el proyecto - "+id);
        this.servicio.eliminarProyecto(id);
        window.location.reload();
    }
}