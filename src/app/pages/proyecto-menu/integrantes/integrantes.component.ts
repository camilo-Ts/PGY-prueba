import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  constructor(private menuCtr:MenuController) { }

  ngOnInit() {
    this.menuCtr.enable(true, "menuProyecto");
    // this.menuCtr.enable(true, "menuProyecto");
  }

  public abrirMenu(){
    this.menuCtr.open("menuProyecto")
  }
}
