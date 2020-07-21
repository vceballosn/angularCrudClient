import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { ServiceService } from '../../Service/service.service';
import { persona } from 'src/app/modelo/Persona';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  personas:persona[];
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data=>{
      this.personas= data;
    });
  }
edit(persona:persona):void {
  localStorage.setItem("id",persona.id.toString());
  this.router.navigate(["edit"]);
}  

delete(persona:persona):void{

  this.service.deletePersona(persona).subscribe(data=>{
    this.personas= this.personas.filter(p=>p!==persona);
  });
 alert(" User Delete ....!");
}


}
