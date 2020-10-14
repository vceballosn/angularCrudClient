import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { ServiceService } from '../../Service/service.service';
import { persona } from 'src/app/modelo/Persona';
import * as printfJs from 'print-js'
import * as printJS from 'print-js';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  personas:persona[];
  seleccionado:'Selecion';
  masculino :String;
  femenino :String;
  
  constructor(private service:ServiceService, private router:Router ) { }
   clientJson:JSON;
  ngOnInit(): void {
      this.service.getPersonas().subscribe(data=>{ 
      this.personas= data;
      this.masculino ="0001";
      this.femenino ="0002";
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

print(){
  printJS({printable: this.personas, properties: ['id', 'nombre', 'apellido','email'], type: 'json'})
}



}
