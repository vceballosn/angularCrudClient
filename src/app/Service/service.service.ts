import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {persona} from  '../modelo/Persona'; 
import {genero} from  '../modelo/Genero';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  persona:persona
  constructor(private httpClient: HttpClient) { 
  }

  UrlClient='http://localhost:8080/client';
  UrlGenero = 'http://localhost:8080/genero';
    getPersonas(){

      return this.httpClient.get<persona[]>(this.UrlClient)
    
    }

    createPersona(persona:persona){

      return this.httpClient.post<persona>(this.UrlClient,persona);
    } 
    
    
    getPersonaId(id:number){

      return this.httpClient.get<persona>(this.UrlClient+"/"+id)

    }   

    updatePersona(persona:persona){
      return this.httpClient.put<persona>(this.UrlClient+"/"+persona.id,persona);
    } 

    deletePersona(persona:persona){
      return this.httpClient.delete<persona>(this.UrlClient+"/"+persona.id);
    } 



    getGenero(){

      return this.httpClient.get<genero[]>(this.UrlGenero)
    
    }

    createGenero(genero:genero){

      return this.httpClient.post<genero>(this.UrlGenero,genero);
    } 
    
    
    getGeneroId(id:number){

      return this.httpClient.get<genero>(this.UrlGenero+"/"+id)

    }   

    updateGenero(genero:genero){
      return this.httpClient.put<genero>(this.UrlGenero+"/"+genero.id,genero);
    } 

    deleteGenero(genero:genero){
      return this.httpClient.delete<genero>(this.UrlGenero+"/"+genero.id);
    } 

}
