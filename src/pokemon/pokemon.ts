//const Pokedex = require('pokedex-promise-v2')();

export class Pokemon {
    name :string;
    hp:number = 100;
    speed: number;
    attacks: Attack[];
    //attack: number;
    defense: number;

    /*protected*/ constructor(name:string, speed: number, defense: number, attacks:Attack[]) {
        /*Pokedex.getPokemonByName(name+"")
            .then((response :object) => {
                console.log(response);
            })
            .catch((error :any) => { throw new Error(error) });*/
        this.name = name;
        this.speed = speed;
        this.attacks = attacks;
        this.defense = defense;
    }

    receiveAttack(attack:Attack) {
        this.hp = Math.max(0, this.hp - Math.abs(this.defense - attack.power));
    }

    isKO() {
        return this.hp <= 0;
    }

    static whoAttack(p1:Pokemon, p2:Pokemon) :Pokemon|null {
        return p1.speed == p2.speed ? null : (p1.speed > p2.speed ? p1 : p2);
    }
}

export class Attack {
    name: string;
    power: number;

    constructor(name:string, power:number) {
        this.name = name;
        this.power = power;
    }
}
