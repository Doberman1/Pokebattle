import { Pokemondto } from '../models/pokemondto';

export class Pokemonlist {
    public pokemon:Pokemondto[] = [];

    constructor(public pokemons:object[]){ 
        console.log("has been set");
        this.pokemon = pokemons as Pokemondto[];
    }
}
