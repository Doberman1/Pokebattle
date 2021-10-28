import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  battlePokemon(yours:Pokemon, theirs:Pokemon):number{

    if(yours.types == theirs.types){

      return 0;

    }else if(yours.types == "fire" && theirs.types == "grass"){

      return 1;
    }else if(yours.types == "grass" && theirs.types == "water"){

      return 1;
    }else if(yours.types == "water" && theirs.types == "fire"){

      return 1;
    }else{

      return 2;
    }
  }

}
