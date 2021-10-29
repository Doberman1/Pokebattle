import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { Pokemon } from 'src/app/models/pokemon';
import { BattleService } from 'src/app/services/battle.service';
import { NasaService } from 'src/app/services/nasa.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-nasa-bg',
  templateUrl: './nasa-bg.component.html',
  styleUrls: ['./nasa-bg.component.css']
})
export class NasaBgComponent implements OnInit {

  public apod:Apod|null = null;
  public firePokemon:Pokemon|null = null;
  public waterPokemon:Pokemon|null = null;
  public grassPokemon:Pokemon|null = null;
  public contender:Pokemon|null = null;
  public cont:number = 0;
  public visibility:boolean = true;
  public result = ["you_win.png", "you_lose.png", "you-tie.png"];
  public img:string = this.result[0];
  public index:number = 0;
  public decisionMade:boolean = false;
  public waterSrc:string = "";
  public fireSrc:string = "";
  public grassSrc:string = "";

  private retrievedFirstPokemon = false;

  constructor(private nasaService:NasaService, private pokemonService:PokemonService, private battleService:BattleService) { }

  ngOnInit(): void {
    this.pokemonService.fetchPokemonFromApiByName("charmander").subscribe(
      (value:Pokemon)=>{
        this.firePokemon=value;
        this.firePokemon.type = "fire";
      },
      (error)=>{
        this.contender=null;
        console.log(error);
      }
    );
    this.pokemonService.populateListOfFirePokemons();
    this.pokemonService.populateListOfGrassPokemons();
    this.pokemonService.populateListOfWaterPokemons();

    this.pokemonService.fetchPokemonFromApiByName("charmander").subscribe(
      (value:Pokemon)=>{
        this.firePokemon=value;
        this.firePokemon.type = "fire";
        this.fireSrc = this.firePokemon.sprites.back_default;
      },
      (error)=>{
        this.contender=null;
        console.log(error);
      }
    );
    this.pokemonService.fetchPokemonFromApiByName("squirtle").subscribe(
      (value:Pokemon)=>{
        this.waterPokemon=value;
        this.waterPokemon.type = "water";
        this.waterSrc = this.waterPokemon.sprites.back_default;
      },
      (error)=>{
        this.contender=null;
        console.log(error);
      }
    );
    this.pokemonService.fetchPokemonFromApiByName("bulbasaur").subscribe(
      (value:Pokemon)=>{
        this.grassPokemon=value;
        this.grassPokemon.type = "grass";
        this.grassSrc = this.grassPokemon.sprites.back_default;
      },
      (error)=>{
        this.contender=null;
        console.log(error);
      }
    );
    this.getApod();
  }

  ngDoCheck() {
    if(!this.retrievedFirstPokemon && this.contender == null && this.pokemonService.firePokemon != null && this.pokemonService.waterPokemon != null && this.pokemonService.grassPokemon != null)
    {
        this.getRandomPokemon();
        this.retrievedFirstPokemon = true;
    }
  }

  getRandomPokemon()
  {
    let randomInt:number =  Math.floor(Math.random() * 3);
    this.pokemonService.fetchRandomPokemon(randomInt)?.subscribe(
      (value:Pokemon)=>{
        this.contender=value;
        switch(randomInt)
        {
          case 0:
            this.contender.type = "fire";
            break;
          case 1:
            this.contender.type = "water";
            break;
          case 2:
            this.contender.type = "grass";
            break;
        }
      },
      (error)=>{
        this.contender=null;
        console.log(error);
      }
    );
  }

  getApod(){
    this.nasaService.getRamdonApodApi().subscribe(
      (data:Apod)=>{
        this.apod = data;
        console.log(this.apod.title);
      },
      (error)=>{
          this.apod= null;
          console.log(error);          
      }
    );
  }

  Fight(yours:Pokemon, theirs:Pokemon){
    if(!this.decisionMade)
    {
      this.decisionMade = true;
      let battleOutcome:number = this.battleService.battlePokemon(yours, theirs);
      console.log(battleOutcome);
      switch(battleOutcome)
      {
        case 0:
          this.img = this.result[2];
          break;
        case 1:
          this.img = this.result[0];
          this.cont = this.cont + 1;
  
          break;
        case 2:
          this.img = this.result[1];
          this.cont = 0;
          break;
      }
      this.visibility = false;
      if(this.index === 1){
        this.index = 0;
      }else{
        this.index = 1; 
      }
      this.stateChange(this);
    }
  }

  stateChange(c:NasaBgComponent) {
    setTimeout(function () {
      c.visibility = true;
      c.decisionMade = false;
      c.getRandomPokemon();
      c.getApod();
    }, 3000);
  }

}
