import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'headerChats',
    templateUrl:'./headerChats.component.html',
    styleUrls:['./headerChats.component.css']
})

export class HeaderChatsComponent {

    public ruta:string = "proyectoMenu/"
    constructor(private nav:Router) {
        
    }
    ngOnInit(){
        this.ruta = this.ruta + window.localStorage.getItem("idProyecto")
    }

    public irA(){
        this.nav.navigate(["proyectoMenu/"+window.localStorage.getItem("idProyecto")])
    }
}