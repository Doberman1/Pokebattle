import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-testpoke',
  templateUrl: './testpoke.component.html',
  styleUrls: ['./testpoke.component.css']
})
export class TestpokeComponent implements OnInit {

  public pokemon:Pokemon|null = null;

  constructor(private pokeService:PokemonService) { }

  ngOnInit(): void {
    this.pokeService.populateListOfFirePokemons();
    this.pokeService.populateListOfGrassPokemons();
    this.pokeService.populateListOfWaterPokemons();
  }

  getRandomPokemon(){ //replace string with Pokemon model
    let randomInt:number =  Math.floor(Math.random() * 3);
    this.pokeService.fetchRandomPokemon(randomInt)?.subscribe(
      (value:Pokemon)=>{
        this.pokemon=value;
        switch(randomInt)
        {
          case 0:
            this.pokemon.type = "fire";
            break;
          case 1:
            this.pokemon.type = "water";
            break;
          case 2:
            this.pokemon.type = "grass";
            break;
        }
      },
      (error)=>{
        this.pokemon=null;
        console.log(error);
      }
    );
  }
}
