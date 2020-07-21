import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { persona } from 'src/app/modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona:persona=new persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  save(){
    this.service.createPersona(this.persona).subscribe(data=>{
      alert(" se Agrego con Exito....!!! ");
      this.router.navigate(["show"]);
    } );
  
  }    

}
