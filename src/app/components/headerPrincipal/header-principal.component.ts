import {Component} from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector:'header-principal',
    templateUrl:'./header-principal.component.html',
    styleUrls:['./header-principal.component.css']
})

export class HeaderPrincipalComponent {

    menu:string = "";
    constructor(private menuCtr: MenuController) {
        
    }

    abrirMenu(condicion:boolean, nombreMenu:string){
        if (condicion == true) {
            this.menuCtr.open(nombreMenu);
        }
    }
}