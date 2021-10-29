import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Pokemonlist } from '../models/pokemonlist';
import { Pokemondto } from '../models/pokemondto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public firePokemon:Pokemonlist|null = null;
  public waterPokemon:Pokemonlist|null = null;
  public grassPokemon:Pokemonlist|null = null;

  constructor(private http:HttpClient) { }
  
  fetchListOfPokemonsOfType(pokeType:String):Observable<Pokemonlist>{
    return this.http.get("https://pokeapi.co/api/v2/type/" + pokeType + "/") as Observable<Pokemonlist>;
  }

  fetchPokemonFromApi(id:number):Observable<object>{
    return this.http.get<object[]>("https://pokeapi.co/api/v2/pokemon/" + id + "/") as Observable<Pokemon[]>;
  }

  fetchPokemonFromApiByName(name:string):Observable<Pokemon>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + name + "/") as Observable<Pokemon>;
  }

  populateListOfFirePokemons(){
    let data:Observable<Pokemonlist>= this.fetchListOfPokemonsOfType("fire") as Observable<Pokemonlist>;
    data.subscribe(value => this.firePokemon = value);
    return data;
  }

  fetchRandomPokemon(randomInt:number)
  {
    let pokemon:Observable<Pokemon>|null = null;
    switch(randomInt)
    {
      case 0:
        if(this.firePokemon != null)
        {
          let index:number = Math.floor(Math.random() * this.firePokemon.pokemon.length);
          pokemon = this.http.get(this.firePokemon.pokemon[index]["pokemon"]["url"]) as Observable<Pokemon>;
        }
        break;
      case 1:
        if(this.waterPokemon != null)
        {
          let index:number = Math.floor(Math.random() * this.waterPokemon.pokemon.length);
          pokemon = this.http.get(this.waterPokemon.pokemon[index]["pokemon"]["url"]) as Observable<Pokemon>;
        }
        break;
      case 2:
        if(this.grassPokemon != null)
        {
          let index:number = Math.floor(Math.random() * this.grassPokemon.pokemon.length);
          pokemon = this.http.get(this.grassPokemon.pokemon[index]["pokemon"]["url"]) as Observable<Pokemon>;
        }
        break;
      }
      return pokemon;
  }



  populateListOfWaterPokemons(){
    let data:Observable<Pokemonlist> = this.fetchListOfPokemonsOfType("water") as Observable<Pokemonlist>;
    data.subscribe(value => this.waterPokemon = value);
    return data;
  }

  populateListOfGrassPokemons(){
    let data:Observable<Pokemonlist> = this.fetchListOfPokemonsOfType("grass") as Observable<Pokemonlist>;
    data.subscribe(value => this.grassPokemon = value);
    return data;
  }
}
