import {Component} from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProyecto } from 'src/interfaces/IProyecto';

@Component({
    selector:'proyectoAnterior-app',
    templateUrl: './proyectoAnterior.component.html',
    styleUrls:['./proyectoAnterior.component.css']
})

export class ProyectoAnteriorComponent {
    public proyectos:Array<IProyecto> = [];

    public usuario:any = {id:1}
    constructor(private servicio:ProyectoService) {
        
    }

    ngOnInit(){
        this.servicio.listarProyectos().subscribe((datos:Array<IProyecto>)=>{ this.proyectos = datos})
    }
}