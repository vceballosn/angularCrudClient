import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudCliente';

  constructor (private router:Router){
  
  }    
  show(){
    this.router.navigate(["show"]);
  }
  add(){
    this.router.navigate(["add"]);
  }      
}
