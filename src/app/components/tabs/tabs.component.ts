import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { PrincipalComponent } from 'src/app/pages/home/principal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
    // const routes: Routes = [{
    //   path:'principal',
    //   component:PrincipalComponent
    // }]
    
  constructor() { }

  ngOnInit() {}
  

}
