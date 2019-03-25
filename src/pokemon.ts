//const Pokedex = require('pokedex-promise-v2')();

export class Pokemon {
    name :string;
    speed: number;

    /*protected*/ constructor(name:string, speed: number) {
        /*Pokedex.getPokemonByName(name+"")
            .then((response :object) => {
                console.log(response);
            })
            .catch((error :any) => { throw new Error(error) });*/
        this.name = name;
        this.speed = speed;
    }

    static whoAttack(p1:Pokemon, p2:Pokemon) :Pokemon|null {
        return p1.speed == p2.speed ? null : (p1.speed > p2.speed ? p1 : p2);
    }

    static readonly example :any = { //because get 403 forbidden from pokeapi.co
        pikachu: () => new Pokemon("Pikachu", 90),
        bulbasaur: () => new Pokemon("Bulbizarre", 45),
        charmander: () => new Pokemon("Salamèche", 65),
        squirtle: () => new Pokemon("Carapuce", 43)
    }
}

export class Attack {
    //
};
