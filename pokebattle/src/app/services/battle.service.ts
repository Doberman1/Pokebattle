import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  battlePokemon(yours:Pokemon, theirs:Pokemon):number{

    if(yours.type == theirs.type){
      return 0;
    }else if(yours.type == "fire" && theirs.type == "grass"){
      return 1;
    }else if(yours.type == "grass" && theirs.type == "water"){

      return 1;
    }else if(yours.type == "water" && theirs.type == "fire"){
      return 1;
    }else{
      return 2;
    }
  }

}
