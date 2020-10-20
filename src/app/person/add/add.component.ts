import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { genero } from 'src/app/modelo/Genero';
import { persona } from 'src/app/modelo/Persona';
import { FormControl, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  generos:genero[];
  seleccionado:String;

  persona:persona=new persona();
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getGenero().subscribe(data=>{
      this.generos= data;
    });
  }
  createFormGroup() {
 
    email: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern(this.emailPattern)]);
    nombre : new FormControl('',[Validators.required,Validators.minLength(4)]);
    apellido:new FormControl(''),[Validators.required,Validators.minLength(10),Validators.maxLength(30)];
    genero:new FormControl(''),[Validators.required,Validators.minLength(10),Validators.maxLength(30)];

  } 
  save(){  
       alert("Genero "+this.persona.codigoGenero);   
      if((this.persona.nombre == undefined )  || (this.persona.apellido == undefined)  || (this.persona.email ==undefined) || (this.persona.codigoGenero == undefined)|| (this.persona.codigoGenero == '0')){
         alert(" debe llenar todos los campos ");
      }else{ 
          this.service.createPersona(this.persona).subscribe(data=>{
          alert(" se Agrego con Exito....!!! ");
          this.router.navigate(["show"]);
        } );
      }          
  }    
}
