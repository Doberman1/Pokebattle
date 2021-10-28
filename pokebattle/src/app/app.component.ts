import { Component } from '@angular/core';
import { BattleService } from './services/battle.service';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokebattle';

  public ourPokemon:Pokemon = pokeService.getOurPoke();
  public theirPokemon:Pokemon = pokeService.getTheirPoke();
  public winner:number = 0;

  constructor(private BattleService:BattleService) { }

  ngOnInit(): void {
  }

  battle(){
     this.winner = this.BattleService.battlePokemon(this.ourPokemon, this.theirPokemon);    
  }

}
