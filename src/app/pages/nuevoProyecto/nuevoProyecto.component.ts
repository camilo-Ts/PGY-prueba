import { Component } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IProyecto } from 'src/interfaces/IProyecto';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector: 'nuevoProyecto-app',
    templateUrl: './nuevoProyecto.component.html',
    styleUrls: ['./nuevoProyecto.component.css']
})

export class NuevoProyectoComponent {
    public proyecto: IProyecto = { nombre: "", descripcion: "", estado: true, fecha_in: new Date(), fecha_fn: new Date(), jefe_proy: 0 }

    private proyectoService: ProyectoService
    private usuarioService: UsuarioService

    constructor(private servicio: ProyectoService, private usuarioServicio: UsuarioService) {
        this.proyectoService = servicio;
        this.usuarioService = usuarioServicio;
    }

    ngOnInit() {
        // this.proyectoService.listarProyectos().subscribe(datos => {console.log(datos.length);})
        // Asignar id del dueño del proyecto.
        this.usuarioService.jefeProyecto().subscribe(datos => {
            // jefeProyecto = datos;
            this.proyecto.jefe_proy = datos.id;

        });
    }

    public agregarProyecto() {
        // let jefeProyecto: IUsuario;
        this.proyectoService.listarProyectos().subscribe(datos => {this.proyecto.id = datos.length + 1})
        

        this.proyectoService.agregarProyecto(this.proyecto).subscribe(dato=>{console.log(dato)});
    }

    /**
     * mensaje
     */
    public mensaje() {
        console.log("mensaje");

    }

    /**
     * cambiar fechaFin
     */
    public cambiarFechaFin(event) {
        this.proyecto.fecha_fn = event.detail.value;

    }
}
