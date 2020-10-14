import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { persona } from 'src/app/modelo/Persona';
import { genero } from 'src/app/modelo/Genero';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  generos:genero[];
  persona:persona = new persona();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.edit();
    this.service.getGenero().subscribe(data=>{
      this.generos= data;
    });
  }

  edit() {
    let id= localStorage.getItem("id");
    this.service.getPersonaId(+id).subscribe(data=>{
    this.persona=data;
      
    })
  }
  toUpdate(persona:persona) {
    this.service.updatePersona(persona).subscribe(data=>{
    this.persona=data;
    alert("Se Actualizo con Exito !!!!!");
    this.router.navigate(["show"]);
      
    })

  }  
}
