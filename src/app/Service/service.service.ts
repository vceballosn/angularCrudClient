import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {persona} from  '../modelo/Persona'; 
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  persona:persona
  constructor(private httpClient: HttpClient) { 
  }

  Url='http://localhost:8080/client';
    getPersonas(){

      return this.httpClient.get<persona[]>(this.Url)
    
    }

    createPersona(persona:persona){

      return this.httpClient.post<persona>(this.Url,persona);
    } 
    
    
    getPersonaId(id:number){

      return this.httpClient.get<persona>(this.Url+"/"+id)

    }   

    updatePersona(persona:persona){
      return this.httpClient.put<persona>(this.Url+"/"+persona.id,persona);
    } 

    deletePersona(persona:persona){
      return this.httpClient.delete<persona>(this.Url+"/"+persona.id);
    } 
}
