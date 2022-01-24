import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPokemon(id):Observable<any[]>{
   return this.httpClient.get<any[]>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  getAbility(id):Observable<any[]>{
   return this.httpClient.get<any>(`https://pokeapi.co/api/v2/ability/${id}`);
  }
  getType(id):Observable<any[]>{
   return this.httpClient.get<any>(`https://pokeapi.co/api/v2/type/${id}`);
  }


}
