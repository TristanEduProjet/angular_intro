import {Attack, Pokemon} from "./pokemon";

const attacks :any = {
    thundershock: () => new Attack("Éclair", 40),
    cut: () => new Attack("Coupe", 50),
    tackle: () => new Attack("Coupe", 50),
    furySwipes: () => new Attack("Combo Griffe", 18),
};

const example :any = { //because get 403 forbidden from pokeapi.co
    pikachu: () => new Pokemon("Pikachu", 90, 40, [attacks.tackle(), attacks.thundershock()]),
    bulbasaur: () => new Pokemon("Bulbizarre", 45, 49, [attacks.tackle(), attacks.cut()]),
    charmander: () => new Pokemon("Salamèche", 65, 43, [attacks.tackle(), attacks.furySwipes()]),
    squirtle: () => new Pokemon("Carapuce", 43, 65, [attacks.tackle(), attacks.cut()])
};
