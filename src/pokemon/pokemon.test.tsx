import {Attack, Pokemon} from './pokemon';

describe("Simples tests on 'Pokemon' class", () => {
    beforeEach(()=> {
        Math.random = jest.fn(() => 1);
    });
    //expect(Math.random).toHaveBeenCalled();

    test("test who attack first", () => {
        const p1 = new Pokemon("low", 10, 0, []);
        const p2 = new Pokemon("medium", 50, 0, []);
        const p3 = new Pokemon("rapid", 88, 0, []);
        expect(Pokemon.whoAttack(p1, p2)).toBe(p2);
        expect(Pokemon.whoAttack(p3, p2)).toBe(p3);
        expect(Pokemon.whoAttack(p1, p3)).toBe(p3);
    });

    test("test whoAttack parameters order", () => {
        const p1 = new Pokemon("low", 10, 0, []);
        const p2 = new Pokemon("medium", 50, 0, []);
        expect(Pokemon.whoAttack(p1, p2)).toBe(p2);
        expect(Pokemon.whoAttack(p2, p1)).toBe(p2);
    });

    test("test whoAttack parameters order", () => {
        const p = new Pokemon("low", 10, 0, []);
        expect(Pokemon.whoAttack(p, p)).toBeNull();
    });

    test("", () => {
        const p1 = new Pokemon("looser", 10, 50, [new Attack("", 100)]);
        const p2 = new Pokemon("winner", 50, 150, [new Attack("", 100)]);
        p1.receiveAttack(p2.attacks[0]);
        expect(p1.hp).toBe(50);
    });

    test("check if KO when no hp", () => {
        const p = new Pokemon("dead", 0, 0, []);
        p.hp = 0;
        expect(p.isKO()).toBeTruthy();
    });

    test("check if not KO when have hp", () => {
        const p = new Pokemon("not dead", 0, 0, []);
        p.hp = 8;
        expect(p.isKO()).toBeFalsy();
    });
});
