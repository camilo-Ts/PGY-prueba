import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public progreso:number = 0.8;


  constructor(private menuCtr:MenuController) { }

  ngOnInit() {
    this.menuCtr.enable(true, "menuProyecto");
    // this.menuCtr.enable(true, "menuProyecto");
  }

  public abrirMenu(){
    this.menuCtr.open("menuProyecto")
  }

}
