import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'principal-app',
    templateUrl: './principal.component.html',
    styleUrls:['./principal.component.css']
})

export class PrincipalComponent {
    constructor(private navCtr: NavController) {
        
    }
    cambiarPagina(){
        this.navCtr.navigateForward('/proyecto');
    }
}